//     Задача. Розробити клас «Банер» 
// поля	
// •	Масив шляхів картинок (передається у конструктор при створенні)
// •	Поточна картинка
// •	URL адреса, куди переходить користувач при натисканні на картинку (передається у конструктор при створенні)
// •	Кількість секунд до автоматичного оновлення зображення на банері
// методи
// •	Зміна картинки (випадковим чином з масиву вибирається інша картинка і встановлюється як поточна)
// •	Метод генерування розмітки render
// •	Запуск автоматичного оновлення (виклику попереднього методу автоматично з використанням setInterval)
class Banner {
    constructor(imgArr, imgUrl, interval = 3000) {
        this.imgArr = imgArr
        this.imgUrl = imgUrl
        if (interval <= 0) throw new Error('interval < = 0')
        this.interval = interval
    }
    randomImage() {
        let randI = Math.floor(Math.random() * this.imgArr.length)
        return this.imgArr[randI]
    }
    changeImage() {
        this.img.src = this.randomImage()
    }
    render(contId) {
        this.p = document.getElementById(contId)
        this.a = document.createElement('a')
        this.a.href = this.imgUrl
        this.img = document.createElement('img')
        this.img.src = this.randomImage()
        this.a.appendChild(this.img)
        this.p.appendChild(this.a)
        let qq = setInterval(this.changeImage.bind(this), this.interval)
    }
}
window.onload = function () {
    let ArrImg = ["../img/ball.png", "../img/ball2.jpg", "../img/thimble.jpg"]
    let banner = new Banner(ArrImg, 'https://www.google.com/')
    banner.render("bann")
}