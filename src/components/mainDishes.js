import { getCard } from "./card"
import torta from '../images/torta.jpg'
import empanada from '../images/empanada.jpg'
import chessecake from '../images/chessecake.jpg'
import pie from '../images/pie.jpg'
import '../styles/mainDishes.css'
const getMainDishes = () => {

  let items =[
    {img: torta, description: 'deliciosa torta de tres leches'},
    {img: pie, description: 'exquisito pie de manzana imperdible'},
    {img: empanada, description: 'varias opciones para elegir'},
    {img: chessecake, description: 'increibles chessecakes de muchos sabores'},
  ]

  let container = document.createElement('div')
  container.classList.add('container')

  let h2 = document.createElement('h2')
  h2.textContent = 'Las especialidades de la casa'

  container.append(h2)

  let sectionContainer = document.createElement('div')
  sectionContainer.classList.add('section-container')
  let column1 = document.createElement('div')
  column1.classList.add('left-column')
  let column2 = document.createElement('div')
  column2.classList.add('rigth-column')

  column1.append(getCard(
    items[0].img, items[0].description
  ))
  column1.append(getCard(
    items[1].img, items[1].description
  ))
  column2.append(getCard(
    items[2].img, items[2].description
  ))
  column2.append(getCard(
    items[3].img, items[3].description
  ))
  
  sectionContainer.append(column1)
  sectionContainer.append(column2)

  container.append(sectionContainer)
  return container
}

export {getMainDishes}