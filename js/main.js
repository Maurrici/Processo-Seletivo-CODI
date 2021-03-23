// Accordion Maurrici
var accordion;
var arrow_down = 'fas fa-arrow-circle-down';
var arrow_up = 'fas fa-arrow-circle-up';

function renderAccordion(){
    let accordionContainer = document.querySelector('#accordion');
    for (const element of accordionContainer.children) {
        element.children[0].setAttribute('onclick', 'expandItem(event)');
    }
    accordion = accordionContainer.children;
}

function expandItem(event){
    let itemClicked = event.currentTarget.parentNode;
    for (const element of accordion) {
        if(element == itemClicked && !element.children[1].classList.contains('active')){
            //Render text
            element.children[1].classList.remove('hide');
            element.children[1].classList.add('active');

            //Change icon
            element.children[0].children[0].className = arrow_up;
        }else{
            //Hide text
            element.children[1].classList.add('hide');
            element.children[1].classList.remove('active');

            //Change icon
            element.children[0].children[0].className = arrow_down;
        }
    }
}


// App Start
renderAccordion();