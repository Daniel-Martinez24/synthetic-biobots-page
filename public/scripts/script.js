const menu = document.getElementById("menu");
menu.addEventListener("click", function(){ headerAparecer(); });

const headerAparecer = () => {
    const header = document.getElementsByTagName("header");
    header[0].style.display == 'none' ?
    header[0].style.display = 'none' : header[0].style.display = 'block';
}
