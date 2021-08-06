import './style.css'
import template from './template.js'
// import './home.js'
// import './menu.js'
// import './contact.js'


const restaurant = (function () {

  const _getContainer = () => { return document.body.firstElementChild }

  const _handler = () => {
    if (!event.target.classList.contains("tabs")) return
    let id = event.target.id
    
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




