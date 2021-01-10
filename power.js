var totalp = document.querySelector("#tprice");
var paidp = document.querySelector("#paid");
var sub = document.querySelector("#mutton");
var noteBlocks = document.querySelector(".noteBlock");
var eror = document.querySelector(".error");

var money = [2000, 500, 200, 100, 20, 10, 5, 1];

var a = 0;

 function clearous(){
    noteBlocks.innerText = "";
    noteBlocks.style.margin = "0rem 0rem 0rem 0rem";
    noteBlocks.style.border = "0rem black solid";
 }

  


function errors(total,paid){
    // noteBlocks.style.margin = "0rem 0rem 0rem 10rem";
    // noteBlocks.style.width = "26rem";
    // noteBlocks.style.border = "0.1rem black solid";
    // noteBlocks.style.height = "36rem";
    // noteBlocks.style.animation = "nbc 2s ease";
    clearous();
    eror.innerHTML = "";
    if(paid == "" || total == "" || paid < 0 || total < 0){
        try {
            if(total == "" || paid == "") throw "can't be empty";
            if(total < 0 || paid < 0) throw "can't be negative";
          }
          catch(err) {
            eror.innerHTML = "Input " + err;
          }
        }
    else if(paid < total){
        eror.innerHTML = "Sorry Paid amount is less then Total amount";
    }
    else{
        process(total,paid);
        console.log("noo");
    }
}

function process(total, paid){
    clearous();
    noteBlocks.style.margin = "0rem 0rem 0rem 10rem";
    noteBlocks.style.border = "0.1rem black solid";
    var leftAmt = paid - total;
    var head = document.createElement('div');
    noteBlocks.appendChild(head);
    head.innerText = " Notes to Return!"
    head.style.margin = "1rem 0rem 0.8rem 0rem";
    head.style.animation = "lists 1s ease";
    head.style.textAlign = "center";

    for(var i = 0; i < 8; i++){
        if(parseInt(leftAmt) >= money[i]){
            console.log(leftAmt)
            var quo = parseInt(leftAmt / money[i]);
            console.log(money[i]);
            var rem = parseInt(leftAmt) - (parseInt(quo) * money[i]);
            var res = parseInt(quo);
            // var image = document.createElement('img');
            // image.src = 'iconmonstr-currency-25.svg';


            var list = document.createElement('div');
            list.classList.add("liststyle");
            list.style.animationDelay = "2s";
            list.style.animation = "lists 1s ease";
            list.innerHTML = "<img src = \"iconmonstr-currency-25.svg\">";
            list.innerText = "₹ " + money[i] + " ↔ " + res;
            // var list = document.createElement('li');
            // list.innerText = note[i] + " ka " + res;
            

            noteBlocks.appendChild(list);
            console.log(quo.toFixed(0) * money[i] + " " + rem);
            leftAmt = rem;
            if(rem == 0){
                break; 
            }
        }
    }
}