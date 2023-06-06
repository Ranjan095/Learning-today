import React from 'react'

export const Promises = () => {

// let data=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     // resolve({name:"Ranjan",city:"Madhubani"})
//     reject('somthing is wrong')
//   },2000);
// })

// data.then((ele)=>{
//   console.log(ele)
// }).catch((err)=>{
//   console.log(err)
// })
// console.log(data)

let data=Promise.all([
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("promise has resolved in 1second")
    }, 1000);
  }),
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("promise has resolved  in 4second")
    }, 4000);
  }),
  new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("promise has resolved in 3second")
    }, 3000);
  })
])
data.then((item)=>{
  console.log(item)
}).catch((err)=>{
  console.log(err)
})


  return (
    <div>
      <h1>Promises</h1>
    </div>
  )
}
