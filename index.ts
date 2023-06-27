// This is our main function
import * as readline from 'readline';

function fizzbuzz(upperLimit:number, flag3:boolean, flag5:boolean, flag7:boolean, flag11:boolean, flag13:boolean, flag17:boolean, dictionaryRules: {[key: number]: string}): void {
    console.log("Hello, World!");
    // Put your code here...
    for(let i = 1; i <= upperLimit; i++) {
        let message:string = "";
        let multiple11:boolean = false;
        let reverse:boolean = false;
        if(flag17 && i % 17 === 0) {
            reverse = true;
        }
        if(flag11 && i % 11 === 0) {
            if(flag13 && i % 13 == 0) {
                if(reverse === true) {
                    message = "Fezz" + message;
                } else {
                    message += "Fezz";
                }
            }
            if(reverse === true) {
                message = "Bong" + message;
            } else {
                message += "Bong";
            }
            multiple11 = true;
        }
        if(multiple11 === false) {
            if (flag3 && i % 3 === 0) {
                if(reverse === true) {
                    message = "Fizz" + message;
                } else {
                    message += "Fizz";
                }
            }
            if(flag13 && i % 13 === 0) {
                if(reverse === true) {
                    message = "Fezz" + message;
                } else {
                    message += "Fezz";
                }
            }
            if (flag5 && i % 5 === 0) {
                if(reverse === true) {
                    message= "Buzz" + message;
                } else {
                    message += "Buzz";
                }
            }
            if (flag7 && i % 7 === 0) {
                if(reverse === true) {
                    message = "Bang" + message;
                } else {
                    message += "Bang";
                }
            }

            Object.keys(dictionaryRules).forEach((key) => {
                const x = parseInt(key);
                // @ts-ignore
                if(i % x === 0) {
                    if(reverse === true) {
                        message = dictionaryRules[x] + message;
                    } else {
                        message += dictionaryRules[x];
                    }
                }
            });

            if (message === "") {
                message += i;
            }
        }
        console.log(message);
    }
}

// Now, we run the main function:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insert a number limit, which rules you want to keep,0 anf the new rules (number, word) ', (answer) => {
    let args = answer.split(" ");
    let limit = parseInt(args[0]);
    let flag3 = false;
    let flag5 = false;
    let flag7 = false;
    let flag11 = false;
    let flag13 = false;
    let flag17 = false;
    let i;
    for (i = 1; i < args.length; i++) {
        let ruleNo:number = parseInt(args[i]);
        if (ruleNo === 0) {
            break;
        }
        if(ruleNo === 3) {
            flag3 = true;
        }
        if(ruleNo === 5) {
            flag5 = true;
        }
        if(ruleNo === 7) {
            flag7 = true;
        }
        if(ruleNo === 11) {
            flag11 = true;
        }
        if(ruleNo === 13) {
            flag13 = true;
        }
        if(ruleNo === 17) {
            flag17 = true;
        }
    }
    let dictionaryRules:Record<number,string> = {};
    i++;
    for (i; i < args.length; i++) {
        let ruleNo:number = parseInt(args[i]);
        i++;
        dictionaryRules[ruleNo] =  args[i];
    }

    fizzbuzz(limit, flag3, flag5, flag7, flag11, flag13, flag17,dictionaryRules);
    rl.close();
});
