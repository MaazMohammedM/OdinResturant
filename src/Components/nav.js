export const loadNav = (parent) => {
    const nav = document.createElement('nav');
    const homeBtn = document.createElement('button');
    const aboutBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.innerText = "Home";
    aboutBtn.innerText = "About";
    contactBtn.innerText = "Contact";
    nav.append(homeBtn,aboutBtn,contactBtn);
    parent.appendChild(nav);

    return {homeBtn,contactBtn,aboutBtn};
}