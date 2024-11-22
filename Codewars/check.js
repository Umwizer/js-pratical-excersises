// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers 
// has an even number of petals and the other has an odd number of petals it means they are in love.
function lovefunc(flower1, flower2) {
    if (flower1 % 2 !== flower2 % 2) {
      return true;
    } else {
      return false;
    }
  }
console.log(lovefunc(2,3))  