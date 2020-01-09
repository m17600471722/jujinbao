<template>
  <div class="offline">
    <div class="logIn-loading" v-if="loading">
      <cube-loading :size="30"></cube-loading>
    </div>
    <Head :title="title" :isBack="isBack"></Head>
    <div class="exten" v-if="data.payType==3">
      <div class="exten_list">
        <div class="extenli">
          <span>持卡人姓名：</span>
          <span class="textval">{{data.name==null?"-":data.name}}</span>
        </div>
        <div class="extenli">
          <span>开户行：</span>
          <span class="textval">{{data.bankName}}</span>
        </div>
        <div class="extenli">
          <span>银行卡号：</span>
          <span class="textval">{{data.bankNo}}</span>
        </div>
        <div class="extenli">
          <span>支付金额：</span>
          <span class="textval">{{data.amount}}</span>
        </div>
        <div class="extenli">
          <span>备注：</span>
          <span class="remark">支付备注请填写姓名和手机号，支付完成后，请联系客服进行核对.</span>
        </div>
      </div>
    </div>
    <!-- 微信、支付宝 -->
    <div class="scan_code" v-if="data.payType==1||data.payType==2">
      <p class="price">打开<span>{{data.payType==1?"支付宝":"微信"}}</span> [扫一扫]</p>
      <img :src="data.qrcodeUrl">
      <p class="pay_way">￥{{data.amount}}</p>
    </div>
    <div class="remarks" v-if="data.payType==1||data.payType==2">
      <span>备注：</span>
      <p>支付备注请填写姓名和手机号，支付完成后，请联系客服进行核对.</p>
    </div>
  </div>
</template>
<script>
import Head from "../../components/head";
import { repayment } from "../../api/app.api";

export default {
  name: "offline",
  components: {
    Head
  },
  data() {
    return {
      title: "支付",
      text:"",
      loading:false,
      isBack: "",
      isShow:false,
      data:{},
    };
  },
  methods: {
    Totas: function() {
      this.toast = this.$createToast({
        txt: this.text,
        type: "txt",
        time: 2000,
        onTimeout: () => {
          this.$router.go(-1);
        }
      });
      this.toast.show();
    },
    getRepay(){
      repayment({type:this.$route.query.type},{
        token:this.token
      })
      .then(res => {
        this.loading = false;
        if (res.code == "200") {
          this.data = res.data
        } else{
          this.text = res.msg;
          this.repaySuccess = false;
          this.Totas();
        }
      })
      .catch(error => {
        this.loading = false;
      });
    }

  },
  
  mounted() {
    this.hasSendValidCode = this.$route.query.hasSendValidCode;
    this.token = this.utils.fetch("token");
    this.userInfo = this.utils.fetch("userInfo");
    this.loading = true;
    this.getRepay()
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>