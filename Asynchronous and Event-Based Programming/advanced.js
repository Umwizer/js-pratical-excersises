//what will happen whent this code runs?
//identify the issue and provide a solution async function

async function processItems(items) {
  items.forEach(async (item) => {
    await processItem(item);
    console.log(`Processed ${item}`);
  });
  console.log("All items processed");
}

//solution
async function processItems(items) {
  for (const item of items) {
    await processItem(item);
    console.log(`processed ${item}`);
  }
  console.log("All items processed");
}

//promise.all()
async function processItems(items) {
  await promise.all(
    items.map(async (item) => {
      await processItem(item);
      console.log(`processed ${item}`);
    })
  );
  console.log("all items processed");
}
