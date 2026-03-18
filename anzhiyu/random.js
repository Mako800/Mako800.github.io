var posts=["2026/03/15/算法笔记：模拟退火/","2026/03/16/算法笔记：树上背包/","2026/03/18/NOI2023春赛游寄——亦回望我的OI生涯/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };