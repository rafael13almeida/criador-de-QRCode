function gerar() {
    let inputUsuario = document.querySelector("textarea").value;
    let googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=';
    let conteudo = googleChartApi + inputUsuario;
    document.querySelector("#qrcode").src = conteudo;
}