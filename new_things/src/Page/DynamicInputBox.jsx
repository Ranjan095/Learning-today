/** @format */

import React, { useState } from "react";

let obj = {
  fName: "Ranjan",
  lName: "Yadav",
  age: 26,
  city: "Madhubani",
  images: [
    "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAugMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBQYHBAj/xAA/EAABAwMCAwQIBAMGBwAAAAABAAIDBAUREiEGMUETIlGRBxQyYXGBobEVI0LBM1LhkqKy0fDxFiQlRGJygv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAMAAgEEAgIDAAAAAAAAAAABAgMRBBIhMUEiMhPwFFFh/9oADAMBAAIRAxEAPwDW+iPKQCjQCgjRIckAaCJGgAgiQQCkAiB3WYelXjSS2OhpbPWtjqcOEhbhwcx2xwQdiPgoCLnxRxbaeGKcvuMx7Ysc+KBoOqXBAwDy6jmoG0elnhy4TGOqdLbzth1QRhxzjGRn3LCyaq7SOmrqx2nq6V/7lOMioIHEdpl2c5eOfzUdRdSen6S62+teWUdZBM/GdMb87f6K6DIwu0BwLhzaDuF5hobs23VEc1ue+ORpGCDgsPiCtJsPHlNVXSjlrYXslZhklQzdpDtjkeGcfBEyHJq/LYosIA7eKAVioMIilIYQCCklOEJGEAhyaduniE05Ac0jUzoC6nhN6VIJEJSAR4UAAQKNAIAkCjRIAuSNAoggIziqrfQcNXWrjID4aWR4J6YaV5VmmdNUukkw6SR2TjYZK9Rcc5PBd+0jJFvnP9wrz1wXRQ1deXTsDwwgNHvVaels0xz1PRZuGeCIrxTsqKx8jWuHdYNgArjB6MbE4DWyXA6a+albE2GKJrGOaMDYAjYKwxO7g3BXKqbO1yp7FGl9G",
    "https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857248uragw.png",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHgApwMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwQGAAEFBwj/xABAEAACAQMCAgYHBQUHBQAAAAABAgMABBEFIRIxBhMiQVFhFDJxgZGU0RUjUqHBRVVisdIHNUNUk7LCJEJzdIL/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAYF/8QAKxEAAgIBAgUEAgIDAQAAAAAAAAECAxEEIRITIjFRBUFSkWGBIzIUcfCh/9oADAMBAAIRAxEAPwCkotdMjmWxqrU0itsYFqWCLY5EqSESY46Y0iQkdIngcqUDHKlADUjoENSOgY5YqQCXvbCKVYpby3SRvVRpVBNVu2CeMliqm1nBLVFdA6EMrciDkGpJ53RFpruaMdMWDXVigMGjHQMEx0AA0dAC2SgBTpTEJdaYisoKpQNjVFWIrY1F8qYEmNaYJEmNaCaHKNqBjlFADlFADkFAD0SkBU+mPSC4Sd9F0mMvcsn3siHdAe4eeO+vK12s5fQv2epodHzMTZWo+imswW5nm0q5lVxnEYDEHx23rxFqIN9z25aa1LsFY65c6NOEEVzalQB1UoIDAHfY8q1U6iUHszHbp4z/ALLc9XjZZokljOVkUMD5GuiUsrJ4DjwvBhSnkRrgoyAJTajIAFKMgLZKkIS60xCHWmIq0YqpEWPRasIj0WmPBIRaCSHoKBjlGKBjFpCGqcUAOj3oAe80dvA80zKsaLli3KoTkoRcmThGU5KMVuUXovdmG6utTubeW6luWMg4OBTg+HE2TjwFcjq3z",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAwgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBQYHAQj/xAA8EAABAwIEAwQHBgQHAAAAAAABAAIDBBEFEiExBkFhEyJRcQcUMkKBkaEjM1JisfAVJNHhJTRDcpKiwf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwQC/8QAIBEBAQEBAAMAAgMBAAAAAAAAAAECEQMhMRJBMlFhE//aAAwDAQACEQMRAD8A7IiIuR0CIiAiIgIiollZDG6SVwa1ouSdgEFZIG6olljhjMk0jY2DdzzYBaHxN6SKOnppIcDf2tZctD5I+43rrutBnxHFMdeW4lXuqXbhjnANB6DZF46/VcZcO0rssmLUxP5H5/hpdQQcc8Oytkd/EGMDDbVpseo01XI4sFbET64G5fxNFwPOynbTxRgASNdHmsHh4I/2m4BB+aL+LrlNxlw/UTMiixKLM82bmBaCeWp0WbiljljEkTw9h2LTdfOclVTtkfTzx5HX9q19eo8Pisjh3EGJ4RHkw2uMYBuPeaPFtjuD+9UOO/IsNwnjjOIcFhrmhrZPYmYPdeN7dOY81mUeRERAREQEREBERAREQEREBERAREQFy70rcRytmbhFFO9th/MBj7X/ACm2vzXUSbA6E9Avn30jTSt4vnNX94O9ka32W+75+fNFjXZZjfs2jM47gbKSFglsHSSMaNS5o0+JH9VLh1A/F5nxQaRMcGutzPNdMwHhTDKaBjpoe2mHvO5Ka3MtseO6aTRU1XJ3qKaWTLplbI8X622WW",
  ],
};

export const DynamicInputBox = () => {
  let [inputBox, setInputBox] = useState(obj);

  let handleAddInputBox = () => {
    let AddInputBox = { ...inputBox, images: [...inputBox.images, ""] };
    setInputBox(AddInputBox);
  };

  let handleDelete = (i) => {
    let afterDeleteInput = { ...inputBox };
    afterDeleteInput.images.splice(i, 1);
    setInputBox(afterDeleteInput);
  };

  let handleChange = (e, i) => {
    let { name, value } = e.target;
    if (e.target.name === "image") {
      let changeInput = { ...inputBox };
      changeInput.images[i] = e.target.value;
      setInputBox(changeInput);
    } else {
      setInputBox({ ...inputBox, [name]: value });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputBox);
  };

  return (
    <div>
      <h1>Dynamic Input Box</h1>
      <textarea placeholder="Text area"></textarea>
      <form onSubmit={handleSubmit}>
        <h2>Form</h2>

        <label>fName : </label>
        <input onChange={handleChange} name={"fName"} value={inputBox.fName} />
        <br />
        <label>lName : </label>
        <input onChange={handleChange} name={"lName"} value={inputBox.lName} />
        <br />
        <label>Age : </label>
        <input
          onChange={handleChange}
          name={"age"}
          type="number"
          value={inputBox.age}
        />
        <br />
        <label>City : </label>
        <input onChange={handleChange} name={"city"} value={inputBox.city} />
        <br />
        <br />
        <b>For Images :-</b>
        <br />
        <button onClick={handleAddInputBox}>Add Input Box</button>
        {inputBox?.images.map((ele, i) => {
          return (
            <div key={i}>
              <label htmlFor=""> Image {i + 1} : </label>
              <input
              required
                name={"image"}
                value={inputBox?.images[i]}
                onChange={(e) => handleChange(e, i)}
                placeholder="Image URL"
              />{" "}
              <button onClick={() => handleDelete(i)}>x</button>
            </div>
          );
        })}
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
