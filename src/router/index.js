import Vue from "vue";
import Router from "vue-router";



Vue.use(Router);


import Hello from '@/components/Hello.vue'

/**
 * pages是用来生成可视化平台的路由和页面左侧的菜单。
 * 1、page[i].value要求具有唯一性，不能和其他的value值相同。
 * 2、page[i].children[i].url要求具有唯一性，不能和其他url相同，这个url最终会在router中生成path路径。
 * 3、page[i].children[i].pageString是和后台约定的字段，该字段最后会拼接成API中的command=searchJcdxyc类似的字段。
 */

// const pages = [{
//         value: "dangqianshili",
//         text: "当前实力",
//         children: [{
//                 text: "实力现状",
//                 url: "zzdj",
//                 pageString: "searchSlxz",
//                 component: zzdj1
//             },
//             {
//                 text: "飞机调配建议",
//                 url: "fjtpjy",
//                 pageString: "searchFjtpjy",
//                 component: fjtpjy1
//             }
//         ]
//     },
//     {
//         value: "shoumingyuce",
//         text: "寿命预测",
//         children: [{
//                 text: "飞机寿命状态预测",
//                 url: "shoumingyuce",
//                 pageString: "searchSmyc",
//                 component: shouming4
//             },
//             {
//                 text: "在队数量预测",
//                 url: "zdqkyc",
//                 pageString: "searchZdwh",
//                 component: barTable
//             },
//             {
//                 text: "在修数量预测",
//                 url: "zchqkyc",
//                 pageString: "searchZddxsl",
//                 component: barTable
//             },
//             {
//                 text: "修理计划建议",
//                 url: "schqkyc",
//                 pageString: "searchJcdxyc",
//                 component: barTable
//             },
//         ]
//     },
//     {
//         value: "kongzhiyouhua",
//         text: "控制优化",
//         children: [{
//                 text: "主动控制使用计划建议",
//                 url: "tcsyjh",
//                 pageString: "searchTcsyjh",
//                 component: ticishiyong4
//             },
//             {
//                 text: "在队数量优化",
//                 url: "zdslyh",
//                 pageString: "searchZdslyh",
//                 component: barTable
//             },
//             {
//                 text: "在修数量优化",
//                 url: "zxslyh",
//                 pageString: "searchZxslyh",
//                 component: barTable
//             },
//             {
//                 text: "修理定检优化",
//                 url: "xldjyh",
//                 pageString: "searchXldjyh",
//                 component: barTable
//             },
//         ]
//     },
//     {
//         value: "shiliyuce",
//         text: "实力预测",
//         children: [{
//                 text: "未来实力预测",
//                 url: "wlslyc",
//                 pageString: "searchZdwh",
//                 component: barTable
//             },
//             {
//                 text: "结构比例变化",
//                 url: "jgblbh",
//                 pageString: "searchZqjgbl",
//                 component: jiegoubili4
//             },
//             {
//                 text: "未来超缺编预测",
//                 url: "chqbyc",
//                 pageString: "searchChqb",
//                 component: chaoquebian4
//             },
//         ]
//     },
//     {
//         value: "zhuangtaifenxi",
//         text: "状态分析",
//         children: [{
//                 text: "机群状态实况",
//                 url: "jqztsk",
//                 pageString: "searchJqztsk",
//                 component: jqztsk1
//             },
//             {
//                 text: "机群故障实况与预测",
//                 url: "jqgzskyyc",
//                 pageString: "searchJqgzskyyc",
//                 component: jqgzskyyc1
//             },

//         ]
//     },
//     {
//         value: "xuqiupinggu",
//         text: "需求评估",
//         children: [{
//             text: "任务需求满足度评估",
//             url: "zxjqpg",
//             pageString: "searchZxjqpg",
//             component: zxjqpg4
//         }, ]
//     },
// ];

// export { pages };
//全部的路由。
let routerArray = [{
        path: "/",
        redirect: "/hello" ///设置重定向
    },
    {
        path: "/hello",
        component: Hello
    }
];

// let pages2 = [];
// pages.forEach(function(element) {
//     element.children.forEach(function(ele) {
//         pages2.push({
//             path: ele.url,
//             component: ele.component
//         });
//     });
// });

// /**
//  * 下面会将pages中的第一项当做默认项。
//  */
// let pages2Default = {
//     path: "",
//     redirect: "/index-show2/" + pages2[0].path
// };
// pages2.unshift(pages2Default);

//下面将pages对应的路由push到routerArray中。

// routerArray.push({
//     path: "/index-show",
//     component: indexShow,
//     children: pages2
// });


// routerArray.push({
//     path: "/index-show2",
//     component: indexShow2,
//     children: pages2
// });

// routerArray.push(testPage);

const router = new Router({
    routes: routerArray,
    base: "/start/v1/"
});
router.beforeEach((to, from, next) => {
    next();
});

export default router;
/**
 *
 */