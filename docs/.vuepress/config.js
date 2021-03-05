module.exports = {
    // 插件
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/google-analytics': { 'ga': 'G-QTTKDL6ST0'},
        '@vuepress/active-header-links': {}
    },
    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/logo/small.png' }],
        [
            "script",
            {}, `
            var _hmt = _hmt || [];
            (function() {
            let aHtml = document.createElement('a');
              var hm = document.createElement("script");
              hm.src = "//hm.baidu.com/hm.js?6e843bf2bccfd3a2bf5e09f39934028a";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ],
        // 加入备案信息
        [
            "script",
            {},
            `
            window.onload = function(){
               var doc = document.getElementsByClassName('footer');
               if(doc.length > 0){
                  doc[0].innerHTML = '<span style="color: #3eaf7c;font-size: 14px;font-weight: 500">© ZhengJie 2018 - 2021</span> | <a href="https://beian.miit.gov.cn" style="color:#3eaf7c;font-size: 14px;">浙ICP备18005431号-7</a>';
               }
            }`
        ]

    ],
    // 网站标题及描述
    title: 'carambola',
    description: '微服务快速开发框架',
    base: '/carambola-doc/',
    // 主题配置
    themeConfig: {
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 2,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        subSidebar: 'auto',
        logo: '/logo/small.png',
        author: 'chance',
        nav: [
            { text: '开发指南', link: '/guide/'},
            { text: '常见问题', link: '/problem/'},
            { text: '更新日志', link: '/version/'},
            //{ text: '捐赠支持', link: '/donation/'},
            { text: '体验地址', link: 'http://47.101.180.93/'},
            //{ text: '作者博客', link: 'https://www.ydyno.com'},
            // 下拉列表
            {
                text: '源码下载',
                items: [
                    {
                        text: 'Github',
                        link: 'https://github.com/zqlove001/carambola'
                    },
                    {
                        text: 'Gitee',
                        link: 'https://github.com/zqlove001/carambola'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guide/',
                        '/guide/kslj',
                        '/guide/ksks',
                        '/guide/hdsc',
                        '/guide/qdsc',
                        '/guide/xmbs'
                    ]
                },
                {
                    title: '其它',
                    collapsable: false,
                    children: [
                        '/guide/gxdm',
                        '/guide/bqsm'
                    ]
                },
                {
                    title: '鸣谢',
                    collapsable: false,
                    children: [
                        '/guide/mx'
                    ]
                }
            ],
            '/donation/': [
                '/donation/',
            ],
            '/problem/': [
                '/problem/',
            ],
            '/version/': [
                {
                    title: '更新日志',
                    collapsable: false,
                    children: [
                        '/version/',
                        '/version/V2.5'
                    ]
                }
            ]
        },
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'zqlove001/carambola-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页！'
    }
}

