function* generatorFunction(){
    console.log("hi");
    yield 1;
    console.log("generator function");
    yield 2;
    console.log("function*");
    yield 3;
    return 4;
}

const g = generatorFunction();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());