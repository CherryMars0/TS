export default class Index {
    banner: string
    logoUrl: string
    el: HTMLElement | null
    constructor(el: string) {
        this.banner = "Welcome to TypeScript!"
        this.el = document.querySelector(el)
        this.logoUrl = require("../assets/images/ts_logo.png")
        this.render(this.el, this.banner, this.logoUrl)
    }
    render = (el: HTMLElement | null, banner: string, logoUrl: string) => {
        let titleDOM = document.createElement('p'), logoDOM = document.createElement('img')
        titleDOM.innerHTML = banner, logoDOM.src = logoUrl
        titleDOM.className = 'title', logoDOM.className = 'logo'
        if (el !== null) {
            el.appendChild(titleDOM)
            el.appendChild(logoDOM)
        }
    }
}