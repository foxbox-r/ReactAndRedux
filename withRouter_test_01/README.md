withRouter() 란?
====
withRouter 란 react-router-dom에 있는 Route된 컴포넌트가 아니여도 history,match,location객체를 사용할수있게 하는 함수다

# withRouter 사용법
```
import React from 'react';
import {withRouter} from "react-router-dom"

function WithRouterSample({match,location,history}){

    return (
        <div>
                ...code.....
        </div>
    )
}

export default withRouter(WithRouterSample);
```
react-router-dom 에서 import 하고, export 할때 withRouter 함수로 감싸준다.

# 어느 부모레벨에서 오는 match,locaion 객체인가?
match,location객체는 withRouter로 감싸진 태그를 사용한 컴포넌트의 match,location객체를 그대로 물려 받는다.
```

const WithRouterChild = withRouter(({match,location})=>{
    //Parent 컴포넌트의 match,location객체를 사용함
    ... code ...
});

function Parent({match,location}){
    return <WithRouterChild />
}

```