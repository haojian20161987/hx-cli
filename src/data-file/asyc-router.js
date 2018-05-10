import VueRouter from 'vue-router'

import Hello from '@/components/Hello'
import lifeContent from '@/components/lifetime/life-content'
import settingContent from '@/components/setting/settingContent'

import single from '@/components/lifetime/danjimoxing/single'
import zaidui from '@/components/lifetime/danjimoxing/zaiduiqingkuang/zaidui'
import baofei from '@/components/lifetime/danjimoxing/baofeiqingkuang/baofei'
import baofei2 from '@/components/lifetime/danjimoxing/baofeiqingkuang/baofei2'
import chuchang from '@/components/lifetime/danjimoxing/chuchangqingkuang/chuchang'
import jiegou from '@/components/lifetime/danjimoxing/jiegoubili/jiegou'
import jinchang from '@/components/lifetime/danjimoxing/jinchangdaxiu/jinchang'
import shouming from '@/components/lifetime/danjimoxing/shouming/shouming'
import zaichang from '@/components/lifetime/danjimoxing/zaichangqingkuang/zaichang'

import newScreen from '@/components/screen/newScreen'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import chaoquebian from '@/components/lifetime/danjimoxing/chaoquebian/chaoquebian'
import jiquntuiyi from '@/components/lifetime/danjimoxing/jiquntuiyi/jiquntuiyi'
import songxiujingfei from '@/components/lifetime/danjimoxing/songxiujingfeiyuce/songxiujingfei'
import ticishiyongjihua from '@/components/lifetime/danjimoxing/ticishiyongjihua/tcsyjh'
import lvtuanjingfei from '@/components/lifetime/danjimoxing/lvtuannianfujingfeiyuce/lvtuanjingfei'
import fdjsysm from '@/components/lifetime/danjimoxing/fadongjishengyushouming/fdjsysm'
import fdjslaq from '@/components/lifetime/danjimoxing/fadongjishulianganquan/fdjslaq'
import fdjxljh from '@/components/lifetime/danjimoxing/fadongjixiulijihua/fdjxljh'
import zxjqpg from '@/components/lifetime/danjimoxing/zhanxunjiqunpinggu/zxjqpg'

import adminCustom from '@/components/admin-custom'
import admin from '@/components/admin'
import adminshow from '@/view/admin/adminshow'

let router2 = new VueRouter({
    routes: [
    ],
    base:'/ddd/'
  });
let rou3 = [
  {
    path: '/hello',
    name: 'Hello',
    component: Hello,
  },
  {
    path:'/',
    redirect:'/index2'
  },
  {
    path:'/screen',
    component:newScreen
  },
  {
    path: '/index2',
    component: index2,
    children: [
      {
        path: '',
        redirect: '/index2/jgblbh'
      },
      {
        path: 'jgblbh',
        components: {
          bodyOne: jiegou,
        },
    
      },
      {
        path: 'zchqkyc',
        components: {
          bodyOne: zaichang
        },
        
      },
      {
        path: 'zdqkyc',
        components: {
          bodyOne: zaidui
        },
        
      },
      {
        path: 'schqkyc',
        components: {
          bodyOne: jinchang
        },
        
      },
      {
        path: 'chchqkyc',
        components: {
          bodyOne: chuchang
        },
        
      },
      {
        path: 'bfqkyc',
        components: {
          bodyOne: baofei2
        },
        
      },
      {
        path: 'chqbyc',
        components: {
          bodyOne: chaoquebian
        },
      },
      {
        path: 'jqtyyc',
        components: {
          bodyOne: jiquntuiyi
        },
      },
      {
        path: 'sxjfyc',
        components: {
          bodyOne: songxiujingfei
        },
      },
      {
        path: 'tcsyjh',
        components: {
          bodyOne: ticishiyongjihua
        },
      },
      {
        path: 'ltndjf',
        components: {
          bodyOne: lvtuanjingfei
        },
      },
      {
        path: 'fxljh',
        components: {
          bodyOne: fdjxljh
        },
      },
      {
        path: 'fsmyc',
        components: {
          bodyOne: fdjsysm
        },
      },
      {
        path: 'fslaq',
        components: {
          bodyOne: fdjslaq
        },
      },
      {
        path: 'zxjqpg',
        components: {
          bodyOne: zxjqpg
        },
      },
    ]
  },
  {
    path: '/index3',
    component:index3
  },
  {
    path:'/admincustom',
    component:adminCustom
  },
  {
    path:'/admin',
    component:admin,
    children:[
      {
      path:'custom',
      component:adminCustom
      },
      {
        path:'',
        component:adminshow
      }
    ]
  }
];
  export {router2,rou3}