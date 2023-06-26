const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const reservasLink = document.getElementsByClassName('reservas')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    reservasLink.classList.toggle('active')
})