let phrases = [
  "Initializing Hack tool",
  "All the data of user is retrived from databases",
  "login using stolen credentials",
  "user account is hacked",
  "downloading all user data",
  "publishing all data to server 0992",
  "deleting all data from user's account",
  "logout",
  "mission accomplished"
];

const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};

const startHack = async (message) => {
  await sleep(2);
//   console.log(message);
container.innerHTML += message + "<br>" +"<br>"
};

//async iife

(async () => {
  for (let i = 0; i < phrases.length; i++) {
    await startHack(phrases[i]);
  }
})();
