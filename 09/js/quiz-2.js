class Pet{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    run=function(){
        alert(`${this.name}이 뛰어갑니다.`);
    }
}

class Cat extends Pet{
    constructor(name,color,breed){
        super(name,color);
        this.breed = breed;
    }
    viewInfo=function(){
        alert(`이름: ${this.name}, 색깔: ${this.color}, 종류: ${this.breed}`);
    }
}

const myCat = new Cat('냥이','흰색','러시안블루');
console.log(myCat);
myCat.viewInfo();
