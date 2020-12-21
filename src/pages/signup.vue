<template>
    <div class="signup">
        <div class="signup_container flex center column">
            <h1>Welcome</h1>
            <h3>LOG IN</h3>
            <form class="flex center column mt-5" v-on:submit.prevent="fos" method="post">
                <div class="form-group">
                    <div class="form-control mt-20" v-bind:class ="{error : $v.f_name.$error}" >
                        <label for="firstname" v-bind:class ="{text : f_name}"> First Name <span :style="{color: 'red'}">*</span>  </label>
                        <input
                            v-model.trim="$v.f_name.$model"
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder=""
                        />
                    </div>
                    <div class = "form-control mt-20" v-bind:class ="{error : $v.l_name.$error}">
                        <label for="lastname" v-bind:class ="{text : l_name}"> Last Name <span :style="{color: 'red'}">*</span>  </label>
                        <input
                            v-model.trim="$v.l_name.$model"
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder=""
                        />
                    </div>
                </div>
                <div class="form-control mt-20" v-bind:class ="{error : $v.username.$error}">
                    <label for="username" v-bind:class ="{text : username}"> User name <span :style="{color: 'red'}">* </span>  </label>
                    <input
                        v-model.trim="$v.username.$model"
                        type="text"
                        name="username"
                        id="username"
                        placeholder=""
                    />
                </div>
                <div class="form-control mt-20" v-bind:class ="{error : $v.phone.$error}">
                    <label for="phone" v-bind:class ="{text : phone}"> Phone No <span :style="{color: 'red'}">* </span>  </label>
                    <input
                        v-model.trim="$v.phone.$model"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder=""
                    />
                </div>
                <div class="form-control mt-20" v-bind:class ="{error : $v.password.$error}">
                    <label for="password" v-bind:class ="{text : password}"> Password <span :style="{color: 'red'}">*</span> </label>
                    <input
                        v-model.trim="$v.password.$model"
                        type="password"
                        name="password"
                        id="password"
                        placeholder=" "
                    />
                </div>
                <div class="form-control mt-20" v-bind:class ="{error : $v.confirm_password.$error}">
                    <label for="confirm_password" v-bind:class ="{text : confirm_password}">Confirm Password <span :style="{color: 'red'}">*</span> </label>
                    <input
                        v-model.trim="$v.confirm_password.$model"
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder=" "
                    />
                </div>
                <div class="form-group">
                    <div class="flex row center mt-20 mb-20">
                        <button type="button" class="btn btn-secondry mr-10" @on:click="() => props.history.goBack()">Back</button>
                        <button type="submit" class="btn btn-primary">Sign up</button>
                    </div>
                </div>
            </form>
            <div class="hr"></div>
            <div class="flex center column">
                <p >Already have an Account?</p>
                <p ><router-link to="/login" >Sign in</router-link></p>
            </div>
        </div>
    </div>
</template>


<script>
    import { required } from 'vuelidate/lib/validators'

    export default {
        name: 'signup',
        data(){
            return{
                f_name: "",
                l_name: "",
                password:"",
                confirm_password:"",
                username:'',
                phone:''
            }
        },
        methods:{
            fos(){
                console.log(false);
            }
        },
        validations: {
            f_name: { required },
            l_name: { required },
            password: { required },
            confirm_password: { required },
            username: { required },
            phone: { required }
        }
    }
</script>


<style lang='scss' scoped>
    .signup{
        height: 100vh;
        width: 70%;
        margin: auto;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5vh 3vw;

        .signup_container{
            height: 100%;
            width: 100%;
            align-items: center;
        }

        form{
            position: relative;
        }
    }
</style>