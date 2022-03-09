<template>
    <div style="border-left: 500px;">
        <div style="width:1000px;">
            <table border="1px" bordercolor="#E4E7ED" :ref="forms"  width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center;">年度计划表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">制表人</td>
                    <td width="225"><input type="text" v-model="forms.tabulator"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">制表部门</td>
                    <td width="225"><input type="text" v-model="forms.tabulation_Department"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">制表时间</td>
                    <td width="225"><input type="text" v-model="forms.tabulation_time" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">年份</td>
                    <td width="225"><input type="text" v-model="forms.particular_year" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" :ref="formdate" width="950xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="16" style="background-color:rgb(217,236,255);">详细信息</td>
                </tr>
                <tr>
                    <td align="left" rowspan="2" style="background-color:#F2F6FC;">序号</td>
                    <td align="left" rowspan="2" style="background-color:#F2F6FC;">岗位</td>
                    <td align="left" rowspan="2" style="background-color:#F2F6FC;">上年已有</td>
                    <td align="left" colspan="12" style="background-color:#F2F6FC;text-align: center;">本年预计增加</td>
                    <td align="left" rowspan="2" style="background-color:#F2F6FC;">合计</td>
                </tr>
                <tr>
                    <td align="left" style="background-color:#F2F6FC;">1月份</td>
                    <td align="left" style="background-color:#F2F6FC;">2月份</td>
                    <td align="left" style="background-color:#F2F6FC;">3月份</td>
                    <td align="left" style="background-color:#F2F6FC;">4月份</td>
                    <td align="left" style="background-color:#F2F6FC;">5月份</td>
                    <td align="left" style="background-color:#F2F6FC;">6月份</td>
                    <td align="left" style="background-color:#F2F6FC;">7月份</td>
                    <td align="left" style="background-color:#F2F6FC;">8月份</td>
                    <td align="left" style="background-color:#F2F6FC;">9月份</td>
                    <td align="left" style="background-color:#F2F6FC;">10月份</td>
                    <td align="left" style="background-color:#F2F6FC;">11月份</td>
                    <td align="left" style="background-color:#F2F6FC;">12月份</td>
                </tr>
                <tr>
                    <td align="left" style="background-color:#F2F6FC;">1</td>
                    <td><input type="text" v-model="formdate.station"
                            style="width: 50px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.last_year"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.january"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.february"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.march"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.april"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.may"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.june"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.july"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.august"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.september" style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
        border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none">
                    </td>
                    <td align="left"><input type="text" v-model="formdate.october"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.november"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text" v-model="formdate.december"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left"><input type="text"
                            style="width: 40px;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>

                </tr>
                <tr>
                    <td align="right" colspan="2" style="background-color:#F2F6FC;">合计</td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                    <td align="left"></td>
                </tr>
                <tr>
                    <td align="left" colspan="16" style="background-color:rgb(217,236,255);">备注</td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left">
                        <textarea rows="" cols="136"  v-model="formdate.remarks"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></textarea>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color:#F2F6FC;">
                        <button @click="onclick()">提交</button>&nbsp;
                        <button>存为草稿</button>&nbsp;
                        <button>存为范文</button>&nbsp;
                        <button>启用阅示</button>&emsp;&nbsp;
                        请选择职位:
                        <select>
                            <option label="人事行政部\wangwanfen"></option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="left" style="background-color:#F2F6FC;">
                        <button style="width: 70px;">序号</button>
                        <button style="width: 86px;">处理步骤</button>
                        <button style="width: 70px;">签名</button>
                        <button style="width: 70px;">操作</button>
                        <button style="width: 70px;">日期</button>
                        <button style="width: 610px;">备注</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                formdate: {
                    station: "",
                    last_year: "",
                    january: "",
                    february: "",
                    march: "",
                    april: "",
                    may: "",
                    june: "",
                    july: "",
                    august: "",
                    september: "",
                    october: "",
                    november: "",
                    december: "",
                    remarks: "",
                },
                sum:"",
                forms: {
                    tabulator: window.localStorage["displayName"],                      //获取制表人信息
                    tabulation_Department: "人事部",          //获取制表部门
                    tabulation_time: new Date(),       //获取当前时间
                    particular_year: new Date(),       //获取当前年份
                },
                form:{
                    action: "提交",
                    bpmUser: window.localStorage["account"],
                    bpmUserPass: window.localStorage["password"],
                    fullName: window.localStorage["fullName"],
                    processName: "招聘计划流程",
                    annual_plans: "",
                    ioT_Priject_Domininput: "",
                },
            };
        },
        created() {
            this.forms.particular_year = new Date().getFullYear().toString();
            this.sum=this.formdate.january+this.formdate.february;
        },
        methods: {
           
            onclick() {
                this.form.annual_plans=JSON.stringify(this.forms);
                this.form.ioT_Priject_Domininput=JSON.stringify(this.formdate);
                this.$axios({
                    url:"http://localhost:60618/api/StartPlan",
                    method:"post",
                    data: this.form
                }).then((res) => {
                    if (res.data !=null ) {
                        this.$message("数据提交成功!");
                    }
                    else {
                        this.$message("数据提交失败!");
                    }
                })
            },
        },
       mounted: function () {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
            _this.forms.tabulation_time = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)
        },
    }
</script>