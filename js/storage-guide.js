
// Crop Storage Guide Data
const storageData = {
    en: {
        rice:      { temp:'10-15°C', humidity:'60-70%', container:'Jute bags / Metal bins', shelf:'12-18 months', mistakes:['Storing with high moisture','Not cleaning storage area','Ignoring pest control'] },
        wheat:     { temp:'10-15°C', humidity:'60-65%', container:'Jute bags / Silos',      shelf:'12-24 months', mistakes:['High moisture storage','Mixing old and new stock','Poor ventilation'] },
        cotton:    { temp:'20-25°C', humidity:'50-60%', container:'Bales / Dry warehouse',  shelf:'6-12 months',  mistakes:['Storing in damp place','Exposure to sunlight','Mixing grades'] },
        sugarcane: { temp:'15-20°C', humidity:'85-90%', container:'Cool shaded area',       shelf:'2-4 weeks',    mistakes:['Long storage after harvest','Exposure to heat','Not covering cut ends'] },
        tomato:    { temp:'10-13°C', humidity:'85-95%', container:'Plastic crates',         shelf:'2-4 weeks',    mistakes:['Storing unripe with ripe','Refrigerating unripe','Stacking too high'] },
        onion:     { temp:'0-5°C',   humidity:'65-70%', container:'Mesh bags / Open crates',shelf:'3-6 months',   mistakes:['Storing with potatoes','High humidity storage','Storing damaged bulbs'] },
        potato:    { temp:'4-10°C',  humidity:'85-90%', container:'Jute bags / Dark room',  shelf:'3-6 months',   mistakes:['Exposure to light (greening)','Storing near onions','High temperature'] },
        maize:     { temp:'10-15°C', humidity:'12-14%', container:'Metal bins / Silos',     shelf:'6-12 months',  mistakes:['Storing wet grain','Poor pest control','Not drying before storage'] },
        soybean:   { temp:'10-15°C', humidity:'11-13%', container:'Sealed bags / Bins',     shelf:'6-12 months',  mistakes:['High moisture content','Exposure to air','Mixing with other grains'] },
        groundnut: { temp:'10-15°C', humidity:'60-70%', container:'Jute bags / Dry bins',   shelf:'6-12 months',  mistakes:['Storing with shell damage','High humidity','Not removing foreign matter'] },
        chickpea:  { temp:'10-15°C', humidity:'60-65%', container:'Sealed bags / Bins',     shelf:'12-18 months', mistakes:['Moisture exposure','Insect infestation','Poor cleaning before storage'] },
        mustard:   { temp:'10-15°C', humidity:'6-8%',   container:'Sealed metal bins',      shelf:'12-18 months', mistakes:['High moisture','Exposure to heat','Mixing with impurities'] },
        turmeric:  { temp:'15-20°C', humidity:'65-70%', container:'Jute bags / Dry room',   shelf:'12-24 months', mistakes:['Storing undried rhizomes','Exposure to moisture','Poor ventilation'] },
        chilli:    { temp:'0-5°C',   humidity:'60-65%', container:'Sealed bags / Cold room', shelf:'6-12 months',  mistakes:['Storing wet chilli','Exposure to sunlight','Not sorting before storage'] },
        banana:    { temp:'13-15°C', humidity:'85-95%', container:'Ventilated room',         shelf:'1-3 weeks',    mistakes:['Refrigerating unripe','Storing near ethylene sources','Bruising during handling'] },
        mango:     { temp:'10-13°C', humidity:'85-90%', container:'Ventilated crates',       shelf:'2-4 weeks',    mistakes:['Refrigerating unripe','Stacking too high','Storing damaged fruits'] },
        coconut:   { temp:'0-5°C',   humidity:'80-85%', container:'Mesh bags / Dry area',    shelf:'1-2 months',   mistakes:['Storing husked coconut in heat','High humidity','Storing cracked coconuts'] },
        tea:       { temp:'15-20°C', humidity:'50-60%', container:'Airtight containers',     shelf:'12-24 months', mistakes:['Exposure to moisture','Storing near strong odors','Direct sunlight'] },
        coffee:    { temp:'15-20°C', humidity:'50-60%', container:'Airtight sealed bags',    shelf:'6-12 months',  mistakes:['Exposure to air after roasting','High humidity','Storing near spices'] },
        grapes:    { temp:'0-2°C',   humidity:'90-95%', container:'Ventilated cold storage',  shelf:'2-8 weeks',    mistakes:['Storing at room temperature','Washing before storage','Storing near ethylene fruits'] },
        garlic:    { temp:'0-5°C',   humidity:'60-70%', container:'Mesh bags / Dry cool room', shelf:'6-12 months',  mistakes:['Storing in plastic bags','High humidity','Storing near onions long term'] },
        ginger:    { temp:'12-15°C', humidity:'65-70%', container:'Sand storage / Dry room',   shelf:'3-6 months',   mistakes:['Refrigerating fresh ginger','High moisture','Storing in airtight without ventilation'] },
        carrot:    { temp:'0-5°C',   humidity:'90-95%', container:'Perforated plastic bags',   shelf:'2-4 months',   mistakes:['Storing with apples/pears','Not removing tops','Storing at room temperature'] },
        cabbage:   { temp:'0-5°C',   humidity:'90-95%', container:'Cool dark room / Fridge',   shelf:'1-3 months',   mistakes:['Storing cut cabbage uncovered','High temperature','Storing near ethylene sources'] },
        cauliflower:{ temp:'0-5°C',  humidity:'90-95%', container:'Perforated bags / Fridge',  shelf:'2-4 weeks',    mistakes:['Storing upside down','Exposure to light','High temperature storage'] },
        brinjal:   { temp:'10-13°C', humidity:'90-95%', container:'Ventilated crates',         shelf:'1-2 weeks',    mistakes:['Refrigerating below 10°C','Storing with tomatoes','Bruising during handling'] },
        okra:      { temp:'7-10°C',  humidity:'90-95%', container:'Perforated plastic bags',   shelf:'1-2 weeks',    mistakes:['Storing below 7°C (chilling injury)','Washing before storage','Storing in airtight bags'] },
        peas:      { temp:'0-5°C',   humidity:'90-95%', container:'Sealed bags / Cold storage', shelf:'1-2 weeks',   mistakes:['Storing shelled peas uncovered','High temperature','Delayed cooling after harvest'] },
        lentil:    { temp:'10-15°C', humidity:'60-65%', container:'Sealed bags / Metal bins',   shelf:'12-24 months', mistakes:['High moisture storage','Insect infestation','Mixing old and new stock'] },
        sunflower: { temp:'10-15°C', humidity:'8-10%',  container:'Sealed metal bins',          shelf:'6-12 months',  mistakes:['High moisture content','Exposure to heat','Poor pest control'] },
        sesame:    { temp:'10-15°C', humidity:'6-8%',   container:'Sealed airtight containers', shelf:'12-18 months', mistakes:['High moisture','Exposure to light','Storing in open containers'] },
        jute:      { temp:'20-25°C', humidity:'60-65%', container:'Dry warehouse / Bales',      shelf:'12-18 months', mistakes:['Storing in damp conditions','Exposure to rain','Poor ventilation'] },
        ragi:      { temp:'10-15°C', humidity:'10-12%', container:'Sealed bags / Metal bins',   shelf:'12-24 months', mistakes:['High moisture storage','Insect infestation','Not cleaning before storage'] },
        bajra:     { temp:'10-15°C', humidity:'10-12%', container:'Sealed bags / Silos',        shelf:'12-18 months', mistakes:['Storing wet grain','Poor pest control','Not drying properly'] },
        jowar:     { temp:'10-15°C', humidity:'10-12%', container:'Metal bins / Sealed bags',   shelf:'12-18 months', mistakes:['High moisture','Insect infestation','Mixing with impurities'] },
        papaya:    { temp:'10-13°C', humidity:'85-90%', container:'Ventilated crates',          shelf:'1-3 weeks',    mistakes:['Refrigerating unripe','Stacking too high','Storing damaged fruits'] },
        guava:     { temp:'8-10°C',  humidity:'85-90%', container:'Ventilated crates / Fridge', shelf:'2-3 weeks',    mistakes:['Storing overripe fruits','High temperature','Bruising during handling'] },
        pomegranate:{ temp:'5-10°C', humidity:'80-85%', container:'Ventilated cool room',       shelf:'1-3 months',   mistakes:['Storing cracked fruits','High humidity','Storing in airtight containers'] },
        watermelon:{ temp:'10-15°C', humidity:'85-90%', container:'Cool dry room',              shelf:'2-3 weeks',    mistakes:['Refrigerating whole watermelon','Storing cut pieces uncovered','High temperature'] }
    },
    hi: {
        rice:      { temp:'10-15°C', humidity:'60-70%', container:'जूट बैग / धातु डिब्बे', shelf:'12-18 महीने', mistakes:['अधिक नमी के साथ भंडारण','भंडारण क्षेत्र की सफाई न करना','कीट नियंत्रण की अनदेखी'] },
        wheat:     { temp:'10-15°C', humidity:'60-65%', container:'जूट बैग / साइलो',       shelf:'12-24 महीने', mistakes:['उच्च नमी भंडारण','पुराने और नए स्टॉक को मिलाना','खराब वेंटिलेशन'] },
        onion:     { temp:'0-5°C',   humidity:'65-70%', container:'जाली बैग / खुले क्रेट', shelf:'3-6 महीने',   mistakes:['आलू के साथ भंडारण','उच्च आर्द्रता','क्षतिग्रस्त बल्ब भंडारण'] },
        potato:    { temp:'4-10°C',  humidity:'85-90%', container:'जूट बैग / अंधेरा कमरा', shelf:'3-6 महीने',   mistakes:['प्रकाश के संपर्क में','प्याज के पास भंडारण','उच्च तापमान'] },
        tomato:    { temp:'10-13°C', humidity:'85-95%', container:'प्लास्टिक क्रेट',        shelf:'2-4 सप्ताह',  mistakes:['कच्चे और पके को एक साथ','कच्चे को फ्रिज में','बहुत ऊंचा ढेर'] },
        maize:     { temp:'10-15°C', humidity:'12-14%', container:'धातु डिब्बे / साइलो',   shelf:'6-12 महीने',  mistakes:['गीला अनाज भंडारण','कीट नियंत्रण की कमी','सुखाए बिना भंडारण'] },
        turmeric:  { temp:'15-20°C', humidity:'65-70%', container:'जूट बैग / सूखा कमरा',   shelf:'12-24 महीने', mistakes:['बिना सुखाए भंडारण','नमी के संपर्क में','खराब वेंटिलेशन'] },
        chilli:    { temp:'0-5°C',   humidity:'60-65%', container:'सीलबंद बैग / ठंडा कमरा',shelf:'6-12 महीने',  mistakes:['गीली मिर्च भंडारण','धूप के संपर्क में','भंडारण से पहले छंटाई न करना'] },
        mustard:   { temp:'10-15°C', humidity:'6-8%',   container:'सीलबंद धातु डिब्बे',    shelf:'12-18 महीने', mistakes:['उच्च नमी','गर्मी के संपर्क में','अशुद्धियों के साथ मिलाना'] },
        groundnut: { temp:'10-15°C', humidity:'60-70%', container:'जूट बैग / सूखे डिब्बे', shelf:'6-12 महीने',  mistakes:['क्षतिग्रस्त खोल के साथ','उच्च आर्द्रता','विदेशी पदार्थ न हटाना'] }
    },
    ta: {
        rice:      { temp:'10-15°C', humidity:'60-70%', container:'சணல் பைகள் / உலோக டப்பாக்கள்', shelf:'12-18 மாதங்கள்', mistakes:['அதிக ஈரப்பதத்துடன் சேமிப்பு','சேமிப்பு இடத்தை சுத்தம் செய்யாமல்','பூச்சி கட்டுப்பாட்டை புறக்கணித்தல்'] },
        wheat:     { temp:'10-15°C', humidity:'60-65%', container:'சணல் பைகள் / சைலோக்கள்',       shelf:'12-24 மாதங்கள்', mistakes:['அதிக ஈரப்பத சேமிப்பு','பழைய மற்றும் புதிய கையிருப்பை கலத்தல்','மோசமான காற்றோட்டம்'] },
        onion:     { temp:'0-5°C',   humidity:'65-70%', container:'வலை பைகள் / திறந்த கூடைகள்',   shelf:'3-6 மாதங்கள்',   mistakes:['உருளைக்கிழங்குடன் சேமிப்பு','அதிக ஈரப்பதம்','சேதமடைந்த கிழங்குகள்'] },
        tomato:    { temp:'10-13°C', humidity:'85-95%', container:'பிளாஸ்டிக் கூடைகள்',            shelf:'2-4 வாரங்கள்',   mistakes:['பச்சை மற்றும் பழுத்ததை சேர்த்து','பச்சையை குளிர்சாதனத்தில்','மிக உயரமாக அடுக்குதல்'] },
        turmeric:  { temp:'15-20°C', humidity:'65-70%', container:'சணல் பைகள் / உலர் அறை',        shelf:'12-24 மாதங்கள்', mistakes:['உலர்த்தாமல் சேமிப்பு','ஈரப்பதத்தில் வைத்தல்','மோசமான காற்றோட்டம்'] },
        chilli:    { temp:'0-5°C',   humidity:'60-65%', container:'சீல் பைகள் / குளிர் அறை',       shelf:'6-12 மாதங்கள்',  mistakes:['ஈரமான மிளகாய் சேமிப்பு','சூரிய ஒளியில் வைத்தல்','வரிசைப்படுத்தாமல் சேமிப்பு'] },
        coconut:   { temp:'0-5°C',   humidity:'80-85%', container:'வலை பைகள் / உலர் இடம்',         shelf:'1-2 மாதங்கள்',   mistakes:['வெப்பத்தில் சேமிப்பு','அதிக ஈரப்பதம்','வெடிப்பு தேங்காய் சேமிப்பு'] },
        banana:    { temp:'13-15°C', humidity:'85-95%', container:'காற்றோட்டமான அறை',              shelf:'1-3 வாரங்கள்',   mistakes:['பச்சையை குளிர்சாதனத்தில்','எத்திலீன் மூலங்களுக்கு அருகில்','கையாளும்போது காயம்'] }
    }
};

