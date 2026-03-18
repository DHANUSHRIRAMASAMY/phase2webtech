function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

function updateMarketPrices() {
    const crop = document.getElementById('cropSelect').value;
    const data = {
        rice: [
            ['Rice', '₹2,100', 'Mumbai', '↑ 5%'],
            ['Rice', '₹2,050', 'Delhi', '↓ 2%'],
            ['Rice', '₹2,150', 'Bangalore', '↑ 3%'],
            ['Rice', '₹2,080', 'Chennai', '↑ 4%'],
            ['Rice', '₹2,120', 'Kolkata', '↑ 6%'],
            ['Rice', '₹2,000', 'Hyderabad', '↑ 1%'],
            ['Rice', '₹2,180', 'Pune', '↑ 7%'],
            ['Rice', '₹2,090', 'Ahmedabad', '↑ 5%'],
            ['Rice', '₹2,130', 'Lucknow', '↑ 4%'],
            ['Rice', '₹2,070', 'Patna', '↑ 3%']
        ],
        wheat: [
            ['Wheat', '₹1,950', 'Mumbai', '↑ 3%'],
            ['Wheat', '₹1,900', 'Delhi', '↓ 1%'],
            ['Wheat', '₹2,000', 'Bangalore', '↑ 5%'],
            ['Wheat', '₹1,920', 'Jaipur', '↑ 2%'],
            ['Wheat', '₹1,880', 'Ludhiana', '↑ 1%'],
            ['Wheat', '₹1,970', 'Indore', '↑ 4%'],
            ['Wheat', '₹1,930', 'Kanpur', '↑ 3%'],
            ['Wheat', '₹1,890', 'Meerut', '↑ 2%'],
            ['Wheat', '₹1,960', 'Bhopal', '↑ 4%'],
            ['Wheat', '₹1,910', 'Agra', '↑ 2%']
        ],
        cotton: [
            ['Cotton', '₹5,800', 'Mumbai', '↑ 7%'],
            ['Cotton', '₹5,750', 'Delhi', '↑ 4%'],
            ['Cotton', '₹5,900', 'Bangalore', '↑ 8%'],
            ['Cotton', '₹5,850', 'Ahmedabad', '↑ 6%'],
            ['Cotton', '₹5,780', 'Rajkot', '↑ 5%'],
            ['Cotton', '₹5,920', 'Nagpur', '↑ 9%'],
            ['Cotton', '₹5,820', 'Surat', '↑ 7%'],
            ['Cotton', '₹5,880', 'Guntur', '↑ 8%'],
            ['Cotton', '₹5,760', 'Yavatmal', '↑ 6%'],
            ['Cotton', '₹5,840', 'Adilabad', '↑ 7%']
        ],
        sugarcane: [
            ['Sugarcane', '₹3,200', 'Mumbai', '↑ 2%'],
            ['Sugarcane', '₹3,150', 'Lucknow', '↓ 1%'],
            ['Sugarcane', '₹3,250', 'Pune', '↑ 4%'],
            ['Sugarcane', '₹3,180', 'Kolkata', '↑ 3%'],
            ['Sugarcane', '₹3,220', 'Meerut', '↑ 3%'],
            ['Sugarcane', '₹3,170', 'Muzaffarnagar', '↑ 2%'],
            ['Sugarcane', '₹3,240', 'Belgaum', '↑ 4%'],
            ['Sugarcane', '₹3,190', 'Mandya', '↑ 3%'],
            ['Sugarcane', '₹3,210', 'Sangli', '↑ 3%'],
            ['Sugarcane', '₹3,160', 'Gorakhpur', '↑ 1%']
        ],
        tomato: [
            ['Tomato', '₹1,500', 'Mumbai', '↑ 15%'],
            ['Tomato', '₹1,200', 'Delhi', '↓ 5%'],
            ['Tomato', '₹1,800', 'Bangalore', '↑ 20%'],
            ['Tomato', '₹1,350', 'Hyderabad', '↑ 8%'],
            ['Tomato', '₹1,600', 'Chennai', '↑ 12%'],
            ['Tomato', '₹1,400', 'Pune', '↑ 10%'],
            ['Tomato', '₹1,250', 'Nashik', '↑ 5%'],
            ['Tomato', '₹1,700', 'Kolar', '↑ 18%'],
            ['Tomato', '₹1,450', 'Madurai', '↑ 11%'],
            ['Tomato', '₹1,550', 'Coimbatore', '↑ 14%']
        ],
        onion: [
            ['Onion', '₹2,500', 'Mumbai', '↑ 12%'],
            ['Onion', '₹2,300', 'Delhi', '↑ 8%'],
            ['Onion', '₹2,600', 'Bangalore', '↑ 15%'],
            ['Onion', '₹2,400', 'Nashik', '↑ 10%'],
            ['Onion', '₹2,450', 'Pune', '↑ 11%'],
            ['Onion', '₹2,350', 'Indore', '↑ 9%'],
            ['Onion', '₹2,550', 'Hyderabad', '↑ 13%'],
            ['Onion', '₹2,480', 'Lasalgaon', '↑ 12%'],
            ['Onion', '₹2,420', 'Pimpalgaon', '↑ 10%'],
            ['Onion', '₹2,380', 'Ahmednagar', '↑ 9%']
        ],
        potato: [
            ['Potato', '₹1,800', 'Mumbai', '↓ 3%'],
            ['Potato', '₹1,650', 'Delhi', '↓ 5%'],
            ['Potato', '₹1,900', 'Bangalore', '↑ 2%'],
            ['Potato', '₹1,750', 'Agra', '↓ 2%'],
            ['Potato', '₹1,700', 'Kanpur', '↓ 4%'],
            ['Potato', '₹1,850', 'Pune', '↑ 1%'],
            ['Potato', '₹1,680', 'Meerut', '↓ 3%'],
            ['Potato', '₹1,780', 'Indore', '↓ 1%'],
            ['Potato', '₹1,720', 'Jalandhar', '↓ 4%'],
            ['Potato', '₹1,820', 'Nashik', '↑ 1%']
        ],
        maize: [
            ['Maize', '₹1,750', 'Mumbai', '↑ 4%'],
            ['Maize', '₹1,700', 'Delhi', '↑ 2%'],
            ['Maize', '₹1,800', 'Bangalore', '↑ 6%'],
            ['Maize', '₹1,720', 'Indore', '↑ 3%'],
            ['Maize', '₹1,780', 'Hyderabad', '↑ 5%'],
            ['Maize', '₹1,730', 'Davangere', '↑ 4%'],
            ['Maize', '₹1,760', 'Nizamabad', '↑ 5%'],
            ['Maize', '₹1,710', 'Karimnagar', '↑ 3%'],
            ['Maize', '₹1,790', 'Gulbarga', '↑ 6%'],
            ['Maize', '₹1,740', 'Bijapur', '↑ 4%']
        ],
        soybean: [
            ['Soybean', '₹4,200', 'Mumbai', '↑ 5%'],
            ['Soybean', '₹4,100', 'Indore', '↑ 3%'],
            ['Soybean', '₹4,300', 'Nagpur', '↑ 7%'],
            ['Soybean', '₹4,150', 'Bhopal', '↑ 4%'],
            ['Soybean', '₹4,250', 'Ujjain', '↑ 6%'],
            ['Soybean', '₹4,180', 'Dewas', '↑ 5%'],
            ['Soybean', '₹4,220', 'Ratlam', '↑ 6%'],
            ['Soybean', '₹4,120', 'Mandsaur', '↑ 4%'],
            ['Soybean', '₹4,280', 'Akola', '↑ 7%'],
            ['Soybean', '₹4,160', 'Khandwa', '↑ 5%']
        ],
        groundnut: [
            ['Groundnut', '₹5,500', 'Mumbai', '↑ 6%'],
            ['Groundnut', '₹5,400', 'Rajkot', '↑ 4%'],
            ['Groundnut', '₹5,600', 'Bangalore', '↑ 8%'],
            ['Groundnut', '₹5,450', 'Ahmedabad', '↑ 5%'],
            ['Groundnut', '₹5,550', 'Junagadh', '↑ 7%'],
            ['Groundnut', '₹5,480', 'Jamnagar', '↑ 6%'],
            ['Groundnut', '₹5,520', 'Gondal', '↑ 7%'],
            ['Groundnut', '₹5,420', 'Amreli', '↑ 5%'],
            ['Groundnut', '₹5,580', 'Anantapur', '↑ 8%'],
            ['Groundnut', '₹5,460', 'Kurnool', '↑ 6%']
        ],
        chickpea: [
            ['Chickpea', '₹5,200', 'Mumbai', '↑ 3%'],
            ['Chickpea', '₹5,100', 'Delhi', '↑ 2%'],
            ['Chickpea', '₹5,300', 'Jaipur', '↑ 5%'],
            ['Chickpea', '₹5,150', 'Indore', '↑ 4%'],
            ['Chickpea', '₹5,250', 'Bhopal', '↑ 5%'],
            ['Chickpea', '₹5,180', 'Ujjain', '↑ 4%'],
            ['Chickpea', '₹5,220', 'Bikaner', '↑ 4%'],
            ['Chickpea', '₹5,120', 'Kota', '↑ 3%'],
            ['Chickpea', '₹5,280', 'Latur', '↑ 5%'],
            ['Chickpea', '₹5,160', 'Gulbarga', '↑ 4%']
        ],
        mustard: [
            ['Mustard', '₹6,500', 'Mumbai', '↑ 4%'],
            ['Mustard', '₹6,400', 'Delhi', '↑ 3%'],
            ['Mustard', '₹6,600', 'Jaipur', '↑ 6%'],
            ['Mustard', '₹6,450', 'Alwar', '↑ 5%'],
            ['Mustard', '₹6,550', 'Bharatpur', '↑ 6%'],
            ['Mustard', '₹6,480', 'Bikaner', '↑ 5%'],
            ['Mustard', '₹6,520', 'Sri Ganganagar', '↑ 5%'],
            ['Mustard', '₹6,420', 'Hanumangarh', '↑ 4%'],
            ['Mustard', '₹6,580', 'Hisar', '↑ 6%'],
            ['Mustard', '₹6,460', 'Sirsa', '↑ 5%']
        ],
        turmeric: [
            ['Turmeric', '₹8,500', 'Mumbai', '↑ 8%'],
            ['Turmeric', '₹8,300', 'Erode', '↑ 6%'],
            ['Turmeric', '₹8,700', 'Sangli', '↑ 10%'],
            ['Turmeric', '₹8,400', 'Nizamabad', '↑ 7%'],
            ['Turmeric', '₹8,600', 'Duggirala', '↑ 9%'],
            ['Turmeric', '₹8,350', 'Salem', '↑ 7%'],
            ['Turmeric', '₹8,650', 'Nanded', '↑ 9%'],
            ['Turmeric', '₹8,450', 'Warangal', '↑ 8%'],
            ['Turmeric', '₹8,550', 'Basmat', '↑ 8%'],
            ['Turmeric', '₹8,380', 'Coimbatore', '↑ 7%']
        ],
        chilli: [
            ['Chilli', '₹12,000', 'Mumbai', '↑ 15%'],
            ['Chilli', '₹11,500', 'Guntur', '↑ 12%'],
            ['Chilli', '₹12,500', 'Warangal', '↑ 18%'],
            ['Chilli', '₹11,800', 'Khammam', '↑ 14%'],
            ['Chilli', '₹12,200', 'Byadgi', '↑ 16%'],
            ['Chilli', '₹11,700', 'Sangli', '↑ 13%'],
            ['Chilli', '₹12,300', 'Munirabad', '↑ 17%'],
            ['Chilli', '₹11,900', 'Bellary', '↑ 15%'],
            ['Chilli', '₹12,400', 'Raichur', '↑ 17%'],
            ['Chilli', '₹11,600', 'Solapur', '↑ 13%']
        ],
        banana: [
            ['Banana', '₹2,000', 'Mumbai', '↑ 5%'],
            ['Banana', '₹1,800', 'Chennai', '↑ 3%'],
            ['Banana', '₹2,100', 'Bangalore', '↑ 7%'],
            ['Banana', '₹1,900', 'Trichy', '↑ 4%'],
            ['Banana', '₹2,050', 'Theni', '↑ 6%'],
            ['Banana', '₹1,850', 'Madurai', '↑ 4%'],
            ['Banana', '₹2,150', 'Jalgaon', '↑ 8%'],
            ['Banana', '₹1,950', 'Coimbatore', '↑ 5%'],
            ['Banana', '₹2,080', 'Nashik', '↑ 6%'],
            ['Banana', '₹1,880', 'Salem', '↑ 4%']
        ],
        mango: [
            ['Mango', '₹4,500', 'Mumbai', '↑ 10%'],
            ['Mango', '₹4,200', 'Lucknow', '↑ 8%'],
            ['Mango', '₹4,800', 'Bangalore', '↑ 12%'],
            ['Mango', '₹4,300', 'Hyderabad', '↑ 9%'],
            ['Mango', '₹4,600', 'Ratnagiri', '↑ 11%'],
            ['Mango', '₹4,400', 'Krishnagiri', '↑ 10%'],
            ['Mango', '₹4,700', 'Chittoor', '↑ 12%'],
            ['Mango', '₹4,350', 'Malihabad', '↑ 9%'],
            ['Mango', '₹4,550', 'Devgad', '↑ 11%'],
            ['Mango', '₹4,250', 'Salem', '↑ 8%']
        ],
        grapes: [
            ['Grapes', '₹6,000', 'Mumbai', '↑ 6%'],
            ['Grapes', '₹5,800', 'Nashik', '↑ 5%'],
            ['Grapes', '₹6,200', 'Pune', '↑ 8%'],
            ['Grapes', '₹5,900', 'Sangli', '↑ 7%'],
            ['Grapes', '₹6,100', 'Solapur', '↑ 7%'],
            ['Grapes', '₹5,850', 'Satara', '↑ 6%'],
            ['Grapes', '₹6,150', 'Osmanabad', '↑ 8%'],
            ['Grapes', '₹5,950', 'Latur', '↑ 7%'],
            ['Grapes', '₹6,050', 'Ahmednagar', '↑ 7%'],
            ['Grapes', '₹5,880', 'Beed', '↑ 6%']
        ],
        coconut: [
            ['Coconut', '₹3,500', 'Mumbai', '↑ 4%'],
            ['Coconut', '₹3,200', 'Chennai', '↑ 2%'],
            ['Coconut', '₹3,700', 'Bangalore', '↑ 6%'],
            ['Coconut', '₹3,300', 'Coimbatore', '↑ 3%'],
            ['Coconut', '₹3,600', 'Pollachi', '↑ 5%'],
            ['Coconut', '₹3,250', 'Erode', '↑ 3%'],
            ['Coconut', '₹3,650', 'Tiptur', '↑ 6%'],
            ['Coconut', '₹3,350', 'Kozhikode', '↑ 4%'],
            ['Coconut', '₹3,550', 'Kasaragod', '↑ 5%'],
            ['Coconut', '₹3,280', 'Kochi', '↑ 3%']
        ],
        tea: [
            ['Tea', '₹350', 'Mumbai', '↑ 3%'],
            ['Tea', '₹320', 'Kolkata', '↑ 2%'],
            ['Tea', '₹380', 'Guwahati', '↑ 5%'],
            ['Tea', '₹340', 'Siliguri', '↑ 4%'],
            ['Tea', '₹370', 'Jorhat', '↑ 5%'],
            ['Tea', '₹330', 'Dibrugarh', '↑ 3%'],
            ['Tea', '₹360', 'Tezpur', '↑ 4%'],
            ['Tea', '₹325', 'Coimbatore', '↑ 3%'],
            ['Tea', '₹375', 'Coonoor', '↑ 5%'],
            ['Tea', '₹345', 'Munnar', '↑ 4%']
        ],
        coffee: [
            ['Coffee', '₹8,500', 'Mumbai', '↑ 5%'],
            ['Coffee', '₹8,200', 'Bangalore', '↑ 3%'],
            ['Coffee', '₹8,800', 'Coorg', '↑ 7%'],
            ['Coffee', '₹8,400', 'Chikmagalur', '↑ 6%'],
            ['Coffee', '₹8,600', 'Hassan', '↑ 6%'],
            ['Coffee', '₹8,300', 'Wayanad', '↑ 4%'],
            ['Coffee', '₹8,700', 'Madikeri', '↑ 7%'],
            ['Coffee', '₹8,450', 'Sakleshpur', '↑ 6%'],
            ['Coffee', '₹8,550', 'Araku', '↑ 6%'],
            ['Coffee', '₹8,350', 'Yercaud', '↑ 5%']
        ]
    };
    
    const tbody = document.getElementById('marketTableBody');
    tbody.innerHTML = '';
    
    (data[crop] || data.rice).forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td><span class="${row[3].includes('↑') ? 'trend-up' : 'trend-down'}">${row[3]}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function calculateProfit() {
    const crop = document.getElementById('profitCrop').value.trim();
    const land = parseFloat(document.getElementById('landArea').value);
    const yield_ = parseFloat(document.getElementById('expectedYield').value);
    const price = parseFloat(document.getElementById('marketPrice').value);
    const costPerAcre = parseFloat(document.getElementById('costPerAcre').value) || 15000;
    
    console.log('Calculate clicked - Inputs:', { crop, land, yield_, price, costPerAcre });
    
    if (!crop) {
        alert('Please enter crop name');
        return;
    }
    
    if (!land || !yield_ || !price) {
        alert('Please fill all fields');
        return;
    }
    
    const production = land * yield_;
    const totalCost = land * costPerAcre;
    const revenue = production * price;
    const profit = revenue - totalCost;
    
    // Store current calculation for saving
    window.currentCalculation = {
        crop: crop,
        land: land,
        yield: yield_,
        price: price,
        costPerAcre: costPerAcre,
        production: production,
        totalCost: totalCost,
        revenue: revenue,
        profit: profit,
        date: new Date().toISOString()
    };
    
    console.log('Calculation stored:', window.currentCalculation);
    
    document.getElementById('totalProduction').textContent = production.toFixed(2) + ' Quintals';
    document.getElementById('totalCost').textContent = '₹' + totalCost.toLocaleString();
    document.getElementById('estimatedRevenue').textContent = '₹' + revenue.toLocaleString();
    document.getElementById('expectedProfit').textContent = '₹' + profit.toLocaleString();
    
    // Show result box with action buttons inside
    document.getElementById('profitResult').style.display = 'block';
    
    console.log('Results displayed, ready to save');
}

function showCalcTab(tab) {
    document.querySelectorAll('.calc-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tab + 'Calc').style.display = 'block';
    event.target.classList.add('active');
}

function calculateSeed() {
    const crop = document.getElementById('seedCrop').value.trim();
    const land = parseFloat(document.getElementById('seedLand').value);
    const rate = parseFloat(document.getElementById('seedRate').value);
    
    if (!crop || !land || !rate) {
        alert('Please fill all fields');
        return;
    }
    
    const quantity = land * rate;
    
    // Store current calculation
    window.currentSeedCalculation = {
        type: 'seed',
        crop: crop,
        land: land,
        rate: rate,
        quantity: quantity,
        date: new Date().toISOString()
    };
    
    document.getElementById('seedQuantity').textContent = 'Required Seed: ' + quantity + ' kg for ' + crop;
    document.getElementById('seedResult').style.display = 'block';
}

function calculateFertilizer() {
    const crop = document.getElementById('fertCrop').value.trim();
    const land = parseFloat(document.getElementById('fertLand').value);
    const rate = parseFloat(document.getElementById('fertType').value);
    const fertType = document.getElementById('fertType').selectedOptions[0].text;
    
    if (!crop || !land || !rate) {
        alert('Please fill all fields');
        return;
    }
    
    const quantity = land * rate;
    
    // Store current calculation
    window.currentFertilizerCalculation = {
        type: 'fertilizer',
        crop: crop,
        land: land,
        fertilizerType: fertType,
        rate: rate,
        quantity: quantity,
        date: new Date().toISOString()
    };
    
    document.getElementById('fertQuantity').textContent = 'Required Fertilizer: ' + quantity + ' kg of ' + fertType + ' for ' + crop;
    document.getElementById('fertResult').style.display = 'block';
}

function calculateWater() {
    const crop = document.getElementById('waterCropName').value.trim();
    const land = parseFloat(document.getElementById('waterLand').value);
    const rate = parseFloat(document.getElementById('waterCrop').value);
    const cropType = document.getElementById('waterCrop').selectedOptions[0].text;
    
    if (!crop || !land || !rate) {
        alert('Please fill all fields');
        return;
    }
    
    const quantity = land * rate;
    
    // Store current calculation
    window.currentWaterCalculation = {
        type: 'water',
        crop: crop,
        land: land,
        cropType: cropType,
        rate: rate,
        quantity: quantity,
        date: new Date().toISOString()
    };
    
    document.getElementById('waterQuantity').textContent = 'Daily Water Requirement: ' + quantity.toLocaleString() + ' Liters for ' + crop;
    document.getElementById('waterResult').style.display = 'block';
}


// Login/Logout functionality
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear user session
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('username');
        
        // Redirect to login page
        window.location.href = 'index.html';
    }
}

// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const username = localStorage.getItem('username');
    
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    console.log('Checking login status:', { isLoggedIn, username });
    
    if (isLoggedIn === 'true' && username) {
        // Show logout button, hide login button
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-flex';
            logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout (${username})`;
        }
        console.log('User is logged in - showing logout button');
    } else {
        // Show login button, hide logout button
        if (loginBtn) loginBtn.style.display = 'inline-flex';
        if (logoutBtn) logoutBtn.style.display = 'none';
        console.log('User is not logged in - showing login button');
    }
}

// Check login status on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkLoginStatus);
} else {
    checkLoginStatus();
}

// Seeds Modal Functions
function showSeedsModal() {
    const modal = document.getElementById('seedsModal');
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeSeedsModal() {
    const modal = document.getElementById('seedsModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Fertilizers Modal Functions
function showFertilizersModal() {
    const modal = document.getElementById('fertilizersModal');
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeFertilizersModal() {
    const modal = document.getElementById('fertilizersModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Pesticides Modal Functions
function showPesticidesModal() {
    const modal = document.getElementById('pesticidesModal');
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closePesticidesModal() {
    const modal = document.getElementById('pesticidesModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Irrigation Modal Functions
function showIrrigationModal() {
    const modal = document.getElementById('irrigationModal');
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeIrrigationModal() {
    const modal = document.getElementById('irrigationModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Machinery Modal Functions
function showMachineryModal() {
    const modal = document.getElementById('machineryModal');
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeMachineryModal() {
    const modal = document.getElementById('machineryModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const seedsModal = document.getElementById('seedsModal');
    const fertilizersModal = document.getElementById('fertilizersModal');
    const pesticidesModal = document.getElementById('pesticidesModal');
    const irrigationModal = document.getElementById('irrigationModal');
    const machineryModal = document.getElementById('machineryModal');
    
    if (event.target == seedsModal) {
        closeSeedsModal();
    }
    if (event.target == fertilizersModal) {
        closeFertilizersModal();
    }
    if (event.target == pesticidesModal) {
        closePesticidesModal();
    }
    if (event.target == irrigationModal) {
        closeIrrigationModal();
    }
    if (event.target == machineryModal) {
        closeMachineryModal();
    }
}

