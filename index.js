const but = document.getElementById("button");
const ul = document.getElementById("ul1");

but.addEventListener("click", async (e) => {
  const li = document.createElement("li");
  const responsive = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await responsive.json();
  try {
    li.textContent = data.value;
    ul.append(li);
    ul = "";
  } catch (error) {
    error.message
  }
});
