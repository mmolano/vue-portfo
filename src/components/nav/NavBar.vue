<template>
    <nav id="header" class="w-full z-30 py-1 mt-2">
        <div class="w-full flex items-center justify-between mt-0 py-2">
            <div class="md:flex md:items-center md:w-auto w-full order-3 md:order-1">
                <nav>
                    <ul class="md:flex items-center justify-between text-base nav-color pt-4 md:pt-0">
                        <li><router-link class="inline-block no-underline hover:text-black font-medium text-lg py-2 lg:-ml-2 lm-head" to="/">Home</router-link></li>
                        <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 lg:-ml-2 lm-head" href="#contact">Contact</a></li>
                        <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 lg:-ml-2 lm-head" href="#about">About</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'nav-bar'
    }
</script>

<style scoped>
    .nav-color {
        font-weight: 700;
        line-height: 1.4;
        color: #333;
        font-family: "Montserrat", sans-serif;
    }
    #header {
        padding: 0 100px;
    }
    .lm-head {
        padding: 11px 24px 12px 9px;
    }
</style>
