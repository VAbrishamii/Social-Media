// sidebar 
const menuItems = document.querySelectorAll('.menu-item');
// massages
const massagesNotification = document.querySelector('#massages-notification');
const massages = document.querySelector('.masseges');
const message = massages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPlalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// remove active class for all menu item
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');

    })
}

menuItems.forEach (item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notificatin, .notification-count').style.display = 'none';
           
        }
    })
})
// ---------massagages--------------
// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);

    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}
// search chat
messageSearch.addEventListener('keyup', searchMessage);

// highlight messages card when messages menu item is clicked
massagesNotification.addEventListener('click',()=>  {
    massages.style.boxShadow = '0 0 1rem var(--color-primary)';
    massagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        massages.style.boxShadow = 'none';
    },2000);

})

// theme/display customization

// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


// closes modal
themeModal.addEventListener('click', closeThemeModal);

// opens modal
theme.addEventListener('click', openThemeModal);



// ****************FONT***************

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', ()=> {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
})

    })

    // remove active class from colors
    const changeActiveColorClass = () => {
        colorPlalette.forEach(color => {
            color.classList.remove('active');
        })
    }

   // change primary colors
   colorPlalette.forEach(color => {
        color.addEventListener('click', () => {
            let primaryHue;
            changeActiveColorClass();

            if(color.classList.contains('color1')){
                primaryHue = 252;
            } else if(color.classList.contains('color2')){
                primaryHue = 52;
            } else if(color.classList.contains('color3')){
                primaryHue = 352;
            } else if(color.classList.contains('color4')){
                primaryHue = 152;
            } else if(color.classList.contains('color5')){
                primaryHue = 202;
            }

            color.classList.add('active');
            

            root.style.setProperty('--primary-color-hue', primaryHue);
    })

});



// theme backgroung values
let lightColorLightness;
let whiteColorLightness;
let darkColorLighness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLighness);
}
// chnage background color
Bg1.addEventListener('click', () => {
    
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
 
})

Bg2.addEventListener('click', () => {
    darkColorLighness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLighness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

})
    
 

