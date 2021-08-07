import './style.css'
import template from './template.js'


const restaurant = (function () {

  const _getContainer = () => { return document.body.firstElementChild }

  const _handler = () => {
    if (!event.target.classList.contains("tabs")) return
    let id = event.target.id

    const tabs = document.querySelectorAll(".tabs")
    tabs.forEach(tab => tab.classList.remove("active-tab"))
    event.target.classList.add("active-tab")

    _rebuild(id)
  }
  
  const _rebuild = (currentTab) => {
    const mainDiv = _getContainer().children[1]
    mainDiv.replaceChild(template(currentTab), mainDiv.firstElementChild)
  }
  
  const init = () => {    
    document.body.replaceChild(template(), document.body.firstElementChild)
    
    _getContainer().addEventListener("click", _handler)
  }
  
  return { init }
})()

restaurant.init()




