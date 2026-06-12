function calcularAgua() {
    let area = parseFloat(document.getElementById("area").value);
    let consumo = parseFloat(document.getElementById("consumo").value);

    if (isNaN(area) || isNaN(consumo) || area <= 0 || consumo <= 0) {
        document.getElementById("resultado").innerHTML =
            "⚠️ Informe valores válidos.";
        return;
    }

    let total = area * consumo;

    document.getElementById("resultado").innerHTML =
        `💧 Consumo diário estimado: <br>
        <strong>${total.toLocaleString('pt-BR')} litros de água por dia</strong>`;
}