const API_URL = 'http://localhost:5000/api';

// ─── Navbar ───────────────────────────────────────────────────
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// ─── Market Prices (from backend) ────────────────────────────
async function updateMarketPrices() {
    const crop = document.getElementById('cropSelect').value;
    const tbody = document.getElementById('marketTableBody');

    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:20px;">
        <i class="fas fa-spinner fa-spin"></i> Loading prices...
    </td></tr>`;

    try {
        const res = await fetch(`${API_URL}/market?crop=${crop}`);
        const data = await res.json();

        if (!res.ok || !data.prices || data.prices.length === 0) {
            showFallbackPrices(crop);
            return;
        }

        tbody.innerHTML = '';
        data.prices.forEach(row => {
            const trendValue = parseFloat(row.trend);
            const trendDisplay = trendValue >= 0
                ? `<span class="trend-up">↑ ${trendValue}%</span>`
                : `<span class="trend-down">↓ ${Math.abs(trendValue)}%</span>`;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.crop}</td>
                <td>₹${parseFloat(row.price).toLocaleString()}</td>
                <td>${row.location}</td>
                <td>${trendDisplay}</td>
            `;
            tbody.appendChild(tr);
        });

    } catch (error) {
        console.error('Market prices error:', error);
        showFallbackPrices(crop);
    }
}

// Fallback static prices if backend has no data yet
function showFallbackPrices(crop) {
    const fallback = {
        rice: [['Rice','₹2,100','Mumbai','↑ 5%'],['Rice','₹2,050','Delhi','↓ 2%'],['Rice','₹2,150','Bangalore','↑ 3%']],
        wheat: [['Wheat','₹1,950','Mumbai','↑ 3%'],['Wheat','₹1,900','Delhi','↓ 1%'],['Wheat','₹2,000','Bangalore','↑ 5%']],
        cotton: [['Cotton','₹5,800','Mumbai','↑ 7%'],['Cotton','₹5,750','Delhi','↑ 4%'],['Cotton','₹5,900','Bangalore','↑ 8%']],
        tomato: [['Tomato','₹1,500','Mumbai','↑ 15%'],['Tomato','₹1,200','Delhi','↓ 5%'],['Tomato','₹1,800','Bangalore','↑ 20%']],
        onion: [['Onion','₹2,500','Mumbai','↑ 12%'],['Onion','₹2,300','Delhi','↑ 8%'],['Onion','₹2,600','Bangalore','↑ 15%']],
        potato: [['Potato','₹1,800','Mumbai','↓ 3%'],['Potato','₹1,650','Delhi','↓ 5%'],['Potato','₹1,900','Bangalore','↑ 2%']],
        sugarcane: [['Sugarcane','₹3,200','Mumbai','↑ 2%'],['Sugarcane','₹3,150','Lucknow','↓ 1%'],['Sugarcane','₹3,250','Pune','↑ 4%']],
        maize: [['Maize','₹1,750','Mumbai','↑ 4%'],['Maize','₹1,700','Delhi','↑ 2%'],['Maize','₹1,800','Bangalore','↑ 6%']],
        soybean: [['Soybean','₹4,200','Mumbai','↑ 5%'],['Soybean','₹4,100','Indore','↑ 3%'],['Soybean','₹4,300','Nagpur','↑ 7%']],
        groundnut: [['Groundnut','₹5,500','Mumbai','↑ 6%'],['Groundnut','₹5,400','Rajkot','↑ 4%'],['Groundnut','₹5,600','Bangalore','↑ 8%']],
        chickpea: [['Chickpea','₹5,200','Mumbai','↑ 3%'],['Chickpea','₹5,100','Delhi','↑ 2%'],['Chickpea','₹5,300','Jaipur','↑ 5%']],
        mustard: [['Mustard','₹6,500','Mumbai','↑ 4%'],['Mustard','₹6,400','Delhi','↑ 3%'],['Mustard','₹6,600','Jaipur','↑ 6%']],
        turmeric: [['Turmeric','₹8,500','Mumbai','↑ 8%'],['Turmeric','₹8,300','Erode','↑ 6%'],['Turmeric','₹8,700','Sangli','↑ 10%']],
        chilli: [['Chilli','₹12,000','Mumbai','↑ 15%'],['Chilli','₹11,500','Guntur','↑ 12%'],['Chilli','₹12,500','Warangal','↑ 18%']],
        banana: [['Banana','₹2,000','Mumbai','↑ 5%'],['Banana','₹1,800','Chennai','↑ 3%'],['Banana','₹2,100','Bangalore','↑ 7%']],
        mango: [['Mango','₹4,500','Mumbai','↑ 10%'],['Mango','₹4,200','Lucknow','↑ 8%'],['Mango','₹4,800','Bangalore','↑ 12%']],
        grapes: [['Grapes','₹6,000','Mumbai','↑ 6%'],['Grapes','₹5,800','Nashik','↑ 5%'],['Grapes','₹6,200','Pune','↑ 8%']],
        coconut: [['Coconut','₹3,500','Mumbai','↑ 4%'],['Coconut','₹3,200','Chennai','↑ 2%'],['Coconut','₹3,700','Bangalore','↑ 6%']],
        tea: [['Tea','₹350','Mumbai','↑ 3%'],['Tea','₹320','Kolkata','↑ 2%'],['Tea','₹380','Guwahati','↑ 5%']],
        coffee: [['Coffee','₹8,500','Mumbai','↑ 5%'],['Coffee','₹8,200','Bangalore','↑ 3%'],['Coffee','₹8,800','Coorg','↑ 7%']]
    };

    const tbody = document.getElementById('marketTableBody');
    tbody.innerHTML = '';
    const rows = fallback[crop] || fallback.rice;

    rows.forEach(row => {
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

// ─── Profit Calculator (saves to backend) ────────────────────
async function calculateProfit() {
    const crop = document.getElementById('profitCrop').value.trim();
    const land = parseFloat(document.getElementById('landArea').value);
    const yield_ = parseFloat(document.getElementById('expectedYield').value);
    const price = parseFloat(document.getElementById('marketPrice').value);
    const costPerAcre = parseFloat(document.getElementById('costPerAcre').value) || 15000;

    if (!crop) { alert('Please enter crop name'); return; }
    if (!land || !yield_ || !price) { alert('Please fill all fields'); return; }

    const production = land * yield_;
    const totalCost = land * costPerAcre;
    const revenue = production * price;
    const profit = revenue - totalCost;

    // Store for saving
    window.currentCalculation = { crop, land, yield: yield_, price, costPerAcre,
        production, totalCost, revenue, profit, date: new Date().toISOString() };

    document.getElementById('totalProduction').textContent = production.toFixed(2) + ' Quintals';
    document.getElementById('totalCost').textContent = '₹' + totalCost.toLocaleString();
    document.getElementById('estimatedRevenue').textContent = '₹' + revenue.toLocaleString();
    document.getElementById('expectedProfit').textContent = '₹' + profit.toLocaleString();
    document.getElementById('profitResult').style.display = 'block';
}

// ─── Save Profit to Backend ───────────────────────────────────
async function saveCalculation() {
    if (!window.currentCalculation) {
        alert('Please calculate first before saving!');
        return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        alert('Please login to save calculations.');
        window.location.href = 'index.html';
        return;
    }

    const c = window.currentCalculation;
    const saveBtn = document.getElementById('saveBtn');
    saveBtn.textContent = 'Saving...';
    saveBtn.disabled = true;

    try {
        const res = await fetch(`${API_URL}/profit/calculate`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                crop_name: c.crop,
                land_area: c.land,
                expected_yield: c.yield,
                market_price: c.price,
                cost_per_acre: c.costPerAcre
            })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || 'Failed to save.');
            saveBtn.textContent = '💾 Save Details';
            saveBtn.disabled = false;
            return;
        }

        saveBtn.textContent = '✓ Saved!';
        saveBtn.style.background = '#28a745';
        setTimeout(() => {
            saveBtn.textContent = '💾 Save Details';
            saveBtn.style.background = '';
            saveBtn.disabled = false;
        }, 2000);

    } catch (error) {
        // Fallback to localStorage if backend unavailable
        let history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
        history.unshift({ ...c, id: Date.now(), savedDate: new Date().toLocaleString() });
        localStorage.setItem('profitHistory', JSON.stringify(history));
        alert('Saved locally (backend unavailable).');
        saveBtn.textContent = '💾 Save Details';
        saveBtn.disabled = false;
    }
}

