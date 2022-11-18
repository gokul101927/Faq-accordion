let accordions = document.querySelectorAll('.accordion');
let arrows = document.querySelectorAll('.arrow');
let panels = document.querySelectorAll('.panel');

accordions.forEach((accordion) => accordion.addEventListener('click', () => {

    let isActive = accordion.classList.contains('active');;

    let arrow = accordion.querySelector('.arrow');

    let panelheight = accordion.nextElementSibling;

    accordions.forEach((accordion) => {
        accordion.classList.remove('active')
    })

    arrows.forEach((arrow) => {
        arrow.classList.remove('up');
    })

    panels.forEach((panel) => {
        panel.style.maxHeight = "0px";
    })

    if (!isActive) {
        accordion.classList.add('active');
        arrow.classList.add('up');
        panelheight.style.maxHeight = panelheight.scrollHeight + "px";
    }
}));


