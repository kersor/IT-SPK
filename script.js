const buttonOpenMobileMenu = document.querySelector('.header__icon-open');
const buttonCloseMobileMenu = document.querySelector('.header__icon-close');
const header = document.querySelector('.header');
const headerContacts = document.querySelector('.header__contacts');
const page = document.querySelector('.page');


function buttonLangeage(){
     const buttonLang = `<div class="headerMobileLanguages"><button>UA</button><button class="active_lang">RU</button></div>`
     if(window.innerWidth <= 768){
          headerContacts.insertAdjacentHTML('afterend', buttonLang)
     }
     else if(window.innerWidth >= 768 && document.querySelector('.headerMobileLanguages')){
          document.querySelector('.headerMobileLanguages').remove();
     }     
}
buttonLangeage()

function deleteLanguage(){
     const headerMobileLanguages = document.querySelectorAll('.headerMobileLanguages')
     if(headerMobileLanguages.length > 1){
          for(let i = 0; i < headerMobileLanguages.length; i++){
               headerMobileLanguages[headerMobileLanguages.length - 1].remove()
          }
     }
}
deleteLanguage()

function addRemoveClass(){
     const headerMobileLanguage = document.querySelectorAll('.headerMobileLanguages button');
     headerMobileLanguage.forEach(function(item, index){
          item.addEventListener('click', function(event){                    
               for (const iterator of event.target.parentElement.children) {
                    if(iterator.classList.contains('active_lang')) iterator.classList.remove('active_lang');
               }
               event.target.classList.add('active_lang')
          })
     })
}
addRemoveClass()


const buttonGetZaivka = document.querySelector('.buttonGetZaivka');

buttonGetZaivka.addEventListener('click', createForm)

function createForm(){
     const divModalWindow = document.createElement('div')
     document.body.insertAdjacentHTML('afterbegin', `
     <div class="form">
          <div class="header__icon icon-close-form">
               <div class="header__icon-close"></div>
          </div>
          <div class="form__container container">
               <form action="#" method="post">
                    <input type="text" name="name" placeholder="Имя" id="">
                    <input type="text" name="telephone" placeholder="Телефон" id="">
                    <input type="email" name="email" placeholder="E-mail" id="">
                    <textarea placeholder="Сообщение" name="message" id="" cols="30" rows="10"></textarea>
                    <div class='form__checkbox'>
                         <label>
                              <input class="real__checkbox" type="checkbox">
                              <span class="custom__checkbox"></span>
                              Даю согласие на обработку персональных данных
                         </label>
                    </div>
                    <button class="itaytsorting__button">
                         Отправить
                         <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 7.5H19M19 7.5L12.5 1M19 7.5L12.5 14" stroke="#001E42" stroke-width="2"/>
                         </svg> 
                    </button>
               </form>
          </div>
     </div>
     `)
     const form = document.querySelector('.form');
     form.classList.add('_active')



     document.querySelector('.header__icon-close').addEventListener('click', (event)=>{
          document.querySelector('.form').remove();
     })
}


window.addEventListener('scroll', function(event){
     if(pageYOffset >= 485){
          header.style.backgroundColor = '#06182F';
     }
     else if(pageYOffset <= 485){
          header.style.background = 'none';
     }
})


buttonOpenMobileMenu.addEventListener('click', (event) =>{
     buttonOpenMobileMenu.classList.add('_active')
     buttonCloseMobileMenu.classList.add('_active')
     header.classList.add('_active');
     page.classList.add('_active')
     document.body.style.overflow = 'hidden';

     createButtonForMobileMent()
     document.querySelector('.mobile__menu-button').addEventListener('click', createForm)
})

buttonCloseMobileMenu.addEventListener('click', (event) =>{
     buttonOpenMobileMenu.classList.remove('_active')
     buttonCloseMobileMenu.classList.remove('_active')
     header.classList.remove('_active');
     page.classList.remove('_active')
     document.body.style.overflow = 'auto';

     deleteButtonForMobileMent()
})

function createButtonForMobileMent(){
     const headerContainer = document.querySelector('.header__container');
     const button = document.createElement('button')
     const div = document.createElement('div');

     headerContainer.append(div)
     div.classList.add('mobile__menu-buttons');
     div.append(button)
     button.classList.add('mobile__menu-button')
     button.innerHTML = `
          ОТПРАВИТЬ ЗАЯВКУ
          <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 7.5H19M19 7.5L12.5 1M19 7.5L12.5 14" stroke="#001E42" stroke-width="2"/>
          </svg> 
     `
}

function deleteButtonForMobileMent(){
     document.querySelector('.mobile__menu-buttons').remove()
}