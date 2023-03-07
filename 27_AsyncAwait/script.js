async function weather() {
  let mumbaiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("32 degrees");
    }, 5000);
  });
  let puneWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 degrees");
    }, 7000);
  });

  console.log("fetching mumbai's weather please wait...");
  let mumbaiW = await mumbaiWeather;
  console.log("mumbai's weather is " + mumbaiW);

  console.log("fetching pune's weather please wait...");
  let puneW = await puneWeather;
  console.log("pune's weather is " + puneW);

  return [mumbaiW, puneW];
}

const stock = async () => {
  console.log(
    "I am stock function ! and i've to wait because of async await !!!"
  );
};

const main1 = async () => {
  let w = await weather();
  let s = await stock();
};

main1();

// w.then((val) => {
//   console.log(val);
// });
