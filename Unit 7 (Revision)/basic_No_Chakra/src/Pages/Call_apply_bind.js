
export const Call_apply_bind = () => {
  let obj = {
    firstName: "Ranjan",
    lastName: "Yadav",
  };
  let printFullName = function (city, school) {
    console.log(
      `My name is ${this.firstName} ${this.lastName} from ${city} study in ${school}`
    );
  };

  //*** using Call we need to send argument indivisualy ***//
  printFullName.call(obj, "Madhubani", "R.K.Mission");

  //*** using Apply we need to send 2nd argument as an Array list ***//
  printFullName.apply(obj, ["Madhubani", "R.K.Mission"]);

  //*** using bind method it gives us the copy of method which can be invoke later ***/
  let bindFun=printFullName.bind(obj, "Madhubani", "R.K.Mission")
  // console.log(bindFun)
  bindFun()
};
