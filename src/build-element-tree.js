export default function buildElementsTree (obj) {
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