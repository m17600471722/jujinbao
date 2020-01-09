<template>
  <div>
    <div class="repaymentAmount">
      <p>已还款</p>
      <p>2000.00</p>
    </div>
    <div class="exten">
      <div class="exten_list">
        <div class="extenli">
          <span>借款金额：</span>
          <span class="textval">{{result.loanTerm}}</span>
        </div>
        <div class="extenli">
          <span>到账金额：</span>
          <span class="textval">{{result.shouldRepayDate}}</span>
        </div>
        <div class="extenli">
          <span>综合费用：</span>
          <span class="textval">{{parseFloat(result.inAccount).toFixed(2)}}</span>
        </div>
        <div class="extenli">
          <span>服务费用(元)：</span>
          <span class="textval">{{parseFloat(result.serviceAmount).toFixed(2)}}</span>
        </div>
        <div class="extenli">
          <span>申请时间：</span>
          <span class="textval">{{parseFloat(result.shouldRepayInterest).toFixed(2)}}</span>
        </div>
        <div class="extenli">
          <span>到期还款时间：</span>
          <span class="textval">{{parseFloat(result.overdueFee).toFixed(2)}}</span>
        </div>
        <div class="extenli">
          <span>实际还款时间：</span>
          <span class="textval">{{parseFloat(result.shouldRepayTotal).toFixed(2)}}</span>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../../components/head";
import {  } from "../../api/app.api";

export default {
  name: "extension",
  components: {
    Head
  },
  data() {
    return {
      title: "借款详情",
      isBack: "",
      token: "",
      loading:false,
      userInfo:"",
      result:{},
    };
  },
  methods: {

  },
  
  mounted() {
    this.hasSendValidCode = this.$route.query.hasSendValidCode;
    this.utils.save("type", this.type);
    this.token = this.utils.fetch("token");
    this.userInfo = this.utils.fetch("userInfo");
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>