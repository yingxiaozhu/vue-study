<template>
    <div>
        <Header></Header>
            <Content>
                <router-view></router-view>
            </Content>
        <Footer></Footer>
    </div>
</template>


<script>
    import Header from './menus/header.vue';
    import Footer from './menus/footer.vue';
    export default {
        components: {
            Header,
            Footer
        }

    }

</script>



