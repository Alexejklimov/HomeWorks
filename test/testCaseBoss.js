class Trainer {
    constructor(contId, check, flag) {
        this.contId = contId
        this.check = check
        this.flag = Boolean
        this.firstNum = this.getRandomNum()
        this.secondNum = this.getRandomNum()
        this.operator = this.getOperator()
    }
    getRandomNum() {
        return (1 + Math.floor(Math.random() * 10))
    }
    getOperator() {
        let operArr = ['+', '-', '*', '/']
        return operArr[Math.floor(Math.random() * 4)]
    }
    getOperationSum(correctAnswer) {
        switch (this.operator) {
            case "+": correctAnswer = this.firstNum + this.secondNum
                break;
            case "-": correctAnswer = this.firstNum - this.secondNum
                break;
            case "*": correctAnswer = this.firstNum * this.secondNum
                break;
            case "/": correctAnswer = this.firstNum / this.secondNum
                break;
        }
        return correctAnswer
    }
    CheckAnswer() {

        let answerTry = parseFloat(this.answer.value)
        if (answerTry == this.getOperationSum()) {
            this.result.innerText = `Result: OK`
            this.flag = true
        }
        else {
            this.result.innerText = `Result: Mistake`
            this.flag = false
        }
        this.check()
        this.render()
    }
    render() {
        let div = document.getElementById(this.contId)

        let lbl1 = document.createElement("p")
        this.firstInput = document.createElement("input")
        lbl1.innerText = "1 number  "
        this.firstInput.value = this.firstNum
        lbl1.appendChild(this.firstInput)
        div.appendChild(lbl1)

        let span = document.createElement("span")
        this.span = document.createElement("span")
        span.innerText = "operation:    "
        this.span.innerText = this.operator
        div.appendChild(span)
        div.appendChild(this.span)

        let lbl2 = document.createElement("p")
        this.secondInput = document.createElement("input")
        lbl2.innerText = "2 number "
        this.secondInput.value = this.secondNum
        lbl2.appendChild(this.secondInput)
        div.appendChild(lbl2)

        let lbl3 = document.createElement("p")
        this.answer = document.createElement("input")
        this.answer.type = "number"
        lbl3.innerText = " Answer "
        lbl3.appendChild(this.answer)
        div.appendChild(lbl3)

        let btnCheck = document.createElement("button")
        btnCheck.innerText = "Check"
        btnCheck.onclick = this.CheckAnswer.bind(this)
        div.appendChild(btnCheck)
        this.result = document.createElement("span")

        div.appendChild(this.result)
    }
}
class Tester {
    constructor(testCount, score) {
        this.testCount = testCount
        this.score = score
        this.train = new Trainer('forTrainer', this.onCheck.bind(this))
        this.counter = 1
        this.wrongScore = this.score / this.testCount
    }
    onCheck() {
        this.counter++
        this.spCurrent.innerText = this.counter

        if (!this.train.flag) {
            this.score -= this.wrongScore
            this.spScore.innerText = this.score
        }

        if (this.counter > this.testCount) alert(`its all. Your score is ${this.score}`)
    }
    // getWrongAnswers() {

    //     let tr = document.createElement("tr")
    //     let td1 = document.createElement("td")
    //     let td2 = document.createElement("td")
    //     let span1 = document.createElement("span")
    //     let span2 = document.createElement("span")
    //     span1.innerText = this.toStringMistake()
    //     span2.innerText = this.toStringCorrect()
    //     td1.appendChild(span1)
    //     td2.appendChild(span2)
    //     tr.appendChild(td1)
    //     tr.appendChild(td2)
    //     this.table.appendChild(tr)
    // }


    // toStringCorrect(correctString) {
    //     switch (this.operator) {
    //         case "+": correctString = `${this.train.firstNum} + ${this.train.secondNum} = ${this.train.getOperationSum()}`
    //             break;
    //         case "-": correctString = `${this.train.firstNum} - ${this.train.secondNum} = ${this.train.getOperationSum()}`
    //             break;
    //         case "*": correctString = `${this.train.firstNum} * ${this.train.secondNum} = ${this.train.getOperationSum()}`
    //             break;
    //         case "/": correctString = `${this.train.firstNum} / ${this.train.secondNum} = ${this.train.getOperationSum()}`
    //             break;
    //     }
    //     return correctString
    // }
    // toStringMistake(mistakeString) {

    //     switch (this.operator) {
    //         case "+": mistakeString = `${this.train.firstNum} + ${this.train.secondNum} = ${this.train.answerTry}`
    //             break;
    //         case "-": mistakeString = `${this.train.firstNum} - ${this.train.secondNum} = ${this.train.answerTry}`
    //             break;
    //         case "*": mistakeString = `${this.train.firstNum} * ${this.train.secondNum} = ${this.train.answerTry}`
    //             break;
    //         case "/": mistakeString = `${this.train.firstNum} / ${this.train.secondNum} = ${this.train.answerTry}`
    //             break;
    //     }
    //     return mistakeString
    // }

    render(containerId) {
        this.train.render()

        let container = document.getElementById(containerId)


        let p = document.createElement("p")
        this.spTotal = document.createElement("span")
        p.innerText = "Total Questions:"
        this.spTotal.innerText = this.testCount
        p.appendChild(this.spTotal)
        container.appendChild(p)

        let p2 = document.createElement("p")
        this.spCurrent = document.createElement("span")
        p2.innerText = "Current Question:"
        this.spCurrent.innerText = this.counter
        p2.appendChild(this.spCurrent)
        container.appendChild(p2)

        let p3 = document.createElement("p")
        this.spScore = document.createElement("span")
        p3.innerText = "Score:"
        this.spScore.innerText = this.score
        p3.appendChild(this.spScore)
        container.appendChild(p3)

        //======= таблица ответов 
        // this.table = document.createElement("table")
        // let trr = this.getWrongAnswers()
        // container.appendChild(trr)

    }
}
window.onload = function () {
    let test = new Tester(10, 100)
    test.render("dvi")
}