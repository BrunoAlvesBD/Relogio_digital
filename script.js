

// setInterval é  função tempo de JS que pega as horas, minutos e segundos.
const relogio = setInterval(function time() {
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    let dateToday = new Date();
    let hou = dateToday.getHours();
    let minut = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
//condicional para acrecentar o 0(zero) antes dos numeros
    if (hou < 10) hou = '0' + hou;

    if (minut < 10) minut = '0' + minut;

    if (sec < 10) sec = '0' + sec;

    horas.textContent = hou;
    minutos.textContent = minut;
    segundos.textContent = sec;
})