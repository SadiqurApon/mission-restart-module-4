const loadPosts = () => {
    const url = ('https://jsonplaceholder.typicode.com/posts')
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            displayPosts(data);
        });
};

// {userId: 10, 
// id: 96, 
// title: 'quaerat velit veniam amet cupiditate aut numquam ut sequi', body: 'in non odio excepturi sint eum\nlabore voluptates v…aque rerum\nveniam non exercitationem delectus aut'}

const displayPosts = (posts) => {
    //1. get the container and empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";
    posts.forEach(post => {
        //2. create an element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
        //3. add to the container
        postContainer.appendChild(postCard);

    })
};
// loadPosts();