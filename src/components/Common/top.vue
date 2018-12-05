<template>
  <div
    class="top_list"
    v-loading="loading"
    :element-loading-text="$Language[userInfo.Language].global.loadingTips"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <ul>
      <!-- YSM -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[0].fundType])">
          <div class="icon">
            <i class="iconfont icon-zan"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[0].fundName}}</h3>
            <p>{{$twoDecimal(listArr[0].fundAmount)}}</p>
          </div>
          <el-button
            class="hjbtn"
            style="float:right;"
            @click.stop="onWithdrawDeposit"
            size="small"
          >{{lg.MyTxs}}</el-button>
        </div>
      </li>
      <!-- 智算能力 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[3].fundType])">
          <div class="icon">
            <i class="iconfont icon-jinying"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[3].fundName}}</h3>
            <p>{{$twoDecimal(listArr[3].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- 投资算力 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[2].fundType])">
          <div class="icon">
            <i class="iconfont icon-ai243"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[2].fundName}}</h3>
            <p>{{$twoDecimal(listArr[2].fundAmount)}}</p>
          </div>
          <el-button
            class="hjbtn"
            style="float:right;"
            @click.stop="onMzs"
            size="small"
          >{{sfState==1?lg.mazSfZh:lg.mazSf}}</el-button>
          <!-- <el-button type="danger" style="float:right;margin-left:8px;" @click.stop="onFreeInvestAll" size="small">{{lg.yjsfBtn}}</el-button> -->
          <!-- <el-button style="float:right;" @click.stop="dialogVisible=true" size="small">{{lg.sfBtn}}</el-button> -->
        </div>
      </li>
      <!-- 链接算力 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[1].fundType])">
          <div class="icon">
            <i class="iconfont icon-ai243"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[1].fundName}}</h3>
            <p>{{$twoDecimal(listArr[1].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- 节点算力 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[7].fundType])">
          <div class="icon">
            <i class="iconfont icon-zan"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[7].fundName}}</h3>
            <p>{{$twoDecimal(listArr[7].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- 自由资产 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[4].fundType])">
          <div class="icon">
            <i class="iconfont icon-ai243"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[4].fundName}}</h3>
            <p>{{$twoDecimal(listArr[4].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- 股权 -->
      <li>
        <div class="box" @click="goAssetsFlowingwater([listArr[5].fundType])">
          <div class="icon">
            <i class="iconfont icon-ai243"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[5].fundName}}</h3>
            <p>{{$twoDecimal(listArr[5].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- 可用YSM -->
      <li>
        <div
          class="box"
          @click="goAssetsFlowingwater([listArr[0].fundType,listArr[1].fundType,listArr[3].fundType])"
        >
          <div class="icon">
            <i class="iconfont icon-zan"></i>
          </div>
          <div class="wz">
            <h3>{{listArr[6].fundName}}</h3>
            <p>{{$twoDecimal(listArr[6].fundAmount)}}</p>
          </div>
        </div>
      </li>
      <!-- YSM商城 -->
      <!-- <li>
                <a href="http://www.baidu.com" class="box" target="_blank">
                    <div class="icon"><i class="iconfont icon-shangcheng"></i></div>
                    <h3>YSM商城</h3>
                </a>
      </li>-->
    </ul>

    <!-- <el-dialog
        :title="lg.sfNum"
        :visible.sync="dialogVisible"
        v-loading="sfLoading"
        :element-loading-text="$Language[userInfo.Language].global.loadingTips"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        width="30%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="lg.sfNum" prop="investNum">
                <el-input v-model="ruleForm.investNum" :placeholder="lg.sfNumTips"></el-input>
            </el-form-item>
        </el-form>
        <p style="color:#a48339;padding-left:30px;">{{lg.zSfJjNo}}</p>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">{{$Language[userInfo.Language].global.cancel}}</el-button>
            <el-button type="primary" @click="onFreeInvest('ruleForm')">{{$Language[userInfo.Language].global.submit}}</el-button>
        </span>
    </el-dialog>-->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"]),
    lg() {
      return this.$Language[this.userInfo.Language].formTips;
    },
    rules() {
      if (this.$refs["ruleForm"]) {
        setTimeout(() => {
          this.$refs["ruleForm"].clearValidate();
        }, 1);
      }
      var pnum = (rule, value, callback) => {
        if (!/^(-)?[0-9]*$/g.test(Math.floor(value))) {
          callback(new Error(this.lg.numbers));
        } else if (value <= 0) {
          callback(new Error(this.lg.pnum));
        } else {
          callback();
        }
      };
      return {
        investNum: [
          { required: true, message: this.lg.sfNumTips, trigger: "blur" },
          { validator: pnum, trigger: "blur" }
        ]
      };
    }
  },
  data() {
    return {
      sfState: 1,
      loading: true,
      sfLoading: false,
      dialogVisible: false,
      ruleForm: {
        fundType: "",
        investNum: ""
      },

      listArr: [
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" },
        { fundName: "", fundAmount: "" }
      ]
    };
  },
  methods: {
    onWithdrawDeposit() {
      // 提现
      this.$router.push({
        path: "/WithdrawDeposit"
      });
    },
    onMzs() {
      this.$http({
        url: "/member/freeInvest",
        data: {
          releaseState: this.sfState
        },
        tips: true
      }).then(
        data => {
          if (data.status == 1) {
            this.sfState = data.data;
          }
        },
        err => {}
      );
    },
    getData() {
      this.loading = true;
      this.$http({
        url: "/member/findFundAccount"
      }).then(
        data => {
          if (data.status == 1) {
            console.log(data);
            this.listArr = data.data;
          }
          this.loading = false;
        },
        err => {
          this.loading = false;
        }
      );
    },
    goAssetsFlowingwater(id) {
      // 跳转到资产明细
      this.$router.push({
        path: "/AssetsFlowingwater",
        query: {
          id: id
        }
      });
    }
    // onFreeInvest(formName) {
    //   // 释放
    //   this.ruleForm.fundType = this.listArr[2].fundType;
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //       // 验证通过
    //       this.sfLoading = true;
    //       this.$http({
    //         url: "/member/freeInvest",
    //         data: this.ruleForm,
    //         tips: true
    //       }).then(
    //         data => {
    //           if (data.status == 1) {
    //             this.getData();
    //             this.dialogVisible = false;
    //           }
    //           this.sfLoading = false;
    //         },
    //         err => {
    //           console.log(err);
    //           this.sfLoading = false;
    //         }
    //       );
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    // onFreeInvestAll() {
    //   if (this.listArr[2].fundAmount == 0) {
    //     this.$message({
    //       type: "warning",
    //       message: this.lg.yuerBz
    //     });
    //     return;
    //   }
    //   // 释放全部的
    //   this.$confirm(this.lg.frAllTips, this.lg.tips, {
    //     confirmButtonText: "确定",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       this.$http({
    //         url: "/member/freeInvest",
    //         data: {
    //           fundType: this.listArr[2].fundType,
    //           investNum: this.listArr[2].fundAmount
    //         },
    //         tips: true
    //       }).then(
    //         data => {
    //           if (data.status == 1) {
    //             this.getData();
    //           }
    //           this.sfLoading = false;
    //         },
    //         err => {
    //           console.log(err);
    //           this.sfLoading = false;
    //         }
    //       );
    //     })
    //     .catch(() => {});
    // }
  },
  created() {
    this.getData();
    this.$http({
      url: "/member/findReleaseState"
    }).then(
      data => {
        if (data.status == 1) {
          this.sfState = data.data.releaseState;
        }
      },
      err => {}
    );
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.hjbtn {
  background: #303133;
  color: #cda964;
  border-color: #666;
}
.top_list {
  ul {
    margin: 0 -5px;
    height: auto;
    overflow: hidden;
  }
  li {
    float: left;
    width: 100/4%;
    padding: 0 5px;
    box-sizing: border-box;
    margin-bottom: 10px;
    color: #fff;
  }

  .box {
    background: #cda964;
    box-sizing: border-box;
    padding: 15px;
    height: auto;
    overflow: hidden;
    cursor: pointer;
    display: block;
    color: #fff;
    &:hover {
      background: #cd7f32;
    }
    & > h3 {
      line-height: 38px;
    }
  }

  .icon {
    float: left;
    padding-right: 10px;
    i {
      color: #cda964;
      background: #303133;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      display: block;
      text-align: center;
      line-height: 35px;
      font-size: 25px;
    }
  }
  .wz {
    float: left;
  }
}
</style>
