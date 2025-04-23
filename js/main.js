const apiUri = `https://flynn.boolean.careers/exercises/api/random/mail`;
const randomListEl = document.querySelector(".list-group");
const buttonEl = document.getElementById("generate-btn");

const mailListGenerator = () => {
  for (let i = 0; i <= 9; i++) {
    axios.get(apiUri).then((response) => {
      randomListEl.innerHTML += `
        <li class="list-group-item text-danger">${response.data.response}</li>
        `;
    });
  }
};
mailListGenerator();

buttonEl.addEventListener("click", () => {
  randomListEl.innerHTML = "";
  mailListGenerator();
});
