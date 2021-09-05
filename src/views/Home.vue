<template>
    <a style="position:absolute;left:250px">home</a>
    <el-tabs id="tab" :tab-position="tabPosition" v-model="active">
        <el-tab-pane name="1" label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane name="2" label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane name="3" label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane name="4" label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-steps id="step" direction="vertical" :active="active-0">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
    </el-steps>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                tabPosition:"left",
                active:"2"
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../style/Home";
</style>