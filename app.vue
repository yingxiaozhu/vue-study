<template>
    <div class="layout">

        <Header :style="{position: 'fixed', width: '100%'}">
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                    <a href="/">
                        <img src="https://lccdn.phphub.org/uploads/sites/hG5JuDSqZ7Y26Kuh0Qat8EYv6XNT0fGc.png" alt="CYJ">
                    </a>
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        社区
                    </MenuItem>
                    <MenuItem name="2">
                        <Dropdown>
                            <a href="javascript:void(0)">
                                分类
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem>冰糖葫芦</DropdownItem>
                                <DropdownItem divided>北京烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem name="3">
                        <Dropdown>
                            <a href="javascript:void(0)">
                                教程
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem>冰糖葫芦</DropdownItem>
                                <DropdownItem divided>北京烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem name="4">
                        <Dropdown>
                            <a href="javascript:void(0)">
                                文档
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem>冰糖葫芦</DropdownItem>
                                <DropdownItem divided>北京烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem name="4">

                        <Dropdown>
                            <a href="javascript:void(0)">
                                开源
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>驴打滚</DropdownItem>
                                <DropdownItem>炸酱面</DropdownItem>
                                <DropdownItem disabled>豆汁儿</DropdownItem>
                                <DropdownItem>冰糖葫芦</DropdownItem>
                                <DropdownItem divided>北京烤鸭</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </MenuItem>
                </div>
                <Button shape="circle" icon="ios-search" class="search">Search</Button>
                <Button class="btn-login"　@click="login">登录</Button>
                <Button class="btn-register" @click="register">注册</Button>

            </Menu>

        </Header>
        <Content>
            <router-view>

            </router-view>
            　
　      </Content>
        <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </div>
</template>
<style scoped>
    .layout{
        border:1px solid #d7dde4;
        background: #f5f7f9;
        position:relative;
        border-radius: 4px;
        overflow:hidden;
    }
    .layout-logo img{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 12px;
        left: 263px;

    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-left: 382px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .search{
        width: 223px;
        height: 37px;
        margin-left: 16px;
    }

    .btn-login{
        width:93px;
        height:36px;
        margin-left: 196px;
    }
    .btn-register{
        width:93px;
        height:36px;
        margin-left: 45px;
    }

</style>
<script>
    export default {

        methods: {
            login () {
                console.log("methods");
                this.$router.push('/login');
            },
            register () {
                console.log("methods");
                this.$router.push('/login');
            },

        }
    }

</script>

