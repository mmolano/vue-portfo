<template>
    <nav-bar v-if="['Home', 'Project'].indexOf($route.name) > -1"/>
    <div :class="{'main': $route.name === 'Home' || $route.name === 'Project' }">
        <router-view></router-view>
    </div>
    <footer-comp v-if="['Home', 'Project'].indexOf($route.name) > -1"/>
</template>

<script>
    import NavBar from './components/nav/NavBar'
    import FooterComp from './components/footer/Footer'

    export default {
        name: 'App',
        components: {
            NavBar,
            FooterComp
        }
    }
</script>

<style>
    .main {
        padding: 40px 100px;
    }
</style>
