const sleep = n=> new Promise((resolve)=>setTimeout(resolve,n));

const posts = [
    {
        id:1,
        title:"first",
        body:"first is fast"
    },
    {
        id:2,
        title:"second",
        body:"second is nomal"
    },
    {
        id:3,
        title:"third",
        body:"third is slow"
    }
]

const delayTime = 500;
export const getPosts = async ()=>{
    await sleep(delayTime);
    return posts;
}

export const getPostById = async id=>{
    await sleep(delayTime);
    return posts.find(post=>post.id===id);
}