import addHeader from "./modules/pageload"
import displayHome from "./modules/home"
import displayMenu from "./modules/menu"
import displayInfo from "./modules/about"


addHeader();
displayHome();

content = document.getElementById('content')

home = document.getElementById('home');
home.addEventListener('click', () => {
	content.textContent = '';
	displayHome();
});



menu = document.getElementById('menu');
menu.addEventListener('click', () => {
	content.textContent = '';
	displayMenu();
});


about = document.getElementById('about');
about.addEventListener('click', () => {
	content.textContent = '';
	displayInfo();
});


