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
        <h2 style="text-align: center">员工离职面谈表</h2>
      </td>
    </tr>
    <tr>
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        基础信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">制表人</td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewLister"
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
        制表部门
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewListerDemp"
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
        制表日期
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.interviewListerDate"
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
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        离职员工详细信息
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        员工姓名
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewStaffName"
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
        员工工号
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewStaffNumber"
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
        所在部门
      </td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewDepartment"
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
      <td align="left" width="225" style="background-color: #f2f6fc">岗位</td>
      <td width="225">
        <input
          type="text"
          v-model="form.interviewStaion"
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
        入职日期
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.interviewStarDate"
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
        离职日期
      </td>
      <td width="225">
        <input
          type="date"
          v-model="form.interviewEndDate"
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
        劳动合同终止类型
      </td>
      <td width="225" colspan="3">
        <input
          type="checkbox"
          v-model="form.interviewLabor"
          style="width: 15px; height: 15px"
          name="资源辞职"
        />资源辞职&emsp;
        <input
          type="checkbox"
          v-model="form.interviewLabor"
          style="width: 15px; height: 15px"
          name="非资源辞职"
        />非资源辞职&emsp;
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        劳动合同终止原因
      </td>
      <td width="225" colspan="3">
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="更好的工作机会"
        />更好的工作机会&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="工作负荷过大"
        />工作负荷过大&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="不满意工作"
        />不满意工作&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="不满意薪资/福利待遇"
        />不满意薪资/福利待遇&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="缺少发展机会"
        />缺少发展机会&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="职业生涯转变"
        />职业生涯转变&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="与上级、同事关系"
        />与上级、同事关系&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="工作环境"
        />工作环境&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="继续学习深造"
        />继续学习深造&emsp;
        <input
          type="checkbox"
          style="width: 15px; height: 15px"
          name="移民"
        />移民&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="家庭负担"
        />家庭负担&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="正常退休"
        />正常退休&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="健康原因"
        />健康原因&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="行为不当"
        />行为不当&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="协商一致"
        />协商一致&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="合同到期"
        />合同到期&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="被迫减员"
        />被迫减员&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="业绩不合格"
        />业绩不合格&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCase"
          style="width: 15px; height: 15px"
          name="其他"
        />其他&emsp;
      </td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        离职原因
      </td>
      <td width="225" colspan="3">
        <textarea
          cols="100"
          v-model="form.interviewLeaving"
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
      <td align="left" width="225" style="background-color: #f2f6fc">
        面谈记录
      </td>
      <td width="225" colspan="3">
        <textarea
          cols="100"
          v-model="form.interviewRecord"
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
  <br />
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
      <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
        员工评价内容详细信息
      </td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        薪资和福利
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewPay"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewPay"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewPay"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewPay"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>

    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        培训发展
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewTrain"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewTrain"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewTrain"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewTrain"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>

    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        提升前景
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewProspect"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewProspect"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewProspect"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewProspect"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        公司管理
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewCompany"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCompany"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCompany"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewCompany"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        奖励和认可
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewAward"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewAward"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewAward"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewAward"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        沟通渠道
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewChnnel"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewChnnel"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewChnnel"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewChnnel"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        工作满意度
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewSatisfaction"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewSatisfaction"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewSatisfaction"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewSatisfaction"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="200" style="background-color: #f2f6fc">
        员工和经理沟通
      </td>
      <td width="225">
        <input
          type="checkbox"
          v-model="form.interviewManage"
          style="width: 15px; height: 15px"
          name="优秀"
        />优秀&emsp;
        <input
          type="checkbox"
          v-model="form.interviewManage"
          style="width: 15px; height: 15px"
          name="良好"
        />良好&emsp;
        <input
          type="checkbox"
          v-model="form.interviewManage"
          style="width: 15px; height: 15px"
          name="一般"
        />一般&emsp;
        <input
          type="checkbox"
          v-model="form.interviewManage"
          style="width: 15px; height: 15px"
          name="差"
        />差&emsp;
      </td>
      <td width="225">备注</td>
      <td width="225"></td>
    </tr>
    <tr>
      <td align="left" width="225" style="background-color: #f2f6fc">
        愿意被公司重新录用
      </td>
      <td width="225">
        &emsp;
        <input
          type="radio"
          v-model="form.interviewEmploy"
          style="width: 20px; height: 20px"
          name="aa"
        />是&emsp;&emsp;&emsp;&emsp;
        <input
          type="radio"
          v-model="form.interviewEmploy"
          style="width: 20px; height: 20px"
          name="aa"
        />否
      </td>
      <td width="225"></td>
      <td width="225"></td>
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
          v-model="form.interviewRemark"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        interviewLister: "",
        interviewListerDemp: "",
        interviewListerDate: "",
        interviewStaffName: "",
        interviewStaffNumber: "",
        interviewDepartment: "",
        interviewStaion: "",
        interviewStarDate: "",
        interviewEndDate: "",
        interviewLabor: "",
        interviewCase: "",
        interviewLeaving: "",
        interviewRecord: "",
        interviewPay: "",
        interviewTrain: "",
        interviewProspect: "",
        interviewCompany: "",
        interviewAward: "",
        interviewChnnel: "",
        interviewSatisfaction: "",
        interviewManage: "",
        interviewEmploy: "",
        interviewRemark: "",
      },
       ljq: {
        action: "提交",
        bpmUser: window.localStorage["account"],
        bpmUserPass: window.localStorage["password"],
        fullName: window.localStorage["fullName"],
        processName: "",
        planDate: "",
      },
    };
  },
  mounted() {
    
  },
  methods: {
      Add() {
      this.ljq.planDate=JSON.stringify(this.form)
      console.log(this.ljq.bpmUserPass);
      this.ljq.bpmUserPass=this.ljq.bpmUserPass.trim();
      this.$axios({
        method: "post",
        url: "http://localhost:60618/api/StartHandOver",
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