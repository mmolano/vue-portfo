<template>
    <section>
        <div class="lg:py-12 lg:flex lg:justify-center">
            <div class="lg:mx-8 lg:flex lg:max-w-5xl">
                <div class="lg:w-1/2">
                    <div class="card">
                        <img class="card-img" :src="'img/'+ project.img" alt="">
                    </div>
                </div>
                <div class="px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                    <h2 class="text-3xl text-gray-800 font-bold capitalize project-title">{{ project.title }}</h2>
                    <p class="mt-4 text-gray-600 text-justify">{{ project.description }}</p>
                    <ul class="features">
                        <li v-for="feature in project.features" :key="feature">
                            {{ feature.name }}
                        </li>
                    </ul>
                    <div class="mt-3">
                        <div class="box">
                            <ul>
                                <li v-for="skill in project.skills" :key="skill">
                                    <div class="lang capitalize">{{skill.lang}} - {{skill.percent}}%</div>
                                    <div class="bar">
                                        <div class="progress"
                                             v-bind:style="{'background':skill.color, 'width':skill.percent+'%'}"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import json from '../data/projects.json'

    export default {
        data() {
            return {
                projects: json.projects,
                project: undefined
            }
        },
        computed: {
            id() {
                return this.$route.params.id
            }
        },
        created() {
            this.assignProject();
        },
        methods: {
            assignProject() {
                let data = this.projects
                this.project = data.find(item => {
                    return item.id == this.id
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        width: 100%;
    }

    ul li {
        list-style-type: none;
        padding: 10px 0;
    }

    .features {
        padding: 20px 20px 0;
        & li {
            list-style-type: circle;
            padding: 5px 25px;
        }
    }

    .lang {
        margin: 5px 0;
    }

    .bar {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 15px;
        background: #dfdfdf;
        overflow: hidden;
    }

    .progress {
        padding: 15px;
    }

    .project-title:after {
        content: '';
        height: 2px;
        background: #1e2938;
        display:block;
    }

    .card {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 440px;
        max-width: 350px;
        height: 100%;
        background-color: #ccc;
        box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    }

    img {
        position: absolute;
        left: 50%;
        height: 100%;
        margin-left: -400.5px;
        min-width: 795px;
    }
</style>
