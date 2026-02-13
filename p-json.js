const loadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayComments(data);
    });
};

// body: "iure deleniti aut consequatur necessitatibus\nid atque voluptas mollitia\nvoluptates doloremque dolorem\nrepudiandae hic enim laboriosam consequatur velit minus"
// email: "Amina@emmet.org"
// id: 492
// name: "consequatur alias ab fuga tenetur maiores modi"
// postId: 99
const displayComments = (comments) => {
    // console.log(comments);
    const commentContainer = document.getElementById('comments-container');
    commentContainer.innerHTML = "";
    comments.forEach(comment => {
        // console.log(comment);
        const commentCard = document.createElement("div");
        commentCard.innerHTML = `
        <div class="comment-card">
            <h2>${comment.id}</h2>
            <h2>${comment.name}</h2>
            <p>${comment.body}</p>
        </div>
        `;
        commentContainer.appendChild(commentCard);
    });
};
loadComment();

