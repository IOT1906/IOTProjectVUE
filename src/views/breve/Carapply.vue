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
        申请日期
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
      <td align="left" width="225" style="background-color: #f2f6fc">星期</td>
      <td width="225">
        <input
          type="text"
          v-model="form.applyTime"
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
        目标地点
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
        出发时间
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
      <td align="left" width="225" style="background-color: #f2f6fc">
        返回时间
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
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        乘车人数
      </td>
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
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        出差详细信息
      </td>
    </tr>
 <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">车牌号</td>
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
        出发时间
      </td>
      <td width="225">
        <input
          type="date"
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
        途径
      </td>
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
        结束表盘公里数
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
        实际公里数
      </td>
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
        驾驶员
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
    <button type="info" style="float: left">提交</button>
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
        proposer: "",
        applyDemo: "",
        applyTime: "",
        leaveType: "",
        startDate: "",
        endDate: "",
        day: "",
        leaveCause: "",
        leaveImg: "",
        leaveRemark: "",
      },
    };
  },
  mounted() {
    this.Add();
  },
  methods: {
    Add() {
      this.$axios({
        method: "post",
        url: "http://localhost:60618/aopi/LeaveAdd",
        data: this.form,
      }).then((res) => {
        if (res.data) {
          ("提交失败");
        } else {
          alert("提交成功");
        }
      });
    },
  },
};
</script>