<template>
        <div class="Title">
            <h1>Hello, my name is Miguel Molano.</h1>
        </div>
        <h2 class="section-prev">MY WORK</h2>
        <section class="pb-32 text-gray-700">
            <div class="flex flex-wrap">
                <ProjectCard v-for="(project, index) in projects"
                             :key="index"
                             :project-data="project">
                </ProjectCard>
            </div>
        </section>
</template>

<script>
    import projectData from '../data/projects.json'
    import ProjectCard from '../components/ProjectCard'

    export default {
        components: {
            ProjectCard
        },
        name: "projects-view",
        data() {
            return {
                projectData: projectData.projects
            }
        },
        computed: {
            projects() {
                return projectData.projects
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 30px;
    }

    @media screen and (max-width: 300px) {
        h1 {
            font-size: calc(2.27273vw + 22.72727px)
        }
    }

    .section-prev {
        margin: 30px 0;
        font-size: 20px;
    }
</style>
