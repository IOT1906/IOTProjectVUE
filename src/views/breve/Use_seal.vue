<template>
    <div style="border-left: 500px;">
        <div style="width:1000px;">
            <table border="1px" bordercolor="#E4E7ED" :ref="forms"  width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td colspan="4">
                        <h2 style="text-align: center;">用章申请表</h2>
                    </td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请人</td>
                    <td width="225"><input type="text" 
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请部门</td>
                    <td width="225"><input type="text" 
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">申请日期</td>
                    <td width="225"><input type="text" v-model="application_date" :disabled="true"
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" :ref="formdate" width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="16" style="background-color:rgb(217,236,255);">详细信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">印章名称</td>
                    <td width="225"><input type="text" 
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">是否外借</td>
                    <td width="225" style="background-color:#F2F6FC;">
                        <input type="radio">是
                        <input type="radio">否
                    </td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">陪同人员</td>
                    <td width="225"><input type="text" 
                        style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">归还日期</td>
                    <td align="left" width="225"><input type="date" 
                            style="background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td style="background-color:#F2F6FC;" align="left">外出地址</td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td style="background-color:#F2F6FC;">用印事项或主要内容</td>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">备注</td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left">
                        <textarea rows="" cols="136"  
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
                application_date:new Date(),
            };
        },
        created() {
            
        },
        methods: {
            onclick() {
                
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
            _this.application_date = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss;
            console.log(this.gettime)
        },
    }
</script>