var posts=["2026/03/15/算法笔记：模拟退火/","2026/03/15/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };