<template>
    <div class="borrowingRecord">
        <Head :title="title" :isBack="isBack"></Head>
        <p class="interval"></p>
        <div class="main">
            <cube-tab-bar v-model="selectedLabel" show-slider @change="clickTabbar">
                <cube-tab v-for="item in tabs" :label="item.value" :key="item.value">
                    <!-- 默认插槽 -->
                    {{item.label}}
                </cube-tab>
            </cube-tab-bar>
            <div class="box">
                <div class="payList" v-for="(item,index) in Payment" :key="index" @click="paydetailPay()">
                    <div class="pay_left">
                        <p>{{item.price}}元</p>
                        <p>{{item.time}}</p> 
                    </div>
                    <div class="pay_right">
                        <span>{{item.state=="4"?"待还款":item.state=="6"?"已逾期":"-"}}</span>
                        <img src="../../assets/right.png" />
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Head from "../../components/head";
export default {
    name: "borrowingRecord",
    components: {
        Head
    },
    data() {
        return {
            title: "借款记录",
            isBack: "",
            selectedLabel: 0,
            tabs: [{
                label: '未还款',
                value:0,
                icon: 'cubeic-home'
            }, {
                label: '已还款',
                value:1,
                icon: 'cubeic-home'
            }],
            Payment:[
                {time:"2019年7月15日22时30分",price:"2568.00",state:4},
                {time:"2019年7月15日22时30分",price:"2500.00",state:3}
            ]
        };
    },
    methods: {
        clickTabbar(value){
            console.log(value)
        },
        paydetailPay(){
            this.$router.push({ name: "anleihenDetail" });
        }
        
    },
    mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.interval{
    height: (20/75)+rem;
    background: #fafafa;
}
.box{
    padding: 0 (30/75)+rem;
    margin-top: (15/75)+rem;
}
.payList{
    display: flex;
    justify-content: space-between;
    justify-items: center;
    padding: (24/75)+rem 0;
    border-bottom: 1px solid #EEEEEE;
    .pay_left{
        p:first-child{
          font-size: (32/75)+rem;
          color:  #323232; 
        }
        p:last-child{
            font-size: (24/75)+rem;
            color: #89898B;
        }
    }
    .pay_right{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span{
            font-size: (28/75)+rem;
            color: #666666;
        }
        img {
            width: 0.4rem;
            align-items: center;
            margin-left: 0.2rem;
        }
    }
}

</style>
