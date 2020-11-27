const keyCodes = {
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    58: ':',
    59: ':',
    60: '<',
    61: '=',
    62: '$',
    63: 'ß',
    64: '@',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
};

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function scrambler() {
    var count = 0;
    var el = document.getElementById('scrambledtext')
    document.addEventListener('keydown', function (event) {
        if (count == 0) {
            var newKey = scramble(event)
            el.innerHTML = '' + newKey;
            count++;
        } else {
            if (count < 25 && event.keyCode >= 48 && event.keyCode <= 90) {
                var newKey = scramble(event)
                el.innerHTML = el.innerHTML + newKey;
                count++;
            }
        }
        console.log(event)
    })
}

function scramble(a) {
    a.preventDefault()
    var randomKeyCode = parseInt(randomNumber(48, 90))
    var newKey = keyCodes[randomKeyCode]
    return newKey;
}

function test() {
    console.log(document.getElementById('scrambledtext').text)
}

function blackBall() {
    document.getElementById("test1").color = "black"
}

document.addEventListener("DOMContentLoaded", function (event) {
    keyLogger()
    scrambler()
});