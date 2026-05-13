// ─── Crop Advisor Data ────────────────────────────────────────

const advisorTranslations = {
    en: {
        'advisor-title': 'Personalized Crop Advisor',
        'advisor-state': 'Select State',
        'advisor-month': 'Current Month',
        'advisor-soil': 'Soil Type',
        'advisor-placeholder': 'Select your state and soil type to get personalized crop recommendations',
        'activity-sowing': 'Sowing Time',
        'activity-fertilizer': 'Apply Fertilizer',
        'activity-harvest': 'Harvest Time',
        'activity-prepare': 'Land Preparation',
        'summary-text': 'Showing recommendations for',
        'tip-label': 'Tip',
        'no-results': 'No specific recommendations for this combination. Try a different soil type.',
        // Crop names
        'Rice': 'Rice', 'Wheat': 'Wheat', 'Cotton': 'Cotton', 'Sugarcane': 'Sugarcane',
        'Banana': 'Banana', 'Groundnut': 'Groundnut', 'Turmeric': 'Turmeric', 'Chilli': 'Chilli',
        'Tomato': 'Tomato', 'Onion': 'Onion', 'Maize': 'Maize', 'Soybean': 'Soybean',
        'Chickpea': 'Chickpea', 'Mustard': 'Mustard', 'Potato': 'Potato', 'Grapes': 'Grapes',
        'Mango': 'Mango', 'Coffee': 'Coffee', 'Tea': 'Tea', 'Coconut': 'Coconut',
        'Pepper': 'Pepper', 'Rubber': 'Rubber', 'Cashew': 'Cashew', 'Tapioca': 'Tapioca',
        'Sweet Potato': 'Sweet Potato', 'Tobacco': 'Tobacco', 'Jute': 'Jute', 'Bajra': 'Bajra',
        'Cumin': 'Cumin', 'Guar': 'Guar', 'Ragi': 'Ragi', 'Sunflower': 'Sunflower',
        'Castor': 'Castor', 'Litchi': 'Litchi', 'Rice (Samba)': 'Rice (Samba)',
        'Rice (Kuruvai)': 'Rice (Kuruvai)', 'Rice (Aman)': 'Rice (Aman)', 'Rice (Boro)': 'Rice (Boro)'
    },
    hi: {
        'advisor-title': 'व्यक्तिगत फसल सलाहकार',
        'advisor-state': 'राज्य चुनें',
        'advisor-month': 'वर्तमान माह',
        'advisor-soil': 'मिट्टी का प्रकार',
        'advisor-placeholder': 'व्यक्तिगत फसल सिफारिशें पाने के लिए अपना राज्य और मिट्टी का प्रकार चुनें',
        'activity-sowing': 'बुवाई का समय',
        'activity-fertilizer': 'उर्वरक डालें',
        'activity-harvest': 'कटाई का समय',
        'activity-prepare': 'भूमि तैयारी',
        'summary-text': 'सिफारिशें दिखाई जा रही हैं',
        'tip-label': 'सुझाव',
        'no-results': 'इस संयोजन के लिए कोई विशेष सिफारिश नहीं। अलग मिट्टी का प्रकार आज़माएं।',
        // Crop names in Hindi
        'Rice': 'धान', 'Wheat': 'गेहूं', 'Cotton': 'कपास', 'Sugarcane': 'गन्ना',
        'Banana': 'केला', 'Groundnut': 'मूंगफली', 'Turmeric': 'हल्दी', 'Chilli': 'मिर्च',
        'Tomato': 'टमाटर', 'Onion': 'प्याज', 'Maize': 'मक्का', 'Soybean': 'सोयाबीन',
        'Chickpea': 'चना', 'Mustard': 'सरसों', 'Potato': 'आलू', 'Grapes': 'अंगूर',
        'Mango': 'आम', 'Coffee': 'कॉफी', 'Tea': 'चाय', 'Coconut': 'नारियल',
        'Pepper': 'काली मिर्च', 'Rubber': 'रबर', 'Cashew': 'काजू', 'Tapioca': 'टैपिओका',
        'Sweet Potato': 'शकरकंद', 'Tobacco': 'तंबाकू', 'Jute': 'जूट', 'Bajra': 'बाजरा',
        'Cumin': 'जीरा', 'Guar': 'ग्वार', 'Ragi': 'रागी', 'Sunflower': 'सूरजमुखी',
        'Castor': 'अरंडी', 'Litchi': 'लीची', 'Rice (Samba)': 'धान (साम्बा)',
        'Rice (Kuruvai)': 'धान (कुरुवाई)', 'Rice (Aman)': 'धान (अमन)', 'Rice (Boro)': 'धान (बोरो)'
    },
    ta: {
        'advisor-title': 'தனிப்பயன் பயிர் ஆலோசகர்',
        'advisor-state': 'மாநிலம் தேர்ந்தெடுக்கவும்',
        'advisor-month': 'தற்போதைய மாதம்',
        'advisor-soil': 'மண் வகை',
        'advisor-placeholder': 'தனிப்பயன் பயிர் பரிந்துரைகளைப் பெற உங்கள் மாநிலம் மற்றும் மண் வகையை தேர்ந்தெடுக்கவும்',
        'activity-sowing': 'விதைப்பு நேரம்',
        'activity-fertilizer': 'உரம் இடுங்கள்',
        'activity-harvest': 'அறுவடை நேரம்',
        'activity-prepare': 'நில தயாரிப்பு',
        'summary-text': 'பரிந்துரைகள் காட்டப்படுகின்றன',
        'tip-label': 'குறிப்பு',
        'no-results': 'இந்த கலவைக்கு குறிப்பிட்ட பரிந்துரைகள் இல்லை. வேறு மண் வகையை முயற்சிக்கவும்.',
        // Crop names in Tamil
        'Rice': 'அரிசி', 'Wheat': 'கோதுமை', 'Cotton': 'பருத்தி', 'Sugarcane': 'கரும்பு',
        'Banana': 'வாழைப்பழம்', 'Groundnut': 'நிலக்கடலை', 'Turmeric': 'மஞ்சள்', 'Chilli': 'மிளகாய்',
        'Tomato': 'தக்காளி', 'Onion': 'வெங்காயம்', 'Maize': 'சோளம்', 'Soybean': 'சோயாபீன்',
        'Chickpea': 'கொண்டைக்கடலை', 'Mustard': 'கடுகு', 'Potato': 'உருளைக்கிழங்கு', 'Grapes': 'திராட்சை',
        'Mango': 'மாம்பழம்', 'Coffee': 'காபி', 'Tea': 'தேயிலை', 'Coconut': 'தேங்காய்',
        'Pepper': 'மிளகு', 'Rubber': 'ரப்பர்', 'Cashew': 'முந்திரி', 'Tapioca': 'மரவள்ளிக்கிழங்கு',
        'Sweet Potato': 'சர்க்கரைவள்ளிக்கிழங்கு', 'Tobacco': 'புகையிலை', 'Jute': 'சணல்', 'Bajra': 'கம்பு',
        'Cumin': 'சீரகம்', 'Guar': 'கொத்தவரங்காய்', 'Ragi': 'கேழ்வரகு', 'Sunflower': 'சூரியகாந்தி',
        'Castor': 'ஆமணக்கு', 'Litchi': 'லிச்சி', 'Rice (Samba)': 'அரிசி (சம்பா)',
        'Rice (Kuruvai)': 'அரிசி (குறுவை)', 'Rice (Aman)': 'அரிசி (அமன்)', 'Rice (Boro)': 'அரிசி (போரோ)'
    }
};

