function relogio(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let horas = document.getElementById("horas").innerHTML = h < 10 ? "0" + h:h;
    let minutos = document.getElementById("minutos").innerHTML = m < 10 ? "0" + m:m;
    let segundos = document.getElementById("segundos").innerHTML = s < 10 ? "0" + s:s;
}

let intervalo = setInterval(relogio, 1000);
