import logo from '../images/logo.jpg'
import '../styles/footer.css'

const getFooter = () => {
  const footer = document.createElement('div')
  footer.classList.add('footer')

  const img = document.createElement('img')
  img.src = logo
  img.alt = 'logo'

  const p = document.createElement('p')
  p.textContent = 'All Rigths reverver by Canela cafe - misky kallariy'

  footer.append(img)
  footer.append(p)

  return footer
}

export {getFooter}