import '../styles/card.css'

const getCard = (img, description) => {
  const card = document.createElement('div')
  card.classList.add('card')

  const imgc = document.createElement('img')
  imgc.src = img
  imgc.alt = 'food image'

  const p = document.createElement('p')
  p.textContent = description
  
  card.append(imgc)
  card.append(p)
  return card
}

export {getCard}