

// -------------------------
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="navigation">
            <div class="mobile_display">
                <div class="nav_header">
                    <a href="#" class="mobile_logo"><h1>Plutus</h1></a>
                    <div id="navToggle">
                        <div class="bar b_one"></div>
                        <div class="bar b_two"></div>
                        <div class="bar b_three"></div>
                    </div> 
                </div>
                <div class="mobile_menu">
                    <ul class="nav_items">
                        <li class="nav_list"><a href="#" class="nav_link">Home</a></li>
                        <li class="nav_list"><a href="#" class="nav_link">Pricing</a></li>
                        <li class="nav_list"><a href="#" class="nav_link">About Us</a></li>
                        <li class="nav_list"><a href="#" class="nav_link">Support</a></li>
                        <li class="nav_list"><a href="login.html" class="nav_link">Login</a></li>
                        <li class="nav_list"><a href="login.html" class="btn">Register</a></li>
                    </ul>
                    <div class="nav_footer">
                        <div class="navsocial_links">
                            <a href="#" class="social_link">LinkedIn</a>
                            <a href="#" class="social_link">Instagram</a>
                            <a href="#" class="social_link">Twitter</a>
                            <a href="#" class="social_link">Facebook</a>
                        </div>
                        <div class="copyright_white">
                            <p>© Logo 2022 Plutus, All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="desktop_display">
                <a href="#" class="mobile_logo"><h1>Plutus</h1></a>
                <ul class="nav_items">
                    <li class="nav_list"><a href="#" class="nav_link">Home</a></li>
                    <li class="nav_list"><a href="#" class="nav_link">Pricing</a></li>
                    <li class="nav_list"><a href="#" class="nav_link">About Us</a></li>
                    <li class="nav_list"><a href="#" class="nav_link">Support</a></li>
                    <li class="nav_list"><a href="login.html" class="nav_link">Login</a></li>
                    <li class="nav_list"><a href="login.html" class="btn">Register</a></li>
                </ul>
            </div>
        </header>
    `
    }
}

customElements.define('header-component', Header);


// -------------------
class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer_section">
            <div class="footer_wrapper">
                <div class="footer_connect">
                    <h2><span>Support</span></h2>
                    <h3>Email@example.com</h3>
                    <div class="footer_icons">
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/telegram-app.png"/>
                        <img src="https://img.icons8.com/material-outlined/24/ffffff/facebook-f.png"/>
                        <img src="https://img.icons8.com/ios-filled/24/ffffff/twitter.png"/>
                    </div>
                </div>
                <div class="footer_copyright">
                    <p>© Logo 2022 Plutus, All rights reserved.</p>
                </div>
            </div>
        </footer>
    `
    }
}

customElements.define('footer-component', Footer)

// ---------------------
const toggle = document.querySelector("#navToggle");
const mobile_menu = document.querySelector('.mobile_menu');

navToggle.addEventListener('click', () => {
    toggle.classList.toggle('change')
    mobile_menu.classList.toggle('active')
});

// ----------------------------
const tab = document.querySelector('.tabs')
const tabMenu = document.querySelectorAll('.tab_menu')
const tabLogin = document.querySelector('#login_section')
const tabRegister = document.querySelector('#register_section')

tabMenu.forEach(e => {
    e.addEventListener('click', () =>{
        if (e.classList.contains('login')){
            tabRegister.style.display = "none"
            tabLogin.style.display= "flex"
        }else if (e.classList.contains('register')){
            tabLogin.style.display= "none"
            tabRegister.style.display = "flex"
       }
       
    })
})