// Crop data: state → month range → soil → crops
const cropAdvisorData = {
    punjab: {
        months: [10,11,12,1,2,3],
        crops: {
            loamy: [
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'Use HD-2967 or PBW-343 variety for best yield' },
                { name: 'Wheat', icon: '🌾', activity: 'fertilizer', months: [12,1], tip: 'Apply urea 50kg/acre at tillering stage' },
                { name: 'Wheat', icon: '🌾', activity: 'harvest', months: [3,4], tip: 'Harvest when grain moisture is below 14%' },
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Transplant 25-30 day old seedlings' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Sow in rows 30cm apart' },
                { name: 'Potato', icon: '🥔', activity: 'sowing', months: [10,11], tip: 'Use certified seed potatoes' }
            ],
            clay: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Clay soil retains water well, ideal for rice' },
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'Plant setts 75cm apart in furrows' },
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'Ensure proper drainage before sowing' }
            ],
            sandy: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [5,6], tip: 'Sandy soil drains well, perfect for groundnut' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Add organic matter to improve water retention' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Irrigate frequently due to low water retention' }
            ]
        }
    },
    tamilnadu: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            clay: [
                { name: 'Rice (Samba)', icon: '🌾', activity: 'sowing', months: [8,9], tip: 'Samba season — use ADT-43 or CO-51 variety' },
                { name: 'Rice (Kuruvai)', icon: '🌾', activity: 'sowing', months: [5,6], tip: 'Short duration variety, harvest in 105 days' },
                { name: 'Banana', icon: '🍌', activity: 'sowing', months: [1,2,3], tip: 'Plant tissue culture plants for disease-free crop' },
                { name: 'Sugarcane', icon: '🎋', activity: 'fertilizer', months: [3,4,5], tip: 'Apply potash to improve sugar content' }
            ],
            red: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Red soil is ideal for groundnut in TN' },
                { name: 'Turmeric', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Plant rhizomes 5cm deep, 25cm apart' },
                { name: 'Chilli', icon: '🌶️', activity: 'sowing', months: [6,7], tip: 'Use K-1 or CO-1 variety for high yield' },
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Bt cotton recommended for pest resistance' }
            ],
            loamy: [
                { name: 'Tomato', icon: '🍅', activity: 'sowing', months: [6,7,11,12], tip: 'Loamy soil gives best tomato quality' },
                { name: 'Onion', icon: '🧅', activity: 'sowing', months: [11,12], tip: 'Aggregatum onion is popular in TN' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Hybrid maize gives 25-30 quintals/acre' }
            ],
            black: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Black soil retains moisture, ideal for cotton' },
                { name: 'Soybean', icon: '🫘', activity: 'sowing', months: [6,7], tip: 'Inoculate seeds with Rhizobium before sowing' },
                { name: 'Chickpea', icon: '🫘', activity: 'sowing', months: [10,11], tip: 'Sow after kharif harvest' }
            ],
            sandy: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [5,6,7], tip: 'Sandy coastal soil of TN is ideal for groundnut' },
                { name: 'Cashew', icon: '🥜', activity: 'harvest', months: [2,3,4], tip: 'Cuddalore and Villupuram are cashew hubs' },
                { name: 'Coconut', icon: '🥥', activity: 'fertilizer', months: [5,6], tip: 'Coastal sandy soil suits coconut well' },
                { name: 'Tapioca', icon: '🌿', activity: 'sowing', months: [5,6,10,11], tip: 'Sandy loam is best for tapioca cultivation' },
                { name: 'Sweet Potato', icon: '🍠', activity: 'sowing', months: [9,10,11], tip: 'Sandy soil gives best sweet potato quality' }
            ]
        }
    },
    maharashtra: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            black: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Vidarbha black soil is best for cotton' },
                { name: 'Soybean', icon: '🫘', activity: 'sowing', months: [6,7], tip: 'Most popular kharif crop in Maharashtra' },
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'Pune-Nashik belt is ideal for sugarcane' },
                { name: 'Turmeric', icon: '🌿', activity: 'harvest', months: [1,2,3], tip: 'Sangli is India\'s largest turmeric market' }
            ],
            loamy: [
                { name: 'Grapes', icon: '🍇', activity: 'prepare', months: [10,11], tip: 'Nashik loamy soil is perfect for grapes' },
                { name: 'Onion', icon: '🧅', activity: 'sowing', months: [10,11], tip: 'Nashik is India\'s onion capital' },
                { name: 'Tomato', icon: '🍅', activity: 'sowing', months: [6,7], tip: 'Use drip irrigation for best results' }
            ],
            red: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Konkan red soil suits groundnut well' },
                { name: 'Mango', icon: '🥭', activity: 'prepare', months: [1,2], tip: 'Ratnagiri Alphonso — prune after harvest' }
            ]
        }
    },
    karnataka: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            red: [
                { name: 'Ragi', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Karnataka\'s staple — use GPU-28 variety' },
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Kolar red soil is ideal for groundnut' },
                { name: 'Sunflower', icon: '🌻', activity: 'sowing', months: [9,10], tip: 'Karnataka is top sunflower producer' },
                { name: 'Coffee', icon: '☕', activity: 'harvest', months: [11,12,1], tip: 'Coorg arabica — hand-pick ripe cherries' }
            ],
            black: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'North Karnataka black soil suits cotton' },
                { name: 'Soybean', icon: '🫘', activity: 'sowing', months: [6,7], tip: 'Gulbarga region is ideal for soybean' },
                { name: 'Chickpea', icon: '🫘', activity: 'sowing', months: [10,11], tip: 'Rabi season chickpea after kharif' }
            ],
            loamy: [
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'Mandya and Belgaum are sugarcane hubs' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Davangere is Karnataka\'s maize belt' },
                { name: 'Coconut', icon: '🥥', activity: 'fertilizer', months: [5,6], tip: 'Apply NPK before monsoon for best yield' }
            ]
        }
    },
    up: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            loamy: [
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'UP is India\'s largest wheat producer' },
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'Western UP is India\'s sugarcane belt' },
                { name: 'Potato', icon: '🥔', activity: 'sowing', months: [10,11], tip: 'Agra-Mathura belt is famous for potato' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Sow after kharif harvest' }
            ],
            clay: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Eastern UP clay soil is ideal for rice' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Bundelkhand region suits maize' }
            ]
        }
    },
    mp: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            black: [
                { name: 'Soybean', icon: '🫘', activity: 'sowing', months: [6,7], tip: 'MP is India\'s soybean capital — use JS-335' },
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'MP produces highest quality wheat' },
                { name: 'Chickpea', icon: '🫘', activity: 'sowing', months: [10,11], tip: 'Malwa plateau is ideal for chickpea' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Chambal valley suits mustard well' }
            ],
            loamy: [
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Chhindwara is MP\'s maize hub' },
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Nimar valley is cotton growing region' }
            ]
        }
    },
    gujarat: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            black: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Gujarat is India\'s top cotton producer' },
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Saurashtra is India\'s groundnut hub' },
                { name: 'Castor', icon: '🌿', activity: 'sowing', months: [7,8], tip: 'Gujarat produces 80% of India\'s castor' }
            ],
            sandy: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Sandy loam of Saurashtra is ideal' },
                { name: 'Cumin', icon: '🌿', activity: 'sowing', months: [11,12], tip: 'North Gujarat is India\'s cumin capital' }
            ]
        }
    },
    andhra: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            clay: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Krishna-Godavari delta is rice bowl of India' },
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'East Godavari is major sugarcane region' }
            ],
            red: [
                { name: 'Chilli', icon: '🌶️', activity: 'sowing', months: [6,7], tip: 'Guntur is world\'s largest chilli market' },
                { name: 'Tobacco', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Andhra produces 70% of India\'s tobacco' },
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Kurnool and Anantapur are groundnut hubs' }
            ],
            black: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Guntur and Prakasam suit cotton well' },
                { name: 'Turmeric', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Duggirala is famous for turmeric' }
            ]
        }
    },
    wb: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            clay: [
                { name: 'Rice (Aman)', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Main kharif rice season in WB' },
                { name: 'Rice (Boro)', icon: '🌾', activity: 'sowing', months: [12,1], tip: 'Winter rice with irrigation' },
                { name: 'Jute', icon: '🌿', activity: 'sowing', months: [3,4], tip: 'WB produces 50% of India\'s jute' }
            ],
            loamy: [
                { name: 'Potato', icon: '🥔', activity: 'sowing', months: [10,11], tip: 'Hooghly and Burdwan are potato hubs' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Rabi mustard after kharif rice' },
                { name: 'Tea', icon: '🍵', activity: 'harvest', months: [3,4,5], tip: 'Darjeeling first flush — most prized tea' }
            ]
        }
    },
    kerala: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            loamy: [
                { name: 'Coconut', icon: '🥥', activity: 'fertilizer', months: [5,6], tip: 'Kerala has highest coconut density in India' },
                { name: 'Rubber', icon: '🌿', activity: 'prepare', months: [4,5], tip: 'Tapping season — use proper tapping knife' },
                { name: 'Banana', icon: '🍌', activity: 'sowing', months: [5,6], tip: 'Nendran variety is Kerala\'s specialty' },
                { name: 'Pepper', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Kerala is India\'s black pepper capital' }
            ],
            red: [
                { name: 'Cashew', icon: '🥜', activity: 'harvest', months: [2,3,4], tip: 'Kollam and Kasaragod are cashew hubs' },
                { name: 'Tapioca', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Staple food crop of Kerala' }
            ]
        }
    },
    haryana: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            loamy: [
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'Haryana is India\'s wheat bowl' },
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Basmati rice from Karnal is world famous' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Hisar and Sirsa are mustard hubs' },
                { name: 'Sugarcane', icon: '🎋', activity: 'sowing', months: [2,3], tip: 'Yamunanagar is Haryana\'s sugar city' }
            ]
        }
    },
    rajasthan: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            sandy: [
                { name: 'Bajra', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Rajasthan is India\'s top bajra producer' },
                { name: 'Mustard', icon: '🌿', activity: 'sowing', months: [10,11], tip: 'Bharatpur and Alwar are mustard hubs' },
                { name: 'Cumin', icon: '🌿', activity: 'sowing', months: [11,12], tip: 'Jodhpur and Barmer produce best cumin' },
                { name: 'Guar', icon: '🌿', activity: 'sowing', months: [7,8], tip: 'Rajasthan produces 80% of world\'s guar' }
            ],
            loamy: [
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'Irrigated areas of Ganganagar suit wheat' },
                { name: 'Chickpea', icon: '🫘', activity: 'sowing', months: [10,11], tip: 'Kota and Bundi are chickpea hubs' }
            ]
        }
    },
    telangana: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            red: [
                { name: 'Cotton', icon: '☁️', activity: 'sowing', months: [5,6], tip: 'Telangana is major cotton growing state' },
                { name: 'Chilli', icon: '🌶️', activity: 'sowing', months: [6,7], tip: 'Warangal and Khammam are chilli hubs' },
                { name: 'Turmeric', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Nizamabad is India\'s turmeric city' }
            ],
            black: [
                { name: 'Soybean', icon: '🫘', activity: 'sowing', months: [6,7], tip: 'Black soil of Telangana suits soybean' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Karimnagar and Nizamabad are maize hubs' }
            ],
            clay: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Godavari basin clay soil is ideal for rice' }
            ]
        }
    },
    odisha: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            clay: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Odisha has 200+ indigenous rice varieties' },
                { name: 'Jute', icon: '🌿', activity: 'sowing', months: [3,4], tip: 'Coastal Odisha suits jute cultivation' }
            ],
            red: [
                { name: 'Groundnut', icon: '🥜', activity: 'sowing', months: [6,7], tip: 'Western Odisha red soil suits groundnut' },
                { name: 'Turmeric', icon: '🌿', activity: 'sowing', months: [5,6], tip: 'Kandhamal turmeric has GI tag' }
            ]
        }
    },
    bihar: {
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        crops: {
            loamy: [
                { name: 'Rice', icon: '🌾', activity: 'sowing', months: [6,7], tip: 'Bihar is major rice producing state' },
                { name: 'Wheat', icon: '🌾', activity: 'sowing', months: [10,11], tip: 'Rabi wheat after kharif rice' },
                { name: 'Maize', icon: '🌽', activity: 'sowing', months: [6,7], tip: 'Bihar is India\'s top maize producer' },
                { name: 'Litchi', icon: '🍈', activity: 'harvest', months: [5,6], tip: 'Muzaffarpur litchi has GI tag' }
            ]
        }
    }
};

