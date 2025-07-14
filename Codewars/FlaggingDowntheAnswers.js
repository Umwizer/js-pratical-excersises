// Life in tech is full of perks—flexible hours,
// exciting projects, and endless learning opportunities.
// But let’s be real: sometimes, our overworked brains let the little details slip...
// What did I eat for dinner last night? Where are my keys? ...what country am I in right now?!
// Luckily, you’ve got one clue: a flag waving in the breeze.
// Your challenge is to write a function that,when given some
// characteristics of the flag, interact with the provided flag
// 'library' (full_flag_list) and return the country/countries that you may be in!
// A couple of extra notes for this challenge include:
// Any images of the sun is counted as a circle.
// Flags with crosses (e.g. the UK) or no stripes will be marked as null.
// Input Constraints:
// Number of keys in search_terms will be <= 6.
// Input will never be null. All input keys will have a corresponding value in the object full_flag_list.
function findTheFlag(searchTerms, fullFlagList) {
  return fullFlagList
    .filter((flag) => {
      return Object.entries(searchTerms).every(([key, value]) => {
        if (key === "colours") {
          return value.every((color) => flag.colours.includes(color));
        } else {
          return flag[key] === value;
        }
      });
    })
    .map((flag) => flag.country);
}
const searchTerms = {
  hasStripes: true,
  stripeDirection: "horizontal",
  numberOfColours: 3,
  colours: ["red", "white", "blue"],
};

const fullFlagList = [
  {
    country: "USA",
    hasStripes: true,
    numberOfColours: 3,
    hasStars: true,
    stripeDirection: "horizontal",
    hasCircles: false,
    colours: ["red", "white", "blue"],
  },
  {
    country: "France",
    hasStripes: true,
    numberOfColours: 3,
    hasStars: false,
    stripeDirection: "vertical",
    hasCircles: false,
    colours: ["blue", "white", "red"],
  },
];

console.log(findTheFlag(searchTerms, fullFlagList));
// Output: ["USA"]
