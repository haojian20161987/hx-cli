//在设计中，将原来的东西进行处理，更改vuex中，将pageString进行处理的步骤放在router中处理。这样在mixin中，根据pageString，更新params1和params2，
// import { pages } from '@/router/index'
export default {
    beforeCreate() {
        //在这个tick中将vuex中pageString更新。
        // let tmpArr = this.$route.path.split('/');
        // let curPage = '';
        // pages.forEach(function(element) {
        //     element.children.forEach(function(ele) {
        //         if (ele.url === tmpArr[2]) {
        //             curPage = ele.pageString
        //         }
        //     })
        // }, this);
        // this.$store.commit('changePagestring', curPage);
    },
}