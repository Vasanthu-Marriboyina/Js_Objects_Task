

//Deep clone without JSON.parse
 function deepClone(obj,visited = new WeakMap()){
    if(obj === null  || typeof obj !=="object"){
        return obj;
    }//Primitive Values doesn't need cloning.
    
    //Circular reference check
    if(visited.has(obj)){
        return visited.get(obj);
    }
    //Handle Date
    if(obj instanceof Date){
        return new Date(obj)
    }
    //Handle Set
    if(obj instanceof Set){
        let clone = new Set();
        visited.set(obj,clone)
        for(let value of obj){
            clone.add(deepClone(value,visited));
        }
        return clone;
    }
    //Handle Map
    if(obj instanceof Map){
        let clone = new Map();
        visited.set(obj,clone)
        for(let [key,value] of obj){
            clone.set(deepClone(key,visited),deepClone(value,visited));
        }
        return clone;
    }

    //Handle Arrays
    if(Array.isArray(obj)){
        let clone = [];
        visited.set(obj,clone);
        for(let item of obj){
            clone.push(deepClone(item,visited));
        }
        return clone;
    }

    // Handle Normal Objects
    let clone = {};
    visited.set(obj,clone);
    for(let key in obj){
        clone[key] = deepClone(obj[key],visited);
    }
    return clone; 

  
 }

//  Testing primitive types
console.log(deepClone(10));
console.log(deepClone("Hello"));
console.log(deepClone(true));
console.log(deepClone(null));
console.log(deepClone(undefined));


// Nested Object

// const obj = {
//     name: "Vasanth",
//     address: {
//         city: "Hyderabad"
//     }
// };

// const clone = deepClone(obj);

// clone.address.city = "Bangalore";


// console.log(obj.address.city);
// console.log(clone.address.city);

// Testing for Arrays

// const arr = [1, 2, [3, 4]];

// const clone = deepClone(arr);

// clone[2][0] = 100;

// console.log(arr);
// console.log(clone);

// Date

// const date = new Date();

// const clone = deepClone(date);

// console.log(clone instanceof Date);
// console.log(clone.getTime() === date.getTime());
// console.log(clone === date);

// Testing for Set
// const set = new Set([1, 2, 3]);

// const clone = deepClone(set);

// console.log(clone instanceof Set);
// console.log(clone);
// console.log(clone === set);

// set with objects
// const set = new Set([
//     {name: "Vasanth"}
// ]);

// const clone = deepClone(set);

// const originalObj = [...set][0];
// const clonedObj = [...clone][0];

// clonedObj.name = "Kumar";

// console.log(originalObj.name);
// console.log(clonedObj.name);


// Testing for Map

// const map = new Map();

// map.set("name", "Vasanth");
// map.set("city", "Hyderabad");

// const clone = deepClone(map);

// console.log(clone instanceof Map);
// console.log(clone.get("name"));
// console.log(clone === map);


//Map with Nested Object

// const map = new Map();

// map.set("user", {
//     name: "Vasanth"
// });

// const clone = deepClone(map);

// clone.get("user").name = "Kumar";

// console.log(map.get("user").name);
// console.log(clone.get("user").name);


 // Object containing ecerything

// const obj = {
//     id: 1,
//     name: "Vasanth",
//     createdAt: new Date(),
//     skills: ["JS", "React"],
//     hobbies: new Set(["Coding", "Reading"]),
//     details: new Map([
//         ["city", "Hyderabad"]
//     ])
// };

// const clone = deepClone(obj);

// console.log(clone);
// console.log(clone.createdAt instanceof Date);
// console.log(clone.hobbies instanceof Set);
// console.log(clone.details instanceof Map);
//Testing all the properties

const obj = {
    number: 10,
    string: "Hello",
    boolean: true,
    date: new Date(),
    array: [1, 2, { a: 3 }],
    set: new Set([1, 2, { b: 4 }]),
    map: new Map([
        ["user", { name: "Vasanth" }]
    ])
};

obj.circular = obj;

const clone = deepClone(obj);

console.log(clone !== obj);
console.log(clone.date instanceof Date);
console.log(clone.set instanceof Set);
console.log(clone.map instanceof Map);
console.log(clone.circular === clone);





function deepDiff(a, b) {

    let result = {};

    let keys = new Set([
        ...Object.keys(a),
        ...Object.keys(b)
    ]);

    for (let key of keys) {

        // Added key
        if (!(key in a)) {
            result[key] = {
                added: b[key]
            };
        }

        // Removed key
        else if (!(key in b)) {
            result[key] = {
                removed: a[key]
            };
        }

        // Nested objects
        else if (
            typeof a[key] === "object" &&
            typeof b[key] === "object" &&
            a[key] !== null &&
            b[key] !== null
        ) {

            let nested = deepDiff(a[key], b[key]);

            if (Object.keys(nested).length > 0) {
                result[key] = nested;
            }
        }

        // Updated value
        else if (a[key] !== b[key]) {
            result[key] = {
                from: a[key],
                to: b[key]
            };
        }
    }

    return result;
}

const obj1 = {
    x: 1,
    y: {
        z: 2
    }
};

const obj2 = {
    x: 1,
    y: {
        z: 3
    },
    w: 4
};

console.log(deepDiff(obj1, obj2));

// Flatten an Object

function flatten(obj,path = "",result = {}){
    for(let key in obj){
        let newPath = path ?`${path}.${key}`:key;
        if(typeof obj[key] === "object" && obj[key] !==null && !Array.isArray(obj[key])){
            flatten(obj[key],newPath,result);
        }else{
            result[newPath] = obj[key];
        }

    }return result;
}
const flatobj = {
    a: {
        b:{
            c:1
        }
    }
}
console.log(flatten(flatobj));

//Unflatteng Object

function unFlatten(obj){
    let result = {};

    for(let key in obj){
        let keys = key.split(".");
        let current = result;
        for(let i=0;i<keys.length;i++){
            let part = keys[i];
            if(i === keys.length -1){
                current[part] = obj[key];
            }
            else{
                if(!current[part]){
                    current[part] = {};
                }
                current = current[part];
            }
        }
    }return result;
}


const unflatObj = {
    "a.b.c": 1
};

console.log(unFlatten(unflatObj));



