<template>
    <section class="header">
        <h1 class="header__text">Paslaugos</h1>
    </section>
    <main class="main container">
        <div class="main__text">
            <p class="main__text-item">
                Girdime klientą, nustatome tikslus, surandame efektyviausius sprendimus ir siekiame geriausio rezultato, įgyvendindami integruotą komunikaciją: nuo ryšių su visuomene iki reputacijos kūrimo ir rinkodaros kampanijų, nuo komunikacijos socialiniuose tinkluose iki renginių bei konferencijų organizavimo.
            </p>
        </div>
        <Services />
    </main>
</template>

<script>
import { ref } from 'vue';
import Services from '../components/ServiceList.vue'

export default {
    components: {
        Services,
    },
    setup() {
        const services = ref([
            {name: 'Korporatyvinė komunikacija'},
            {name: 'Reputacijos kūrimas ir valdymas'},
            {name: 'Rinkodaros komunikacija'},
            {name: 'Krizių komunikacija'},
            {name: 'Socialiniai tinklai'},
            {name: 'Vadovų komunikacija'},
            {name: 'Darbdavio komunikacija'},
            {name: 'Ryšiai su žiniasklaida'},
            {name: 'Renginiai ir konferencijos'},
        ]);

        return {
            services
        };
    },
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';

@include sub-page-header;

.main {
    padding-top: 48px;

    &__text {
        margin-bottom: 48px;

        p {
            line-height: 24px;
            color: $gray;
        }
    }

    @media (max-width: 1366px) {
        padding-top: 36px;

        &__text {
            margin-bottom: 24px;
        }
    }

    @media (max-width: 565px) {
        padding-top: 24px;
        &__text {
            margin-bottom: 16px;
        }
    }
}
</style>