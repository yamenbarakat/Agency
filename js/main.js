const navIcon = document.querySelector('.nav-icon');
const navBar = document.querySelector('.nav-bar');
const exitBar = document.querySelector('.exit-bar')

navIcon.addEventListener('click', () => {
    navBar.classList.toggle('toggle-bar')
})

exitBar.addEventListener('click', () => {
    navBar.classList.remove('toggle-bar')
})