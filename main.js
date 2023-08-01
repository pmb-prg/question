const click = document.querySelectorAll(".clickMe");
const go = document.querySelectorAll(".next");

let i = 0;
click.forEach(element => {
    element.addEventListener("click", ()=>{
        if(element.id === "true"){
            element.style.backgroundColor="green";
        }else{
            element.style.backgroundColor="red";
        }
        element.style.color="white"
        i++;
        if(i == 5){
            setTimeout(()=>alert("The questions are over"),1000);
        }else{
            setTimeout(()=>go[i].scrollIntoView(),1000);
        }
        
        
        
    });
});


