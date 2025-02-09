function compare(listOne, listTwo) {
    for (let i = 0; i < listOne.length; i++) {
        if (listOne[i] != listTwo[i]) {
            return false;
        }
    }
    
    return true;
}

let userList = [];

function bizInfo(value) {
    userList.push(value);
    //t.push(value);
}

function continueBtn(){
    // const btnOption1 = document.getElementById("crustaceanBtn");
    // const btnOption2 = document.getElementById("molluskBtn");

    // button1color = btnOption1.

    // if ( &&){
    //     bizInfo("Both");
    // } else if (){
    //     bizInfo("Mollusk");
    // } else if () {
    bizInfo("Crustacean");
    // }
}

// fake data set for demo
let suppliers = new Map([
    [0, ["Wholesale", "5", "Shellfish", "Crustacean"]],
    [1, ["Wholesale", "5", "Shellfish", "Crustacean"]],
    [2, ["Wholesale", "30", "Shellfish", "Mullosk"]],
    [3, ["Market", "10", "Fish", "Crustacean"]],
    [4, ["Market", "15", "Fish", "Mullosk"]]
]);

let validList = [];

for (let i = 0; i < suppliers.size; i++) {
    if (suppliers.get(i).length == userList.length) {
        let valid = compare(userList, suppliers.get(i));
        
        if (valid == true) {
            validList.push(i);
        }
    }
}
    