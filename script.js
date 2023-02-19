let header = document.querySelector(".header")
let btn = document.querySelectorAll(".icon")
let closeBtn=document.querySelectorAll(".cancel");
let sendBtn = document.querySelectorAll(".call")
let peoples = document.getElementsByClassName("customer")


btn.forEach(element => {
    element.addEventListener("click",function(){
        header.classList.toggle("active")
    })
});

closeBtn.forEach(function(button){
    button.addEventListener("click",function(){
       document.getElementById("history").classList.toggle("active")
    })
})
   


    sendBtn.forEach(function(b){
        b.addEventListener("click",function(){

            document.querySelector(".send-money").classList.toggle("active")
        })
    })















document.getElementById("sendBtn").addEventListener("click",function(){
    let myAccountBalance = parseInt( document.getElementById("myAccountBalance").textContent);
   
    let enterAmt = parseInt(document.getElementById("enterAmt").value)
    if(enterAmt>myAccountBalance){
        alert("Insufficient Balance")
    }else{
        let name = document.getElementById("name").value;
        nameBal = name +"Balance"
        if(document.getElementById(nameBal)!=null){
            sendAmt = parseInt(document.getElementById(nameBal).innerHTML)+enterAmt;
            userAmt = parseInt(myAccountBalance - enterAmt) 
            document.getElementById("myAccountBalance").innerHTML = userAmt
            document.getElementById(nameBal).innerHTML =sendAmt
            alert(`Successful Transaction !!  ${enterAmt} is sent to ${name}@sparksbank.`)



            // history 
            let list = document.createElement("li");
            list = `${enterAmt} is sent to ${name}@sparksbank on ${Date()}` 
            let historyList = document.getElementById("history-list")
            historyList.insertAdjacentHTML("afterbegin",`<li>${enterAmt} is sent to ${name}@sparksbank on ${Date()}</li>`)

            
        }
        else{
            alert("User not Found")
        }

    }
})













