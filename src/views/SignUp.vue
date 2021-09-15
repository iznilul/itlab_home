<template>
    <div id="signUp">
        <h1 class="page-header">填写报名信息</h1>
        <el-form :model="form" :rules="rules" ref="formRef" class="signUpForm">
            <el-form-item label="学号" prop="studentId">
                <el-input type="text" v-model="form.studentId" placeholder="学号（必填）"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="form.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
                <el-select v-model="form.gender" placeholder="性别">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="qq号" prop="qq">
                <el-input type="text" v-model="form.qq" placeholder="qq号"></el-input>
            </el-form-item>
            <el-form-item label="专业班级" prop="major">
                <el-input type="text" v-model="form.major" placeholder="专业班级"></el-input>
            </el-form-item>
            <el-form-item label="自我介绍" prop="profile" size="medium">
                <el-input type="textarea" v-model="form.profile"
                          placeholder="可以写技术栈发展方向，获奖记录，兴趣方向，一天可来实验室学习的时长等"></el-input>
            </el-form-item>
        </el-form>
        <div id="buttonList">
            <el-button type="primary" @click="signUp(form)">报名</el-button>
            <el-button type="primary" @click="reset()">重写</el-button>
            <el-button type="primary" @click="signUp('form')">查询结果</el-button>
        </div>
    </div>
</template>

<script>
    import service from "../utils/request";
    import {ref, reactive, unref} from 'vue';

    export default {
        name: "SignUp",
        data() {
            return {};
        },
        setup() {
            const form = ref ({
                studentId: '',
                name: '',
                gender: '',
                qq: '',
                major: '',
                profile: '',
            })
            const rules=ref({

            })
            const reset = () => {
                // form.value.studentId = ''
                // form.value.name = ''
                // form.value.gender = ''
                // form.value.qq = ''
                // form.value.major = ''
                form.value.profile = ''
            }
            return {
                reset,
                form,
                rules,
            }
        },
        methods: {
            signUp(form) {
                console.log(form)
                service.post({
                    url:"/api/common/signup",
                    data:form
                })
                    .then(res => {
                        console.log(res)
                        // alert(res.data.message + " 请加qq群：8888298");
                        // this.$router.push("/");
                    })
                    .catch(error => {
                        console.error(error)
                        alert("报名失败");
                    });
            },
        }
    }
</script>

<style lang="less">
    @import "../style/SignUp";
</style>