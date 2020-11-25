<template>
    <footer>
        <p>2020 - Miguel Molano</p>
        <div class="social-media">
            <a href="https://www.linkedin.com/in/miguel-molano-a2b283150/" target="_blank">
                <img src="img/git.svg" alt="gitHub icon">
            </a>
            <a href="https://github.com/mmolano" target="_blank">
                <img src="img/linked.svg" alt="gitHub icon">
            </a>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footer-comp'
    }
</script>

<style lang="scss" scoped>
    footer {
        display: flex;
        padding: 0 100px 40px;
        justify-content: space-between;
    }

    .social-media {
        display: flex;
        flex-direction: row;
        & img {
            width: 25px;
            margin: 0 10px;
        }
    }
</style>
