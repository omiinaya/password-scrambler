function hello() {
    alert("Hello");
}

function keyLogger() {
    document.addEventListener("keydown", function (event) {
        //console.log(event);
        if (event.keyCode === 87) {
            //console.log("W");
        } else if (event.keyCode === 65) {
            //console.log("A");
        } else if (event.keyCode === 83) {
            //console.log("S");
        } else if (event.keyCode === 68) {
            //console.log("D");
        }
    })
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function parseKeyCode() {
    
}

function scrambler() {
    var el = document.getElementById('textbar')
    el.addEventListener('keydown', function (event) {
        console.log(event)
        if (event.keyCode) {
            var keyPressed = event.keyCode;
            var randomKeyCode = parseInt(randomNumber(8, 222))
            var newRandom = parseInt(randomNumber(8, 222))

            var ev = new Event('keypress');
            el.value = el.value + 'a';
            el.dispatchEvent(ev);

            if (randomKeyCode == event.keyCode) {
                randomKeyCode = newRandom
            }
        }
    })
}

/*
function mouseEnter() {
    var element = document.getElementById('test1')
    element.addEventListener("mouseenter", function (event) {
        console.log('XD')
    });
}
*/

function blackBall() {
    document.getElementById("test1").color = "black"
}

document.addEventListener("DOMContentLoaded", function (event) {
    keyLogger()
    scrambler()
    //mouseEnter()
});