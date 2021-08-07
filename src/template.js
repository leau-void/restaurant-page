import tabMixin from './tab-mixin.js'
import buildElementsTree from './build-element-tree.js'
import templateJSON from './template.JSON'

export default function template (tab) {

  if (tab) {
    const content = buildElementsTree(tabMixin[tab])

    return content
  }

  tab = "home"

  const container = buildElementsTree(templateJSON)

  container.children[1].appendChild(template(tab))
  
  // const container = document.createElement("div")
  // container.setAttribute("id", "content")
  
  // const header = document.createElement("div")
  // header.setAttribute("id", "header")

  // const main = document.createElement("div")
  // main.setAttribute("id", "header-main")
  // main.textContent = "Au Basilic Sacré"
  // header.appendChild(main)
  
  // const sub = document.createElement("div")
  // sub.setAttribute("id", "header-sub")
  // sub.textContent = "Herbes et Médecines"
  // header.appendChild(sub)
  
  // const nav = document.createElement("div")
  // nav.setAttribute("id", "nav-bar")
  
  // const home = document.createElement("button")
  // home.textContent = "home"
  // home.classList.add("tabs", "active-tab")
  // home.setAttribute("id", "home")
  // nav.appendChild(home)
  
  // const menu = document.createElement("button")
  // menu.textContent = 'menu'
  // menu.classList.add("tabs")
  // menu.setAttribute("id", "menu")
  // nav.appendChild(menu)
  
  // const contact = document.createElement("button")
  // contact.textContent = "contact"
  // contact.classList.add("tabs")
  // contact.setAttribute("id", "contact")
  // nav.appendChild(contact)
  
  // header.appendChild(nav)
  
  // container.appendChild(header)

  // const mainDiv = document.createElement("div")
  // mainDiv.setAttribute("id", "main")

  // mainDiv.appendChild(template(tab))

  // container.appendChild(mainDiv)

  // const footer = document.createElement("div")
  // footer.setAttribute("id", "footer")

  // const linkGit = document.createElement("a")
  // linkGit.setAttribute("href", "https://github.com/leau-void")
  // linkGit.textContent = "Github"
  // footer.appendChild(linkGit)

  // const linkReadme = document.createElement("a")
  // linkReadme.setAttribute("href", "./README.md")
  // linkReadme.textContent = "README"
  // footer.appendChild(linkReadme)

  // container.appendChild(footer)
  
  return container
}

