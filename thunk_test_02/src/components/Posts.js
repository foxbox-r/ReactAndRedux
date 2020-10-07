import React,{useState} from 'react';

function Posts({onGetPosts,onGetPostById,post,posts}){
    console.log("render Posts");
    const [value,setValue] = useState(1);
    const onChange = e=>{
        e.preventDefault();
        setValue(Number(e.target.value));
    }
    const {data,loading,error} = post;

    const isLoading = ()=>{
        if(loading) return <h2>loading...</h2>;
        else {
            if(data !== null && data !== undefined )
        return (
            <div>
                <h2>{data.title}</h2>
                <p>{data.body}</p><hr/>
            </div>
            );
        }
    }

    return (
        <div>
            <input value={value} type="number" placeholder="inser id you find" onChange={onChange}/><br/>
            <button onClick={()=>onGetPostById(value)}>get post</button>
            <hr/>
            {isLoading()}
        </div>
    )
}

export default Posts;