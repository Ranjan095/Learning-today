/** @format */
let container = document.querySelector("#container");
let totalCount = document.querySelector("#totalCount");
let filter = document.querySelector("#filter");
let sort = document.querySelector("#sort");
let search = document.querySelector("#search");
let form = document.querySelector("#edit");


let Alldata;
// let token = localStorage.getItem("token")
// if(!token){
//     window.location.href= "/admin/pages/login.html"
// }

async function getData(url=`https://cats-api-iarm.onrender.com/cats`) {
  let res = await fetch(url)
  let data=await res.json()
  showData(data);
  Alldata = data;
}
getData();

search.addEventListener("input", (e) => {
  let typing = e.target.value;
  // console.log(val)
  getData(`https://cats-api-iarm.onrender.com/cats?q=${typing}`);
});

filter.addEventListener("change", (e) => {
  let val = e.target.value;
  // console.log(Alldata)
  let filterData = Alldata.filter((ele) => {
    if (ele.gender == val) {
      return ele;
    } else if (val == "") {
      return ele;
    }
  });
  // showData(filterData)
  showData(filterData);
});

///**** Sort by Age */
sort.addEventListener("change", (e) => {
  let val = e.target.value;
  val && getData(`https://cats-api-iarm.onrender.com/cats?_sort=age&_order=${val}`);
});

function showData(data) {
  container.innerHTML = "";
  totalCount.innerText = data.length;
  data.map((ele, i) => {
    let child = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute(
      "src",
      "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg"
    );

    let name = document.createElement("h3");
    name.innerText = ele.name;
    let age = document.createElement("h5");
    age.innerText = ele.age;
    let gender = document.createElement("h5");
    gender.innerText = ele.gender;
    let place = document.createElement("h5");
    place.innerText = ele.place;

    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      editFunction(ele.id);
    });

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteFunction(ele.id);
    });

    child.append(image, name, age, gender, place, editButton, deleteButton);
    container.append(child);
  });
}

let deleteFunction = (id) => {
  // console.log(id)

  fetch(`https://cats-api-iarm.onrender.com/cats/${id}`, {
    method: "delete",
  }).then(() => {
    getData()
    alert("Delete Successful");
  });
};


//************** edit section  */
let editFunction = (id) => {
  fetch(`https://cats-api-iarm.onrender.com/cats/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data)
      form.name.value = data.name;
      form.age.value = data.age;
      form.gender.value = data.gender;
      form.place.value = data.place;
    });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = {
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      place: form.place.value,
    };
    // console.log(formData)
    fetch(`https://cats-api-iarm.onrender.com/cats/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      getData()
      alert("Data is Edited successfully")

    });
  });
};
