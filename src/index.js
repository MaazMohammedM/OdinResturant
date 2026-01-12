import './Styles/Styles.css'
import { loadHeader } from "./Components/header";
import { loadNav } from './Components/nav';
import { loadHome } from './Components/home';
import { loadAbout } from './Components/about';
import { loadContact } from './Components/contact';

const content = document.getElementById('content');

const headerContainer = document.createElement('header');
const maincontainer = document.createElement('main');
content.append(headerContainer,maincontainer);


loadHeader(headerContainer);
const nav = loadNav(headerContainer);

function loadPage(func){
maincontainer.innerHTML = '';
 func(maincontainer)
}

nav.homeBtn.addEventListener('click',()=>loadPage(loadHome))
nav.aboutBtn.addEventListener('click',()=>loadPage(loadAbout))
nav.contactBtn.addEventListener('click',()=>loadPage(loadContact))

loadHome(maincontainer);

