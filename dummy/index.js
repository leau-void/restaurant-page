const JSONMOCK = {
  "tag": "div",
  "classes": ["main-content"],
  "attributes": [["id", "home-content"]],
  "children": [
    {
      "tag": "div",
      "classes": ["tab-title"],
      "text": "Contact Us"
    },
    {
      "tag": "form",
      "attributes": [["id", "contact-form"]],
      "children": [
        {
          "tag": "label",
          "text": "Your Name :"
        },
        {
          "tag": "input",
          "classes": ["contact-input"],
          "attributes": [["type", "text"], ["required", true]]
        },
        {
          "tag": "label",
          "text": "Your Telephone Number :"
        },
        {
          "tag": "input",
          "classes": ["contact-input"],
          "attributes": [["type", "tel"], ["pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}"], ["placeholder", "123-456-7890"]]
        },
        {
          "tag": "label",
          "text": "Your Email :"
        },
        {
          "tag": "input",
          "classes": ["contact-input"],
          "attributes": [["type", "email"], ["required", true]]
        },
        {
          "tag": "label",
          "text": "What can we help you with?"
        },
        {
          "tag": "textarea",
          "classes": ["contact-input"],
          "attributes": [["type", "text"], ["style", "resize: none"]]
        },
        {
          "tag": "input",
          "value": "Submit",
          "attributes": [["type", "submit"]]
        }
      ]
    },
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


