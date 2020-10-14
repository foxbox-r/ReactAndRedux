function* infiniteAddGenerator(){
    let result = 0;
    while(true){
        result += yield result;
    }
}
const add = infiniteAddGenerator();
add.next();
console.log(add.next(10));
console.log(add.next(20));