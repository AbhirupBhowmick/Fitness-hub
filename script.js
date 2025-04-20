let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Code 

const typed = new Typed('.multiple-text', {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Loss', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });

  const joinbtn = document.querySelectorAll('.nav-btn');
  joinbtn.addEventListener("click", () => {
    const encodemessage = "hi i am interested to take admission please share the details for further procedure"

    const link = `https://api.whatsapp.com/send?phone=918017737206&text=${encodemessage}`
    window.open(link,encodemessage)
  })

  const encodemessage = "hi i am interested to take admission please share the details for further procedure"

  const link = `https://api.whatsapp.com/send?phone=918017737206&text=${encodemessage}`
  window.open(link,encodemessage)
  
  
