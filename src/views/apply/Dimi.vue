<template>
  <div>
    <table
      border="1px"
      bordercolor="#E4E7ED"
      width="941xp"
      cellpadding="5"
      cellspacing="0"
    >
      <tr>
        <td colspan="4">
        
          <h2 style="text-align: center;">离职审批表</h2>
        </td>
      </tr>
      <tr>
        <td
          align="left"
          colspan="4"
          style="background-color: rgb(217, 236, 255)"
        >
          基础信息
        </td>
      </tr>
      <tr>
        <td align="left" width="225" style="background-color: #f2f6fc">
          申请人
        </td>
        <td width="125">
          <input
            type="text"
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
            v-model="form.applicant"
          />
        </td>
        <td align="left" width="225" style="background-color: #f2f6fc">
          申请部门
        </td>
        <td width="225">
          <input
            type="text"
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
            v-model="form.department"
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
        <td align="left" width="225" style="background-color: #f2f6fc"></td>
        <td width="225"></td>
      </tr>
      <tr>
        <td
          align="left"
          colspan="4"
          style="background-color: rgb(217, 236, 255)"
        >
          离职详细信息
        </td>
      </tr>
      <tr>
        <td align="left" width="225" style="background-color: #f2f6fc">职位</td>
        <td width="225">
          <input
            type="text"
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
            v-model="form.position"
          />
        </td>
        <td align="left" width="225" style="background-color: #f2f6fc">
          入职日期
        </td>
        <td width="225">
          <input
            type="date"
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
            v-model="form.stakeTime"
          />
        </td>
      </tr>
      <tr>
        <td align="left" width="225" style="background-color: #f2f6fc">
          离职日期
        </td>
        <td width="225">
          <input
            type="date"
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
            v-model="form.endTime"
          />
        </td>
        <td align="left" width="225" style="background-color: #f2f6fc">
          离职类型
        </td>
        <td width="225">
          <select
            placeholder="离职类型"
            style="
              width: 225px;
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
            v-model="form.typeId"
          >
            <option label="离职" value="785415"></option>
            <option label="辞退" value="7857254"></option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="left" width="225" style="background-color: #f2f6fc">
          离职原因
        </td>
        <td width="225">
          <input
            type="text"
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
            v-model="form.depwhy"
          />
        </td>
      </tr>

      <tr>
        <td
          align="left"
          colspan="4"
          style="background-color: rgb(217, 236, 255)"
        >
          备注
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <textarea cols="129" rows="5" v-model="form.depnote"></textarea>
        </td>
      </tr>
    </table>

    <table>
      <tr>
        <td align="left" style="background-color: #f2f6fc">
          <button @click="DepAdd()">提交</button>&nbsp;
          <button>存为草稿</button>&nbsp; <button>存为范文</button>&nbsp;
          <button>启用阅示</button>&emsp;&nbsp; 请选择职位:
          <select>
            <option label="人事行政部\wangwanfen"></option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="left" style="background-color: #f2f6fc">
          <button style="width: 64px">序号</button>
          <button style="width: 80px">处理步骤</button>
          <button style="width: 64px">签名</button>
          <button style="width: 64px">操作</button>
          <button style="width: 64px">日期</button>
          <button style="width: 600px">备注</button>
        </td>
      </tr>
    </table>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      day: new Date(),
      //定义一个定时器的变量
      houtas: new Date(), // 获取当前时间
      
      form: {
        applicant:  window.localStorage["displayName"],
        department: "",
        position: "",
        stakeTime: new Date(),
        endTime: new Date(),
        depwhy: "",
        depnote: "",
        depTime: new Date(),
        typeId: 0,
      },
    };
  },
  created() {
    this.day = new Date().getFullYear();
  },
  mounted: function () {
    var _this = this;
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();
    let hh = new Date().getHours();
    let mf =
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes();
    let ss =
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds();
    _this.depTime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
    console.log(this.gettime);
  },
  methods: {
    DepAdd() {
      console.log(this.form);
      this.$axios({
        url: "http://localhost:60618/api/DepAdd",
        method: "post",
        data: this.form,
      }).then((res) => {
        if (res.data > 0) {
          alert("提交成功");
        } else {
          alert("提交失败");
        }
      });
    },
  },
};
</script>