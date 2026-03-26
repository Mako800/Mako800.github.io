var posts=["2026/03/18/NOI2023春赛游寄——亦回望我的中学时代/","2026/03/26/【回顾罗大佑】《鹿港小镇》/","2026/03/15/算法笔记：模拟退火/","2026/03/16/算法笔记：树上背包/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };