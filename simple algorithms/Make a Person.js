//Fill in the object constructor with the following methods below:
//getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)


var Person = function (firstAndLast) {
  var fullname = firstAndLast;

  this.getFirstName = () => fullname.split(" ")[0];

  this.getLastName = () => fullname.split(" ")[1];

  this.getFullName = () => fullname;

  this.setFirstName = x => fullname = x + " " + fullname.split(" ")[1];

  this.setLastName = x => fullname = fullname.split(" ")[0] + " " + x;

  this.setFullName = x => fullname = x;

};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());