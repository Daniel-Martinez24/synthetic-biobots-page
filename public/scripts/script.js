const menu = document.getElementById("menu");
const header = document.getElementsByClassName("header-right");
const link_a_secciones = header[0].getElementsByTagName("a");

const headerAparecer = () => {
    const header = document.getElementsByTagName("header");
    header[0].style.display == 'block' ?
    header[0].style.display = 'none' : header[0].style.display = 'block';
}

menu.addEventListener("click", function(){ headerAparecer(); });

if (screen.width < 600) {
    Object.values(link_a_secciones).map(links => links.addEventListener("click", () => {headerAparecer();} ));
}

// console.log(Object.values(link_a_secciones));