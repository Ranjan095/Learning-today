import axios from "axios"

export let getTodo=(dispatch)=>{
    // dispatch({type:GET_TODO_REQUEST})
    axios.get('http://localhost:8080/todo').then((res)=>{
        // console.log(res.data)
        dispatch({type:GET_TODO_SUCCESS,payload:res.data})
    }).catch((err)=>{
        // dispatch({type:GET_TODO_ERROR})
    })
      }

      export let addTodo=(data)=>{
        axios.post('http://localhost:8080/todo',data).then(()=>{
            getTodo()
        })
          }