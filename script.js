const textInput = document.querySelector('#tekst');
const kleurKiezer = document.querySelector('#kleur-kiezer');
const fontWeight = document.querySelector('#font-weight');
const fontStyle = document.querySelector('#font-style');

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
    textInput.style.fontVariationSettings = `"wght" ${Number(fontWeight.value)}`;
});