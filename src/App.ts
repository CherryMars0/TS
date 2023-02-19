import Main from './ts/Main'

import './scss/index.scss'

let main = new Main("#App")

let logo: HTMLImageElement | null = document.querySelector('.logo')
const imgrurl = require("./assets/images/ts_logo.png")
if (logo !== null) logo.src = imgrurl


