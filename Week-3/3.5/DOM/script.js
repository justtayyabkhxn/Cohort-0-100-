const x = document.getElementById("form").elements.length;
const display=document.getElementById("display");
const display2=document.getElementById("display2");
function myfunction() {
    const y = document.getElementById("form").elements[0].value;
    console.log(y);
    display.innerHTML=`Hello ${y}`;
    const pass=document.getElementById("form").elements[1].value
    console.log(pass);
    display2.innerHTML=`password: ${pass}`;

    //creating a new element
    const para=document.createElement("p");
    para.innerHTML="Hello thsi is a new paragraph";
    document.body.appendChild(para);

    const paragraph=document.querySelectorAll("p");
    paragraph.forEach(paragraph=> paragraph.style.backgroundColor="red")
}

function increaseFont(){
    const para=document.getElementById("para");
    para.style.fontSize="50px";
    para.style.color="red";
    para.style.wordSpacing="10px";
}