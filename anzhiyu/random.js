var posts=["2026/05/01/文学评论-娜拉走后怎样？/","2026/03/18/NOI2023春赛游寄——亦回望我的中学时代/","2026/03/16/算法笔记：树上背包/","2026/05/05/那些年，欧拉解决的问题/","2026/03/15/算法笔记：模拟退火/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };