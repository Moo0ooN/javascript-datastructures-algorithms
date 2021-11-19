module.exports = {
  title: 'JavaScript 数据结构与算法',
  base: '/javascript-datastructures-algorithms/',
  description: '作者: Zion Liu',
  themeConfig: {
    // logo: '/assets/img/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'dragon-liu/javascript-datastructures-algorithms',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'Github',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我改善此页面！',
    nav: [
      { text: '概述', link: '/' },
      { text: '内容', link: '/md/1.前言' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '基础',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          ['/md/1.前言', '前言']
        ]
      },
      {
        title: '第一部分 数据结构',
        collapsable: false,
        children: [
          ['/md/2.数组', '第1章 数组'],
          ['/md/3.栈', '第2章 栈'],
          ['/md/4.队列', '第3章 队列和双端队列'],
          ['/md/5.优先队列', '第4章 优先队列'],
          ['/md/6.单向链表', '第5章 单向链表'],
          ['/md/7.双向链表', '第6章 双向链表'],
          ['/md/9.集合', '第8章 集合'],
          ['/md/10.字典', '第9章 字典'],
          ['/md/11.哈希表', '第10章 哈希表'],
          ['/md/12.递归', '第11章 递归'],
          ['/md/13.树', '第12章 树'],
          ['/md/14.二叉树', '第13章 二叉树'],
          ['/md/15.二叉搜索树', '第14章 二叉搜索树'],
          ['/md/16.自平衡树', '第15章 自平衡树'],
          ['/md/17.二叉堆', '第16章 二叉堆'],
          ['/md/18.图', '第17章 图'],
        ],
      },
      {
        title: '第二部分 算法',
        collapsable: false,
        children: [

        ]
      },
    ],

  },
}