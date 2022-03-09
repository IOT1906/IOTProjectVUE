<template>
    <table border="1px" bordercolor="#E4E7ED" :ref="form"  width="1000xp" cellpadding="5" cellspacing="0">
        <tr style="height:70px;">
            <td width="500">
                <button @click="this.$router.push('/Dimi')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    离职审批</button></td>
            <td width="500"><button @click="this.$router.push('/Interview')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    员工离职面谈申请</button></td>
            <td width="500"><button @click="this.$router.push('/Announcement_information')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                        border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                        公告基本信息</button></td>
        </tr>
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/Year')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    年度计划</button></td>
            <td>
                <button @click="this.$router.push('/Carapply')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    用车申请</button>
            </td>
            <td width="500"><button @click="this.$router.push('/Acquisitionrequest')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                固定资产购置申请表</button></td>
        </tr>
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/Man')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    人力资源需求申请</button></td>
            <td>
                <button @click="this.$router.push('/Rece')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    接待申请表</button>
            </td>
            <td width="500"><button @click="this.$router.push('/Radd')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                人力资源需求申请表</button></td>
        </tr>
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/Entering')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    员工录入申请</button></td>
            <td>
                <button @click="this.$router.push('/Engrave_chapter')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    刻章申请表</button>
            </td>
            <td width="500"><button @click="this.$router.push('/Use_seal')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                用章申请表</button></td>
        </tr>
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/HandOver')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    离职交接申请</button></td>
            <td>
                <button @click="this.$router.push('/File_management')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    文件管理</button>
            </td>
            <td width="500"><button @click="this.$router.push('/Car_insurance')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                车辆保险记录表</button></td>
        </tr>
        
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/Car_upkeep')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    车辆保养记录表</button></td>
            <td>
                <button @click="this.$router.push('/Car_service')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    车辆维修记录表</button>
            </td>
            <td width="500"><button @click="this.$router.push('/Car_unlawful')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                车辆违章记录表</button></td>
        </tr>
        <tr style="height:70px;">
            <td>
                <button @click="this.$router.push('/Meeting')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    会议新增表</button></td>
            <td>
                <button @click="this.$router.push('/Procur')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                    日常用品采购</button>
            </td>
            <td width="500"><button @click="this.$router.push('/borrow')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                固定资产资料借用流程</button></td>
        </tr>

        <tr style="height:70px;">
            <td colspan="2">
                <button @click="this.$router.push('/connect')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                    border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:1000px">
                    固定资产交接申请流程</button></td>
                    <td>
<<<<<<< HEAD
                        </td>
=======
                        <button @click="this.$router.push('/flow')" style="color: dodgerblue;font-size: 28px;text-align:center;background-color:#FFFFFF;outline-color: invert;outline-style: none;outline-width: 0px;border: none;
                            border-style: none;text-shadow: none;-webkit-appearance: none;outline-color: transparent;box-shadow: none;width:500px">
                            总流程</button></td>
>>>>>>> 431fd9497f260bd4abb3b939ab887387f59e9510
        </tr>
    </table>
</template>
<script>

export default {
    data() {
        return{

        }
    },
}
</script>
