var posts=["2026/03/18/NOI2023春赛游寄——亦回望我的中学时代/","2026/03/16/算法笔记：树上背包/","2026/03/27/Java学习笔记-lambda演算、可计算性与函数式编程/","2026/03/30/Java学习笔记-线性数据结构/","2026/03/15/算法笔记：模拟退火/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };