import heroImg from '../images/hero.jpg'
import '../styles/hero.css'

const getHero = () => {
  const heroContainer = document.createElement('div')
  heroContainer.classList.add('hero-container')

  const hero = document.createElement('div')
  hero.classList.add('hero')

  const middleContent = document.createElement('div')
  middleContent.classList.add('middle-content')

  const title = document.createElement('h1')
  title.textContent = 'CANELA CAFE'

  const span = document.createElement('span')
  span.textContent = 'misky kallariy'
  title.append(span)

  const aBtn = document.createElement('a')
  aBtn.href = '#'
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.textContent = 'reservar'
  aBtn.append(btn)

  middleContent.append(title)
  middleContent.append(aBtn)

  hero.append(middleContent)
  heroContainer.append(hero)

  return {heroContainer, btn}
}

export { getHero }