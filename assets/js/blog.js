window.onload = function() {
    const postsContainer = document.getElementById("postsContainer");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>By ${post.username}</em></p>`;
        postsContainer.appendChild(postElement);
    });
    
    document.getElementById("backButton").addEventListener("click", function() {
        window.location.href = "index.html";
    });
};
