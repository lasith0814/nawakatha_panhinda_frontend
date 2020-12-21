<template>
    <div class="homepage">
        <navbar/>
        <div v-if="imgs.length != 0 && !isMore" class="card-group-container">
            <div class="group-title">
                <h2>Comedy</h2>
                <vs-button success floating @click="isMore = true">
                    <span class="mr-10" >More</span><i class="fas fa-arrow-right"></i>
                </vs-button>
            </div>
            <div class="card-group">
                <card v-for="img in imgs" v-bind:key="img.id" v-bind:title="img.user.name" :imageUrl="img.urls.regular" :likes=10 />
            </div>
        </div>
        <div  v-if="imgs2.length != 0 && !isMore" class="card-group-container">
            <div class="group-title">
                <h2>Entertaining</h2>
                <vs-button success floating>
                    <span class="mr-10">More</span><i class="fas fa-arrow-right"></i>
                </vs-button>
            </div>
            <div class="card-group">
                <card v-for="img in imgs2" v-bind:key="img.id" v-bind:title="img.user.name" :imageUrl="img.urls.regular" :likes=10 />
            </div>
        </div>
        <allcard v-if="isMore"></allcard>
    </div>
</template>


<script>
    import card from "./../components/card";
    import navbar from "./../layout/navbar";
    import allcard from "./../pages/all_card";

    export default {
        name: 'homepage',
        data(){
            return {
                imgs : [],
                imgs2 : [],
                isMore: false
            }
        },
        components:{
            card,
            navbar,
            allcard
        },
        created() {
        // Simple GET request using fetch
            fetch("https://api.unsplash.com/photos/random?count=12&ar=1:2&client_id=R_BzoiVXIs4n4VKJxc_dzDgX1jmGRKZ87lm8bPLzfy4")
                .then(response => response.json())
                .then(data => { this.imgs = data});
            fetch("https://api.unsplash.com/photos/random?count=17&ar=1:2&client_id=R_BzoiVXIs4n4VKJxc_dzDgX1jmGRKZ87lm8bPLzfy4")
                .then(responses => responses.json())
                .then(datas => { this.imgs2 = datas});
        }
    }

    // card.scrollTo
</script>


<style lang='scss' scoped>
    .homepage{
        position: absolute;
        width: 100%;
        display: block;
        top: 60px;
        left: 0;

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
            padding: 25px 0;
            // background: #000;
            overflow-y: visible;
            overflow-x: auto;
            gap: 15px;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            &::-webkit-scrollbar{
                display: none;
            }
            
        }
    }
</style>