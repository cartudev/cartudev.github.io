export function btnFunctions(){
    let header = document.querySelector('.header')
    let menuIcon = document.querySelector('.menu-icon')
    let menuOpen = document.querySelector('.menu-open')
    let lastSelected = document.querySelector('.header').querySelector('.active');
    let lastSelectedMenu = document.querySelector('.menu-open').querySelector('.active');


    header.addEventListener('click', function (event) { buttons(event) },  true);
    function buttons(e){
        if(e.target.classList == "btn") {
            e.target.classList.add('active');
            lastSelected.classList.remove('active');
            lastSelected = e.target;
            lastSelectedMenu.classList.remove('active');
            let index = [...lastSelected.parentElement.parentElement.children].indexOf(lastSelected.parentElement);
            lastSelectedMenu.parentElement.children[index].classList.add('active');
            lastSelectedMenu = lastSelectedMenu.parentElement.children[index];
        }    
        console.log([...lastSelected.parentElement.parentElement.children].indexOf(lastSelected.parentElement))

    }

    menuIcon.addEventListener('click', function (event) { buttonmenu(event) }, true);

    function buttonmenu(e){
        menuIcon.children[0].classList[1] != 'active' ? (
            menuIcon.children[0].classList.add('active'),
            menuOpen.classList.toggle('toggle')
        ) : (
                menuOpen.classList.toggle('fade'),

            setTimeout(() => {
                menuIcon.children[0].classList.remove('active'),
                menuOpen.classList.toggle('toggle'),
                menuOpen.classList.toggle('fade')
            }, 500)
        
        )
        
    
    }
    menuOpen.addEventListener('click', function (event) { openMenu(event) }, true);

    function openMenu(e){
        console.log(e.target.classList[0])
        console.log('chausi')
        if(e.target.classList[0] == "btn") {
            console.log('holis')
            lastSelectedMenu.classList.remove('active');
    
            e.target.classList.add('active','toggle');
            lastSelectedMenu = e.target;


                menuIcon.children[0].classList.remove('active');
                menuOpen.classList.toggle('toggle');
                menuOpen.classList.toggle('fade2');

            menuOpen.classList.toggle('fade2');
    

            let index = [...lastSelectedMenu.parentElement.children].indexOf(lastSelectedMenu);
            lastSelected.parentElement.parentElement.children[index].children[0].classList.add('active');
            lastSelected.classList.remove('active');
            lastSelected = lastSelected.parentElement.parentElement.children[index].children[0];
        
        }
    }

}

