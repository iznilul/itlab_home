<template>
    <transition appear name="el-fade-in-linear">
        <div id="header">
            <h3 id="title">信息技术/软件孵化实验室</h3>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <template v-for="item in menuItems" :key="item.name" >
                <el-menu-item :index="item.path">
                    <i :class="item.icon"></i>
                    <span>{{item.text}}</span>
                </el-menu-item>
            </template>
            </el-menu>
        </div>
    </transition>
</template>

<script>
    import {Edit} from "@element-plus/icons"
    import router from "../router";
    export default {
        name: "AHeader",
        component: {
            Edit
        },
        setup(){

        },
        computed: {
            menuItems() {
                return this.$store.getters.menuItems
            },
        },
        data() {
            return {
                activeIndex:"0",
            }
        },
        methods: {
            handleSelect(path) {
                console.log(path);
                router.push(path)
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../style/AHeader";
</style>