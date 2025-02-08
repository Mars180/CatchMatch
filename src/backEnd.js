// fake data set for demo
let suppliers = new Map([
    ["supplierOne", ["Wholesale", "5", "Shellfish", "Crustacean"]],
    ["supplierTwo", ["Wholesale", "5", "Shellfish", "Crustacean"]],
    ["supplierThree", ["Wholesale", "30", "Shellfish", "Mullosk"]],
    ["supplierFour", ["Market", "10", "Fish", "Crustacean"]],
    ["supplierFive", ["Market", "15", "Fish", "Mullosk"]]
]);

let userList = ["Wholesale", "5", "Shellfish", "Crustacean"];

function bizInfo (value) {
   //userList.push(value); 
   console.log(value); 
}

let valid = 0;
let validList = [];
if (userList.length == 4) {
    for (let i = 0; i < suppliers.length; i++) {
        if (valid == 4) {
            validList.push(suppliers[i])
        }
        else {
            for (let j = 0; j < suppliers[i].length; j++) {
                if (suppliers[i][j] != userList[j]) {
                    break;
                    valid = 0;
                }
                else {
                    valid += 1;
                }
            }
        }
    }
}

for (let i = 0; i < validList.length; i++) {
    console.log(validList[i]);
}
