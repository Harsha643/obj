// Question 1:
// You are given an object book with the properties title, author, and yearPublished. Perform the following operations:



var book={
    "title":"vedanth",
    "auther":"ajay",
    "yearPublished":2001
}
console.log(book);
console.log(book.auther);//1.Access the author property and print it.
book.yearPublished=2022;//2.Modify the yearPublished property to 2022.
console.log(book);
console.log(book.yearPublished)
book["yearPublished"]="2023";
console.log(book);
console.log(book.yearPublished)
book.genre="Fiction";//3.Add a new property genre to the book object with the value “Fiction”.
console.log(book);
delete book.title;//4.Delete the title property from the book object.
console.log(book);




// array.js:7 {title: 'vedanth', auther: 'ajay', yearPublished: 2001}
// array.js:8 ajay
// array.js:10 {title: 'vedanth', auther: 'ajay', yearPublished: 2022}
// array.js:11 2022
// array.js:13 {title: 'vedanth', auther: 'ajay', yearPublished: '2023'}
// array.js:14 2023
// array.js:16 {title: 'vedanth', auther: 'ajay', yearPublished: '2023', genre: 'Fiction'}
// array.js:18 {auther: 'ajay', yearPublished: '2023', genre: 'Fiction'}



// Question 2:
// You are given an object employee with the properties name, age, position, and salary. Perform the following operations:

var employee={
    "name":"rohith",
    "age":"23",
    "position":"developer",
    "salary":28456
}
console.log(employee)
console.log(employee.position)//1.Access the position property and print it.
employee.salary=50000;//2.Modify the salary property to 50000.
console.log(employee)
employee.department="HR";//3.Add a new property department to the employee object with the value “HR”.
console.log(employee)
delete employee.age;//4.Delete the age property from the employee object.
console.log(employee)


// array.js:47 {name: 'rohith', age: '23', position: 'developer', salary: 28456}
// array.js:48 developer
// array.js:50 {name: 'rohith', age: '23', position: 'developer', salary: 50000}
// array.js:52 {name: 'rohith', age: '23', position: 'developer', salary: 50000, department: 'HR'}
// array.js:54 {name: 'rohith', position: 'developer', salary: 50000, department: 'HR'}



// Question 3:
// You are given an object product with the properties id, name, price, and category. Perform the following operations:

var product ={
    id:11322,
    "name":"skybag",
    "price":600,
    "catagory":"schoolbags"

}
console.log(product)
console.log(product.price)//1.Access the price property and print it.
product.catagory = "electronics",//2.Modify the category property to “Electronics”.
console.log(product)
product.instock= true  //3.Add a new property inStock to the product object with the value true.
console.log(product)
delete product.id  //4.Delete the id property from the product object.
console.log(product)

// array.js:75 {id: 11322, name: 'skybag', price: 600, catagory: 'schoolbags'}
// array.js:76 600
// array.js:78 {id: 11322, name: 'skybag', price: 600, catagory: 'electronics'}
// array.js:80 {id: 11322, name: 'skybag', price: 600, catagory: 'electronics', instock: true}
// array.js:82 {name: 'skybag', price: 600, catagory: 'electronics', instock: true}



// Question 4:
// You are given an object car with the properties make, model, year, and color. Perform the following operations:

var car ={
    "make":"Camry",
    "model":"RAV4",
    "year":"2020",
    "color":"white"
}
console.log(car)
console.log(car.make)//1.Access the make property and print it.
car["color"]="Black"//2.Modify the color property to “Black”.
console.log(car)
car["engineType"]="V6";//3.Add a new property engineType to the car object with the value “V6”.
delete car.year;//4.Delete the year property from the car object.
console.log(car)


/*
{make: 'Camry', model: 'RAV4', year: '2020', color: 'white'}
array.js:102 Camry
array.js:104 {make: 'Camry', model: 'RAV4', year: '2020', color: 'Black'}
array.js:107 {make: 'Camry', model: 'RAV4', color: 'Black', engineType: 'V6'}
*/


// Question 5:
// You are given an object student with the properties name, age, grade, and school. Perform the following operations:

var student = {
    "name":"surya",
    age:18,
    "grade":75,
    "school":"srivedha high school"

}
console.log(student)
console.log(student.school)//1.Access the school property and print it.
student.grade=95;  //2.Modify the grade property to 95.
console.log(student)
console.log(student.grade)
student.hobbies=["reading","sports"]//3.Add a new property hobbies to the student object with the value ["reading", "sports"].
console.log(student)
delete student.age;
console.log(student)//4.Delete the age property from the student object.


// array.js:128 grade: 95hobbies: (2) ['reading', 'sports']name: "surya"school: "srivedha high school"[[Prototype]]: Object
// array.js:129 srivedha high school
// array.js:131 {name: 'surya', age: 18, grade: 95, school: 'srivedha high school'}
// array.js:132 95
// array.js:134 {name: 'surya', age: 18, grade: 95, school: 'srivedha high school', hobbies: Array(2)}
// array.js:136 {name: 'surya', grade: 95, school: 'srivedha high school', hobbies: Array(2)}






// Question 6:
// You are given an object user with the following structure:


const user = {
  username: "john_doe",
  profile: {
    firstName: "John",
    lastName: "Doe",
    age: 28,
    address: {
      street: "456 Elm St",
      city: "Gotham",
      zip: "54321"
    }
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
}
console.log(user)
console.log(user.profile.address.city);
user.preferences["theme"]="light"
console.log(user)
console.log(user.preferences["theme"])
user.profile.phone="555-9876";
console.log(user)
console.log(user.profile.phone)
delete user.profile.zip
console.log(user)



// array.js:172 {username: 'john_doe', profile: {…}, preferences: {…}}
// array.js:173 Gotham
// array.js:175 
// {username: 'john_doe', profile: {…}, preferences: {…}}
// array.js:176 light
// array.js:178 
// {username: 'john_doe', profile: {…}, preferences: {…}}
// array.js:179 555-9876
// array.js:181 
// {username: 'john_doe', profile: {…}, preferences: {…}}
// preferences: 
// notifications : true
// theme: "light"

// profile: 
// address: {street: '456 Elm St', city: 'Gotham', zip: '54321'}
// age: 28
// firstName: "John"
// lastName: "Doe"
// phone :  "555-9876"

// username: "john_doe"
// [[Prototype]]
// : 
// Object


const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  }

  console.log(company);
  console.log(company.employees[1].contact.email)//1.Access the email of the second employee (Bob) and print it.
  company.employees[0].contact.phone="555-1111" //2.Modify the phone number of Alice to “555-1111”.
  console.log(company.employees[0].contact.phone)
  console.log(company.employees[0].department="Engineering") //3.Add a new property department with the value “Engineering” to the first employee (Alice).
  delete company.location;
  console.log(company)



// array.js:235 {name: 'Tech Solutions', employees: Array(2), location: 'New York'}
// array.js:236 bob@tech.com
// array.js:238 555-1111
// array.js:239 Engineering
// array.js:241 {name: 'Tech Solutions', employees: Array(2)}[[Prototype]]: Object
  

