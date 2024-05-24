const jsonString = '{"name": "Dinesh", "age": 30, "city": "Pune"}';

//Note: JSON is itself treated as String
console.log("What is type JSON: " + typeof(jsonString));

//conversion from json to object(json -> object)
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(typeof(jsonObject));

//conversion from object to json (object -> json)
const objectToConvert = {name: "Ramesh", age:28};
const jsonStringified = JSON.stringify(objectToConvert);
console.log(jsonStringified);
console.log(typeof(jsonStringified));