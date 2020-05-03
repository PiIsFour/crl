const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.main-nav')

nav.classList.toggle('main-nav-closed')

navToggle.addEventListener('click', () => {
	nav.classList.toggle('main-nav-closed')
})
