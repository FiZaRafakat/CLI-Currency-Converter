#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";

const currency:any= {
  USD: 1,
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  BDT: 110,
  AFN: 72.2,
  AED: 3.6 ,
  BTC: 0.000015,
  CNY: 7.2,
  EGP: 48.5,
  HKD: 7.83,
  IDR: 16337,
  IQD: 1310,
  IRR: 42062,
  JPY: 154.68,
  LBP: 89555,
  LYD: 4.83,
  MXN: 17.044,
  NZD: 1.697,
  OMR: 0.384,
  QAR: 3.641,
  RON: 4.6 ,
  SAR: 3.751,
  SGD: 1.3,
  TRY: 32.5,
  YER: 250,
  ZWL: 322,

};

async function startAnimate(text:string)  {
    for(let char of text){
       process.stdout.write(char);
       await new Promise  ((resolve)=>
        setTimeout(resolve,50)
    );
    }
}
clear()
async function main() {
    
   
    await startAnimate(chalk.bold.green.underline("\n\t\t\t WELCOME TO THE FIZA'S CURRENCY CONVERTER PROJECT\n"))
    await startAnimate(chalk.gray("\t\t\t-------------------------------------------------\n"))

let fromInput = await inquirer.prompt(
    
    
        {
  
             name: "from",
             type: "list",
             message : (chalk.yellow.underline("\t\tEnter From Currency :\n\n")),
             choices: ["USD", "EUR", "GBP", "INR", "PKR","BDT","AFN","AED","BTC","CNY","EGP","HKD","IDR","IQD","IRR","JPY","LBP","LYD","MXN","NZD","OMR","QAR","RON","SAR","SGD","TRY","YER","ZWL"],

        },)
        await startAnimate(chalk.gray("\t--------------------------------------\n\n"))
        let toInput = await inquirer.prompt(
        {

             name: "to",
             type: "list",
             message: (chalk.yellow.underline("\t\tEnter To Currency :\n\n")),
             choices: ["USD", "EUR", "GBP", "INR", "PKR", "BDT","AFN","AED","BTC","CNY","EGP","HKD","IDR","IQD","IRR","JPY","LBP","LYD","MXN","NZD","OMR","QAR","RON","SAR","SGD","TRY","YER","ZWL"],

        },)
        await startAnimate(chalk.gray("\t--------------------------------------\n\n"))
        let input = await inquirer.prompt(
        {

             name: "amount",
             type: "number",
             message: (chalk.yellow.underline("\t\tEnter amount here :\n\n")),

        },
        
    );
    await startAnimate(chalk.gray("\t--------------------------------------\n\n"))
    
    let fromAmount = currency[fromInput.from]
    let toAmount = currency[toInput.to]
    let amount = input.amount
    let baseAmount = amount / fromAmount
    let convertedAmount = baseAmount * toAmount
    console.log(chalk.magentaBright.underline("\tThe "+ input.amount +" from "+fromInput.from+" to "+toInput.to+" is equal to "+convertedAmount))
    await startAnimate(chalk.gray("\t------------------------------------------\n\n"))
    let restart:any = await inquirer.prompt({
        name : "restart",
        type : "confirm",
        message : (chalk.red.underline("Do you want to Exit ?\n")),

    })
    if (restart.restart){
        await startAnimate(chalk.green.bold.underline("\n\t\t\tThanks For using my Currency converter Project :-)\n"))
    }else{
        clear()
        main()
    }
}
main()