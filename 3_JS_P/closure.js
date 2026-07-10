// const { startTransition } = require("react");

// function bankAcount(){ //outer func
//     let balance = 10000;    //func scope means whatever declear in func 

//     return {
//         withdraw(amount){ //inner func
//          balance -= amount
//          console.log(`My Account Balance is ${balance}`)
//         },
//         deposite(amount){  //inner func
//          balance += amount
//          console.log(`My Account Balance is ${balance}`)
//         }
//     }
// }

// bankAcount().withdraw(3000)



function timer(){
    let time = 0;

    return {
        start(){
          setInterval(()=>{
        time++  
        console.log(time)
        },1000)
    },

        stop(){
         clearInterval(time)
        },
        
        reset(){
        this.stop()
        time=0;
        }

    }
}

timer().start();
