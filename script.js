const toggle = document.querySelector("#navToggle");
        const mobile_menu = document.querySelector('.mobile_menu');

navToggle.addEventListener('click', () => {
    toggle.classList.toggle('change')
    mobile_menu.classList.toggle('active')
})
