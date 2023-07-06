const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

// async

generateJoke();
async function generateJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  joke.innerHTML = data.joke;
}

// .then

// function generateJoke() {
//   fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
