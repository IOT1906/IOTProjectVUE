<template>
    <div style="border-left: 500px;">
        <div style="width:1000px;">
            <table border="1px" bordercolor="#E4E7ED" :ref="form"  width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center;">刻章申请表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请人</td>
                    <td><input type="text" v-model="form.applicant"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" style="background-color:#F2F6FC;">申请部门</td>
                    <td><input type="text"  v-model="form.department"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请日期</td>
                    <td width="225"><input type="text" v-model="form.depTime" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="1000" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">详细信息</td>
                </tr>
                <tr>
                    <td width="237" style="background-color:#F2F6FC;">刻章名称</td>
                    <td colspan="3">
                        <input type="text" v-model="form.seal_name"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none">
                    </td>
                </tr>
                <tr>
                    <td style="background-color:#F2F6FC;">用途</td>
                    <td colspan="3">
                        <textarea rows="" cols="100"   v-model="form.myProperty"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></textarea>
                    </td>
                </tr>
                <tr>
                    <td width="237" style="background-color:#F2F6FC;">刻章留印标记</td>
                    <td colspan="3" align="left" style="background-color:#F2F6FC;">
                        <input type="file" :model="form.imprint_mark" style="float: left; width: 70px;;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none" >
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">备注</td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left">
                        <textarea rows="" cols="136"   v-model="form.remarks"
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
                form:{
                applicant:window.localStorage["displayName"],
                department:"",
                depTime:new Date(),
                seal_name:"",
                myProperty:"",
                imprint_mark:[],
                remarks:"",
                },
                formdata:{
                    action: "提交",
                    bpmUser: window.localStorage["account"],
                    bpmUserPass: window.localStorage["password"],
                    fullName: window.localStorage["fullName"],
                    processName: "刻章申请流程",
                    engrave: "",
                },
            };
        },
        created() {
            
        },
        methods: {
            onclick() {
                this.form.imprint_mark=this.form.imprint_mark.toString()
                alert(this.form.imprint_mark);
                this.formdata.engrave=JSON.stringify(this.form);
                this.$axios({
                    url:"http://localhost:60618/api/StartEngrave",
                    method:"post",
                    data: this.formdata
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
            _this.form.depTime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)
        },
    }
</script>