const btnFeatures = document.querySelector('.btn-features');
const btnCompany = document.querySelector('.btn-company');
const btnMenuOpen = document.querySelector('.btn-open-menu');
const btnCloseMenu = document.querySelector('.btn-close-menu');


btnMenuOpen.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    const sidebar = document.querySelector('.sidebar');
    modal.style.visibility = 'visible';
    modal.style.opacity = 1
    setTimeout(() => {
        sidebar.classList.add('translate-sidebar');
    }, 600)
})


btnCloseMenu.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    const modal = document.querySelector('.modal');
    sidebar.classList.remove('translate-sidebar');

    setTimeout(() => {
        modal.style.opacity = 0
        modal.style.visibility = 'hidden';
    }, 600)

});

window.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const modal = document.querySelector('.modal');
    if (e.target == modal) {
        sidebar.classList.remove('translate-sidebar');
        setTimeout(() => {
            modal.style.opacity = 0;
            modal.style.visibility = 'hidden';
        }, 600);

    }
});


btnFeatures.addEventListener('click', () => {
    const submenu = document.querySelectorAll('.nested-navbar')[0];
    const changeArrow = btnFeatures.nextElementSibling;
    submenu.classList.toggle('display-none');

    if (changeArrow.attributes.src.value === './images/icon-arrow-down.svg') {
        changeArrow.attributes.src.value = './images/icon-arrow-up.svg'
    } else if (changeArrow.attributes.src.value === './images/icon-arrow-up.svg') {
        changeArrow.attributes.src.value = './images/icon-arrow-down.svg'
    }
});

btnCompany.addEventListener('click', () => {
    const submenu = document.querySelectorAll('.nested-navbar')[1];
    const changeArrow = btnCompany.nextElementSibling;
    submenu.classList.toggle('display-none')
    if (changeArrow.attributes.src.value === './images/icon-arrow-down.svg') {
        changeArrow.attributes.src.value = './images/icon-arrow-up.svg'
    } else if (changeArrow.attributes.src.value === './images/icon-arrow-up.svg') {
        changeArrow.attributes.src.value = './images/icon-arrow-down.svg'
    }
});
