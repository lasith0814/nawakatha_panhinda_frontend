<template>
    <div class="login">
        <div class="login_container flex center column">
            <h1>
                <center>
                    නවකතා පන්හිද
                </center>
            </h1>
            <form class="flex center column mt-5" action="#" v-on:submit.prevent="_handle_submit()" method="post">
                <div class="mt-20">
                    <vs-input 
                        placeholder="User name"  
                        v-bind:state="$v.name.$error ? 'danger' : 'dark'"
                        v-model.trim="$v.name.$model"
                        icon-after
                        
                    >
                        <template #icon>
                        <i class='far fa-user'></i>
                        </template>
                        <template v-if="$v.name.$error" #message-danger>
                        Required
                        </template>
                    </vs-input>
                </div>
                <div class="mt-15">
                    <vs-input
                        type="password"
                        placeholder="Password"
                        v-model="$v.password.$model"
                        v-bind:state="$v.password.$error ? 'danger' : 'dark'"
                        :visiblePassword="hasVisiblePassword"
                        icon-after
                        @click-icon="hasVisiblePassword = !hasVisiblePassword">
                        <template #icon>
                        <i v-if="!hasVisiblePassword" class='far fa-eye'></i>
                        <i v-else class="far fa-eye-slash"></i>
                        </template>
                        <template v-if="$v.password.$error" #message-danger>
                        Required
                        </template>
                    </vs-input>
                </div>
                <div class="mt-20 mb-20">
                    <vs-button
                        :active="active"
                        @click="!active"
                        success
                    >
                        Log in
                    </vs-button>
                </div>
                <p class="">Forget Password? <router-link to="/forget_pass">here</router-link></p>
            </form>
            <div class="hr"></div>
            <div class="flex center column">
                <p >Don't have an Account?</p>
                <p ><router-link to="/signup">Sign Up</router-link></p>
            </div>
        </div>
    </div>
</template>


<script>
    import { required } from 'vuelidate/lib/validators'


    export default {
        name: 'login',
        data() {
            return {
                name: '',
                password: '',
                hasVisiblePassword: false,
                active: false
            }
        },
        validations: {
            name: {
                required
            },
            password: {
                required
            }
        },
        methods: {
            _handle_submit(){
                console.log(
                `%c Log %c logining %c`,
                'background:#1f6096 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
                'background:#a9d4f6 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000',
                'background:transparent'
                );
                console.log(
                `%c Error %c error %c`,
                'background:#e65139 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
                'background:#f4aaab ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000',
                'background:transparent'
                );
            }
        }
    }
</script>

<style>
    .vs-input {
        width: 100% !important;
    }
</style>    
<style lang='scss' scoped>
    .login {
        height: 100vh;
        width: 70%;
        margin: auto;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5vh 3vw;
        font-size: 1em;

        .login_container {
            height: 100%;
            width: 100%;
            align-items: center;
        }

        form {
            position: relative;
        }

        p{
            font-size: 14px;
        }
    }
</style>    