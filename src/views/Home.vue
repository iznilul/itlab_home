<template>
    <div id="home">
        <div id="first" >
            <h1>实验室介绍</h1>
            <div class="container">
            <div id="introduction" >
            <p >计算机学院软件孵化实验室，成立于2014年5月，致力于为学生提供综合素养的成长环境、为学生提供跨学科领域的实训平台、为学生提供技术方向引导的师资力量。</p>
            </div>
            <div id="logo" data-aos="zoom-in-up" data-aos-anchor="top-center">
                <el-card style="width:450px;
                background: #000000;
                border:#000000;">
                    <img
                            :src="logo"
                            style="width:400px;"
                    />
                </el-card>
            </div>
            </div>`
        </div>
        <div id="second">
            <h1>欢迎加入^v^</h1>
            <div data-aos="zoom-in-up">
            <el-card class="box-card">
            <p>或许你曾经痴迷于算法，在ACM集训队叱咤纷纭。或许对你来说写个小爬虫比上手王者荣耀还简单。或许你对大数据人工智能非常感兴趣。或许你对前端开发非常擅长, 能分分钟写个界面.</p>
            <p>或许你擅长使用Linux，能写出部分脚本。或许你对Java后端开发以及部分框架有着深入的理解。</p>
            <p>那么来加入我们吧，我们一起加油，一起搞项目。</p>
            </el-card>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <div id="third">
            <h1>学习方向</h1>
            <div class="container">
            <div class="h4" data-aos="flip-left">
                <el-card class="box-card">
                    <div class="element-icon">
                        <i class="el-icon-upload"></i>
                    </div>
                <h3>Web前后端开发</h3>
                <h4 class="text-grey px-0">Web program development</h4>
                <!-- pb 代表 图标的bottom -->
                <p>
                    微信小程序开发，网页前端设计，网站后端开发等。可以接触到HTML、CSS、JS、JavaEE等等，
                    学习一些框架，例如前端的Bootstrap，JavaWeb的spring全家桶
                    编写出属于自己独一无二的博客挂到网站上是不是很Fashion？
                </p>
                </el-card>
            </div>
            <div class="h4" data-aos="zoom-in-up">
                <el-card class="box-card">
                    <div class="element-icon">
                        <i class="el-icon-star-on"></i>
                    </div>
                <h3>科研技术的学习</h3>
                <h4 class="text-grey px-0">Data development</h4>
                <p>
                    主流企业或科研技术，包括深度学习，大数据开发技术，NLP自然语言处理，数据挖掘，知识图谱等，可以和学院相关老师进行相关的技术研究，如果你有一颗科研的心，何不为了成为SCI的第一作者而努力
                </p>
                </el-card>
            </div>
            <div class="h4" data-aos="flip-right">
                <el-card class="box-card">
                    <div class="element-icon">
                        <i class="el-icon-s-platform"></i>
                    </div>
                <h3>网络安全与维护</h3>
                <h4 class="text-grey px-0">Network security maintenance</h4>
                <p>学习局域网和云服务器有关部署与维护，网络安全知识和常用工具，攻击防护手段，常见的渗透，注入，扫描，爆破方法
                    从机房的局域网进行练习，学有所成可以帮忙维护学院或者校区机房的网络秩序</p>
                </el-card>
            </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div id="fourth">
            <h1>主要比赛</h1>
            <div class="container">
            <div data-aos="flip-left">
                <el-card class="box-card">
                    <p class="font-weight-bold">
                    <a href="http://sw.sdusc.cn/index/index/index.html" target="_blank">山东省大学生软件设计大赛</a>
                    </p>
                <p>
                    山东省大学生软件设计大赛”（以下简称大赛）是山东省科协、省教育厅、山东省高教学会计算机教学研究专业委员会、济南市经信委、济南市商务局、齐鲁软件园发展中心主办，济南计算机学会、济南软件行业协会承办。山东计算机学会指导。它是面向全省高校计算机与信息专业在校大学生举办的年度性赛事。
                </p>
                </el-card>
            </div>
            <div data-aos="zoom-in-up">
                <el-card class="box-card">
                <p class="font-weight-bold">
                    <a href="https://data.sdcloud.net/" target="_blank">济南“超算杯”(山东省大数据智能大赛)</a>
                </p>
                <p>
                    第十一届山东省大学生科技节由山东省科学技术协会、山东省教育厅、共青团山东省委、山东省发展和改革委员会、山东省工业和信息化厅、山东省人力资源和社会保障厅主办。“济南超算杯”山东省大学生大数据智能大赛由山东计算机学会和山东省计算中心（国家超级计算济南中心）共同承办，山东仕达思生物产业有限公司和北京永信至诚科技股份有限公司共同协办。
                </p>
                </el-card>
            </div>
            <div data-aos="flip-right">
                <el-card class="box-card">
                <p class="font-weight-bold">
                    <a href="http://www.fwwb.org.cn/" target="_blank">中国大学生服务外包应用大赛</a>
                </p>
                <p>
                    "中国大学生服务外包创新创业大赛"（以下简称大赛），是响应国家关于鼓励服务外包产业发展、加强服务外包人才培养的相关战略举措与号召，举办的每年一届的全国性竞赛。大赛均由中华人民共和国教育部、中华人民共和国商务部和无锡市人民政府联合主办，由国家服务外包人力资源研究院、无锡市商务局、无锡市教育局、江南大学承办。
                </p>
                </el-card>
            </div>
            </div>
            <br>
            <br>
            <br>
        </div>
        <div id="fifth" data-aos="zoom-in-up">
            <h1>实验室照片</h1>
            <el-carousel type="card" height="500px">
                <el-carousel-item v-for="item in 6" :key="item">
                    <div class="img-border">
                        <img class="img" :src=images[item] alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="sixth">
            <h1>友情链接</h1>
            <p><i class="el-icon-position"></i><a href="https://github.com/sdutsoftlab">github仓库</a></p>
            <p><i class="el-icon-right"></i>友情链接:<a href="https://www.baidu.com">软件孵化实验室</a></p>
            <div class="h6 pb-2">Copyright</div>
            <p>&copy; 2020-2021 SDUT Information Technology Lab. All rights reserved.</p>
            <br/>
        </div>
        <br>
        <br>
        <el-tabs id="tab" :tab-position="tabPosition">
            <el-tab-pane name="0" label="实验室介绍"><a href="#first">实验室介绍</a></el-tab-pane>
            <br>
            <br>
            <el-tab-pane name="1" label="欢迎加入"><a href="#second">欢迎加入</a></el-tab-pane>
            <br>
            <br>
            <el-tab-pane name="2" label="学习方向"><a href="#third">学习方向</a></el-tab-pane>
            <br>
            <br>
            <el-tab-pane name="3" label="主要比赛"><a href="#fourth">主要比赛</a></el-tab-pane>
            <br>
            <br>
            <el-tab-pane name="4" label="实验室照片"><a href="#fifth">实验室照片</a></el-tab-pane>
            <br>
            <br>
            <el-tab-pane name="5" label="友情链接" ><a href="#sixth">友情链接</a></el-tab-pane>
        </el-tabs>
        <el-steps id="step" direction="vertical" :active="active-0">
            <el-step title="实验室介绍"></el-step>
            <el-step title="欢迎加入"></el-step>
            <el-step title="学习方向"></el-step>
            <el-step title="主要比赛"></el-step>
            <el-step title="实验室照片"></el-step>
            <el-step title="友情链接"></el-step>
        </el-steps>
    </div>
</template>

<script>

    import AOS from "aos";
    import img from "../assets/IMG_20210513_215922.b7803810.jpg"
    import img1 from "../assets/IMG_20210513_220016.259908af.jpg"
    import img2 from "../assets/IMG_20210513_220132.e3a986db.jpg"
    import img3 from "../assets/IMG_20210625_195130.4f5d9041.jpg"
    import img4 from "../assets/IMG_20210625_195142.9ac30b75.jpg"
    import img5 from "../assets/IMG_20210625_195150.1f6cc4f4.jpg"
    import logo from "../assets/softlab.png"
    import {onMounted} from "@vue/runtime-core";
    import {ref,reactive} from "vue"
    export default {
        name: "Home",
        setup() {
            AOS.init();
            let list=reactive(["first","second","third","fourth","fifth","sixth"]);
            const active=ref("");
            let actives=reactive({
                "first":"0",
                "second":"1",
                "third":"2",
                "fourth":"3",
                "fifth":"4",
                "sixth":"5"});
            const scrollHandle=(e)=>{
                // 获取视窗高度
                let domHeight = document.body.offsetHeight;
                // console.log("视窗高度:"+domHeight)

                // dom滚动位置
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log("dom滚动位置:"+scrollTop)

                // 获取监听元素
                let id=null;
                // 获取监听元素本身高度
                let scrollHeight=null;
                // 获取监听元素距离视窗顶部距离
                let offsetTop=null;
                // 获取监听元素距离顶部高度-窗口高度
                let top=null;
                // 元素距离底部的高度+元素本身高度
                let bottom=null;
                list.map((i) => {
                    id = document.getElementById(i);
                    // console.log(id)
                    scrollHeight = id.scrollHeight;
                    // console.log("元素高度:"+scrollHeight)
                    offsetTop = id.offsetTop;
                    // console.log("元素绝对位置:"+offsetTop)
                    top = offsetTop - domHeight > 0 ? offsetTop - domHeight : 0;
                    // console.log("元素顶部:"+top)
                    bottom = scrollHeight + offsetTop;
                    // console.log("元素底部:"+bottom)
                    // 页面滚动位置 > 元素距离顶部高度-窗口高度 && 页面滚动位置 < 元素距离顶部高度+元素本身高度
                    if (scrollTop >= top && scrollTop <= bottom) {
                        // console.log(active)
                        // console.log('元素出现在可视区: ' + i);
                        active.value=actives[i]
                    }
                });
            };
            onMounted(()=>{
                window.addEventListener("scroll",scrollHandle)
            });
            return{
                active
            }
        },

        data() {
            return {
                tabPosition: "left",
                images: [
                    null, img4, img1, img2, img3, img, img5
                ],
                logo:logo,
            }
        },

    }
</script>

<style lang="less">
    @import "../style/Home";
</style>