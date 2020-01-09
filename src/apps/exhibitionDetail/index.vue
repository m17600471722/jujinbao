<template>
  <div>
   <div class="logIn-loading" v-if="loading">
      <cube-loading :size="30"></cube-loading>
    </div>
    <Head :title="title" :isBack="isBack"></Head>
    <paydetail></paydetail>
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
      title: "展期详情",
      isBack: "",
      token: "",
      loading:false,
      userInfo:"",
      
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