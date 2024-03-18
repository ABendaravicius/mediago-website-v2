<template>
    <section class="header">
        <h1 class="header__text">Komanda</h1>
    </section>
    <main class="main container">
        <div class="main__content">
            <div class="main__content-card" v-for="member in members" :key="member.photo">
                <div class="main__content-card-first">
                    <img :src="require(`@/assets/img/${member.photo}.png`)" />
                </div>
                <div class="main__content-card-second">
                    <h2>{{member.fullname}}</h2>
                    <h3>{{member.position}}</h3>
                    <a :href="('mailto:'+member.email)" v-if="!!member.email">{{member.email}}</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const members = ref([
            {fullname: 'Ieva Abromavičienė', position: 'Įkūrėja ir vadovė', photo: 'ieva-r', email: 'ieva@mediago.lt'},
            {fullname: 'Eidvilė Jazukevičiūtė', position: 'Projektų vadovė', photo: 'eidvile-j'},
            {fullname: 'Viktorija Karsokaitė', position: 'Projektų vadovė', photo: 'viktorija-k'},
            {fullname: 'Deimantė Paulauskaitė', position: 'Socialinių Medijų Projektų Vadovė', photo: 'deimante-p'},
            {fullname: 'Justinas Tarasevičius', position: 'Dizaineris / maketuotojas', photo: 'justinas-t'},
            {fullname: 'Rugilė Uždavinytė', position: 'Dizainerė', photo: 'placeholder'},
            {fullname: 'Dr. Antanas Ūsas', position: 'Analitikas', photo: 'antanas-u'},
            {fullname: 'Arnas Bendaravičius', position: 'Programuotojas', photo: 'arnas-b'},
        ]);

        return {
            members
        }
    },
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';

@include sub-page-header;

.main {
    padding-top: 36px;
    display: flex;
    justify-content: center;

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        margin-bottom: 48px;

        &-card {
            display: flex;
            overflow: hidden;
            box-shadow: 4px 4px 6px rgba($gray, .35);

            &-first{
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 260px;
                max-height: 260px;
                border: 1px solid $purple;
                border-right: none;

                img {
                    display: block;
                    max-width: 160px;
                }
            }

            &-second {
                position: relative;
                padding: 24px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                flex: 2 1 0;
                background: $gray;

                h2 {
                    margin-bottom: 8px;
                    font-size: 22px;
                    font-weight: 300;
                    line-height: 28px;
                    text-transform: uppercase;
                    color: #FFF;
                }

                h3 {
                    font-size: 16px;
                    line-height: 24px;
                    text-transform: uppercase;
                    color: $l-purple;
                }
                
                a {
                    position: absolute;
                    display: block;
                    bottom: 15%;
                    font-size: 14px;
                    line-height: 24px;
                    color: #FFF;
                    transition: all ease 300ms;

                    &:hover {
                        color: $l-purple;
                    }
                }
            }

            @media (max-width: 565px) {
                flex-direction: column;

                &-first{
                    max-width: 100%;
                    border: 1px solid $purple;
                    border-bottom: none;
                }

                &-second a {
                    position: relative;
                    margin-top: 24px;
                    top: 0;
                    bottom: 0;
                }
            }
        }

        @media (max-width: 1199px) {
            grid-template-columns: 1fr;
            width: fit-content;
        }
    }
}
</style>