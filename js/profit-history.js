// Profit history is now handled inside main.js via backend API
// This file kept for backward compatibility

// Export history to CSV
function exportHistory() {
    const history = JSON.parse(localStorage.getItem('profitHistory') || '[]');

    if (history.length === 0) {
        alert('No history to export');
        return;
    }

    let csv = 'Date,Crop,Land (Acres),Yield (Q/A),Price (₹/Q),Revenue (₹),Profit (₹)\n';
    history.forEach(item => {
        csv += `"${item.savedDate}","${item.crop}",${item.land},${item.yield},${item.price},${item.revenue},${item.profit}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `profit-history-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Ensure modal hidden on load
window.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('historyModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
});
