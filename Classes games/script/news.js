// <!-- Задача. Розробити клас «Список новин» за прикладом рубрики новин на сайті ukr.net
// Поля	•	Заголовок категорії новин
// •	Список новин (час додавання інформації у список новини, текстовий заголовок новин і відповідний URL, джерело інформації) (передається у конструктор при створенні)
// •	Поточний список з 5 поточних новин (новин, які відображаються )
// •	Кількість секунд до автоматичного оновлення списку
// Методи	
// •	Метод генерування випадковим чином 5 поточних новин
// •	Метод генерування розмітки render
// •	Запуск автоматичного оновлення (виклику попереднього методу автоматично з використанням setInterval) -->
class NewsBlock {
    constructor(newsTime, headNews, urlNews, sourseNews) {
        this.newsTime = newsTime
        this.headNews = headNews
        this.urlNews = urlNews
        this.sourseNews = sourseNews
    }
    render(contId) {
        let p = document.createElement("p")
        let timeTeg = document.createElement("time")
        timeTeg.style.padding = "10px"
        timeTeg.innerText = this.newsTime
        let a = document.createElement("a")
        a.style.fontSize = "20px"
        a.href = this.urlNews
        a.innerText = this.headNews
        let span = document.createElement('span')
        span.style.padding = "20px"
        span.style.fontSize = "12px"
        span.innerText = this.sourseNews
        p.appendChild(timeTeg)
        p.appendChild(a)
        p.appendChild(span)
        contId.appendChild(p)
    }
}
class News {
    constructor(blockHead, newsArr, newsQuantity = 5, refreshInterval = 2000) {
        this.blockHead = blockHead
        this.newsQuantity = newsQuantity
        this.refreshInterval = refreshInterval
        this.newsArr = newsArr
    }
    randomNews() {
        let randI = Math.floor(Math.random() * this.newsArr.length)
        return this.newsArr[randI]
    }
    render(contId) {
        let container = document.getElementById(contId)
        container.innerHTML = " "

        let header = document.createElement('h3')
        header.innerText = this.blockHead
        container.appendChild(header)

        let p = document.createElement('p')
        for (let i = 0; i < this.newsQuantity; i++) {
            this.randomNews().render(p)
        }
        container.appendChild(p)

        setTimeout(this.render.bind(this, contId), this.refreshInterval)
    }
}
window.onload = function () {
    let news1 = new NewsBlock('17:54', "winter is coming", "https://www.hbo.com/game-of-thrones", "HBO")
    let news2 = new NewsBlock("12:54", "1 season", "https://www.hbo.com/game-of-thrones/season-01", "HBO2")
    let news3 = new NewsBlock("00:00", "The Shawshank Redemption", "https://www.imdb.com/title/tt0111161/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=e31d89dd-322d-4646-8962-327b42fe94b1&pf_rd_r=T169JS4M2N4CART0MMB4&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_1", "Imdb")
    let news4 = new NewsBlock("12:12", "gas price is fall", "https://prm.ua/v-ukrayini-znizheno-tsini-na-gaz-dlya-naselennya/", "prm")
    let news5 = new NewsBlock("13:43", "5k$ for internet in Antarktida", "https://bykvu.com/bukvy/116219-internet-v-antarktide-obkhoditsya-ukraine-v-5-tysyach-ezhemesyachno", "letters")
    let news6 = new NewsBlock("15:34", "Or 'Крим не наш' or Out of my Hotel", "https://www.eurointegration.com.ua/news/2019/05/1/7095776/", "eurointegration")
    let newArr = [news1, news2, news3, news4, news5, news6]
    let news = new News("Breaking", newArr)
    news.render("dvi")

}