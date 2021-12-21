import './styles/main.css'
import { getHeader } from "./components/header.js";
import { cleanPage } from './components/cleanPage';
import { homePage } from './components/homePage';
import { menuPage } from './components/menuPage';
import { aboutPage } from './components/aboutPage';

const content = document.getElementById('content')
let currentPage = ''
let {homeItem, menuItem, aboutItem, header,img } = getHeader()
content.append(header)

let {submit, aboutpage } = aboutPage()
let {homepage, btn} = homePage()

homeItem.addEventListener('click', showHomePage)
menuItem.addEventListener('click', showMenuPage)
aboutItem.addEventListener('click', showAboutPage)
submit.addEventListener('click',showHomePage)
btn.addEventListener('click', showAboutPage)
img.addEventListener('click',showHomePage)

const pageContainer = document.createElement('div')
pageContainer.classList.add('page-container')
content.append(pageContainer)
pageContainer.append(homepage)

function showHomePage(e) {
  console.log(e.target.parentNode);
  currentPage = 'home'
  cleanPage(pageContainer)
  pageContainer.append(homepage)
  checkCurrent(currentPage)
}

function showMenuPage(e) {
  currentPage = 'menu'
  cleanPage(pageContainer)
  pageContainer.append(menuPage())
  checkCurrent(currentPage)
}

function showAboutPage(e) {
  currentPage = 'about'
  cleanPage(pageContainer)
  pageContainer.append(aboutpage)
  checkCurrent(currentPage)
}

function checkCurrent(current) {
  if(current == 'home') {
    homeItem.classList = ['active']
    menuItem.classList = ['']
    aboutItem.classList = [''] 
  } else if(current == 'menu') {
    homeItem.classList = ['']
    menuItem.classList = ['active']
    aboutItem.classList = ['']
  } else if(current=='about') {
    homeItem.classList = ['']
    menuItem.classList = ['']
    aboutItem.classList = ['active']
  }
}