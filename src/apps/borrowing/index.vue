<template>
  <div>
    <Head :title="title" :isBack="isBack"></Head>

    <div class="bankcard-page">
      <!-- <div class="bankcard-content">
        <div class="content-area">
          <div class="text">借款金额</div>
          <div class="input">
            <cube-button @click="showAliasPicker">{{borrowMoney}}</cube-button>
          </div>
        </div>
      </div> -->
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">应还金额</div>
          <div class="input">
            <div class="i_right">{{contractAmonut}}</div>
          </div>
        </div>
      </div>
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">利息</div>
          <div class="input ababab">
            <div class="i_right">{{loanRateAmount}}</div>
          </div>
        </div>
      </div>
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">借款天数</div>
          <div class="input">
            <div class="i_right">{{loanTerm}}</div>
          </div>
        </div>
      </div>
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">借款用途</div>
          <div class="input">
            <div class="i_right">{{loanUse}}</div>
          </div>
        </div>
      </div>
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">服务费</div>
          <div class="input">
            <div class="i_right">{{serviceAmount}}</div>
          </div>
        </div>
      </div>
      <div class="bankcard-content">
        <div class="content-area">
          <div class="text">到账金额</div>
          <div class="input">
            <div class="i_right">{{actualIncom}}</div>
          </div>
        </div>
      </div>
      <div class="submit" @click="submit">点击阅读《借款协议》</div>
    </div>
  </div>
</template>
<script>
import Head from "../../components/head";
import { provinceList } from "../../api/area";
import {
  getOrderAuth,
  saveBinfo,
  saveAuthInfo,
  getAccount,
  qzIsGetYysData,
  loanCalculation
} from "../../api/app.api";

export default {
  name: "datacenter",
  components: {
    Head
  },
  data() {
    return {
      borrowerId: "", //借款人id
      contractAmonut: "", //应还金额
      loanRateAmount: "", //利息
      loanTerm: "", //期限
      loanUse: "", //用途
      serviceAmount: "", //服务费
      actualIncom: "", //到账金额
      type: "borrowing",
      title: "确认借款",
      isBack: "",
      userInfo: "",
      truncate: "",
      token: "",
      directline: {
        relation: "",
        type: "text",
        maxlength: 100,
        maxlength2: 6,
        disabled: true
      },
      column1:[
        { id: 1, name: '2000' }, { id: 2, name: '3000' }, { id: 3, name: '5000' }
      ],
      aliasPicker:false,
      borrowMoney:"请选择借款金额"
    };
  },
  methods: {
    showAliasPicker() {
      if (!this.aliasPicker) {
        this.aliasPicker = this.$createPicker({
          title: 'Use Alias',
          data: [this.column1],
          alias: {
            value: 'id',
            text: 'name'
          },
          onSelect: this.selectHandle,
        })
      }
      this.aliasPicker.show()
    },
    selectHandle(selectedVal, selectedIndex, selectedText) {
      this.borrowMoney = selectedText.join(' ')
      console.log(selectedVal.join(', '),selectedIndex.join(', '))
    },
    Totas: function() {
      this.toast = this.$createToast({
        txt: this.text,
        type: "txt",

        time: 1000
      });
      this.toast.show();
    },
    submit() {
      // if(this.borrowMoney == "请选择借款金额"){
      //   this.text = "借款金额为必选值"
      //   this.Totas()
      //   return
      // }
      this.$router.push({
        name: "protocol",
        query:{
          borrowMoney:this.borrowMoney
        }
      });
    },
    tpageToken: function() {
      saveBinfo({
        borrowerId: this.userInfo.id,
        channel: 1,
        productType: 1,
        expectMoney: "5000"
      })
        .then(res => {
          if (res) {
            getOrderAuth({
              borrowerId: this.userInfo.id
            })
              .then(res => {
                if (res.result) {
                  this.truncate = res.result;
                  if (this.truncate.orderId == null) {
                  }
                }
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    //借款人确认页
    getLoanCalculation: function() {
      loanCalculation({},{
        token: this.token
      })
        .then(res => {
          if (res.code == "200") {
            // this.borrowerId = res.data.borrowerId; //借款人id
            this.contractAmonut = res.data.shouldRepayTotal; //应还金额
            this.loanRateAmount = res.data.shouldRepayInterest; //利息
            this.loanTerm = res.data.loanTerm; //期限
            this.loanUse = res.data.loanUse; //用途
            this.serviceAmount = res.data.serviceAmount; //服务费
            this.actualIncom = res.data.inAccount; //到账金额
          } else {
            this.text = res.msg;
            this.Totas();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    toDecimal(x) {
      var f = parseFloat(x);
      if (isNaN(f)) {
        return false;
      }
      var f = Math.round(x * 100) / 100;
      var s = f.toString();
      var rs = s.indexOf(".");
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + 2) {
        s += "0";
      }
      return s;
    }
  },
  mounted() {
    let _this = this;
    dsBridge.register("humanfacecallback", function(l) {
      var l = JSON.parse(l);

      _this.$set(_this.truncate, "borrowCart", l.type);
    });

    //运营商
    dsBridge.register("operatorcallback", function(l) {
      var l = JSON.parse(l);

      _this.qzIsGetYys(l);
    });
    var token = (this.token = this.utils.fetch("token"));
    if (token.length == 0) {
      this.user = true;
      this.$router.push({ name: "Login" });
    } else {
      this.utils.save("type", this.type);
      this.userInfo = this.utils.fetch("userInfo");
      console.log(this.userInfo)
      this.token = this.utils.fetch("token");
      // this.tpageToken();
    }
    // console.log(this.token);
    this.getLoanCalculation();
  },
  destroyed() {
    clearInterval(this.intervalid2);
  }
};
</script>
<style lang='scss' scoped >
.i_right {
  padding-right: 0.2666666667rem;
  color: #666;
}
.cube-btn{
  background: none;
  font-size: 14px;
  color: #666;
  text-align: right;
}
button, button:active, button:focus{
  background: none;
  line-height: 0;
}
</style>