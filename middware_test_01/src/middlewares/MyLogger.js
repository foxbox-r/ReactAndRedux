const MyLogger = store=>next=>action=>{
    console.log(action);
    console.log("\tPrev:",store.getState());
    const result = next(action);
    console.log("\tNext:",store.getState());
    
    return result;// dispatch 함수의 반환값
}
// 미들웨어는 디스패치를해서 액션인 넘어갈때 와 리듀서가 실행될때 사이에서 동작을 합니다.
export default MyLogger;