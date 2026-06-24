// 1. Create a student object with nested address

let student = {
    first_name :"Vasanth",
    last_name : "Marriboyina",
    gender : "Male",
    age : "22",
    email : "vk@gmail.com",
    mobile : "9876543210",
    background : "B.Tech",
    branch : "Computer Science & Engineering",
    passout : "2025",
    cgpa : 8.7,
    skills : ["Java","HTML","CSS","SQL","Javascript"],
    address : {
        door_no : "2-82",
        street : "Lakshya Academy Street",
        area : "Lalpuram",
        city : "Guntur",
        district : "Guntur",
        mandal : "Prathipadu", 
        state : "AP",
        country : "India",
        Pincode : "500012",
    }
    
};
console.log(student);
console.log(student.address);


// 2. safely access misisng property using ?(optional chaining).


let employee = {
    name : "Rakesh",
    age : "23",
    address :{
        area : "punjagutta",
        State : "Telangana",
        city : "Hyderabad"
    }
}
console.log(employee.address.street); //without Optional Chaining
console.log(employee.address?.street); //With Optional Chaining 




// 3. Looop through object and print all keys & values

//Practicing of loops in Objects

// let slaries = {
//     john:100,
//     smith:200,
//     alex:300,
// }
// let sum =0;
// for(let sal in slaries){
//     sum+=slaries[sal];
// }
// console.log(sum);

// for(let details in student){
//     console.log(details,":" ,student[details] );
// }
// for(let address in student.address){
//     console.log(address,":",student.address[address]);
// }

// Another approach

for(let key in student){
    if(typeof(key) === "object"){
        console.log(key,":");
        for(let nestedKey in student[key]){
            console.log("  ",nestedKey,":",student[key][nestedKey]);
        }
    }else{
        console.log(key,":",student[key]);
    }
}


// 4. Copy an object and change a property , also add a new property
// for copying an object in different ways they are 
//  let clone = student;
//  console.log("cloning of student object");
//  console.log(clone); // Method 1;

// The Object.assign method t=for cloning

let clone = Object.assign({},student);
console.log("cloning details");
console.log(clone);
let deepcopy = structuredClone(student);
console.log("deep copy of student object");
console.log(deepcopy);

// Using Loops

let copy = {};
for(key in student){
    copy[key] = student[key]
    console.log("Copied of student object",copy[key]);
}
 


//Practicing of adding key and value
// let user = new Object();
// user.name = "Vasanth";
// user.age = 21;
// console.log(user);

let employee_Details = {... employee};
console.log(employee_Details); //copied the employee object
employee_Details.name = "Ravii";
console.log(employee_Details);
employee_Details.salary = "25000";
console.log(employee_Details); //Copied Object
console.log(employee); //Original Object


// 5. Decide whetehr to sue array or object for:
//     List of Marks 
//     User profile
//     Shopping Cart items

const mar_ks = [85,90,98,87];
console.log("Marks:" , mar_ks);

/*******************************/
// UserProfile -> Object 
const profile ={
   user_name : "Mudhiraj",
   age : 22,
   email : "mudhiraj@gmail.com",
   city : "Guntur"
};
console.log("Profile-Details : ",profile);


// shopping Cart Items -> Arrays of Objects
let shopping_cart = [{
    id : 1,
    product : "Laptop",
    price : 60000,
    quantity : 1,

},{id : 2,
    product : "Mouse",
    price : 500,
    quantity : 1,},{id : 3,
    product : "keyboard",
    price : 1200,
    quantity : 1,},];
    console.log("Shopping Cart : ",shopping_cart);

// 6. Create an object named as company with nested departments with name descripiton and id of each department
//     Loop and print the details
//     use Optional Chaining in at least one place

const company = {
    name : "Knack Tech",
    location : "Bangalore",
    departments : {
        hr : {
            id : 1,
            name : "Human_Resources",
            description : "Haanles recruitment and employee management",
        },
        development : {
            id : 2,
            name : "Development",
            description : "Develops software applications",

        },
        testing : {
            id : 3,
            name : "Quality Assurance",
            description : "Tests software products",
        }
    }
};


for(let department in company.departments){
    let dept = company.departments[department];
    console.log("Department Id : ",dept.id);
    console.log("Department Name : ",dept.name);
    console.log("Description : ",dept.description);
    console.log("----------------------------------------");


}
//for Opional Chaining example
console.log(company.departments.finance?.name);


// 7. Create an object book with title, author, rating
//    Update the rating of the book
//    Add a function describe() that needs to log the "Book by an author named as [author name]"


/*************************************************************************************************/


//? Below the Examples has been used this method to get the properties inside a function


const book = {
    title : "Freedom",
    author : "Subhash Chandra Bose",
    rating : 4.5,
    describe(){
        console.log(`Book by an author named ${this.author}`); //! Added describe method
    }
}

book.rating = 4.9;
console.log(book);//after Modification
book.describe();




// 8. Create a object for a movie, a product, for a user profile 
const movie = {
    title : "SALAAR",
    director : "Prashanth Neel",
    rating : 9.8,
    describe () {
        console.log(`${this.title} was directed by ${this.director}`);
    }
}
console.log(movie);
movie.describe();


const product = {
    id : 1,
    brand : "Lenovo",
    item : "Laptop",
    price : "65,000",
    describe (){
        console.log(`${this.item} costs ₹${this.price}`);
    }
}
console.log(product);
product.describe();


const user_profile = {
    user_name : "Rakesh_Raki",
    password : "Rakii@143143",
    email : "rakesh@gmail.com",
    describe(){
        console.log(`User_Name : ${this.user_name} & Email : ${this.email}`);
    }

}
console.log(user_profile);
user_profile.describe();





// 1. Create an object and copy it using spread
// 2. Modify copied object and verify original doesn't change
// 3.Create an array and copy it using spread
// 4. Create a nested object and observe copy behaviour


// 1. Create an object and copy it using spread

const emp_details = {
    name : "Vasanth",
    age : 22,

}

const copied_emp_details = {...emp_details};
console.log("Original Object");
console.log(emp_details);
console.log("Copied Object");
console.log(copied_emp_details);


// 2. Modifying the copied Object.

copied_emp_details.age = 25;
copied_emp_details.city = "Guntur";
console.log("Original Object : ",emp_details);
console.log("Copied Ogject :",copied_emp_details);


// 3.Creating an array and copying it using spread Operator

const marks = [80,84,97,96];
const copiedMarks = [...marks];
copiedMarks.push(100);
console.log("Original : ",marks);
console.log("Copied : ",copiedMarks);

// 4. Create a nested object and observe copy behaviour

const student_details = {
    name : "Vasanth",
    age : 21,
    address  : {
        city : "Guntur",
        State : "Andhra Pradesh",
        pincode : 522019,
    }
};


const copied_Student_details = {...student_details};
copied_Student_details.address.city = "Krishna";
console.log("original : ",student_details);
console.log("Copied : ",copied_Student_details);