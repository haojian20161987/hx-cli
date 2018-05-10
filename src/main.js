// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/treemap';
import 'echarts/lib/chart/graph';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/funnel';
import 'echarts/lib/chart/parallel';
import 'echarts/lib/chart/sankey';
import 'echarts/lib/chart/boxplot';
import 'echarts/lib/chart/candlestick';
import 'echarts/lib/chart/effectScatter';
import 'echarts/lib/chart/lines';
import 'echarts/lib/chart/heatmap';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/polar';
import 'echarts/lib/component/geo';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/brush';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/timeline';
import 'echarts/lib/component/toolbox';
import 'zrender/lib/vml/vml';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.use(Vuex);
//Vue.prototype.HOST='/api/datacenter.middleground.controller'
//Vue.prototype.IMGE='/api'

Vue.prototype.HOST = window.zhongtaiIP + '/datacenter.middleground.controller';
Vue.prototype.IMGE = window.zhongtaiIP + '/';

Vue.config.productionTip = false

var vm = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
window.vm = vm;