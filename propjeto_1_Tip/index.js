function formatMoney(value) {
    value = value.toFixed(2);
    return '$' + value;
}

function update() {
    let bill = Number(document.getElementById("yourBill").value);
    let tipPercernt = document.getElementById("tipInput").value;
    let split = document.getElementById("splitInput").value;

    let tipValue = bill * (tipPercernt / 100);
    let billTotal = bill + tipValue;
    let billEach = billTotal / split;

    document.getElementById("tipPercent").innerHTML = tipPercernt + "%";
    document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
    document.getElementById("totalWithTip").innerHTML = formatMoney(billTotal);
    document.getElementById("splitValue").innerHtml = split;
    document.getElementById("billEach").innerHTML = formatMoney (billTotal / split);

}