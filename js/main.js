const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1),50)
    }, 4000)
}

function load(){
    loader.style.opacity = 1;
    loader.style.display = 'block';

    main.style.opacity = 0;
    main.style.display = 'none';
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1),50)
    },3000)
}

init();