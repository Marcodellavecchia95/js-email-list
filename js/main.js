const apiUri = `https://flynn.boolean.careers/exercises/api/random/mail`;
const randomListEl = document.getElementById("container");

// for (let i = 0; i <= 9; i++) {
//   axios.get(apiUri).then((response) => {
//     console.log(response.data);
//   });
// }

const generateRandomMails = () => {
  for (let i = 0; i <= 9; i++) {
    axios.get(apiUri).then((response) => {
      console.log(response.data.response);
    });
  }
};

generateRandomMails();
