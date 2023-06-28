// This is our main function
import * as readline from 'readline';

function fizzbuzz(upperLimit:number, dictionaryFlags: {[key: number]: boolean}, dictionaryRules: {[key: number]: string}): void {
    console.log("Hello, World!");
    // Put your code here...
    for (let currNumber = 1; currNumber <= upperLimit; currNumber++) {
        let message: string = "";
        let reverse: boolean = false;
        let multiple11: boolean = false;

        if (dictionaryFlags[17] && currNumber % 17 === 0) {
            reverse = true;
        }

        if (dictionaryFlags[11] && currNumber % 11 === 0) {
            multiple11 = true;
        }

        if (dictionaryFlags[3] && currNumber % 3 === 0 && !multiple11) {
            if (reverse === true) {
                message = "Fizz" + message;
            } else {
                message += "Fizz";
            }
        }
        if (dictionaryFlags[13] && currNumber % 13 === 0) {
            if (reverse === true) {
                message = "Fezz" + message;
            } else {
                message += "Fezz";
            }
        }
        if (dictionaryFlags[5] && currNumber % 5 === 0 && !multiple11) {
            if (reverse === true) {
                message= "Buzz" + message;
            } else {
                message += "Buzz";
            }
        }
        if (dictionaryFlags[7] && currNumber % 7 === 0 && !multiple11) {
            if (reverse === true) {
                message = "Bang" + message;
            } else {
                message += "Bang";
            }
        }
        if (dictionaryFlags[11] && currNumber % 11 === 0) {
            if (reverse === true) {
                message = "Bong" + message;
            } else {
                message += "Bong";
            }
        }


        Object.keys(dictionaryRules).forEach((key) => {
            const x = parseInt(key);
            // @ts-ignore
            if (currNumber % x === 0) {
                if (reverse === true) {
                    message = dictionaryRules[x] + message;
                } else {
                    message += dictionaryRules[x];
                }
            }
        });

        if (message.length === 0) {
            message += currNumber;
        }
        console.log(message);
    }
}

// Now, we run the main function:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insert a number limit, which rules you want to keep, 0 and the new rules (number, word) ', (answer) => {
    const args = answer.split(" ");
    const limit = parseInt(args[0]);
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
        if (ruleNo === 3) {
            flag3 = true;
        }
        if (ruleNo === 5) {
            flag5 = true;
        }
        if (ruleNo === 7) {
            flag7 = true;
        }
        if (ruleNo === 11) {
            flag11 = true;
        }
        if (ruleNo === 13) {
            flag13 = true;
        }
        if (ruleNo === 17) {
            flag17 = true;
        }
    }
    let dictionaryFlags: Record<number,boolean> = {};
    dictionaryFlags[3] = flag3;
    dictionaryFlags[5] = flag5;
    dictionaryFlags[7] = flag7;
    dictionaryFlags[11] = flag11;
    dictionaryFlags[13] = flag13;
    dictionaryFlags[17] = flag17;


    let dictionaryRules: Record<number,string> = {};
    i++;
    for (i; i < args.length; i++) {
        let ruleNo: number = parseInt(args[i]);
        i++;
        dictionaryRules[ruleNo] =  args[i];
    }

    fizzbuzz(limit, dictionaryFlags, dictionaryRules);
    rl.close();
});
