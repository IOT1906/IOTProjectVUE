<template>
  <div>
    <table
      border="1px"
      bordercolor="#E4E7ED"
      width="1000xp"
      cellpadding="5"
      cellspacing="0"
    >
      <tr>
        <td colspan="4">
          
          <h2 style="margin-right: 303px">会议室新增</h2>
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
        <td align="left" width="335" style="background-color: #f2f6fc">
          会议室名称
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
        <td align="left" width="225" style="background-color: #f2f6fc">座位</td>
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
        <td align="left" width="335" style="background-color: #f2f6fc">楼层</td>
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
          可容纳人数
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
        <td align="left" width="335" style="background-color: #f2f6fc">空调</td>
        <td width="125">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
        <td align="left" width="225" style="background-color: #f2f6fc">
          投影仪
        </td>
        <td width="225">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="left" width="335" style="background-color: #f2f6fc">白板</td>
        <td width="125">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
        <td align="left" width="335" style="background-color: #f2f6fc">网络</td>
        <td width="125">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
      </tr>
      <tr>
        <td align="left" width="335" style="background-color: #f2f6fc">
          网络范围
        </td>
        <td width="125">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
        <td align="left" width="335" style="background-color: #f2f6fc">
          饮水机
        </td>
        <td width="125">
          <select>
            <option>有</option>
            <option>无</option>
          </select>
        </td>
      </tr>

      <tr>
        <td align="left" width="335" style="background-color: #f2f6fc">
          管理员
        </td>
        <td width="125" colspan="3">
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
      </tr>

      <tr style="background-color: #f2f6fc">
        <td align="left" width="225">照片</td>
        <td colspan="3">
          <input
            type="file"
            style="
              float: left;
              width: 70px;
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
        <td align="left" style="background-color: #f2f6fc">备注</td>
        <td colspan="3">
          <textarea
            cols="120"
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

    <table
      border="1px"
      bordercolor="#E4E7ED"
      width="1000xp"
      cellpadding="5"
      cellspacing="0"
    >
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
        applicant: "",
        department: "",
        position: "",
        stakeTime: new Date(),
        endTime: new Date(),
        depwhy: "",
        depnote: "",
        depTime: new Date(),
        typeId: 0,
      },
      users: {
        action: "同意",
        bpmUser: window.localStorage["bpmUser"],
        bpmUserPass: window.localStorage["bpmUserPass"],
        fullName: window.localStorage["fullName"],
        processName: "离职审批表",
        planDate: "",
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
      this.users.planDate = JSON.stringify(this.form);
      console.log(this.users);
      this.$axios({
        url: "http://localhost:60618/api/atratleave",
        data: this.users,
        method: "post",
      }).then((res) => {
        if (res.data != null) {
          alert("提交成功");
        } else {
          alert("提交失败");
        }
      });
    },
  },
};
</script>


