const but = document.getElementById("button");
const ul = document.getElementById("ul1");

but.addEventListener("click", async (e) => {
  try {
    ul.innerHTML = ''
    const li = document.createElement("li");
    const responsive = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await responsive.json();
    li.textContent = data.value;
    ul.append(li);
    
  } catch (error) {
    error.message;
  }
});
