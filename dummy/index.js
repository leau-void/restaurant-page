const JSONMOCK = {
  "tag": "div",
  "classes": ["main-content"],
  "attributes": [["id", "home-content"]],
  "children": [
    {
      "tag": "div",
      "classes": ["tab-title"],
      "text": "Let our food help"
    },
    {
      "tag": "img",
      "attributes": [["id", "home-picture"], ["src", "./herbs-table-diving.jpg"]]
    },
    {
      "tag": "div",
      "classes": ["tab-text"], 
      "text": "Au Basilic Sacré is at the intersection of the finest French Cuisine and of the folkloric usage of herbs as medicine."
    },
    {
      "tag": "div",
      "classes": ["tab-text"],
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
}

function buildElementsTree (obj) {
const element = document.createElement(obj.tag)
for (let prop in obj) {
  switch (prop) {
    case "tag":
      break
    case "classes":
      obj.classes.forEach(cssClass => element.classList.add(cssClass))
      break
    case "text":
      element.textContent = obj.text
      break
    case "attributes":
      obj.attributes.forEach(attribute => element.setAttribute(attribute[0], attribute[1]))
      break
    case "children":
      obj.children.forEach(child => {
        element.appendChild(buildElementsTree(child))
      })
  }

}

return element
}

document.querySelector("#main").appendChild(buildElementsTree(JSONMOCK))


