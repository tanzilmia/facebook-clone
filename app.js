var settingsMenu = document.querySelector('.settings__menu');
var darkBtn = document.getElementById('dark-btn');
function settingsMenuToggle(){
   settingsMenu.classList.toggle('setting__menu-height')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark__btn-on')
    document.body.classList.toggle('dark-theme')


   if(localStorage.getItem('theme') == 'light'){
    localStorage.setItem('theme', 'dark');
   }else{
    localStorage.setItem('theme', 'light');
   }
}

// use localstorage

if(localStorage.getItem('theme') == 'light'){
    darkBtn.classList.remove('dark__btn-on');
    document.body.classList.remove('dark-theme');

}
else if(localStorage.getItem('theme') == 'dark'){
    darkBtn.classList.add('dark__btn-on');
    document.body.classList.add('dark-theme');
}

else{
    localStorage.setItem('theme', 'light');
}









































































