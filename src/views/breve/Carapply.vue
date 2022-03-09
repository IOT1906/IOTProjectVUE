<template>
  <table
    border="1px"
    ref="formRef"
    :model="form"
    bordercolor="#E4E7ED"
    width="1200px"
    cellpadding="5"
    cellspacing="0"
  >
    <tr>
      <td colspan="4" style="background-color: aqua">
        <h2 style="text-align: center">用车申请表</h2>
      </td>
    </tr>
    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        基础信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">申请人</td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyProposer"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        申请部门
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyTProposerDemp"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        申请日期
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyProposerDate"
          placeholder="选择日期"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">星期</td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyWeek"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        详细信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        出发地点
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyDepart"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        目标地点
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyTarget"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        出发时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.carapplyStartDate"
          placeholder="选择日期"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        返回时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.carapplyEndDate"
          placeholder="选择日期"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        乘车人数
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyRiding"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td
        align="left"
        width="225"
        style="background-color: #f2f6fc"
        colspan="2"
      ></td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        随同人员
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyCommon"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td
        align="left"
        width="225"
        style="background-color: #f2f6fc"
        colspan="2"
      ></td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">事由</td>
      <td width="225" colspan="3">
        <textarea
          cols="100"
          v-model="form.carapplyReason"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        ></textarea>
      </td>
    </tr>

    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        出差详细信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">车牌号</td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyPlate"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        出发时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.carapplyDeparture"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">途径</td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyApproach"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td
        align="left"
        width="225"
        style="background-color: #f2f6fc"
        colspan="2"
      ></td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        出发表盘公里数
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyKilometre"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        结束表盘公里数
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyFinish"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>

    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        实际公里数
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyPractical"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">驾驶员</td>
      <td width="225">
        <input
          type="text"
          v-model="form.carapplyDriver"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        />
      </td>
    </tr>
    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        备注
      </td>
    </tr>
    <tr>
      <td width="225" colspan="4">
        <textarea
          cols="120"
          v-model="form.carapplyRemark"
          style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "
        ></textarea>
      </td>
    </tr>
  </table>
  <div style="margin: -8 auto; width: 1200px">
   <button type="info" style="float: left" @click="Add()">提交</button>
    <button type="info" style="float: left">存为草稿</button>
    <button type="info" style="float: left">存为范本</button>
    <button type="info" style="float: left">启用阅示</button>
    <a>请选择职位</a>
    <select>
      <option>人事行政部\chengfei</option>
    </select>
    <br />
    <br />
    <tr>
      <td style="background-color: brown">
        <button type="info" style="float: left">序号</button>
        <button type="info" style="float: left">处理步骤</button>
        <button type="info" style="float: left">签名</button>
        <button type="info" style="float: left">操作</button>
        <button type="info" style="float: left">日期</button>
        <button type="info" style="float: left; width: 900px">备注</button>
      </td>
    </tr>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
<<<<<<< HEAD
        carapplyProposer: window.localStorage["displayName"],
        carapplyTProposerDemp: "人事部",
        carapplyProposerDate: new Date(),
        carapplyWeek: "",
        carapplyDepart: "",
        carapplyTarget: "",
        carapplyStartDate: "",
        carapplyEndDate: "",
        carapplyRiding: "",
        carapplyCommon: "",
        carapplyReason: "",
        carapplyPlate: "",
        carapplyDeparture: "",
        carapplyApproach: "",
        carapplyKilometre: "",
        carapplyFinish: "",
        carapplyPractical: "",
        carapplyDriver: "",
        carapplyRemark: "",
      },
       ljq: {
        action: "提交",
        bpmUser: window.localStorage["account"],
        bpmUserPass: window.localStorage["password"],
        fullName: window.localStorage["fullName"],
        processName: "用车申请流程",
        planDate: "",
=======
        proposer:  window.localStorage["displayName"],
        applyDemo: "",
        applyTime: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        day: "",
        leaveCause: "",
        leaveImg: "",
        leaveRemark: "",
>>>>>>> 431fd9497f260bd4abb3b939ab887387f59e9510
      },
    };
  },
 mounted: function () {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
            _this.form.carapplyProposerDate = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)
        },
  methods: {
      Add() {
      this.ljq.planDate=JSON.stringify(this.form)
      console.log(this.ljq.bpmUserPass);
      this.ljq.bpmUserPass=this.ljq.bpmUserPass.trim();
      this.$axios({
        method: "post",
        url: "http://localhost:60618/api/StartCarapply",
        data: this.ljq,
      }).then((res) => {
        if (res.data!=null) {
          alert("提交成功");
        } else {
          alert("提交失败");
        }
      });
    },
  },
};
</script>