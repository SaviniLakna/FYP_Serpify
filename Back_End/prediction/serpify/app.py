# from flask import Flask, request, jsonify
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# from PIL import Image
# import io  # Import the io module
# import os
# import base64


# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# # Load the trained model
# model_path = './Include/serpifymodel.h5'
# model = load_model(model_path)

# # Map class indices to class names
# class_names = {
#     0: 'Ahatulla',
#     1: 'Aluradanakaya',
#     2: 'Aranidathkatiya',
#     3: 'Diyabariya',
#     4: 'Garandiya',
#     5: 'Haldanda',
#     6: 'Katakaluwa',
#     7: 'Kunakatuwa',
#     8: 'Lemapila',
#     9: 'Malradanakaya',
#     10: 'Naya',
#     11: 'Nidimapila',
#     12: 'Pimbura',
#     13: 'Pullidathkatiya',
#     14: 'Thelkarawala',
#     15: 'Thithpolanga'
# }

# # Function to preprocess the image
# def preprocess_image(file):
#     # Create a binary stream from the FileStorage object
#     file_stream = io.BytesIO(file.read())
    
#     # Read the image file and convert to array
#     img = image.img_to_array(image.load_img(file_stream, target_size=(256, 256)))
#     img = np.expand_dims(img, axis=0)
#     img /= 255.0
#     return img

# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Get the image file from the request
#         file = request.files['file']

#         # Preprocess the image
#         img = preprocess_image(file)

#         # Make prediction
#         predictions = model.predict(img)
#         predicted_class = np.argmax(predictions, axis=1)[0]
#         predicted_class_name = class_names[predicted_class]

#         result = {'prediction': predicted_class_name}
#         print('Snake ID :' , result)
#         return jsonify(result)
#     except Exception as e:
#         return jsonify({"error": "Prediction failed", "message": str(e)})




# @app.route('/save-image', methods=['POST'])
# def save_image():
#     try:
#         data = request.get_json()
#         screenshot = data.get('image')

#         # Save the image to a specific folder on the server
#         save_path = './Include/captured'
#         os.makedirs(save_path, exist_ok=True)

#         with open(os.path.join(save_path, 'captured_image.png'), 'wb') as f:
#             f.write(base64.b64decode(screenshot.split(',')[1]))

#         return jsonify({"message": "Image saved successfully"})
#     except Exception as e:
#         return jsonify({"error": "Failed to save image", "message": str(e)})
    


# if __name__ == '__main__':
#     app.run(debug=True)



from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image
import io
import os  # Add this line
import base64  # Add this line
from flask_cors import CORS
from flask import send_file

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = './Include/serpifymodel.h5'
model = load_model(model_path)

# Map class indices to class names
class_names = {
    0: 'Ahatulla',
    1: 'Aluradanakaya',
    2: 'Aranidathkatiya',
    3: 'Diyabariya',
    4: 'Garandiya',
    5: 'Haldanda',
    6: 'Katakaluwa',
    7: 'Kunakatuwa',
    8: 'Lemapila',
    9: 'Malradanakaya',
    10: 'Naya',
    11: 'Nidimapila',
    12: 'Pimbura',
    13: 'Pullidathkatiya',
    14: 'Thelkarawala',
    15: 'Thithpolanga'
}

# Function to preprocess the image
def preprocess_image(file):
    # Create a binary stream from the FileStorage object
    file_stream = io.BytesIO(file.read())
    
    # Read the image file and convert to array
    img = image.img_to_array(image.load_img(file_stream, target_size=(256, 256)))
    img = np.expand_dims(img, axis=0)
    img /= 255.0
    return img

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the image file from the request
        file = request.files['file']

        # Preprocess the image
        img = preprocess_image(file)

        # Make prediction
        predictions = model.predict(img)
        predicted_class = np.argmax(predictions, axis=1)[0]
        predicted_class_name = class_names[predicted_class]

        result = {'prediction': predicted_class_name}
        print('Snake ID :' , result)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": "Prediction failed", "message": str(e)})


@app.route('/save-image', methods=['POST'])
def save_image():
    try:
        data = request.get_json()
        screenshot = data.get('image')

        # Save the image to a specific folder on the server
        save_path = './Include/captured'
        os.makedirs(save_path, exist_ok=True)

        # Convert base64 string to bytes
        img_data = base64.b64decode(screenshot.split(',')[1])

        with open(os.path.join(save_path, 'captured_image.png'), 'wb') as f:
            f.write(img_data)

        return jsonify({"message": "Image saved successfully"})
    except Exception as e:
        return jsonify({"error": "Failed to save image", "message": str(e)})
    






if __name__ == '__main__':
    app.run(debug=True)
