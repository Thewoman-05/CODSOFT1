// Search function: Filter blog posts based on the keyword entered
document.getElementById("searchInput").addEventListener("input", function() {
    const searchKeyword = this.value.toLowerCase();
    const blogPosts = document.querySelectorAll(".blog-post");
    
    blogPosts.forEach(post => {
        const postTitle = post.querySelector("h3").textContent.toLowerCase();
        const postContent = post.querySelector("p").textContent.toLowerCase();
        
        if (postTitle.includes(searchKeyword) || postContent.includes(searchKeyword)) {
            post.style.display = "block";  // Show post
        } else {
            post.style.display = "none";   // Hide post
        }
    });
});

// Optional: Add more dynamic functionality as needed (e.g., handling click events on popular posts)
document.querySelectorAll(".popular-posts a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("You clicked on: " + this.textContent);
    });
});
