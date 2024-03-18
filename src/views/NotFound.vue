<template>
    <main class="main container">
        <h1 class="main__title">404</h1>
        <h2 class="main__subtitle">Atsiprašome, tačiau puslapis, kurio ieškote, neegzistuoja.</h2>
        <a class="main__cta" href="/">Atgal į pagrindinį puslapį</a>
    </main>
</template>

<script>
export default {
    setup() {
        return {}
    },
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 48px;
    margin-bottom: 64px;  

    &__title {
        font-size: 200px;
        line-height: 0.9;
        color: $purple;
    }

    &__subtitle {
        font-size: 20px;
        font-weight: 300;
        color: $gray;
        margin-top: 16px;
        margin-bottom: 64px;
    }

    &__cta {
        display: block;
        padding: 16px 24px;
        font-size: 16px;
        text-transform: uppercase;
        border: 1px solid $gray;
        transition: all ease 300ms;

        &:hover {
            border-color: $purple;
            color: $l-purple;
        }
    }
}
</style>