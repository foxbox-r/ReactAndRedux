const Logger = store=>next=>action=>{
    console.log("prev",action,store.getState());
    next(action);
    console.log("next",action,store.getState());

}


export default Logger;

