var button = document.getElementById('button');

button.onclick = function() {
    var div = document.getElementById('desc');
    if (div.style.opacity !== '0') {
        div.style.opacity = '0';
    } else {
        div.style.display = '1';
    }
};
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.header__form-btn').forEach(function(serviceBtn) {
        serviceBtn.addEventListener('click', function(event) {

            document.querySelectorAll('.header__form-btn').forEach(function(serviceContent) {
                serviceContent.classList.toggle('header__form-btn--active')
            })
            document.querySelectorAll('.header__form-input').forEach(function(serviceContent) {
                serviceContent.classList.toggle('header__form-input--active')
            })
            document.querySelectorAll('.header__form').forEach(function(serviceContent) {
                serviceContent.classList.toggle('header__form--active')
            })
        })
    })

    document.querySelectorAll('.header__burger-btn').forEach(function(serviceBtn) {
        serviceBtn.addEventListener('click', function(event) {

            document.querySelectorAll('.header__list').forEach(function(serviceContent) {
                serviceContent.classList.toggle('header__list--active')
            })
            document.querySelectorAll('.header__burger-close-icon').forEach(function(serviceContent) {
                serviceContent.classList.toggle('header__burger-close-icon--active')
            })
        })
    })
})