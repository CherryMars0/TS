export default class Main {
    banner: string
    el: Element | null
    constructor(el: string) {
        this.banner = "Welcome to TypeScript!"
        this.el = document.querySelector(el)
        this.render(this.el, this.banner)
    }
    render = (el: Element | null, text: string) => {
        if (el !== null) el.innerHTML = text
        el?.addEventListener('click', () => {
            document.location.href = '../slider.html'
        })
    }
}