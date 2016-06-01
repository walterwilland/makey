var morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '.----': '1', '..---': '2', '...--': '3', 
    '....-': '4', '.....': '5', '-....': '6', '--...': '7',
    '---..': '8', '----.': '9', '-----': '0', '.-.-.-': '.',
    '--..--': ',', '..--..': '?', '-..-.': '/', '.--.-.': '@'
};

function translate_morse(code) {
    return (typeof morse[code] === "undefined") ? "" : morse[code];
}

$('#type').keydown(function(e) {
    switch(e.keyCode) {
        case 16: this.value += "."; break;
        case 32: this.value += "-"; break;
        case 13: this.value += " "; break;
        case 8: return; // allow backspace
    }
    e.preventDefault();
}).keyup(function() {
    $('#two p').text(
        this.value.split(" ").map(translate_morse).join("")
    );
});

// Code Reference Source: Raul Rodriguez