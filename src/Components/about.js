import '../Styles/about.css'

export const loadAbout = (parent)=>{
    let aboutSection = document.createElement('section');
    let aboutText = document.createElement('p');
    aboutText.innerText = "Welcome to The Hearthstone Bistro, where rustic charm meets modern comfort in the heart of downtown. Our story began with Chef Maria's grandmother's handwritten recipes, inspiring our commitment to seasonal, locally-sourced ingredients from farms just miles away. We're not just serving food; we're crafting memories over wood-fired pizzas and handcrafted cocktails. Join our family for a warm, authentic dining experience you won't find anywhere else—check out our menu or book your table below!";
    aboutSection.append(aboutText);
    aboutSection.classList.add('about');
    parent.appendChild(aboutSection)
}