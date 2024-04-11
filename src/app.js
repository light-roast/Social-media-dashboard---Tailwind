document.addEventListener('DOMContentLoaded', ()=> {
    const switche = document.getElementById("switch");
    const html = document.documentElement;
    if(html.getAttribute('class') === 'dark'){
        switche.checked = true;
    }

    function toggle(){
        const theme = switche.checked ? 'dark' : 'light';
        html.setAttribute('class', theme);

        localStorage.setItem('theme', theme);
    }

    switche.addEventListener('change', toggle);

})