const blogList = document.getElementById("blog-list");

if (blogList && Array.isArray(BLOG_POSTS)) {
  blogList.innerHTML = BLOG_POSTS.map((post, index) => `
    <article class="post-card ${index === 0 ? "post-large" : ""}">
      <div class="post-visual ${post.visual}"><span>${post.symbol}</span></div>
      <div class="post-body">
        <span class="tag">${post.category}</span>
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <div class="post-meta">${post.date} · ${post.readTime}</div>
        <a href="post.html?id=${encodeURIComponent(post.id)}" class="text-link">Read more →</a>
      </div>
    </article>
  `).join("");
}