import '../Styles/header.css'


export const loadHeader = (parent)=>{
    const header = document.createElement('header');
    const headerText = document.createElement('p');
    headerText.innerText = "Welcome to The Hearthstone Bistro";
    header.appendChild(headerText);
    parent.appendChild(header);

}