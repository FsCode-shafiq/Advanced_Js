// **** Super()

//The super keyword is used to access and call functions on an object's parent.

class father {
    constructor(money){
        this.money = money-1;
    }
    showFatherMoney=()=>{
        console.log('Father money is: ', this.money);
    }
}
class son extends father{
    constructor(money){
        console.log(money);
        super(money);
    }
    showMoney = ()=>{
        console.log(`Money is`, this.money);
    }
}

let Son = new  son(10000);
Son.showMoney();