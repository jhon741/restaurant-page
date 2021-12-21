import { getHero } from "./hero";
import { getMainDishes } from "./mainDishes";
import { getFooter } from "./footer";

const homePage = () => {
  const homepage = document.createElement('div')
  homepage.classList.add('home-page')
  let {heroContainer, btn} = getHero()
  homepage.append(heroContainer)
  homepage.append(getMainDishes())
  homepage.append(getFooter())
  return {homepage, btn}
}

export {homePage}