const dia = window.document.querySelector('#dia')
const hora = window.document.querySelector('#hora')
const minuto = window.document.querySelector('#minuto')
const segundo = window.document.querySelector('#segundo')

const lancamento = '01 Dec 2024'

function countDown () {

    const dataLance = new Date (lancamento)
    const hoje = new Date ()

    const segTotal = (dataLance - hoje) / 1000

    const finalDias = Math.floor(segTotal / 60 / 60/ 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24; 
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = formatoTempo(finalDias)
    hora.innerHTML = formatoTempo(finalHoras)
    minuto.innerHTML = formatoTempo(finalMinutos)
    segundo.innerHTML = formatoTempo(finalSegundos)
}

function formatoTempo (tempo) {
    return tempo <10? `0${tempo}` : tempo;
}

countDown(); 
setInterval(countDown, 1000)

