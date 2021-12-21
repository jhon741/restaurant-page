import '../styles/header.css'
import logo from '../images/logo.jpg'
const getHeader = () => {
  let header = document.createElement('div')
  header.classList.add('header_container')
  
  let menuContainer = document.createElement('div')
  menuContainer.classList.add('menu_container')

  let imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  let aImg = document.createElement('a')
  aImg.href = '#'
  let img = document.createElement('img')
  img.src = logo
  img.alt = 'page logo'
  aImg.append(img)
  imgContainer.append(aImg)

  let list = document.createElement('ul')
  list.classList.add('list_menu')

  let homeItem = document.createElement('li')
  let aHome = document.createElement('a')
  aHome.textContent = 'home'
  aHome.href = '#paragraph'
  homeItem.append(aHome)

  let menuItem = document.createElement('li')
  let aMenu = document.createElement('a')
  aMenu.href = '#'
  aMenu.textContent = 'menu'
  menuItem.append(aMenu)

  let aboutItem = document.createElement('li')
  let aAbout = document.createElement('a')
  aAbout.href = '#'
  aAbout.textContent = 'about'
  aboutItem.append(aAbout)

  list.append(homeItem)
  list.append(menuItem)
  list.append(aboutItem)
  menuContainer.append(imgContainer)
  menuContainer.append(list)

  header.append(menuContainer)
  
  return {homeItem, menuItem, aboutItem, header, img}  
}

export {getHeader}