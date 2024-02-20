let usercount=0;
let compcount=0;

let choice=document.querySelectorAll(".imgc");
let outcome=document.querySelector(".start");
let user_count=document.querySelector("#userwin");
let comp_count=document.querySelector('#Computerwin');
computergame=()=>{
    const opt=["rock","paper","scissor"];
    let compId=Math.floor(Math.random()*3);
    return opt[compId];
}
playgeme=(userclick,compclick)=>{
 
    let user=true;
    
        if(userclick==="rock"){
            //scissor, paper 
            user=compclick==='scissor'?false:true;
        }
        else if(userclick==="paper"){
            // rock ,scissor
            user=compclick==='scissor'? false:true;
        }
        else if(userclick==="scissor"){
            user=compclick==='rock'?false:true;
        }
    
    return user;
}
choice.forEach((imgc)=>{
    imgc.addEventListener("click",()=>{
        //console.log(`image is clicked  ${imgc.getAttribute("id")} `);
        let userclick=imgc.getAttribute("id");
        let compclick=computergame();


        if(userclick===compclick){
            outcome.innerText="Game is drawed ";
            outcome.style.backgroundColor="#081b31";
            console.log("Game is draw");
        }
        else{
       let predict=playgeme(userclick,compclick);

       if(predict){
        usercount++;
        outcome.innerText="User is won  ";
        outcome.style.backgroundColor="green";
        user_count.innerText=usercount;
        console.log("user win");
       }
       else{
        compcount++;
        outcome.innerText="Computer is won ";
        outcome.style.backgroundColor="red";
        comp_count.innerText=compcount;
        console.log("computer win");
       }
    }
    })
})

