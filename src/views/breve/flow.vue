<template>
    <div>
        <h1>总流程条数:{{this.total}}条</h1>
        <el-table :data="data">
            <el-table-column prop="serialNum" label="流程单号"/>
            <el-table-column prop="ownerAccounts" label="发起账户"/>
            <el-table-column prop="processName" label="流程名称"/>
            <el-table-column prop="state" label="流程状态"/>
            <el-table-column label="操作">
      <template #default="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">同意</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">拒绝</el-button>

</template>
    </el-table-column>
        </el-table>
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
    </div>
</template>
<script>

export default {
    data() {
        return{
            account:window.localStorage["account"],
            data:[],
            total:0,
            pageindex:1,
            pagesize:10,
             form:{
                    action: "提交",
                    bpmUser: window.localStorage["account"],
                    bpmUserPass: window.localStorage["password"],
                    fullName: window.localStorage["fullName"],
                    processName: "",
                    stepId: "",
                    comments: "",
                },
                forms:{
                    action: "拒绝",
                    bpmUser: window.localStorage["account"],
                    bpmUserPass: window.localStorage["password"],
                    fullName: window.localStorage["fullName"],
                    processName: "",
                    taskId: "",
                    comments: "",
                },
        }
    },
    mounted(){
        this.show();
    },
    methods:{
        show(){
            this.$axios({
                url:"http://localhost:60618/api/ProccessIF",
                method:"get",
                params:{
                    account:this.account,
                    pageindex:this.pageindex,
                    pagesize:this.pagesize,
                }
            }).then((res)=>{
                this.data=res.data.list;
                this.total=res.data.total;
            })
        },
       
      handleEdit(row) {
        this.form.stepId=row.stepID;
        this.form.processName=row.processName;
        this.$axios.post("http://localhost:60618/api/StepatratDep",this.form).then((res) => {

                    if (res.data !=null) {this.show();
                        alert("审批成功!");
                        this.show();
                    }
                    else {
                        this.$message("审批失败!");
                    }
                })
      },
      handleDelete(row) {
        this.forms.taskId=row.taskID;
        this.forms.processName=row.processName;
        this.$axios.post("http://localhost:60618/api/TaskDep",this.forms).then((res) => {
                    if (res.data !=null) {
                        this.show();
                        this.$message("驳回成功!");this.show();
                    }
                    else {
                        this.$message("驳回失败!");
                    }
                })
      },
      handleSizeChange(val) {
        this.pagesize=val;
        this.show();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.pageindex=val;
        this.show();
        console.log(`当前页: ${val}`);
      },
    }
}
</script>
