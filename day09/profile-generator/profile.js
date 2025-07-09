// Profile Generator - Day 09 Assignment
// Personal profile creation using JavaScript variables, data types, and literals

// Variable declarations using var, let, and const
var userName = "Alex Kim";
let userAge = 28;
const isEmployed = true;

// Additional variables with different data types
let userLocation = "Seoul, South Korea";
var yearOfBirth = 1996;
const favoriteNumber = 42;
let currentJob = "Web Developer";
var experienceYears = 5;
const hasHobbies = true;

// Special data types
let futureGoal = null;
var previousJob;
const uniqueId = Symbol('userId');
const bigNumber = BigInt(9007199254740991);

// Display basic profile information with escape characters
console.log("=== Personal Profile Generator ===\n");
console.log("Name:\t\t" + userName);
console.log("Age:\t\t" + userAge);
console.log("Birth Year:\t" + yearOfBirth);
console.log("Location:\t" + userLocation);

// String concatenation for profile sentence
const profileIntro = "Hello! My name is " + userName + " and I am " + userAge + " years old.";
console.log("\n" + profileIntro);

// Array literal for hobbies
const hobbies = ["reading tech blogs", "playing guitar", "hiking", "cooking", "photography"];
console.log("\nMy hobbies: " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2] + ", " + hobbies[3] + ", " + hobbies[4]);

// Object literal for personal information
const personalInfo = {
    name: userName,
    age: userAge,
    isStudent: false,
    occupation: currentJob,
    yearsOfExperience: experienceYears,
    employed: isEmployed,
    city: "Seoul",
    country: "South Korea",
    languages: ["Korean", "English", "Japanese"]
};

// Using object properties to create profile sentences
console.log("\n=== Professional Information ===");
console.log("Current Position: " + personalInfo.occupation);
console.log("Years of Experience: " + personalInfo.yearsOfExperience);
console.log("Employment Status: " + (personalInfo.employed ? "Employed" : "Seeking opportunities"));
console.log("Languages: " + personalInfo.languages[0] + ", " + personalInfo.languages[1] + ", " + personalInfo.languages[2]);

// Using typeof operator
console.log("\n=== Data Type Information ===");
console.log("Variable 'userName' is: " + typeof userName);
console.log("Variable 'userAge' is: " + typeof userAge);
console.log("Variable 'isEmployed' is: " + typeof isEmployed);
console.log("Variable 'hobbies' is: " + typeof hobbies);
console.log("Variable 'personalInfo' is: " + typeof personalInfo);
console.log("Variable 'futureGoal' is: " + typeof futureGoal);
console.log("Variable 'previousJob' is: " + typeof previousJob);
console.log("Variable 'uniqueId' is: " + typeof uniqueId);
console.log("Variable 'bigNumber' is: " + typeof bigNumber);

// Challenge Task: null and undefined distinction
console.log("\n=== Challenge: null vs undefined ===");
console.log("futureGoal value: " + futureGoal);
console.log("previousJob value: " + previousJob);
console.log("futureGoal === null: " + (futureGoal === null));
console.log("previousJob === undefined: " + (previousJob === undefined));
console.log("null === undefined: " + (null === undefined));
console.log("null == undefined: " + (null == undefined));

// Challenge Task: Template strings
const profileSummary = `
=== Profile Summary (Template String) ===
Name: ${personalInfo.name}
Age: ${personalInfo.age}
Location: ${personalInfo.city}, ${personalInfo.country}
Profession: ${personalInfo.occupation} with ${personalInfo.yearsOfExperience} years of experience
Hobbies Count: ${hobbies.length}
Favorite Number: ${favoriteNumber}
`;
console.log(profileSummary);

// Challenge Task: Additional data processing
const mixedArray = ["coding", 100, true, null, undefined, "music"];
console.log("=== Mixed Array Data Types ===");
console.log("Element 0 ('" + mixedArray[0] + "') is: " + typeof mixedArray[0]);
console.log("Element 1 (" + mixedArray[1] + ") is: " + typeof mixedArray[1]);
console.log("Element 2 (" + mixedArray[2] + ") is: " + typeof mixedArray[2]);
console.log("Element 3 (" + mixedArray[3] + ") is: " + typeof mixedArray[3]);
console.log("Element 4 (" + mixedArray[4] + ") is: " + typeof mixedArray[4]);
console.log("Element 5 ('" + mixedArray[5] + "') is: " + typeof mixedArray[5]);

// Adding email property with null value
personalInfo.email = null;
personalInfo.phoneNumber = undefined;
console.log("\n=== Contact Information ===");
console.log("Email is null: " + (personalInfo.email === null));
console.log("Phone number is undefined: " + (personalInfo.phoneNumber === undefined));

// Final profile display
console.log("\n=== Complete Profile ===");
console.log(`${personalInfo.name} is a ${personalInfo.age}-year-old ${personalInfo.occupation} from ${personalInfo.city}.`);
console.log(`Skills: ${personalInfo.languages.length} languages spoken`);
console.log(`Interests: ${hobbies.length} different hobbies`);
console.log(`\nThank you for viewing my profile!\n`);