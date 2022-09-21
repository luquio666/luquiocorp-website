function onDivClick(id) {
    if (id && document.getElementById(id)) {
        
        const hasClass = document.getElementById(id).classList.contains('show')

        document.getElementById("topBar-left").innerText = id.toUpperCase();

        // Agregamos el zindex en base al segundo actual asi la
        // ultima ventana se pone arriba que la anterior
        // hay que usar substring porque zindex no acepta numeros tan grandes.
        document.getElementById(id).style.zIndex = Date.now().toString().substring('5')


        return hasClass
            ? document.getElementById(id).classList.remove('show')
            : document.getElementById(id).classList.add('show')
    }
}

function init()
{
    showRealTime();
}

function showRealTime() {
    var date = new Date();
    var dateFormated = date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
    document.getElementById("topBar-right").innerText = dateFormated;
    var reset = setTimeout(showRealTime, 500);
}