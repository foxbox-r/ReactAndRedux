#thunk란?
thunk는 디스패치에 전달되는 액션이 타입이 객체가 아니라 함수일때 그 함수가 실해되는데 그함수가 thunk함수다.

```
const middleWare = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

//... 미들웨어가 떵크 함수를 인식하는 방법

const actionFunc = (value="default")=>({
    type:"CHANGE_STATE",
    value
});

cosnt thunkCreater = () => (dispatch,getState)=>{
    dispatch(actionFunc("not-default-value"));
}

dispatch(thunkCreater());

```

thunkCreater 함수는 떵크함수를 만들어주는 함수이다.
 
