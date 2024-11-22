function arrayStats(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return {
        sum: 0,
        average: 0,
        min: null,
        max: null
      };
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = parseFloat((sum / arr.length).toFixed(2));
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      sum,
      average,
      min,
      max
    };
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(arrayStats(numbers));
  
  