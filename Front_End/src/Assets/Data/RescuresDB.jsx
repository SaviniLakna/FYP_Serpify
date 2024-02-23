import React from 'react'

const RescuresDB = [
    {
        name:'MR. SANDUN',
        contact:'0703366115',
        district:'Ampara',
        coveringArea:'AMPARA TOWN AREA, SAMANTHURE'
    },
    {
        name:'MR.RUKMAL JAYAWEERA',
        contact:'0714905215, 0772035050',
        district:'Ampara',
        coveringArea:'AMPARA, GONAGOLLA, UHANA, WARANKATAGODA, RAJAGALATHANNA, NUGELANDA'
    },
    {
        name:'MR.THILANKA ANJANA',
        contact:'0765841723',
        district:'Ampara',
        coveringArea:'AMPARA, MAHAOYA, MANGALAGAMA, UHANA, GONAGOLLA, RAJAGALATHANNA, PIYANGALA'
    },
    {
        name:'DEPARTMENT OF WILDLIFE CONSERVATION',
        contact:'1992',
        district:'Ampara',
        coveringArea:'AMPARA DISTRIC'
    },
    {
        name:'MR.JEGANADAN',
        contact:'0779865543',
        district:'Anuradhapura',
        coveringArea:'HABARANA'
    },
    {
        name:'MR.SURAJ SALIYA',
        contact:'0702904880',
        district:'Anuradhapura',
        coveringArea:'ANURADHAPURA DISTRICT'
    },
    {
        name:'MR.SAMEERA SUDASINGHE',
        contact:'0773795295',
        district:'Anuradhapura',
        coveringArea:'MEDAWACHCHIYA TOWN AND SUBURBS'
    },
    {
        name:'MR.SAMPATH THUSHARA CHANDRASIRI (SNAKES GUARDIAN)',
        contact:'0764150566, 0711838312',
        district:'Anuradhapura',
        coveringArea:'RAJANGANAYA, THABUTHTHEGAMA, NOCHCHIYAGAMA, THALAWA'
    },
    {
        name:'MR.AMAL SANGEETH',
        contact:'0775781345',
        district:'Anuradhapura',
        coveringArea:'HABARANA, KAKIRAWA,MARADANKADAWALA, THIRAPPANE'
    },
    {
        name:'MR.RANJITH SENARATHNA',
        contact:'0715327301',
        district:'Anuradhapura',
        coveringArea:'ANURADHAPURA, HOROWPATHANA'
    },
    {
        name:'MR.DAMITH PADMAKUMARA',
        contact:'0718412987, 0763126598',
        district:'Anuradhapura',
        coveringArea:'NOCHCHIYAGAMA, RAJANGANAYA, THABUTHTHEGAMA'
    },
    {
        name:'MR.SUPUN LAKSHAN',
        contact:'0701695612, 0759446567',
        district:'Badulla',
        coveringArea:'BANDARAWELA, BADULLA, WALIMADA, HAPUTHALE, DIYATHALAWA (TRANSPRTATION REQUIRED)'
    },
    {
        name:'MR.KAVISHA PRABHATH',
        contact:'0769440767',
        district:'Badulla',
        coveringArea:'BADULLA, HALIELA, DEMODARA, UDUVARA, DEKE KANNUWA, THUNE KANNUWA, PASSARA, TALDENA, MEEGAHAKIVULA, SORANATHOTA, KANDAKETIYA (TRANSPRTATION REQUIRED)'
    },
    {
        name:'MR.CHATHURA UDAYNAGA',
        contact:'0772533523',
        district:'Badulla',
        coveringArea:'BADULLA, PASSARA, HALIELA'
    },
    {
        name:'DEPARTMENT OF WILDLIFE CONSERVATION',
        contact:'1992',
        district:'Badulla',
        coveringArea:'BADULLA DISTRICT'
    },
    {
        name:'DEPARTMENT OF WILDLIFE CONSERVATION',
        contact:'1992',
        district:'Batticaloa',
        coveringArea:'BATTICALOA DISTRIC'
    },
    {
        name:'MR.JEETHENDRA LIYANAGE',
        contact:'0777837529, 0112829891',
        district:'Colombo',
        coveringArea:'BATTARAMULLA, BELLANWILA, BORALESGAMUWA, COLOMBO 4-8, DEHIWALA, JUBILEE POST, KOSWATTA-BATTARAMULLA, KOSWATTA-NAWALA, KOTTE, MAHARAGAMA, NARAHENPITA, NAWALA, NUGEGODA, PANNIPITIYA, PELAWATTA, SRI JAYAWARDENEPURA, THALAWATHUGODA'
    },
    {
        name:'MISS.MELUSHA PADMIKA',
        contact:'0777685135',
        district:'Colombo',
        coveringArea:'COLOMBO AREA'
    },
    {
        name:'MR.SUJEEWA CHANDANA',
        contact:'0710688894',
        district:'Colombo',
        coveringArea:'HOMAGAMA, GODAGAMA, MEEGODA, HANWELLA'
    },
    {
        name:'MR.KASUN DILRANGA',
        contact:'0762357739',
        district:'Colombo',
        coveringArea:'KALUAGGALA, AWISSAWELLA, LABUGAMA, HOMAGAMA, MEEPE AREA'
    },
    {
        name:'MR.SASIDHU ANUSHKA',
        contact:'0776549013',
        district:'Colombo',
        coveringArea:'COLOMBO AREA, MIRIHANA, NUGEGODA, KOTTAWA, MAHARAGAMA, BATHTHARAMULLA'
    },
    {
        name:'MR.LAKSHAN MADUSANKA',
        contact:'0767080074, 0755431779',
        district:'Colombo',
        coveringArea:'RATHMALANA, MORATUWA, ATHTHIDIYA, BORUPANA, BORALASGAMUWA, NUGEGODA, NAWALA, PILIYANDALA'
    },
    {
        name:'MR.SAMPATH GOVINNA',
        contact:'0770858833, 0789005139, 0758425459',
        district:'Colombo',
        coveringArea:'ATHURUGIRIYA, HABARAKADA, MALABE, KOTTAWA, BATHTHARAMULLA'
    },
    {
        name:'MR.THISARA WIJESINGHA',
        contact:'0782748108',
        district:'Colombo',
        coveringArea:'PILIYANDALA, MAHARAGAMA, BORALASGAMUWA, MATHTHEGODA, PANNIPITIYA, KOTTE, THALAWATHUGODA, HOKANDARA'
    },
    {
        name:'MR.KASUN CHATHURANGA',
        contact:'0711214583',
        district:'Colombo',
        coveringArea:'ATHURUGIRIYA, MALABE, BATHTHARAMULLA, HANWALLA'
    },
    {
        name:'MR.DASUN SAMEERA',
        contact:'0718894415',
        district:'Colombo',
        coveringArea:'ATHURUGIRIYA, KADUWELA, NAWAGAMUWA'
    },
    {
        name:'MR.MADUSHAN KOKILA',
        contact:'0764105771',
        district:'Galle',
        coveringArea:'GALLA, GINTHOTA, BUSSA, DHADALLA, MAHAMODARA, RATHGAMA, HIKKADUWA, LABUDUUWA, KARAPITIYA'
    },
    {
        name:'MR.SUJEEWA WIRAKKODI',
        contact:'0768658036, 0784509555',
        district:'Galle',
        coveringArea:'NELUWA, PAMANKADA, KOSWATHTHA'
    },
]

export default RescuresDB;


