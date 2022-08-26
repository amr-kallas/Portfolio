let body=document.querySelector(".main-content");
let secbtns=document.querySelector(".controls");
let section=document.querySelectorAll(".section");
let secbtn=document.querySelectorAll(".control");

function activeBtn(){
    for(let i=0;i<secbtn.length;i++){
        secbtn[i].addEventListener('click',() => {
            let cureentbtn=document.querySelector(".active-btn");
            cureentbtn.className=cureentbtn.className.replace("active-btn"," ");
            secbtn[i].classList.add("active-btn");
            secbtn[i].classList.add("active");
        })
    }
    // active seciton
    body.addEventListener('click',(e) => {
        const id=e.target.dataset.id;
        if(id){
            secbtn.forEach((btn) => {
                btn.classList.remove('active');
            });
            // e.target.classList.add('active');

            // hide other section
            section.forEach((section) => {
                section.classList.remove('active');
            })
            const element=document.getElementById(id);
            element.classList.add('active');
        }
    })
}


activeBtn();