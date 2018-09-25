<template>
    <div class="panel">
            <div class="form">
                <h3>请登录</h3>
                <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem><br>
                    <FormItem prop="password">
                        <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem><br>
                    <div class="forgot"><router-link to="/modify">忘记密码?</router-link></div>
                    <FormItem>
                        <Button type="success" long　@click="handleSubmit('formInline')">登录</Button>
                    </FormItem><br>
                    <FormItem>
                        <Button long>
                            <Icon type="logo-octocat" />
                            <a href="https://laravel-china.org/auth/oauth?driver=github">GitHub 登录</a>
                        </Button>
                        <Button long>
                            <Icon type="ios-text-outline" />
                            <a href="https://laravel-china.org/auth/oauth?driver=wechat">使用微信登录</a>
                        </Button>
                    </FormItem>
                </Form>
            </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .form{
        text-align: center;
        margin-top: 213px;
    }
    .ivu-form-item{
        width: 10.5%;
    }
    .forgot{
        margin-bottom: 10px;
        margin-left: 120px;
    }
    .panel{
        background-color: #ffffff;
        background-size:80px 60px;
    }
    h3{
        color:#999;
        margin-right: 163px;
        border:0px  gray;
    }
</style>