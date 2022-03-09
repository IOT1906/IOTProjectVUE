<template>
    <div style="border-left: 500px;">
        <div style="width:1000px;">
            <table border="1px" bordercolor="#E4E7ED" :ref="form"  width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center;">文件管理表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">文件类型</td>
                    <td><input type="text" v-model="form.manType"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" style="background-color:#F2F6FC;">文件所属部门</td>
                    <td><input type="text" v-model="form.mandocuments"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">文件名称</td>
                    <td><input type="text" v-model="form.mnName"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" style="background-color:#F2F6FC;">归档日期</td>
                    <td><input type="date"  v-model="form.manDate"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">文件编号</td>
                    <td><input type="text"  v-model="form.mannumber"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" style="background-color:#F2F6FC;">归档人</td>
                    <td><input type="text" v-model="form.manarchiver"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">内容</td>
                    <td colspan="3">
                         <input type="text"  v-model="form.mancontent"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none">
                    </td>
                </tr>
                <tr style="background-color:#F2F6FC;">
                    <td align="left" width="225">附件</td>
                    <td colspan="3">
<input type="file" :model="form.manattachment" style="float: left; width: 70px;;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none" >

                
                    </td>
                </tr>
                <tr>
                    <td colspan="4" align="left" style="background-color:#F2F6FC;">
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
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form:{
                    manType:"",
                    mandocuments:'',
                    mnName:'',
                    manDate:'',
                    mannumber:'',
                    manarchiver:'',
                    mancontent:'',
                    manattachment:'',
                },
            };
        },
        created() {
            
        },
        methods: {
            onclick() {
                this.$axios({
                    url:"http://localhost:60618/api/ManagementAdd",
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
    }
</script>