<template>
  <div>
   <div class="logIn-loading" v-if="loading">
      <cube-loading :size="30"></cube-loading>
    </div>
    <Head :title="title" :isBack="isBack"></Head>
    <paydetail></paydetail>
    <p class="interval"></p>
    <div class="standRoll" @click="exhibiPag">
      <p>展期记录</p>
      <img src="../../assets/right.png" />
    </div>
  </div>
</template>
<script>
import paydetail from "../../components/PayDetail";
import Head from "../../components/head";
import {  } from "../../api/app.api";

export default {
  name: "extension",
  components: {
    Head,
    paydetail
  },
  data() {
    return {

      title: "借款详情",
      isBack: "",
      token: "",
      loading:false,
      userInfo:"",
    };
  },
  methods: {
    exhibiPag(){
      this.$router.push({ name: "exhibitionDetail" });
    },
    Totas: function() {
      this.toast = this.$createToast({
        txt: this.text,
        type: "txt",
        time: 1000,
        onTimeout: () => {
          if (this.repaySuccess) {
            this.$router.push({ name: "home" });
          }
        }
      });
      this.toast.show();
    },


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