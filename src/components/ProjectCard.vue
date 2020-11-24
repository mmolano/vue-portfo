<template>
    <div>
        <h1>{{ label }}</h1>

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
            link() {
                return this.project.link
            }
        }
    }
</script>
