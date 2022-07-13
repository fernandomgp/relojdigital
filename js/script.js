const tiempo = document.querySelector('.tiempo');
const fecha = document.querySelector('.fecha');

function digitalClock(){
    let f = new Date(), dia = f.getDate(), mes = f.getMonth() + 1, año = f.getFullYear(), diaSemana = f.getDay();
    
    dia = ('0'+ dia).slice(-2);
    mes = ('0' + mes).slice(-2);
    
    let semana = ['SUN', 'MON', 'TUE','WED','THU','FRI','SAT'];
    let showSemana = (semana[diaSemana]);

    let timeString = f.toLocaleTimeString();
    tiempo.innerHTML = timeString; 

    fecha.innerHTML = `${año}-${mes}-${dia} ${showSemana}`
}

setInterval(()=>{
    digitalClock();
},1000);