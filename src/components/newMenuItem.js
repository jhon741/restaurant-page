const getNewMenuItem = (dishInfo) => {
  const item = document.createElement('div')
  item.classList.add('item')

  const h2 = document.createElement('h2')
  h2.textContent = dishInfo.name

  const description = document.createElement('div')
  description.classList.add('item-info')  
  const p = document.createElement('p')
  p.textContent = dishInfo.description

  const price = document.createElement('span')
  price.textContent = `S/.${dishInfo.price}`

  description.append(p)
  description.append(price)

  item.append(h2)
  item.append(description)

  return item
}

export {getNewMenuItem}