import '../Styles/contact.css'

export const loadContact = (parent)=>{
    let contactSection = document.createElement('section');
    let contactText = document.createElement('p');
    contactText.innerText = 'Address: PO Box 1212, California, US.';
    contactSection.appendChild(contactText);
    contactSection.classList.add('contact');
    parent.appendChild(contactSection)
}