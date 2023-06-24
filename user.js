const postListEl = document.querySelector('.post-list')


let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");

  if (username.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value}`
    );

    username.value = "";
  }
});
async function onSearchChange(event) {
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json()
    console.log(postsData)

    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
  </div>
   
    `).join('');
}
async function main() {
    const id = localStorage.getItem("id")
    const posts = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=18b5ee41&s=fast`)
    const postsData = await posts.json()
    console.log(postsData)

    postListEl.innerHTML = postsData.map(post => `
    <div class="post">
        <div class="post__title">
        ${post.title}
        </div>
        <p class="post__body">
        ${post.body}
        </p>
  </div>
   
    `).join('');
}


main()