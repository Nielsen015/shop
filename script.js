const open = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (open){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}