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
      <td colspan="4"><h2 style="text-align: center">请假申请表</h2></td>
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
          v-model="form.proposer"
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
          v-model="form.applyDemo"
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
        申请时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.applyTime"
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
      <td align="left" width="225" style="background-color: #f2f6fc"></td>
      <td width="225"></td>
    </tr>

    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        请假信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        请假类型
      </td>
      <td width="225">
        <select v-model="form.leaveType" placeholder="请输入">
          <option label="事假" value="shanghai">事假</option>
          <option label="丧假" value="shanghai">丧假</option>
          <option label="病假" value="shanghai">病假</option>
          <option label="年休假" value="shanghai">年休假</option>
          <option label="调休假" value="shanghai">调休假</option>
          <option label="婚假" value="shanghai">婚假</option>
          <option label="产假" value="shanghai">产假</option>
          <option label="陪产假" value="shanghai">陪产假</option>
          <option label="哺乳假" value="shanghai">哺乳假</option>
        </select>
      </td>
      <td align="left" width="225" style="background-color: #f2f6fc">
        请假开始时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.startDate"
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
        请假结束时间
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.endDate"
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
        请假天数
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.day"
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
        请假原因
      </td>
      <td width="225" colspan="3">
        <textarea
          cols="100"
          v-model="form.leaveCause"
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
      <td align="left" width="225" style="background-color: #f2f6fc">附件</td>
      <td>
        <button type="info" style="float: left">上传附件</button>
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
          v-model="form.leaveRemark"
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
    <br />
    <br />
    <button type="info" style="float: left">序号</button>
    <button type="info" style="float: left">处理步骤</button>
    <button type="info" style="float: left">签名</button>
    <button type="info" style="float: left">操作</button>
    <button type="info" style="float: left">日期</button>
    <button type="info" style="float: left; width: 900px">备注</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        proposer: "",
        applyDemo: "",
        applyTime: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        day: "",
        leaveCause: "",
        leaveImg: "1.png",
        leaveRemark: "",
      },
      ljq: {
        action: "提交",
        bpmUser: window.localStorage["account"],
        bpmUserPass: window.localStorage["password"],
        fullName: window.localStorage["fullName"],
        processName: "请假流程",
        planDate: "",
      },
    };
  },
  mounted() {},
  methods: {
    Add() {
      this.ljq.planDate=JSON.stringify(this.form)
      console.log(this.ljq.bpmUserPass);
      this.ljq.bpmUserPass=this.ljq.bpmUserPass.trim();
      this.$axios({
        method: "post",
        url: "http://localhost:60618/api/startleave",
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
