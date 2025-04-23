const apiUri = `https://flynn.boolean.careers/exercises/api/random/mail`;
const randomListEl = document.getElementById("list-group");

// for (let i = 0; i <= 9; i++) {
//   axios.get(apiUri).then((response) => {
//     console.log(response.data);
//   });
// }

// const generateRandomMails = () => {
//   for (let i = 0; i <= 9; i++) {
//     axios.get(apiUri).then((response) => {
//       console.log(response.data.response);
//     });
for (let i = 0; i <= 9; i++) {
  axios.get(apiUri).then((response) => {
    randomListEl.innerHTML += `
        <li class="list-group-item">${response.data.response}</li>
        `;
  });
}
