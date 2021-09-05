<template>
    <router-view/>
    <Particles
            id="tsparticles"
            :options="{
                    fpsLimit: 50,
                    interactivity: {
                        detectsOn: 'canvas',
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                            resize: true
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.8,
                                size: 20
                            },
                            push: {
                                quantity: 2
                            },
                            grab: {
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#0876de'
                        },
                        links: {
                            color: '#23acde',
                            distance: 250,
                            enable: true,
                            opacity: 0.7,
                            width: 1.5
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1.5,
                            straight: false
                        },
                        number: {
                            value: 40
                        },
                        opacity: {
                            value: 0.7
                        },
                        shape: {
                            type: 'circle'
                        },
                        size:{
                            value:3.5,
                        }
                    },
                    detectRetina: true
                }"
    ></Particles>
</template>

<script>
    export default {
        name: "AContent"
    }
</script>

<style scoped>

</style>