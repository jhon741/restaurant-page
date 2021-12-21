const cleanPage = (page) => {
  while(page.children[0]) {
    page.removeChild(page.children[0])
  }
}

export {cleanPage}