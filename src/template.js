const tabMixin = { home, menu, contact }

function home () {
  return "home1"
}

function menu () {
  return "menu1"
}

function contact () {
  return "contact1"
}


export default function template (tab) {

  if (tab) {
    const content = document.createElement("div")
    content.setAttribute("id", "main-content")
    console.log(tab)
   // content.appendChild(tabMixin[tab]())


    return content
  }

  tab = "home"

  const container = document.createElement("div")
  container.setAttribute("id", "content")
  
  const header = document.createElement("div")
  header.setAttribute("id", "header")

  const main = document.createElement("div")
  main.setAttribute("id", "header-main")
  main.textContent = "Au Basilic Sacré"
  header.appendChild(main)
  
  const sub = document.createElement("div")
  sub.setAttribute("id", "header-sub")
  sub.textContent = "Herbes et Médecines"
  header.appendChild(sub)
  
  const nav = document.createElement("div")
  nav.setAttribute("id", "nav-bar")
  
  const home = document.createElement("button")
  home.textContent = "home"
  home.classList.add("tabs")
  home.setAttribute("id", "home")
  nav.appendChild(home)
  
  const menu = document.createElement("button")
  menu.textContent = 'menu'
  menu.classList.add("tabs")
  menu.setAttribute("id", "menu")
  nav.appendChild(menu)
  
  const contact = document.createElement("button")
  contact.textContent = "contact"
  contact.classList.add("tabs")
  contact.setAttribute("id", "contact")
  nav.appendChild(contact)
  
  header.appendChild(nav)
  
  container.appendChild(header)

  const mainDiv = document.createElement("div")
  mainDiv.setAttribute("id", "main")

  mainDiv.appendChild(template(tab))

  container.appendChild(mainDiv)
  
  return container
}

