var posts=["2026/03/15/hello-world/","2026/03/15/算法笔记：模拟退火/","2026/03/16/算法笔记：树上背包/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };