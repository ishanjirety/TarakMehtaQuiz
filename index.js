const realine_sync= require('readline-sync');
const chalk = require('chalk');

/**
 * Quiz On Tarak Mehta Ka oolta Chashma
 */
function quiz(question,n){

    /**
     * Inputs And Decorators
     */
    var qno = n+1;
    var random = Math.floor((Math.random() * 3) + 0);
    console.log(chalk.blue("Q"+ qno +". " +question.que + "  "));
    // Random Arrangement Of Ans.
    var formArr=[];

    if(random === 1){
        formArr[0]=question.right
        formArr[1]=question.wrong2
        formArr[2]=question.wrong3
        formArr[3]=question.wrong1
    }
    else if (random === 2){
            formArr[0]=question.wrong2
            formArr[1]=question.right
            formArr[2]=question.wrong3
            formArr[3]=question.wrong1
        }
    else if (random===3){
        formArr[0]=question.wrong2
        formArr[1]=question.wrong3
        formArr[2]=question.right
        formArr[3]=question.wrong1
        }
    else{
        formArr[0]=question.wrong2
        formArr[1]=question.wrong3
        formArr[2]=question.wrong1
        formArr[3]=question.right  
        }    

    
    
    for(var i=0 ;i<4;i++){
        console.log(i + " " +chalk.green(formArr[i]));
    }
    /**
     * Input
     */
    var ans = realine_sync.question("Choose The Correct Option : ");
    // Decision
    if(formArr[ans] === questions_ans[n].right){
        console.log(chalk.bgGreen("\nRight Ans ") + "\nCurrent Score : " +chalk.red(++score) +"\n" );
    }
    else{
        console.log(chalk.bgRed("\nWrong Ans \n"));
    }
}

//  Created Score Card 

Highest_score=[
    {
        Name:"Ishan",
        score:"5"
    }
]

var score=0;

questions_ans=[
    {
        que:"who all are part of Tapu Sena?",
        wrong1:"Ross and Will Colbert",
        wrong2:"Tapu, Gogi, and Pinki.",
        wrong3:"Tapu akela hi puri sena hai",
        right:"Tapu, Sonu, Goli, Gogi, and Pinku."
    },
    {
        que:"What is Jethalal's father, Bapu ji's, real name?",
        wrong1:"Champak Sharma Gada",
        wrong2:"Natwarlal Prabhashankar Udhaiwala ",
        wrong3:"Jayantilal Giridharlal Gada",
        right:"Champaklal Jayantilal Gada"
    }
    ,
    {
        que:"Most evenings, the group gets together at a shop to discuss everything under the sun. What is the name of the shop?",
        wrong1:"Abdul Miyan's Store",
        wrong2:"Aao-Khao store.",
        wrong3:"General Store",
        right:"All-In-One General Store"
    },
    {
        que:"What is the name of the company where Popatlal works as a reporter?",
        wrong1:"Express Mail",
        wrong2:"Toofan Mail.",
        wrong3:"Aandhi Express",
        right:"Toofan Express"
    }
    ,
    {
        que:"Other than being the society's secretary and a teacher, what is Bhide's side job?",
        wrong1:"He is an electrician.",
        wrong2:"He is a carpenter",
        wrong3:"How does he even have the time to do a third job?",
        right:"He delivers the pickles and papad that his wife makes."
    }
];

for(var i=0 ;i<5;i++){
    n=i;
    quiz(questions_ans[i],n);
}
if (score >= Highest_score[0].score){
    console.log(chalk.magenta("New Highest Score : " + Highest_score[0].score))    
}
else{
    console.log(chalk.magenta("Total Highest Score : " + Highest_score[0].score))
    console.log(chalk.magenta("Your Highest Score : " + score))
    
}
