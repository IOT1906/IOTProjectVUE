<template>
    <div style="border-left: 500px;">
        <div style="width:900px;">
            <table border="1px" bordercolor="#E4E7ED" ref="Res" :model="Res" width="950xp" cellpadding="5"
                cellspacing="0">
                <tr>
                    <td colspan="4">
                       
                        <h2 style="text-align: center;">人力资源申请表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请人</td>
                    <td width="225"><input type="text" v-model="Res.Applicationdepartment"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请时间</td>
                    <td width="225"><input type="text" v-model="Res.Applicationtime" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">岗位名称</td>
                    <td width="225"><input type="text" v-model="Res.Jobtitle"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">岗位说明</td>
                    <td width="225">
                        <el-radio-group v-model="Res.Jobdescription">
                            <el-radio :label="3">已投</el-radio>
                            <el-radio :label="6">新增</el-radio>
                            <el-radio :label="9">临时</el-radio>
                        </el-radio-group>

                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">现有人数</td>
                    <td width="225"><input type="text" v-model="Res.Numberofpeopleonhand"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">招聘人数</td>
                    <td width="225"><input type="text" v-model="Res.Numberofrecruits"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" ref="Res" :model="Res" width="950xp" cellpadding="5"
            cellspacing="0">
            <tr>
                <td align="left" colspan="4" style="background-color:rgb(217,236,255);">招聘要求信息</td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color:#F2F6FC;">性别</td>
                <td width="225"><input type="text" v-model="Res.Sex"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                <td align="left" width="225" style="background-color:#F2F6FC;">年龄</td>
                <td width="225"><input type="text" v-model="Res.Age"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color:#F2F6FC;">文化程度</td>
                <td width="225"><input type="text" v-model="Res.Education"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                <td width="225"><input type="text" 
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color:#F2F6FC;">专业要求</td>
                <td width="225" colspan="3"><input type="text" v-model="Res.Professionalrequirements"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none" ></td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color:#F2F6FC;">岗位要求</td>
                <td width="225" colspan="3"><input type="text" v-model="Res.Jobrequirements"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color:#F2F6FC;">其他</td>
                <td width="225" colspan="3"><input type="text" v-model="Res.Other"
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
            </tr>

        </table>
            <table border="1px" bordercolor="#E4E7ED" :ref="Resdate" width="950xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="16" style="background-color:rgb(217,236,255);">详细信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">薪资待遇</td>
                    <td width="225"><input type="text" v-model="Res.Salarypackage"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">拟聘合同</td>
                    <td width="225"><input type="text" v-model="Res.Contract"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">试用期</td>
                    <td width="225"><input type="text" v-model="Res.Probationperiod"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                    <td width="225" colspan="3"><input type="text" 
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请原因</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Reasonforapplication"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">附件</td>
                    <td width="225" colspan="3"><el-button type="primary" v-model="Res.Annex" >上传文件</el-button></td>
                </tr>
                <tr>
                    <td align="left" colspan="16" style="background-color:rgb(217,236,255);">备注</td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="950xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left">
                        <textarea rows="" cols="130" v-model="Res.Remark"
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
                        <button style="width: 64px;">序号</button>
                        <button style="width: 80px;">处理步骤</button>
                        <button style="width: 64px;">签名</button>
                        <button style="width: 64px;">操作</button>
                        <button style="width: 64px;">日期</button>
                        <button style="width: 600px;">备注</button>
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
                form: {

                },
                day: new Date(),
               
                Res: {
                    Applicationdepartment:  window.localStorage["displayName"],
                    Applicationtime: new Date(),
                    Jobtitle: "",
                    Jobdescription: "",
                    Numberofpeopleonhand: "",
                    Numberofrecruits: "",
                    Sex: "",
                    Age: "",
                    Education: "",
                    Professionalrequirements: "",
                    Jobrequirements: "",
                    Other: "",
                    Salarypackage: "",
                    Contract: "",
                    Probationperiod: "",
                    Reasonforapplication: "",
                    Annex: "",
                    Remark: "",
                },
            };
        },
        created() {
            this.day = new Date().getFullYear();
        },
        methods: {
            onclick() {
                console.log(this.Res);
                this.$axios.post("http://localhost:60618/Radd", this.Res).then((res) => {
                    if (res.data > 0) {
                        this.$message("数据提交成功!");
                    }
                    else {
                        this.$message("数据提交失败!");
                    }
                })
            }
        },
        mounted: function () {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
            _this.Res.Applicationtime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)

        },
    }
</script>