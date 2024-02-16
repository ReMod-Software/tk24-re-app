<template>
    <div class="blog-container">
      <header class="blog-header">
        <h1 class="blog-title">{{ post.title }}</h1>
      </header>
  
      <main class="blog-main">
        <div class="blog-post">
          <img class="blog-post-image" :src="post.image" alt="Blog post image" />
          <div class="blog-post-info">
            <div class="blog-post-meta">
              <span class="blog-post-author">By: {{ post.author }}</span>
              <span class="blog-post-date">{{ post.date }}</span>
            </div>
            <div class="blog-post-content">
              <p>{{ post.content }}</p>
            </div>
          </div>
        </div>
      </main>
  
      <footer class="blog-footer">
        </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          image: "/blog/navigating_the_buyers_market.png", // Replace with your image URL
          title: "Navigating the Buyer's Market",
          author: "Ishat Gupta",
          date: "15 February 2024",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Donec a diam lectus. Aenean euismod bibendum laoreet. Praesent at ligula vitae est congue blandit at non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .blog-container {
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  
  .blog-header,
  .blog-main,
  .blog-footer {
    flex: 1;
    width: 80%;
  }
  
  .blog-post {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
  
  .blog-post-image {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
  }
  
  .blog-post-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  
  .blog-post-meta {
    font-size: 0.8rem;
    color: #888;
    margin-bottom: 0.5rem;
  }
  
  .blog-post-content {
    line-height: 1.5;
  }
  
  /* Add your custom styles here */
  </style>
  