const storageLabels = {
    en: { temp:'Temperature', humidity:'Humidity', container:'Container Type', shelf:'Shelf Life', mistakes:'Common Mistakes to Avoid', title:'Storage Guide for' },
    hi: { temp:'तापमान', humidity:'आर्द्रता', container:'कंटेनर प्रकार', shelf:'शेल्फ लाइफ', mistakes:'सामान्य गलतियाँ जो टालें', title:'भंडारण गाइड' },
    ta: { temp:'வெப்பநிலை', humidity:'ஈரப்பதம்', container:'கொள்கலன் வகை', shelf:'சேமிப்பு காலம்', mistakes:'தவிர்க்க வேண்டிய பொதுவான தவறுகள்', title:'சேமிப்பு வழிகாட்டி' }
};

function showStorageGuide() {
    const crop = document.getElementById('storageSelect').value;
    const lang = document.getElementById('languageSelect')?.value || 'en';
    const result = document.getElementById('storageResult');

    if (!crop) {
        result.innerHTML = `<div class="storage-placeholder"><i class="fas fa-warehouse"></i><p>Select a crop above to see storage guidelines</p></div>`;
        return;
    }

    const langData = storageData[lang] || storageData.en;
    const data = langData[crop] || storageData.en[crop];
    const labels = storageLabels[lang] || storageLabels.en;
    const cropName = document.getElementById('storageSelect').selectedOptions[0].text;

    if (!data) {
        result.innerHTML = `<div class="storage-placeholder"><i class="fas fa-warehouse"></i><p>No data available for this crop.</p></div>`;
        return;
    }

    result.innerHTML = `
        <div class="storage-guide-card">
            <h3 class="storage-crop-title">📦 ${labels.title}: ${cropName}</h3>
            <div class="storage-grid">
                <div class="storage-info-card temp">
                    <div class="storage-icon">🌡️</div>
                    <div class="storage-label">${labels.temp}</div>
                    <div class="storage-value">${data.temp}</div>
                </div>
                <div class="storage-info-card humidity">
                    <div class="storage-icon">💧</div>
                    <div class="storage-label">${labels.humidity}</div>
                    <div class="storage-value">${data.humidity}</div>
                </div>
                <div class="storage-info-card container">
                    <div class="storage-icon">📦</div>
                    <div class="storage-label">${labels.container}</div>
                    <div class="storage-value">${data.container}</div>
                </div>
                <div class="storage-info-card shelf">
                    <div class="storage-icon">📅</div>
                    <div class="storage-label">${labels.shelf}</div>
                    <div class="storage-value">${data.shelf}</div>
                </div>
            </div>
            <div class="storage-mistakes">
                <h4>⚠️ ${labels.mistakes}</h4>
                <ul>
                    ${data.mistakes.map(m => `<li>❌ ${m}</li>`).join('')}
                </ul>
            </div>
        </div>`;
}
