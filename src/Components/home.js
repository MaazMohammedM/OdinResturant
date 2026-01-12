import "../Styles/home.css"

export const loadHome = (parent)=>{
    let homeSection = document.createElement('section');
    homeSection.classList.add('home');
    let heroText = document.createElement('h1');
    heroText.innerText = 'Delicious Food & Wonderful Eating Experience';
    let heroSecondText = document.createElement('p');
    heroSecondText.innerText = 'We Serve Food, Harmony, & Laughter Since 1998';
    homeSection.appendChild(heroText);
    homeSection.appendChild(heroSecondText)
    parent.appendChild(homeSection)
}