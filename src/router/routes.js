 import index from '@/apps/PageTransition'


 const routes = [{
   path: '/',
   component: index,

   children: [{
       path: '/',
       name: 'home',
       component: r => require.ensure([], () => r(require('@/apps/home')), 'home'),
     }, {
       path: '/login',
       name: 'Login',
       meta: {
         title: "登录",
       },
       component: r => require.ensure([], () => r(require('@/apps/login')), 'Login'),
       meta: {
         keepAlive: true
       }
     }, {
       path: '/datacenter',
       name: 'datacenter',
       meta: {
         title: "我的资料",
       },
       component: r => require.ensure([], () => r(require('@/apps/datacenter')), 'datacenter'),
       meta: {
         keepAlive: true
       }
     }, {
       path: '/personage',
       name: 'personage',
       meta: {
         title: "个人信息",
       },
       component: r => require.ensure([], () => r(require('@/apps/personage')), 'personage'),
       meta: {
         keepAlive: true
       }
     },
      {
       path: '/extension',
       name: 'extension',
       meta: {
         title: "展期",
       },
       component: r => require.ensure([], () => r(require('@/apps/extension')), 'extension'),
       meta: {
         keepAlive: true
       }
     },
     {
      path: '/borrowingDetails',
      name: 'borrowingDetails',
      meta: {
        title: "还款详情",
      },
      component: r => require.ensure([], () => r(require('@/apps/borrowingDetails')), 'borrowingDetails'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/payment',
      name: 'payment',
      meta: {
        title: "支付方式",
      },
      component: r => require.ensure([], () => r(require('@/apps/payment')), 'payment'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      meta: {
        title: "支付成功",
      },
      component: r => require.ensure([], () => r(require('@/apps/paySuccess')), 'paySuccess'),
      meta: {
        keepAlive: true
      }
    },
     {
       path: '/bindbankcard',
       name: 'bindbankcard',
       meta: {
         title: "绑定银行卡",
       },
       component: r => require.ensure([], () => r(require('@/apps/bindbankcard')), 'bindbankcard'),
       meta: {
         keepAlive: true
       }
     }, {
       path: '/bankcard',
       name: 'bankcard',
       meta: {
         title: "绑定银行卡",
       },
       component: r => require.ensure([], () => r(require('@/apps/bankcard')), 'bankcard'),
       meta: {
         keepAlive: true
       }
     },
     {
       path: '/mine',
       name: 'Mine',
       meta: {
         title: "个人中心",
         index: 3,
       },

       component: r => require.ensure([], () => r(require('@/apps/mine')), 'Mine'),
       meta: {
         navShow: true
       },
     },
     {
       path: '/agreement',
       name: 'agreement',
       meta: {
         title: "用户服务协议",
       },
       component: r => require.ensure([], () => r(require('@/apps/agreement')), 'agreement'),
       meta: {
         keepAlive: true
       }
     },
     {
       path: '/borrowing',
       name: 'borrowing',
       meta: {
         title: "我要借款",
       },
       component: r => require.ensure([], () => r(require('@/apps/borrowing')), 'borrowing'),
       meta: {
         keepAlive: true
       }
     },
     {
       path: '/protocol',
       name: 'protocol',
       meta: {
         title: "借款协议",
       },
       component: r => require.ensure([], () => r(require('@/apps/protocol')), 'protocol'),
       meta: {
         keepAlive: true
       }
     },
    {
      path: '/idCard',
      name: 'idCard',
      meta: {
        title: "身份认证",
      },
      component: r => require.ensure([], () => r(require('@/apps/idCard')), 'idCard'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/syntony',
      name: 'syntony',
      meta: {
        title: "运营商认证回调页",
      },
      component: r => require.ensure([], () => r(require('@/apps/syntony')), 'syntony'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/borrowingRecord',
      name: 'borrowingRecord',
      meta: {
        title: "借款记录",
      },
      component: r => require.ensure([], () => r(require('@/apps/borrowingRecord')), 'borrowingRecord'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/anleihenDetail',
      name: 'anleihenDetail',
      meta: {
        title: "借款详情",
      },
      component: r => require.ensure([], () => r(require('@/apps/anleihenDetail')), 'anleihenDetail'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/exhibitionDetail',
      name: 'exhibitionDetail',
      meta: {
        title: "展期详情",
      },
      component: r => require.ensure([], () => r(require('@/apps/exhibitionDetail')), 'exhibitionDetail'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/offlinePayment',
      name: 'offlinePayment',
      meta: {
        title: "线下支付",
      },
      component: r => require.ensure([], () => r(require('@/apps/offlinePayment')), 'offlinePayment'),
      meta: {
        keepAlive: true
      }
    },
   ]
 }]

 export default routes
