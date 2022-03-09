<template>
    <div>
        <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
            <tr>
                <td colspan="4">
                    
                    <h2 style="text-align: center;">接待申请表</h2>
                </td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                    基础信息
                </td>
            </tr>
            <tr>
                <td align="left" width="335" style="background-color: #f2f6fc">
                    申请人
                </td>
                <td width="125">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.applicant" />
                </td>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    申请部门
                </td>
                <td width="225">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.department" />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    申请日期
                </td>
                <td width="225">
                    <input type="date" v-model="form.endDate" placeholder="选择日期" style="
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
                <td align="left" width="225" style="background-color: #f2f6fc"></td>
                <td width="225"></td>
            </tr>
            <tr>
                <td align="left" colspan="4" style="background-color: rgb(217, 236, 255)">
                    详细信息
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    来访客人单位
                </td>
                <td width="225" colspan="3">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.position" />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    主要客人姓名、职务
                </td>
                <td width="225" colspan="3">
                    <input type="text" style="
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
                    停留时间
                </td>
                <td width="225">
                    <input type="date">
                </td>

                <td align="left" width="225" style="background-color: #f2f6fc">至</td>
                <td width="225">
                    <input type="date" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            ">
                </td>
            </tr>

            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    接待人
                </td>
                <td width="225" colspan="2">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.depwhy" />
                </td>
            </tr>

            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">人数</td>
                <td width="225">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.depwhy" />
                </td>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    是否需要准备资料
                </td>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    <input type="radio" style="width: 20px;height: 17px;" name="hou" checked>是
                    <input type="radio" style="width: 20px;height: 17px;" name="hou">否
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    来往航班
                </td>
                <td width="225">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.depwhy" />
                </td>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    是否需要物品
                </td>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    <input type="radio" style="width: 20px;height: 17px;" name="xiao" checked>是
                    <input type="radio" style="width: 20px;height: 17px;" name="xiao">否
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">
                    来访事由
                </td>
                <td colspan="3">
                    <textarea cols="102" style="
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
                <td align="left" width="225" style="background-color: #f2f6fc">
                    其他要求
                </td>
                <td width="225" colspan="3">
                    <input type="text" style="
              outline-color: invert;
              outline-style: none;
              outline-width: 0px;
              border: none;
              border-style: none;
              text-shadow: none;
              -webkit-appearance: none;
              outline-color: transparent;
              box-shadow: none;
            " v-model="form.depwhy" />
                </td>
            </tr>
            <tr>
                <td align="left" width="225" style="background-color: #f2f6fc">备注</td>
                <td colspan="3">
                    <textarea cols="102" style="
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
            <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
            <tr>
                <td align="left" colspan="7" style="background-color: rgb(217, 236, 255)">
                    物品详细信息
                </td>
            </tr>
            <tr>
                <td align="left" width="45" style="background-color: #f2f6fc">
                    序号
                </td>
                <td align="left" width="45" style="background-color: #f2f6fc">
                    物品名称
                </td>
                <td align="left" width="45" style="background-color: #f2f6fc">
                    规格
                </td>
                <td align="left" width="45" style="background-color: #f2f6fc">使用数量</td>
                <td align="left" width="45" style="background-color: #f2f6fc">库存数量</td>
                <td align="left" width="45" style="background-color: #f2f6fc">剩余数量</td>
                <td align="left" width="45" style="background-color: #f2f6fc">备注</td>
            </tr>
            <tr>
                <td align="left" style="background-color: #f2f6fc">1</td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
                <td align="left"></td>
            </tr>
            
        </table>
    <table border="1px" bordercolor="#E4E7ED" width="1000xp" cellpadding="5" cellspacing="0">
    <tr>
        <td align="left" colspan="11" style="background-color: rgb(217, 236, 255)">
            行程详细信息
        </td>
    </tr>
    <tr>
        <td align="left" width="45" style="background-color: #f2f6fc">开始时间</td>
        <td align="left" width="45" style="background-color: #f2f6fc">结束时间</td>
        <td align="left" width="45" style="background-color: #f2f6fc">行程</td>
        <td align="left" width="45" style="background-color: #f2f6fc">陪同人员</td>
        <td align="left" width="45" style="background-color: #f2f6fc">是否用车</td>
        <td align="left" width="45" style="background-color: #f2f6fc">是否预订会议室</td>
        <td align="left" width="45" style="background-color: #f2f6fc">是否预订酒店</td>
        <td align="left" width="45" style="background-color: #f2f6fc">是否需要展厅</td>
        <td align="left" width="45" style="background-color: #f2f6fc">是否需要订餐</td>
        <td align="left" width="60" style="background-color: #f2f6fc">参加公司哪些部门</td>
        <td align="left" width="45" style="background-color: #f2f6fc">备注</td>
    </tr>
    <tr>
        <td align="left" >
            <input type="date" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
            width: 50px;
          " v-model="form.depwhy" /></td>
        <td align="left">
            <input type="date" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
            width: 50px;
          " v-model="form.depwhy" /></td>
        <td align="left" style="background-color: #f2f6fc">
            <textarea cols="3" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "></textarea></td>
        <td align="left" style="background-color: #f2f6fc">
            <textarea cols="3" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "></textarea></td>
        <td align="left" width="80" style="background-color: #f2f6fc">
            <input type="radio" style="width: 20px;height: 17px;" name="cena" checked>是
                    <input type="radio" style="width: 20px;height: 17px;" name="cena">否
        </td>
        <td align="left"  width="80" style="background-color: #f2f6fc">
            <input type="radio" style="width: 20px;height: 17px;" name="cens" checked>是
            <input type="radio" style="width: 20px;height: 17px;" name="cens">否
        </td>
        <td align="left"  width="80"  style="background-color: #f2f6fc"><input type="radio" style="width: 20px;height: 17px;" name="aa" checked>是
            <input type="radio" style="width: 20px;height: 17px;" name="aa">否</td>
        <td align="left"  width="80"  style="background-color: #f2f6fc"><input type="radio" style="width: 20px;height: 17px;" name="bb" checked>是
            <input type="radio" style="width: 20px;height: 17px;" name="bb">否</td>
        <td align="left"  width="80"  style="background-color: #f2f6fc"><input type="radio" style="width: 20px;height: 17px;" name="cc" checked>是
            <input type="radio" style="width: 20px;height: 17px;" name="cc">否</td>
        <td align="left" style="background-color: #f2f6fc"><textarea cols="6" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "></textarea></td>
        <td align="left" style="background-color: #f2f6fc"><textarea cols="3" style="
            outline-color: invert;
            outline-style: none;
            outline-width: 0px;
            border: none;
            border-style: none;
            text-shadow: none;
            -webkit-appearance: none;
            outline-color: transparent;
            box-shadow: none;
          "></textarea></td>
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