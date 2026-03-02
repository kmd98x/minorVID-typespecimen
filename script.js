const textInput = document.querySelector('#text-input');
const fontWeight = document.querySelector('#font-weight');
const fontStyle = document.querySelector('#font-style');

fontStyle.addEventListener('input', function(){
    if (fontStyle.checked) {
        textInput.style.fontStyle = "italic" 
    } else {
        textInput.style.fontStyle = "normal"
    }
})

fontWeight.addEventListener("input", function() {
    console.log(fontWeight.value);
    textInput.style.fontVariationSettings = `"wght" ${Number(fontWeight.value)}`;
});

// const fontWeights = document.querySelectorAll('#font-weights input');

// const weights = {
//     "regular": [400, "normal"],
//     "medium": [500, "normal"],
//     "semibold": [600, "normal"],
//     "bold": [700, "normal"],
// }


// fontWeights.forEach(weight => {
//     weight.addEventListener('input', function() {

//         // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//         for (const [key, value] of Object.entries(weights)) {
//             if (weight.value === key) {
//                 textInput.style.fontWeight = value[0];
//             }
//         }
//     })
// });