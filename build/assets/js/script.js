let hireMe = document.getElementById('hireMe'),
    munuActivePopUp = document.getElementById('munuActivePopUp'),
    workActivePopUp = document.getElementById('accept'),
    pupUpHireMe =  document.getElementById('HireMe_popUp'),
    menu_popUp =  document.getElementById('menu_popUp'),
    work_popUp =  document.getElementById('work_popUp'),
    hireMeClose =  document.getElementById('HireMeClose'),
    workClose =  document.getElementById('workClose'),
    menuClose =  document.getElementById('MenuClose');

hireMe.onclick =()=>{
    pupUpHireMe.className += ' windows-active';
};

hireMeClose.onclick=()=>{
    pupUpHireMe.classList.remove('windows-active');
};


munuActivePopUp.onclick =()=>{
    menu_popUp.className += ' windows-active';
};
workActivePopUp.onclick =()=>{
    work_popUp.className += ' windows-active';
};

menuClose.onclick=()=>{
    menu_popUp.classList.remove('windows-active');
};
menuClose.onclick=()=>{
    menu_popUp.classList.remove('windows-active');
};
workClose.onclick=()=>{
    work_popUp.classList.remove('windows-active');
};
