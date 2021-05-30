const OFFSET = 2
const slides = document.getElementById('city-slider').children
const activeIndex = 2
const burgerMenu = document.getElementById('burger-menu')

burgerMenu.addEventListener('click', () => {
  document.body.classList.toggle('burger-active')
})

setClasses()

function setClasses() {
  resetEventListener()
  Array.from(slides).slice(activeIndex - (OFFSET - 1), activeIndex + OFFSET).forEach(
    el => {
      cleanClasses(el)
      el.classList.add('city-image-active')
    }
  )

  Array.from(slides).slice(0, 1).forEach(
    (el, i) => {
      cleanClasses(el)

      if (i === 0) {
        el.classList.add('previous')
        el.id = 'previous-slide'
        el.addEventListener('click', () => {
          const firstEl = Array.from(slides)[0]
          const lastEl = Array.from(slides)[Array.from(slides).length - 1]
          const newEl = lastEl.cloneNode(true);
          lastEl.remove()
          firstEl.parentNode.insertBefore(newEl, firstEl);

          setClasses()
        })
      }

      el.classList.add('city-image')
    }
  )

  Array.from(slides).slice(4, 5).forEach(
    (el, i) => {
      cleanClasses(el)

      if (i === 0) {
        el.classList.add('next')
        el.id = 'next-slide'
        el.addEventListener('click', () => {
          const firstEl = Array.from(slides)[0]
          const LastEl = Array.from(slides)[Array.from(slides).length - 1]

          const newEl = firstEl.cloneNode(true);
          firstEl.remove()
          insertAfter(newEl, LastEl)

          setClasses()
        })
      }

      el.classList.add('city-image')
    }
  )
}

function insertAfter(newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function resetEventListener() {
  const previousSlide = Array.from(slides)[0]
  const nextSlide = Array.from(slides)[Array.from(slides).length - 1]

  if (nextSlide && previousSlide) {
    nextSlide.removeEventListener('click', () => {})
    nextSlide.id = ''
    previousSlide.removeEventListener('click', () => {})
    previousSlide.id = ''
  }
}

function cleanClasses(el) {
  el.classList.remove('previous')
  el.classList.remove('next')
  el.classList.remove('city-image')
  el.classList.remove('city-image-active')
}