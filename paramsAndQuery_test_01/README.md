params 사용하기
===

```
function Profile({match}){
    const {userName} = match.params;
    const profile = profileData[userName];
    if(!profile) return <h1>not exist profile.</h1>
    return (
        <div>
            <h1>{userName} : {profile.name}</h1>
            <p>{profile.job}</p>
        </div>
    )
}
```

컴포넌트에 match객체를 받아서 사용합니다.

===
query 사용하기
===

```
import qs  from "qs"

function About({location}){
    console.log(location);
    const query =  qs.parse(location.search,{
        ignoreQueryPrefix:true,
    });
    console.log(query);
    const {detail} = query;
    return (
        <div>
            <h1>ABOUT</h1>
            {detail==="true"?<h2>detail:true</h2>:<h2>detail:flase</h2>}
        </div>
    )
}
```
컴포넌트에 location객체를 받아 qs로 파싱을 하여 사용합니다.