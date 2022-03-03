<template>
    <div class=".BodyDiv">
        <div align="center">
            <table cellspacing="0" cellpadding="0" width="900" border="0">
                <tbody>
                    <tr>
                        <td width="300">
                            <p align="left">
                                <!-- <font color="white"> -->
                                <!-- <img src="../../../../assets/images/logo2.jpg" /></font> -->
                            </p>
                        </td>
                        <td width="300">
                            <p align="center">
                                <font color="white"></font>
                            </p>
                        </td>

                    </tr>
                    <tr>
                        <td height="25">
                            <p align="center">
                                <font color="white"></font>
                            </p>
                        </td>
                        <td>
                            <p align="center">
                                <font color="white"></font>
                            </p>
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td bgcolor="#1e3c7b" height="52" colspan="3">
                            <p align="center">
                                <font style="FONT-SIZE: 18px; color: #fff">杭州申昊软件工程项目管理系统 </font>
                            </p>
                            <p align="center">
                                <font style="FONT-SIZE: 18px; color: #fff">员工录入核定表</font>
                            </p>
                        </td>
                    </tr>
                    <tr style="height: 10px">
                        <td bgcolor="#517dbf" style="height: 1px" colspan="3">
                        </td>
                    </tr>
                </tbody>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0" :model="form">
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">使用部门</td>
                    <td width="225">
                        <el-select   v-model="form.Employed_Department"  placeholder="Activity zone">
                            <el-option @click="bind2()" v-for="item in bin" :key="item.ouid" :label="item.ouName" :value="item.ouid"></el-option>
                        </el-select>
                    </td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">核定日期</td>
                    <td width="225"><input type="text"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">岗位名称</td>
                    <td width="225">
                        <el-select  v-model="form.EmployedEntry_JobName"  placeholder="Activity zone">
                            <el-option v-for="item in bin2" :key="item.ouid" :label="item.roleName" :value="item.ouid"></el-option>
                        </el-select>
                    </td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">岗位说明</td>
                    <td width="225"><input type="text" v-model="form.Employed_Instruction"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">人员类别</td>
                    <td width="225"><input type="text" v-model="form.Employed_Categary"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>


                </tr>

            </table>
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">录入人员基础信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">姓名</td>
                    <td width="225"><input type="text" v-model="form.Employed_Name"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">性别</td>
                    <td width="225"><input type="text" v-model="form.Employed_Sex"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">出生年月</td>
                    <td width="225"><input type="text" v-model="form.Employed_Year"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">文化程度</td>
                    <td width="225"><input type="text" v-model="form.Employed_Culture"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">健康状况</td>
                    <td width="225"><input type="text" v-model="form.Employed_Health"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">电话</td>
                    <td width="225"><input type="text" v-model="form.Employed_Phone"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">住址</td>
                    <td width="225"><input type="text" v-model="form.Employed_Address"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                    <td width="225"><input type="text"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">特长</td>
                    <td width="225"><input type="text" v-model="form.Employed_Specialty"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;"></td>
                    <td width="225"><input type="text"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">本人是否有亲属在公司工作</td>
                    <td width="225"><input type="text" v-model="form.Employed_Relative"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">拟定工资及待遇</td>
                    <td width="225"><input type="text" v-model="form.Employed_Treatment"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">合同期限</td>
                    <td width="225"><input type="text" v-model="form.Employed_Timelimit"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">试用期</td>
                    <td width="225"><input type="text" v-model="form.Employed_Thetrial"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                      border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
            </table>
            <table border="1px" bordercolor="#E4E7ED" width="900xp" cellpadding="5" cellspacing="0">
                <tr>
                    <td align="left" colspan="4" style="background-color:rgb(217,236,255);">员工亲属详细信息</td>
                </tr>
                <tr>
                    <td align="left" width="225" style="background-color:#F2F6FC;">亲属姓名</td>

                    <td align="left" width="225" style="background-color:#F2F6FC;">与本人关系</td>
                    <td align="left" width="225" style="background-color:#F2F6FC;">亲属在公司任何部门工作、任何职位</td>
                </tr>
                <tr>

                    <td width="225"><input type="text" v-model="form.Relative_Name"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                    <td width="225"><input type="text" v-model="form.Relative_Between" style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
          border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none">
                    </td>
                    <td width="225"><input type="text" v-model="form.Relative_Position"
                            style="outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none"></td>
                </tr>
            </table>
            <div style="width: 900px" align="left">


            </div>
            <div style="clear: both"></div>
            <div style="width: 900px" align="center">
                <div style="font-family: Arial; font-weight: 700; text-align: left; line-height: 20px">
                    备注
                </div>
            </div>
            <table style="border-top: medium none; border-right: medium none; border-bottom: medium none;
      border-left: medium none" cellspacing="0" cellpadding="0" width="900" border="1">
                <tbody>
                    <tr>
                        <td width="698">
                            <textarea ID="XCommentsTextBox2" CssClass="printer" runat="server" BorderColor="#DCDCDC"
                                BorderWidth="1" Width="100%" Rows="3" TextMode="MultiLine"></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="width: 900px" align="center">
                <div align="left">
                    <button @click="onSubmit">提交</button>
                    <button>存为草稿</button>
                    <button>存为范本</button>
                    <button>启用阅示</button>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    Employed_Department: 0,    //使用部门
                    Employed_Date: '',          //核定日期
                    EmployedEntry_JobName: 0,  //岗位名称
                    Employed_Instruction: '',   //岗位说明
                    Employed_Categary: '',      //人员类别
                    Employed_Name: '',          //姓名
                    Employed_Sex: '',           //性别
                    Employed_Year: '',          //出生年月
                    Employed_Culture: '',       //文化程度
                    Employed_Health: '',        //健康状况
                    Employed_Phone: '',         //电话
                    Employed_Address: '',       //住址
                    Employed_Specialty: '',     //特长
                    Employed_Relative: '',      //是否有亲属在本公司工作
                    Employed_Treatment: '',     //拟定工资及待遇
                    Employed_Timelimit: '',     //合同期限
                    Employed_Thetrial: '',      //试用期
                },
                bin: [],
                bin2: []
            }
        }, mounted() {
            this.bind();
        },
      
      methods: {
            onSubmit() {
                this.$axios({
                    url: "",
                    method: "post",
                    data: this.form,
                }).then((res) => {
                    if (res > 0) {

                    }
                })
            },
            bind()
            {
                this.$axios({
                    url:"http://localhost:5000/api/bind",method:"get"
                }).then((Response)=>{
                    console.log(Response.data)
                    this.bin=Response.data;
                })
            },
            bind2()
            {
                this.$axios({
                    url:"http://localhost:5000/api/getbind?id="+this.form.Employed_Department,method:"get"
                }).then((Response)=>{
                    console.log(Response.data)
                    this.bin2=Response.data;
                })
            }
        },

    }
</script>