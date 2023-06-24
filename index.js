// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"



userListEl = document.querySelector('.user-list');

async function main() {
    const users = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=fast");
    const usersData = await users.json();
    console.log(usersData.Search);
    userListEl.innerHTML = usersData.Search.map(
      (user) => userHTML(user))
    .join("");
}

function showUsersPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = `${window.location.origin}/user.html`
  console.log(id);
}

function userHTML(user) {
  return `<div class="user-card" onclick = "showUsersPosts(${user.id})">
  <div class="user-card__container">
  <h3>${user.Title}</h4>
   <img src = "${user.Poster}">
    <p><b>Year:</b> ${user.Year}</p>
  </div>
</div>`;
}
main();