<template>
    <div id="baseLayout">
        <AHeader></AHeader>
        <AContent></AContent>
        <AFooter></AFooter>
    </div>
</template>
<script>
    import AContent from "./AContent";
    import AHeader from "./AHeader";
    import AFooter from "./AFooter";

    export default {
        name: "BaseLayout",
        components: {
            AFooter,
            AHeader,
            AContent
        },
        data() {
            return {}
        },
    }
</script>

<style lang="less" scoped>
@import "../style/BaseLayout.less";
</style>