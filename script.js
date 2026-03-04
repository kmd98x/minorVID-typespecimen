const textInput = document.querySelector('#tekst')
const kleurKiezer = document.querySelector('#kleur-kiezer')
const fontWeight = document.querySelector('#font-weight')
const fontStyle = document.querySelector('#font-style')

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
 * */ 
fontStyle.addEventListener('input', function() {
    if (fontStyle.checked) {
        textInput.style.fontStyle = "italic" 
    } else {
        textInput.style.fontStyle = "normal"
    }
})

kleurKiezer.addEventListener('input', function() {
    textInput.style.color = kleurKiezer.value;
})

fontWeight.addEventListener("input", function() {
    textInput.style.fontVariationSettings = `"wght" ${Number(fontWeight.value)}`
});

const interactieveLetters = document.querySelectorAll("#interactief span")
const steenHakken = document.querySelector('#steen-hakken')
const muis = document.querySelector('#steen-hakken img#muis')

interactieveLetters.forEach(letter => {
    let opacity = 0

    letter.addEventListener('click', function() {
        if (opacity < 1) {
            opacity = opacity + 0.33;
            letter.style.color = `rgba(13, 61, 35, ${opacity})`
            console.log(letter, opacity)
        }
    })
});

steenHakken.addEventListener('mousemove', function(e) {
    muis.style.left = e.clientX - 540 + 'px'
    muis.style.top = e.clientY - 540 + 'px'
})