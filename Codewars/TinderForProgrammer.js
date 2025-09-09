// You might know the popular app "Tinder", which can be used to find nice people, which fit to you. The core functionality of it is to show you profiles of people and you can decide to either swipe left to dismiss the chance to get to know the person or to swipe right, if the profile sounds promising.

// In this kata we want to build something similar to find programmer profiles, which fit to us :)

// Task
// You are given one person's profile and two callbacks: one to swipe to the left and another one to swipe to the right. If the person mentions your favorite programming language in their bio, then you want to give your friendship a chance and swipe to the right. Otherwise you swipe to the left.

// Note: Your favorite programming language is assumed to be the one, you're solving this kata in. So if you're solving this kata in Javascript, you should look out for JavaScript in the profile text. See the examples matching and non-matching profiles.

// Profile Structure
// Each profile has the following fields:

// name (string)
// age (int)
// bio (string)
// Examples
// Swipe Right
// const profile = {
//     name: 'Julia Green',
//     age: 24,
//     bio: 'From Chile. Sushi lover 🍣 Learning JavaScript on codewars.com. Always be yourself. Unless you can be a unicorn, then always be a unicorn 🦄',
// };

// rateProfile(profile, swipeLeft, swipeRight);
// // should call swipeRight(), as JavaScript is mentioned in the bio
// Swipe Left
// const profile = {
//     name: 'Peter Parker',
//     age: 31,
//     bio: 'Huge soccer fan ⚽️ Living in Dallas. Java = ❤️',
// };

// rateProfile(profile, swipeLeft, swipeRight);
// // should call swipeLeft(), as JavaScript is not mentioned in the bio]]

const rateProfile = (profile, swipeLeft, swipeRight) => {
  if (profile.bio.includes("JavaScript")) swipeRight();
  else {
    swipeLeft();
  }
};
const profile1 = {
  name: "Julia Green",
  age: 24,
  bio: "Learning JavaScript on codewars.com.",
};

const profile2 = {
  name: "Peter Parker",
  age: 31,
  bio: "Huge soccer fan. Java = ❤️",
};
