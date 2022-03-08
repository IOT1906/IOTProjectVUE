<template>
    <table border="1px" ref="formRef" :model="form" bordercolor="#E4E7ED" width="1200px" cellpadding="5" cellspacing="0">
        <tr>
            <td colspan="4" style="background-color: aqua;">
                <h2 style="text-align: center">离职交接表</h2>
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
                <input type="text" v-model="form.proposer" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
            <td align="left" width="225" style="background-color: #f2f6fc">
                申请部门
            </td>
            <td width="225">
                <input type="text" v-model="form.applyDemo" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                申请日期
            </td>
            <td width="225">
                <input type="date" v-model="form.applyTime" placeholder="选择日期" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
            <td align="left" width="225" style="background-color: #f2f6fc">职位</td>
            <td width="225">
                <input type="text" v-model="form.proposer" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                是否要离职证明
            </td>
            <td width="225">&emsp;
                <input type="radio" style="width: 20px;height: 20px;" name="aa">是&emsp;&emsp;&emsp;&emsp;
                <input type="radio" style="width: 20px;height: 20px;" name="aa">否
            </td>
            <td align="left" width="225" style="background-color: #f2f6fc"></td>
            <td width="225"></td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">附件</td>
            <td width="225" colspan="3">
                <input type="text" v-model="form.proposer" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">选择交接人</td>
            <td width="225" colspan="3">
                <input type="text" v-model="form.proposer" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          " />
            </td>
        </tr>
        <tr>
            <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                部门交接详细信息
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接内容
            </td>
            <td width="225" colspan="3">
                <input type="checkbox" style="width: 15px;height: 15px;" name="工作交接">工作交接&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="办公用品交接">办公用品交接&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="其他">其他&emsp;
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接情况
            </td>
            <td width="225" colspan="3">
                <textarea cols="100" v-model="form.leaveCause" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            "></textarea>
            </td>
        </tr>

        <tr>
            <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                财务部交接详细信息
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接内容
            </td>
            <td width="225" colspan="3">
                <input type="checkbox" style="width: 15px;height: 15px;" name="取消财务报销系统账号与权限">取消财务报销系统账号与权限&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="金蝶财务系统(K3)">金蝶财务系统(K3)&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="查询欠款、借支、财务未清事项">查询欠款、借支、财务未清事项&emsp;
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接情况
            </td>
            <td width="225" colspan="3">
                <textarea cols="100" v-model="form.leaveCause" style="
                outline-color: invert;
                outline-style: none;
                outline-width: 0px;
                border: none;
                border-style: none;
                text-shadow: none;
                -webkit-appearance: none;
                outline-color: transparent;
                box-shadow: none;
              "></textarea>
            </td>
        </tr>

        <tr>
            <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                行政部交接详细信息
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接内容
            </td>
            <td width="225" colspan="3">
                <input type="checkbox" style="width: 15px;height: 15px;" name="返还钥匙、桌柜、电话、名片等">返还钥匙、桌柜、电话、名片等&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="退回职工工作牌、门禁卡">退回职工工作牌、门禁卡&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="手机话费结算">手机话费结算&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="档案、户口是否迁出">档案、户口是否迁出&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="固定资产清算(手提电脑结算以及其他固定资产结算)">固定资产清算(手提电脑结算以及其他固定资产结算)&emsp;
                <input type="checkbox" style="width: 15px;height: 15px;" name="各类图书资料">各类图书资料&emsp;
            </td>
        </tr>
        <tr>
            <td align="left" width="225" style="background-color: #f2f6fc">
                交接情况
            </td>
            <td width="225" colspan="3">
                <textarea cols="100" v-model="form.leaveCause" style="
                    outline-color: invert;
                    outline-style: none;
                    outline-width: 0px;
                    border: none;
                    border-style: none;
                    text-shadow: none;
                    -webkit-appearance: none;
                    outline-color: transparent;
                    box-shadow: none;
                  "></textarea>
            </td>
        </tr>
        <tr>
            <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                备注
            </td>
        </tr>
        <tr>
            <td width="225" colspan="4">
                <textarea cols="120" v-model="form.leaveRemark" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "></textarea>
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
            <td style="background-color:brown">
                <button type="info" style="float: left">序号</button>
                <button type="info" style="float: left">处理步骤</button>
                <button type="info" style="float: left">签名</button>
                <button type="info" style="float: left">操作</button>
                <button type="info" style="float: left">日期</button>
                <button type="info" style="float: left;width:900px">备注</button>
            </td>
        </tr>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
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