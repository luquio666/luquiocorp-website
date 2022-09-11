function onDivClick(id) {
    if (id && document.getElementById(id)) {
        
        const hasClass = document.getElementById(id).classList.contains('show')

        // Agregamos el zindex en base al segundo actual asi la
        // ultima ventana se pone arriba que la anterior
        // hay que usar substring porque zindex no acepta numeros tan grandes.
        document.getElementById(id).style.zIndex = Date.now().toString().substring('5')


        return hasClass
            ? document.getElementById(id).classList.remove('show')
            : document.getElementById(id).classList.add('show')
    }
}