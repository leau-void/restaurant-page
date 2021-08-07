import home from './home.JSON'
import menu from './menu.JSON'
import contact from './contact.JSON'
import herbTableImage from './herbs-table-diving.jpg'

home.children[1].attributes[1][1] = herbTableImage

const tabMixin = {home, menu, contact}

export default tabMixin