const images = [fetch("/img1.png"), fetch("/img2.png"), fetch("/missing.png")];

Promise.allSettled(images).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Image ${index} loaded successfully`);
    } else {
      console.log(`Image ${index} failed to load`);
    }
  });
});
