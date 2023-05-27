const initApp = ( )=> {
    const hamburger = document.getElementById('hamburger-button')
    const mobilemenu = document.getElementById('mobile-menu')
    const togglemenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburger.classList.toggle('toggle-btn')
    }
    hamburger.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', togglemenu)
}

document.addEventListener('DOMContentLoaded', initApp)