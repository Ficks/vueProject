module.exports = [{
  path: '/',
  component: resolve => require(['@/components/RouteView/Home.vue'], resolve),
  redirect: '/Index',
  children: [{
      path: '/Index',
      name: '首页',
      component: resolve => require(['@/components/Modules/Index/Index.vue'], resolve),
    }, {
      path: '/MemberList',
      name: '所属会员列表',
      component: resolve => require(['@/components/Modules/MemberList/MemberList.vue'], resolve),
    }, {
      path: '/RegisteredMember',
      name: '注册会员',
      component: resolve => require(['@/components/Modules/RegisteredMember/RegisteredMember.vue'], resolve),
    }, {
      path: '/RecommendView',
      name: '推荐视图',
      component: resolve => require(['@/components/Modules/View/RecommendView/RecommendView.vue'], resolve),
    }, {
      path: '/PlaceView',
      name: '安置视图',
      component: resolve => require(['@/components/Modules/View/PlaceView/PlaceView.vue'], resolve),
    }, {
      path: '/Buy',
      name: '买单市场',
      component: resolve => require(['@/components/Modules/Transaction/Buy/Buy.vue'], resolve),
    },
    {
      path: '/Sell',
      name: '卖单市场',
      component: resolve => require(['@/components/Modules/Transaction/Sell/Sell.vue'], resolve),
    },
    {
      path: '/Matching',
      name: '匹配记录',
      component: resolve => require(['@/components/Modules/Transaction/Matching/Matching.vue'], resolve),
    },
    {
      path: '/AssetsExchange',
      name: '资产兑换',
      component: resolve => require(['@/components/Modules/Assets/AssetsExchange/AssetsExchange.vue'], resolve),
    }, {
      path: '/AssetsCrossRotation',
      name: '资产互转',
      component: resolve => require(['@/components/Modules/Assets/AssetsCrossRotation/AssetsCrossRotation.vue'], resolve),
    }, {
      path: '/AssetsFlowingwater',
      name: '流水明细',
      component: resolve => require(['@/components/Modules/Assets/AssetsFlowingwater/AssetsFlowingwater.vue'], resolve),
    }, {
      path: '/AssetsBreachOfContract',
      name: '违约记录',
      component: resolve => require(['@/components/Modules/Assets/AssetsBreachOfContract/AssetsBreachOfContract.vue'], resolve),
    }, {
      path: '/AssetsBonusInquiries',
      name: '奖金查询',
      component: resolve => require(['@/components/Modules/Assets/AssetsBonusInquiries/AssetsBonusInquiries.vue'], resolve),
    }, {
      path: '/AssetsAwardInquiries',
      name: '奖项查询',
      component: resolve => require(['@/components/Modules/Assets/AssetsAwardInquiries/AssetsAwardInquiries.vue'], resolve),
    }, {
      path: '/AssetsPurseAddress',
      name: '钱包地址',
      component: resolve => require(['@/components/Modules/Assets/AssetsPurseAddress/AssetsPurseAddress.vue'], resolve),
    }, {
      path: '/WithdrawDeposit',
      name: '我要提现',
      component: resolve => require(['@/components/Modules/Assets/WithdrawDeposit/WithdrawDeposit.vue'], resolve),
    }, {
      path: '/EditContactInfo',
      name: '修改联系资料',
      component: resolve => require(['@/components/Modules/PersonalCenter/EditContactInfo/EditContactInfo.vue'], resolve),
    }, {
      path: '/EditSeniorInfo',
      name: '修改高级资料',
      component: resolve => require(['@/components/Modules/PersonalCenter/EditSeniorInfo/EditSeniorInfo.vue'], resolve),
    }, {
      path: '/SecuritySetting',
      name: '安全设置',
      component: resolve => require(['@/components/Modules/PersonalCenter/SecuritySetting/SecuritySetting.vue'], resolve),
    }, {
      path: '/BindingPhone',
      name: '手机绑定',
      component: resolve => require(['@/components/Modules/PersonalCenter/BindingPhone/BindingPhone.vue'], resolve),
    }, {
      path: '/AccountInfo',
      name: '账户信息',
      component: resolve => require(['@/components/Modules/PersonalCenter/AccountInfo/AccountInfo.vue'], resolve),
    }, {
      path: '/MyMessage',
      name: '我的留言',
      component: resolve => require(['@/components/Modules/PersonalCenter/MyMessage/MyMessage.vue'], resolve),
    }, {
      path: '/Notice',
      name: '系统公告',
      component: resolve => require(['@/components/Modules/Notice/Notice.vue'], resolve),
    }
  ]
}]
