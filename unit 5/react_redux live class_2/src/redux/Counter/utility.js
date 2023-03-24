
export let getCounter=((key)=>{
    let counter= JSON.parse(localStorage.getItem(key));
    return counter
});

export let postCounter=((key,payload)=>{
    let counter=localStorage.setItem(key,JSON.stringify(payload));
    return counter;
})