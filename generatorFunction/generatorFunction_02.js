function* sumGenerator(){
    //next1
    console.log("sumGenerator가 시작함");
    // next1

    //next2
    let a = yield;
    console.log("get value A");
    // next2

    //next3
    let b = yield;
    console.log("get vlaue B");
    return a+b;
    //next3
}

const sum = sumGenerator();
sum.next();
sum.next(2);
console.log(sum.next(3));