// Profit Calculator History Management

// Save calculation to localStorage
function saveCalculation() {
    console.log('Save button clicked');
    console.log('Current calculation:', window.currentCalculation);
    
    if (!window.currentCalculation) {
        alert('⚠️ Please calculate first before saving!\n\n1. Fill all fields\n2. Click Calculate button\n3. Then click Save Details');
        return;
    }
    
    // Get existing history
    let history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
    
    // Add current calculation
    const calculation = {
        ...window.currentCalculation,
        id: Date.now(),
        savedDate: new Date().toLocaleString()
    };
    
    history.unshift(calculation);
    
    // Save to localStorage
    localStorage.setItem('profitHistory', JSON.stringify(history));
    
    console.log('Saved to history:', calculation);
    console.log('Total history items:', history.length);
    
    alert('✅ Calculation saved successfully!\n\nClick "View History" to see all saved calculations.');
    
    // Update button text temporarily
    const saveBtn = document.getElementById('saveBtn');
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '✓ Saved';
    saveBtn.style.background = '#28a745';
    
    setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.background = '';
    }, 2000);
}

// Show history modal
function showHistory() {
    console.log('View History clicked');
    
    const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
    console.log('History items:', history.length);
    
    const modal = document.getElementById('historyModal');
    const content = document.getElementById('historyContent');
    
    if (history.length === 0) {
        content.innerHTML = `
            <div class="no-history">
                <i class="fas fa-history"></i>
                <h3>No History Found</h3>
                <p>Your saved calculations will appear here</p>
                <p style="color: #999; font-size: 0.9rem; margin-top: 10px;">
                    To save a calculation:<br>
                    1. Fill the form and click Calculate<br>
                    2. Click "Save Details" button<br>
                    3. Your calculation will appear here
                </p>
            </div>
        `;
    } else {
        let tableHTML = `
            <div style="margin-bottom: 15px; padding: 10px; background: #e8f5e9; border-radius: 5px;">
                <strong>Total Saved Calculations: ${history.length}</strong>
            </div>
            <table class="history-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Crop</th>
                        <th>Land (Acres)</th>
                        <th>Yield (Q/A)</th>
                        <th>Price (₹/Q)</th>
                        <th>Production (Q)</th>
                        <th>Cost (₹)</th>
                        <th>Revenue (₹)</th>
                        <th>Profit (₹)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        history.forEach((item, index) => {
            const profitClass = item.profit >= 0 ? 'trend-up' : 'trend-down';
            tableHTML += `
                <tr>
                    <td>${item.savedDate}</td>
                    <td><strong>${item.crop}</strong></td>
                    <td>${item.land}</td>
                    <td>${item.yield}</td>
                    <td>₹${item.price.toLocaleString()}</td>
                    <td>${item.production.toFixed(2)}</td>
                    <td>₹${item.totalCost.toLocaleString()}</td>
                    <td>₹${item.revenue.toLocaleString()}</td>
                    <td class="${profitClass}">₹${item.profit.toLocaleString()}</td>
                    <td><button class="delete-btn" onclick="deleteHistory(${item.id})">Delete</button></td>
                </tr>
            `;
        });
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        content.innerHTML = tableHTML;
    }
    
    modal.classList.add('show');
    modal.style.display = 'block';
}

// Close history modal
function closeHistory() {
    const modal = document.getElementById('historyModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
}

// Delete single history item
function deleteHistory(id) {
    if (confirm('Are you sure you want to delete this record?')) {
        let history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
        history = history.filter(item => item.id !== id);
        localStorage.setItem('profitHistory', JSON.stringify(history));
        showHistory(); // Refresh the display
    }
}

// Clear all history
function clearHistory() {
    if (confirm('Are you sure you want to clear all history? This cannot be undone.')) {
        localStorage.removeItem('profitHistory');
        showHistory(); // Refresh the display
        alert('History cleared successfully!');
    }
}

// Export history to CSV
function exportHistory() {
    const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
    
    if (history.length === 0) {
        alert('No history to export');
        return;
    }
    
    // Create CSV content
    let csv = 'Date,Crop,Land (Acres),Yield (Q/A),Price (₹/Q),Production (Q),Cost (₹),Revenue (₹),Profit (₹)\n';
    
    history.forEach(item => {
        csv += `"${item.savedDate}","${item.crop}",${item.land},${item.yield},${item.price},${item.production.toFixed(2)},${item.totalCost},${item.revenue},${item.profit}\n`;
    });
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `profit-history-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    alert('History exported successfully!');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('historyModal');
    if (event.target === modal) {
        closeHistory();
    }
}

// Load calculation into form
function loadCalculation(id) {
    const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');
    const item = history.find(h => h.id === id);
    
    if (item) {
        document.getElementById('profitCrop').value = item.crop;
        document.getElementById('landArea').value = item.land;
        document.getElementById('expectedYield').value = item.yield;
        document.getElementById('marketPrice').value = item.price;
        document.getElementById('costPerAcre').value = item.costPerAcre;
        
        closeHistory();
        calculateProfit();
    }
}


// No initialization needed - buttons are inside result box


// Ensure modal is hidden on page load
window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('historyModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
});
