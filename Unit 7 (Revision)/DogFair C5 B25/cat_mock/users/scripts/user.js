/** @format */

let form = document.querySelector("form");

form
  .addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
      name: form.name.value,
      age: +form.age.value,
      gender: form.gender.value,
      place: form.place.value,
    };
    console.log(obj)
    fetch(`https://cats-api-iarm.onrender.com/cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    
    }).then(()=>{
        alert("successfuly register")
    }).catch((err)=>{
        console.log(err)
    })

  })


  
 

