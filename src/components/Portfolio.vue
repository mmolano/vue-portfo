<template>
    <h1>Miguel Molano</h1>

    <ProjectCard v-for="(project, index) in projects"
                 :key="index"
                 :project-data="project">
    </ProjectCard>
</template>

<script>
    import projectData from '../data/projects.json'
    import ProjectCard from '../components/ProjectCard'

    export default {
        components: {
            ProjectCard
        },
        name: "project-view",
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

</style>
