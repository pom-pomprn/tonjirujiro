let totalSales = 0;

function calculateTotal() {
    const product300Count = parseInt(document.getElementById('product_300').value, 10);
    const product350Count = parseInt(document.getElementById('product_350').value, 10);
    const product400Count = parseInt(document.getElementById('product_400').value, 10);

    const totalAmount = (300 * product300Count) + (350 * product350Count) + (400 * product400Count);
    document.getElementById('total_amount').innerText = totalAmount;

    updateSales(totalAmount);

        // 個数を0にリセット
        document.getElementById('product_300').value = 0;
        document.getElementById('product_350').value = 0;
        document.getElementById('product_400').value = 0;
}

function updateSales(totalAmount) {
    totalSales += totalAmount;
    localStorage.setItem('totalSales', totalSales);
}

function showTotalSales() {
    const savedSales = localStorage.getItem('totalSales');
    if (savedSales !== null) {
        totalSales = parseInt(savedSales, 10);
    }
    document.getElementById('total_sales').innerText = totalSales;
}

// ページが読み込まれたときに売り上げ合計を表示
window.onload = function() {
    showTotalSales();
};
