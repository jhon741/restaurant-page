import { getNewMenuItem } from "./newMenuItem"
import '../styles/menupage.css'
import { getFooter } from "./footer"
const menuPage = () => {
  
  let menuItems = [
    {
      name: 'lomo saltado',
      price: 15,
      description: 'stir fried beef, with vegetables, served with rice'
    },
    {
      name: 'ceviche',
      price: 20,
      description: 'a mix of sea food cooked with lemon acid, all this is served cold'
    },
    {
      name: 'papa rellena',
      price: 10,
      description: 'a dish perfect to start a meal is like a cake of potato filled with meat inside, some peas and other vegetables'
    },
    {
      name: 'lomo saltado',
      price: 15,
      description: 'stir fried beef, with vegetables, served with rice'
    },
    {
      name: 'ceviche',
      price: 20,
      description: 'a mix of sea food cooked with lemon acid, all this is served cold'
    },
    {
      name: 'papa rellena',
      price: 10,
      description: 'a dish perfect to start a meal is like a cake of potato filled with meat inside, some peas and other vegetables'
    },
    {
      name: 'lomo saltado',
      price: 15,
      description: 'stir fried beef, with vegetables, served with rice'
    },
    {
      name: 'ceviche',
      price: 20,
      description: 'a mix of sea food cooked with lemon acid, all this is served cold'
    },
    {
      name: 'papa rellena',
      price: 10,
      description: 'a dish perfect to start a meal is like a cake of potato filled with meat inside, some peas and other vegetables'
    }
  ]

  const menupage = document.createElement('div')
  menupage.classList.add('menu-page')

  const title = document.createElement('h2')
  title.textContent = 'Menu'
  
  const menuList = document.createElement('div')
  menuList.classList.add('menu-list')

  menuItems.forEach(item => {
    menuList.append(getNewMenuItem(item))
  })
  menupage.append(title)
  menupage.append(menuList)
  menupage.append(getFooter())
  return menupage
}

export {menuPage}