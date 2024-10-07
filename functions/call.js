// by using call an object can use a method belonging to another object

const person = {
  fullNmae: function () {
    return this.firstName + " " + this.lastName;
  },
};
const p1 = {
  firstName: "shaham",
  lastName: "pk",
};

const p2 = {
  firstName: "adnan",
  lastName: "mhd",
};

console.log(person.fullNmae.call(p2));


// inorder to pass arguments to the main function


const personO = {
    fullNmae: function (city,country) {
      return this.firstName + " " + this.lastName +" from "+ city+", "+country;
    },
  };
  const pe1 = {
    firstName: "shaham",
    lastName: "pk",
  };
  
  const pe2 = {
    firstName: "adnan",
    lastName: "mhd",
  };

  console.log(personO.fullNmae.call(p2,"chaliyam","kerala"));