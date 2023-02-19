export default class Main {
    banner: string
    el: Element | null
    logoUrl: string
    constructor(el: string) {
        this.banner = "Welcome to TypeScript!"
        this.el = document.querySelector(el)
        this.logoUrl = require("../assets/images/ts_logo.png")
        this.render(this.el, this.banner, this.logoUrl)
    }
    render = (el: Element | null, text: string, logoUrl: string) => {
        if (text) {
            let titleDOM = document.createElement('p'), logoDOM = document.createElement('img')
            titleDOM.innerHTML = text, logoDOM.src = logoUrl
            titleDOM.className = 'title', logoDOM.className = 'logo'
            if (el !== null) {
                el.appendChild(titleDOM)
                el.appendChild(logoDOM)
            }
        }
    }
}