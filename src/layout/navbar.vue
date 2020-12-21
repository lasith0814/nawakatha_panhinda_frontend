<template>
    <div>
        <vs-navbar right-collapsed fixed not-line v-model="active">
            <template #left>
                <h3><i class="fas fa-book" ></i><a href="#" class="ml-10">නවකතා පන්හිද</a></h3>
            </template>
            <template #right>
                <vs-navbar-item :active="active == 'guide'"  id="guide">
                Guide
                </vs-navbar-item>
                <vs-navbar-item :active="active == 'docs'" id="docs">
                Documents
                </vs-navbar-item>
                <vs-button flat to="/login">Login</vs-button>
            </template>
        </vs-navbar>
    </div>
</template>

<script>
    export default {
        name: 'navbar',
        data(){
            return {
                active: 'guide'
            }
        }
    }
</script>

<style lang="scss" scoped>
    a{
        color: black;
    }
</style>