// We can make objects as singleton and object literals

// const tinderUser = new Object(); // Singleton object
// console.log(tinderUser); // {}

const tinderUser = {}; // Non-Singleton object
// console.log(tinderUser); // {}

tinderUser.id = "123abc";
tinderUser.name = "Motu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // { id: '123abc', name: 'Motu', isLoggedIn: false }

const regularUser = {
  email: "any@gmail.com",
  fullname: {
    userFullname: {
      firstname: "Pavan",
      lastname: "AK"
    }
  }
}
// console.log(regularUser); 
/* 
  {
    email: 'any@gmail.com',
    fullname: { userFullname: { firstname: 'Pavan', lastname: 'AK' } }
  }

*/

// console.log(regularUser.fullname); // { userFullname: { firstname: 'Pavan', lastname: 'AK' } }

// console.log(regularUser.fullname.userFullname); // { firstname: 'Pavan', lastname: 'AK' }

// console.log(regularUser.fullname.userFullname.firstname); // Pavan

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = { obj1, obj2 };
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2); // {} acts as target, (obj1 & obj2) acts as source
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "Abc@gmail.com"
  },
  {
    id: 1,
    email: "Abc@gmail.com"
  },
  {
    id: 1,
    email: "Abc@gmail.com"
  }
]

// console.log(users[1].email); // Abc@gmail.com
// console.log(tinderUser); // { id: '123abc', name: 'Motu', isLoggedIn: false }
// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Motu', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Motu' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

/****************************************************************************** */
const course = {
  courseName: "JS",
  coursePrice: "999",
  courseInstuctor: "Hitesh Sir"
}

// course.courseInstuctor

const { courseInstuctor: instructor } = course;

// console.log(courseInstuctor); // Hitesh Sir
console.log(instructor); // Hitesh Sir


// API
 
// { // JSON
//   "name" : "Shivaling",
//   "course": "JS",
//   "price": "free"

// }