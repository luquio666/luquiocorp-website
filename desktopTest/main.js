function onDivClick(id) {
    if (id && document.getElementById(id)) {
        
        const hasClass = document.getElementById(id).classList.contains('show')

        // z-index will position every window on top of the previous one
        // note: date.now is
        document.getElementById(id).style.zIndex = Date.now().toString().substring('5')

        return hasClass
            ? document.getElementById(id).classList.remove('show')
            : document.getElementById(id).classList.add('show')
    }
}