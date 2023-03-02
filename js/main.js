const hamburger = document.querySelector('.nav_button');
const mobile_nav = document.querySelector('.mobile_nav_links');
const sub_menu_button = document.querySelector('.mobile_sub_menu_container');
const sub_menu = document.querySelector('.mobile_sub_menu');

hamburger.addEventListener('click', () => {
    mobile_nav.classList.toggle('open')
});
sub_menu_button.addEventListener('click', () => {
    sub_menu.classList.toggle('open')
})