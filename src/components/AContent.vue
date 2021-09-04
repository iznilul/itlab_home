<template>
    <vue-particles
            color="#1FD8DE"
            :particleOpacity="0.7"
            :particlesNumber="75"
            shapeType="circle"
            :particleSize="4"
            linesColor="#198BDE"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="lizi"
    ></vue-particles>
</template>

<script>
    export default {
        name: "AContent"
    }
</script>

<style scoped>

</style>