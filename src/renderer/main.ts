import './main.css'
import imgUrl from './assets/logo.png'

const appDiv = document.getElementById('app')
if(appDiv) { makePage(appDiv) }

function makePage(div: HTMLElement) {
  const img = document.createElement('img')
  img.src = imgUrl
  div.appendChild(img)
  const h1 = document.createElement('h1')
  h1.textContent = "electron-vite-quick-start"
  div.appendChild(h1)
}
