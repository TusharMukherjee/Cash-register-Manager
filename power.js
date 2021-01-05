var totalp = document.querySelector("#tprice");
var paidp = document.querySelector("#paid");
var sub = document.querySelector("#mutton");
var rupyaa = document.querySelector("#rupya");

var money = [2000, 500, 200, 100, 20, 10, 5, 1];

var a = 0;

function clearous(){
    rupyaa.innerText = "";
}

function errors(total,paid){
    if(paid == "" || total == "" || paid < 0 || total < 0){
        try {
            if(total == "" || paid == "") throw "can't be empty";
            if(total < 0 || paid < 0) throw "can't be negative";
          }
          catch(err) {
            rupyaa.innerText = "Input " + err;
          }
        }
        else if(paid < total){
            rupyaa.innerText = "Sorry Paid amount is less then Total amount"
        }
}

function process(total, paid){
    clearous();
    errors(total, paid);
    var leftAmt = paid - total;
    for(var i = 0; i < 8; i++){
        if(parseInt(leftAmt) >= money[i]){
            console.log(leftAmt)
            var quo = parseInt(leftAmt / money[i]);
            console.log(money[i]);
            var rem = parseInt(leftAmt) - (parseInt(quo) * money[i]);
            var res = parseInt(quo);
            var list = document.createElement('div');
            list.innerText = "₹" + money[i] + " ↔ " + res;
            // var list = document.createElement('li');
            // list.innerText = note[i] + " ka " + res;
            rupyaa.appendChild(list);
            console.log(quo.toFixed(0) * money[i] + " " + rem);
            leftAmt = rem;
            if(rem == 0){
                break; 
            }
        }
    }
}