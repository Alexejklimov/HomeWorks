
class Thimble {
    getRandom() {
        let gameField = [];
        for (let i = 0; i < 3; i++) {
            gameField.push(i);
        }
        let ballPosition = [];
        for (let i = 0; i < 1; i++) {
            let randomIndex = Math.floor(Math.random() * gameField.length);
            ballPosition.push(gameField[randomIndex]);
            gameField.splice(randomIndex, 1);
        }
        return ballPosition;
    }
    ButtonClick(e) {
        let btn = e.target
        if (btn.getAttribute("ball") == "1") {
            btn.src = "../img/ball2.jpg"
        }
        else {
            btn.src = "../img/null.png"
            alert('you lose')
        }
    }
    render(containerId) {
        let ballPosition = this.getRandom()
        let container = document.getElementById(containerId)
        for (let i = 0; i < 3; i++) {
            let img = document.createElement('img')
            img.src = "../img/thimble.jpg"
            img.setAttribute("ball", (ballPosition.includes(i)) ? "1" : "0")
            img.onclick = this.ButtonClick
            container.appendChild(img)
        }
    }
}
window.onload = function () {
    function Go() {
        let thimble = new Thimble()
        thimble.render('game')
    }
    document.getElementById('button').onclick = Go
}