import '../styles/aboutpage.css'
import { getFooter } from './footer'

const aboutPage = () => {
  const aboutpage = document.createElement('div')
  aboutpage.classList.add('about-page')

  const container = document.createElement('div')
  container.classList.add('container')

  const title = document.createElement('h2')
  title.textContent = 'Contact Us:'

  const form = document.createElement('form')

  const label1 = document.createElement('label')
  label1.for='name'
  label1.textContent='Name: '

  const name = document.createElement('input')
  name.placeholder = 'enter your name'
  name.id = 'name'
  name.type = 'text'
  label1.append(name)

  const label2 = document.createElement('label')
  label2.for='email'
  label2.textContent = 'Email: '

  const email = document.createElement('input')
  email.placeholder = 'enter your email'
  email.id = 'email'
  email.type = 'email'
  label2.append(email)

  const label3 = document.createElement('label')
  label3.for='message'
  label3.textContent = 'Message: '

  const message = document.createElement('textarea')
  message.placeholder = 'enter your message'
  message.id = 'message'
  message.name = 'message'
  message.rows = 8
  // message.cols = 50
  label3.append(message)
  

  const submit = document.createElement('input')
  submit.type = 'submit'
  submit.value = 'submit'

  form.append(label1)
  form.append(label2)
  form.append(label3)
  form.append(submit)

  container.append(title)
  container.append(form)

  aboutpage.append(container)
  aboutpage.append(getFooter())
  return { submit, aboutpage}
}

export {aboutPage}