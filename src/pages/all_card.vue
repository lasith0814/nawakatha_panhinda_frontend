<template>
    <div class="all-card">
        <div v-if="imgs.length != 0" class="card-group-container">
            <div class="group-title">
                <h2>Comedy</h2>
            </div>
            <div class="card-group">
                <card v-for="img in imgs" v-bind:key="img.id" v-bind:title="img.user.name" :imageUrl="img.urls.regular" :likes=10 />
            </div>
        </div>
    </div>
</template>


<script>
    import card from "./../components/card";

    export default {
        name: 'allcard',
        data(){
            return {
                imgs : [],
                isMore: false
            }
        },
        components:{
            card,
        },
        created() {
        // Simple GET request using fetch
            fetch("https://api.unsplash.com/photos/random?count=12&ar=1:2&client_id=R_BzoiVXIs4n4VKJxc_dzDgX1jmGRKZ87lm8bPLzfy4")
                .then(response => response.json())
                .then(data => { this.imgs = data});
        }
    }

    // card.scrollTo
</script>


<style lang='scss' scoped>
    .all-card{
        width: 100%;
    }
    .card-group-container{    
        display: flex;
        margin: auto;
        overflow: hidden;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;    
        padding: 0 25px;
        width: 100%;  
        position: relative; 
        .group-title{
            display: flex;
            width: 100%;
            align-items: baseline;
            justify-content: space-between;  
        } 
        .card-group{
            display: flex;
            width: 100%;
            height: auto;
            margin: auto;
            flex-wrap: wrap;
            padding: 25px 0;
            // background: #000;
            gap: 15px;
            flex-basis: auto;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            &::-webkit-scrollbar{
                display: none;
            }
        }
    }
</style>
<style>
            .card{
                width: 100%;
            }
</style>