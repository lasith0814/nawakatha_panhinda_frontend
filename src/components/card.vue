<template>
    <div class="card">
        <vs-card>
            <template #img>
                <img :src="imageUrl" width="150px" height="165px" alt="">
            </template>
            <template #text>
                <h3>{{title}}</h3>
            </template>
            <template #interactions>
                <vs-button 
                    circle
                    icon
                    danger
                    floating
                >
                    <i class="fas fa-heart"></i>
                </vs-button>
                <vs-button shadow floating>
                    <i class="far fa-thumbs-up"></i>
                    <span class="span">
                        {{likes}}
                    </span>
                </vs-button>
            </template>
        </vs-card>
    </div>
</template>


<script>
    export default {
        name: 'card',
        props: {
            imageUrl: String,
            likes: Number,
            isFavorite: Boolean,
            title: String,
            author: Object,
        }
    }
</script>


<style>
    .vs-card{
        max-width: 100% !important;
        max-height: 100% !important;
        box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1) !important;
        /* position: absolute;
        top: 0; */
    }
</style>
<style lang='scss' scope>
    .card{
        min-width: 150px !important;
        min-height: 189px !important;
        max-width: 150px !important;
        // max-height: 189px !important;
        position: relative;
        display: block;
    }

    @media screen and (min-width: 300px) {
        .card{
            width: 100% !important;
        }
    }
</style>