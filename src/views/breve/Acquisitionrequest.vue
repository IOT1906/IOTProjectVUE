<template>
    <div style="border-left: 500px;">
        <div style="width:900px;">
            <table border="1px" bordercolor="#E4E7ED" ref="Res" :model="Res" width="950xp" cellpadding="5"
                cellspacing="0">
                <tr>
                    <td colspan="4">
                        
                        <h2 style="margin-right: 350px;">固定资产购置申请表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请人</td>
                    <td width="225"><input type="text" v-model="Res.Applicant"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请部门</td>
                    <td width="225"><input type="text" v-model="Res.Applicationdepartment" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请时间</td>
                    <td width="225"><input type="text" v-model="Res.Dateapplication" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                     <td align="left" width="225" style="background-color:#F2F6FC;">表单单号</td>
                     <td width="225"><input type="text" v-model="Res.Number"
                             style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                     border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>                   
                </tr>    
            </table>
            <table border="1px" bordercolor="#E4E7ED" ref="Res" :model="Res" width="950xp" cellpadding="5"
                cellspacing="0">
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">详细信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">固定资产名称</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Assetname"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">型号</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Model"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">配置</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Disposition"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">是否生产资产</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Whether"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请理由</td>
                    <td width="225" colspan="3"><input type="text" v-model="Res.Reasonsapplication"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>

            </table>
            <table border="1px" bordercolor="#E4E7ED" ref="Res" :model="Res" width="950xp" cellpadding="5"
            cellspacing="0">
            <tr>
                <td align="left" colspan="4" style="background-color:rgb(217,236,255);">备注</td>
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
                    action: "提交",
                    bpmUser: window.localStorage["account"],
                    bpmUserPass: window.localStorage["password"],
                    fullName : window.localStorage["fullName"],
                    processName: "固定资产购置申请流程",
                    resourcesinput:"",
                },
                day: new Date(),
               
                Res: {
                    Applicant: "",
                    Applicationdepartment:"",
                    Dateapplication: new Date(),
                    Number: "",
                    Assetname: "",
                    Model: "",
                    Disposition: "",
                    Whether: "",
                    Reasonsapplication: "",
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
                this.form.resourcesinput=JSON.stringify(this.Res)
                console.log(this.form);
                this.$axios.post("http://localhost:5000/api/Acquisitionassets", this.Res).then((res) => {
                    if (res.data !=null) {
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
            _this.Res.Dateapplication = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)

        },
    }
</script>