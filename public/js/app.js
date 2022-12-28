
const toogleDarkModeBtn=document.getElementById('darkmodeBtn');


toogleDarkModeBtn.addEventListener('click',(e)=>{

  if(document.documentElement.classList.contains('dark')){
    localStorage.theme='light';

    document.documentElement.classList.remove('dark');
}else {
    localStorage.theme='dark';
    document.documentElement.classList.add('dark');
}

})