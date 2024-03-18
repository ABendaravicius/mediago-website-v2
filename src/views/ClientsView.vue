<template>
    <section class="header">
        <h1 class="header__text">Klientai</h1>
    </section>
    <main class="main container">
        <ClientList />
    </main>
</template>

<script>
import { } from 'vue';
import ClientList from '../components/ClientList.vue'

export default {
    components: {
        ClientList,
    },
    setup() {
        return {};
    },
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';

@include sub-page-header;

.main {
    padding-top: 48px;

    &__content {
        position: relative;
        margin-bottom: 64px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 48px;

        &-logo {
            position: relative;
            min-height: 96px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                display: block;
                position: absolute;
                z-index: 10;
                transition: all ease 300ms;
                opacity: 1;

                &:last-child {
                    opacity: 0;
                    z-index: 0;
                }

                &:hover {
                    opacity: 0;

                    + img {
                        opacity: 1;
                    }
                }
            }
        }

        @media (max-width: 1199px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 767px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 549px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (max-width: 1366px) {
        padding-top: 36px;

        &__content {
            gap: 24px;
        }
    }
}
</style>