// ─── Main Function ────────────────────────────────────────────
function getCropAdvice() {
    const state = document.getElementById('advisorState').value;
    const month = parseInt(document.getElementById('advisorMonth').value);
    const soil = document.getElementById('advisorSoil').value;
    const lang = document.getElementById('languageSelect')?.value || 'en';
    const t = advisorTranslations[lang] || advisorTranslations.en;

    const resultsDiv = document.getElementById('advisorResults');

    if (!state || !soil) {
        resultsDiv.innerHTML = `
            <div class="advisor-placeholder">
                <i class="fas fa-seedling"></i>
                <p>${t['advisor-placeholder']}</p>
            </div>`;
        return;
    }

    const stateData = cropAdvisorData[state];
    if (!stateData) {
        resultsDiv.innerHTML = `<div class="advisor-placeholder"><i class="fas fa-seedling"></i><p>${t['no-results']}</p></div>`;
        return;
    }

    const soilCrops = stateData.crops[soil];
    if (!soilCrops || soilCrops.length === 0) {
        resultsDiv.innerHTML = `<div class="advisor-placeholder"><i class="fas fa-seedling"></i><p>${t['no-results']}</p></div>`;
        return;
    }

    // Filter crops relevant to selected month (show all if none match current month)
    let relevantCrops = soilCrops.filter(c => c.months.includes(month));
    if (relevantCrops.length === 0) relevantCrops = soilCrops;

    const stateName = document.getElementById('advisorState').selectedOptions[0].text;
    const monthName = document.getElementById('advisorMonth').selectedOptions[0].text;
    const soilName = document.getElementById('advisorSoil').selectedOptions[0].text;

    const activityLabels = {
        sowing: t['activity-sowing'],
        fertilizer: t['activity-fertilizer'],
        harvest: t['activity-harvest'],
        prepare: t['activity-prepare']
    };

    let html = `
        <div class="advisor-summary">
            <i class="fas fa-map-marker-alt"></i>
            ${t['summary-text']}: ${stateName} | ${monthName} | ${soilName}
        </div>
        <div class="advisor-grid">`;

    relevantCrops.forEach(crop => {
        const translatedName = t[crop.name] || crop.name;
        html += `
            <div class="advisor-card ${crop.activity}">
                <div class="advisor-card-header">
                    <div class="advisor-card-icon">${crop.icon}</div>
                    <h3>${translatedName}</h3>
                </div>
                <span class="advisor-activity activity-${crop.activity}">
                    ${activityLabels[crop.activity] || crop.activity}
                </span>
                <div class="tip">
                    <i class="fas fa-lightbulb"></i>
                    ${t['tip-label']}: ${crop.tips ? (crop.tips[lang] || crop.tips.en || crop.tip) : crop.tip}
                </div>
            </div>`;
    });

    html += '</div>';
    resultsDiv.innerHTML = html;
}

// Auto-set current month on page load
document.addEventListener('DOMContentLoaded', function() {
    const monthSelect = document.getElementById('advisorMonth');
    if (monthSelect) {
        const currentMonth = new Date().getMonth() + 1;
        monthSelect.value = currentMonth;
    }
});
