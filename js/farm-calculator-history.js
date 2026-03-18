// Farm Calculator History Management (Seed, Fertilizer, Water)

// Save farm calculation to localStorage
function saveFarmCalculation(type) {
    let calculation;
    
    if (type === 'seed') {
        calculation = window.currentSeedCalculation;
    } else if (type === 'fertilizer') {
        calculation = window.currentFertilizerCalculation;
    } else if (type === 'water') {
        calculation = window.currentWaterCalculation;
    }
    
    if (!calculation) {
        alert('⚠️ Please calculate first before saving!');
        return;
    }
    
    // Get existing history for this type
    let history = JSON.parse(localStorage.getItem(`farmHistory_${type}`) || '[]');
    
    // Add current calculation
    const savedCalculation = {
        ...calculation,
        id: Date.now(),
        savedDate: new Date().toLocaleString()
    };
    
    history.unshift(savedCalculation);
    
    // Save to localStorage
    localStorage.setItem(`farmHistory_${type}`, JSON.stringify(history));
    
    alert('✅ Calculation saved successfully!');
}

// Show farm history modal
function showFarmHistory(type) {
    const history = JSON.parse(localStorage.getItem(`farmHistory_${type}`) || '[]');
    const modal = document.getElementById('farmHistoryModal');
    const content = document.getElementById('farmHistoryContent');
    const title = document.getElementById('farmHistoryTitle');
    
    // Store current type for export/clear functions
    window.currentHistoryType = type;
    
    // Update title
    const titles = {
        'seed': 'Seed Calculator History',
        'fertilizer': 'Fertilizer Calculator History',
        'water': 'Water Calculator History'
    };
    title.textContent = titles[type];
    
    if (history.length === 0) {
        content.innerHTML = `
            <div class="no-history">
                <i class="fas fa-history"></i>
                <h3>No History Found</h3>
                <p>Your saved ${type} calculations will appear here</p>
            </div>
        `;
    } else {
        let tableHTML = `
            <div style="margin-bottom: 15px; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                <strong>Total Saved Calculations: ${history.length}</strong>
            </div>
        `;
        
        if (type === 'seed') {
            tableHTML += `
                <table class="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Crop</th>
                            <th>Land (Acres)</th>
                            <th>Seed Rate (kg/Acre)</th>
                            <th>Required Seed (kg)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            history.forEach((item) => {
                tableHTML += `
                    <tr>
                        <td>${item.savedDate}</td>
                        <td><strong>${item.crop}</strong></td>
                        <td>${item.land}</td>
                        <td>${item.rate}</td>
                        <td>${item.quantity}</td>
                        <td><button class="delete-btn" onclick="deleteFarmHistory('${type}', ${item.id})">Delete</button></td>
                    </tr>
                `;
            });
        } else if (type === 'fertilizer') {
            tableHTML += `
                <table class="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Crop</th>
                            <th>Land (Acres)</th>
                            <th>Fertilizer Type</th>
                            <th>Required (kg)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            history.forEach((item) => {
                tableHTML += `
                    <tr>
                        <td>${item.savedDate}</td>
                        <td><strong>${item.crop}</strong></td>
                        <td>${item.land}</td>
                        <td>${item.fertilizerType}</td>
                        <td>${item.quantity}</td>
                        <td><button class="delete-btn" onclick="deleteFarmHistory('${type}', ${item.id})">Delete</button></td>
                    </tr>
                `;
            });
        } else if (type === 'water') {
            tableHTML += `
                <table class="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Crop</th>
                            <th>Land (Acres)</th>
                            <th>Crop Type</th>
                            <th>Daily Water (Liters)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
            `;
            
            history.forEach((item) => {
                tableHTML += `
                    <tr>
                        <td>${item.savedDate}</td>
                        <td><strong>${item.crop}</strong></td>
                        <td>${item.land}</td>
                        <td>${item.cropType}</td>
                        <td>${item.quantity.toLocaleString()}</td>
                        <td><button class="delete-btn" onclick="deleteFarmHistory('${type}', ${item.id})">Delete</button></td>
                    </tr>
                `;
            });
        }
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        content.innerHTML = tableHTML;
    }
    
    modal.classList.add('show');
    modal.style.display = 'block';
}

// Close farm history modal
function closeFarmHistory() {
    const modal = document.getElementById('farmHistoryModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Delete single farm history item
function deleteFarmHistory(type, id) {
    if (confirm('Are you sure you want to delete this record?')) {
        let history = JSON.parse(localStorage.getItem(`farmHistory_${type}`) || '[]');
        history = history.filter(item => item.id !== id);
        localStorage.setItem(`farmHistory_${type}`, JSON.stringify(history));
        showFarmHistory(type); // Refresh the display
    }
}

// Clear all farm history for current type
function clearFarmHistory() {
    const type = window.currentHistoryType;
    if (confirm('Are you sure you want to clear all history? This cannot be undone.')) {
        localStorage.removeItem(`farmHistory_${type}`);
        showFarmHistory(type); // Refresh the display
        alert('History cleared successfully!');
    }
}

// Export farm history to CSV
function exportFarmHistory() {
    const type = window.currentHistoryType;
    const history = JSON.parse(localStorage.getItem(`farmHistory_${type}`) || '[]');
    
    if (history.length === 0) {
        alert('No history to export');
        return;
    }
    
    let csv = '';
    
    if (type === 'seed') {
        csv = 'Date,Crop,Land (Acres),Seed Rate (kg/Acre),Required Seed (kg)\n';
        history.forEach(item => {
            csv += `"${item.savedDate}","${item.crop}",${item.land},${item.rate},${item.quantity}\n`;
        });
    } else if (type === 'fertilizer') {
        csv = 'Date,Crop,Land (Acres),Fertilizer Type,Required (kg)\n';
        history.forEach(item => {
            csv += `"${item.savedDate}","${item.crop}",${item.land},"${item.fertilizerType}",${item.quantity}\n`;
        });
    } else if (type === 'water') {
        csv = 'Date,Crop,Land (Acres),Crop Type,Daily Water (Liters)\n';
        history.forEach(item => {
            csv += `"${item.savedDate}","${item.crop}",${item.land},"${item.cropType}",${item.quantity}\n`;
        });
    }
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-calculator-history-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('History exported successfully!');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('farmHistoryModal');
    if (event.target === modal) {
        closeFarmHistory();
    }
}

// Ensure modal is hidden on page load
window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('farmHistoryModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
});
