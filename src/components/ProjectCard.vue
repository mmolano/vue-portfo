<template>
    <div class="card">
        <router-link :to="`/project/${this.project.id}`">
            <div>
                <div class="absolute opacity-0 fd-sh card-details">
                    <h3>{{ name }}</h3>
                    <span>View details</span>
                </div>
            </div>
        </router-link>
        <img class="card-img" :src="'img/'+ image" alt="">
    </div>
</template>

<script>
    export default {
        name: "project-card",
        props: ['project-data'],
        data() {
            return {
                project: this.projectData
            }
        },
        computed: {
            label() {
                return this.project.label
            },
            name() {
                return this.project.name
            },
            image() {
                return this.project.img
            },
            link() {
                return this.project.link
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 440px;
        margin: 20px;
        width: 350px;
        background-color: #ccc;
        box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);

        & a {
            height: 100%
        }

        & img {
            position: absolute;
            left: 50%;
            margin-left: -400.5px;
            min-width: 795px;
            transform: translate(0, 0);
            transition: all .3s cubic-bezier(.5, .72, .24, .94);
        }

        &:hover {
            .card-details {
                z-index: 1;
                opacity: 1;
                padding: 35px;
                visibility: visible;
                transform: translate(0, 0%);
            }

            .card-img {
                transform: translate(0, -100%);
            }
        }
    }

    .card-details {
        visibility: hidden;
        height: 100%;
        width: 100%;
        color: #333;
        font-size: 21px;
        background-color: rgba(255, 255, 255, .8);
        position: absolute;
        transform: translate(0, 100%);
        transition: all .3s cubic-bezier(.5, .72, .24, .94);
        display: flex;
        flex-direction: column;

        & span {
            font-size: 16px;
            color: #ff6d6d;
        }
    }
</style>
