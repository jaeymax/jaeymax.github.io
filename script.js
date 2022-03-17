const themeDots = document.getElementsByClassName('theme-dot');
const themeStyle = document.getElementById('theme-style');


const theme = localStorage.getItem('theme')
themeStyle.href = theme + '.css';




 const handleClick = (e) =>{
     const theme = e.target.dataset.mode
     if(theme == 'light'){
        themeStyle.href = 'default.css';
     }else{
        themeStyle.href = theme + '.css';
     }
     localStorage.setItem('theme', theme);
}

for(let i = 0; i < themeDots.length; i++){
    themeDots[i].addEventListener('click', (event)=> handleClick(event));
}
