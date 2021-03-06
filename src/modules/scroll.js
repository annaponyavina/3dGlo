const scroll = () => {
    const scrollImg = document.querySelector('.scroll-img'),
        serviceBlock = document.getElementById('service-block'),
        menu = document.getElementById('menu'),
        scrollToBlock = (block) => {
            block.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

    menu.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        if (target.classList.contains('menu-item')) {
            const idName = target.getAttribute('href').slice(1);
            const idBlock = document.getElementById(idName);
            scrollToBlock(idBlock);
        }
    });

    scrollImg.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToBlock(serviceBlock);
    });
};

export default scroll;