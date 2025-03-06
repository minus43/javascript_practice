class Pet{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run=function(){
        alert(`${this.name}이 뛰어갑니다.`);
    }
}

const myPet = new Pet('멍멍이','흰색');
console.log(myPet.__proto__);
myPet.run();