// ─── View Profit History from Backend ────────────────────────
async function showHistory() {
    const token = localStorage.getItem('token');
    const modal = document.getElementById('historyModal');
    const content = document.getElementById('historyContent');

    if (!token) {
        // Show localStorage history if not logged in
        const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
        renderHistoryTable(content, history);
        modal.classList.add('show');
        modal.style.display = 'block';
        return;
    }

    content.innerHTML = '<p style="text-align:center;padding:20px;"><i class="fas fa-spinner fa-spin"></i> Loading...</p>';
    modal.classList.add('show');
    modal.style.display = 'block';

    try {
        const res = await fetch(`${API_URL}/profit/history`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();

        if (!res.ok) {
            content.innerHTML = '<p style="text-align:center;color:red;">Failed to load history.</p>';
            return;
        }

        renderHistoryTable(content, data.history, true);

    } catch (error) {
        // Fallback to localStorage
        const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
        renderHistoryTable(content, history);
    }
}

function renderHistoryTable(content, history, fromDB = false) {
    if (history.length === 0) {
        content.innerHTML = `
            <div class="no-history">
                <i class="fas fa-history"></i>
                <h3>No History Found</h3>
                <p>Calculate and save your first profit calculation.</p>
            </div>`;
        return;
    }

    let html = `
        <div style="margin-bottom:15px;padding:10px;background:#e8f5e9;border-radius:5px;">
            <strong>Total Saved: ${history.length}</strong>
        </div>
        <table class="history-table">
            <thead>
                <tr>
                    <th>Date</th><th>Crop</th><th>Land (Acres)</th>
                    <th>Price (₹/Q)</th><th>Revenue (₹)</th><th>Profit (₹)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>`;

    history.forEach(item => {
        const profitClass = (item.expected_profit || item.profit) >= 0 ? 'trend-up' : 'trend-down';
        const profit = item.expected_profit || item.profit;
        const revenue = item.estimated_revenue || item.revenue;
        const date = item.calculation_date
            ? new Date(item.calculation_date).toLocaleDateString()
            : item.savedDate;

        html += `
            <tr>
                <td>${date}</td>
                <td><strong>${item.crop_name || item.crop}</strong></td>
                <td>${item.land_area || item.land}</td>
                <td>₹${parseFloat(item.market_price || item.price).toLocaleString()}</td>
                <td>₹${parseFloat(revenue).toLocaleString()}</td>
                <td class="${profitClass}">₹${parseFloat(profit).toLocaleString()}</td>
                <td><button class="delete-btn" onclick="deleteHistory(${item.id}, ${fromDB})">Delete</button></td>
            </tr>`;
    });

    html += '</tbody></table>';
    content.innerHTML = html;
}

async function deleteHistory(id, fromDB) {
    if (!confirm('Delete this record?')) return;

    if (fromDB) {
        const token = localStorage.getItem('token');
        try {
            await fetch(`${API_URL}/profit/history/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
        } catch (e) { console.error(e); }
    } else {
        let history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
        history = history.filter(item => item.id !== id);
        localStorage.setItem('profitHistory', JSON.stringify(history));
    }

    showHistory();
}

function closeHistory() {
    const modal = document.getElementById('historyModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// ─── Farm Calculator Tabs ─────────────────────────────────────
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
    if (!crop || !land || !rate) { alert('Please fill all fields'); return; }
    const quantity = land * rate;
    window.currentSeedCalculation = { type: 'seed', crop, land, rate, quantity, date: new Date().toISOString() };
    document.getElementById('seedQuantity').textContent = `Required Seed: ${quantity} kg for ${crop}`;
    document.getElementById('seedResult').style.display = 'block';
}

function calculateFertilizer() {
    const crop = document.getElementById('fertCrop').value.trim();
    const land = parseFloat(document.getElementById('fertLand').value);
    const rate = parseFloat(document.getElementById('fertType').value);
    const fertType = document.getElementById('fertType').selectedOptions[0].text;
    if (!crop || !land || !rate) { alert('Please fill all fields'); return; }
    const quantity = land * rate;
    window.currentFertilizerCalculation = { type: 'fertilizer', crop, land, fertilizerType: fertType, rate, quantity, date: new Date().toISOString() };
    document.getElementById('fertQuantity').textContent = `Required Fertilizer: ${quantity} kg of ${fertType} for ${crop}`;
    document.getElementById('fertResult').style.display = 'block';
}

function calculateWater() {
    const crop = document.getElementById('waterCropName').value.trim();
    const land = parseFloat(document.getElementById('waterLand').value);
    const rate = parseFloat(document.getElementById('waterCrop').value);
    const cropType = document.getElementById('waterCrop').selectedOptions[0].text;
    if (!crop || !land || !rate) { alert('Please fill all fields'); return; }
    const quantity = land * rate;
    window.currentWaterCalculation = { type: 'water', crop, land, cropType, rate, quantity, date: new Date().toISOString() };
    document.getElementById('waterQuantity').textContent = `Daily Water Requirement: ${quantity.toLocaleString()} Liters for ${crop}`;
    document.getElementById('waterResult').style.display = 'block';
}

// ─── Login/Logout ─────────────────────────────────────────────
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        window.location.href = 'index.html';
    }
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const username = localStorage.getItem('username');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (isLoggedIn === 'true' && username) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-flex';
            logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> Logout (${username})`;
        }
    } else {
        if (loginBtn) loginBtn.style.display = 'inline-flex';
        if (logoutBtn) logoutBtn.style.display = 'none';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkLoginStatus);
} else {
    checkLoginStatus();
}

// ─── Modal Functions ──────────────────────────────────────────
function showSeedsModal() { openModal('seedsModal'); }
function closeSeedsModal() { closeModal('seedsModal'); }
function showFertilizersModal() { openModal('fertilizersModal'); }
function closeFertilizersModal() { closeModal('fertilizersModal'); }
function showPesticidesModal() { openModal('pesticidesModal'); }
function closePesticidesModal() { closeModal('pesticidesModal'); }
function showIrrigationModal() { openModal('irrigationModal'); }
function closeIrrigationModal() { closeModal('irrigationModal'); }
function showMachineryModal() { openModal('machineryModal'); }
function closeMachineryModal() { closeModal('machineryModal'); }

function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('show');
    modal.style.display = 'block';
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('show');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    ['seedsModal','fertilizersModal','pesticidesModal','irrigationModal','machineryModal','historyModal'].forEach(id => {
        const modal = document.getElementById(id);
        if (modal && event.target === modal) closeModal(id);
    });
}

// Load market prices on page load
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('marketTableBody')) {
        updateMarketPrices();
    }
});
