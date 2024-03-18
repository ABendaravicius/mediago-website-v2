<template>
    <div class="main-content">
        <Header />
        <router-view />
    </div>
    <Footer />
</template>

<script>
import { defineComponent } from "vue";
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";

export default defineComponent({
    name: "App",
    components: {
        Header,
        Footer,
    },
    setup() {
        return;
    },
});
</script>

<style scoped lang="scss">
.main-content {
    margin-top: 88px;
}
</style>
