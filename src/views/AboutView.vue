<template>
    <section class="header">
        <h1 class="header__text">Apie mus</h1>
    </section>
    <main class="main container">
        <div class="main__text">
            <p class="main__text-item">
                Esame integruotos komunikacijos agentūra, kuri padeda būti matomiems, siekti tikslų ir spręsti iššūkius, pasitelkiant tradicines ir skaitmenines komunikacijos priemones.
            </p>
            <p class="main__text-item">
                Generuojame idėjas, surandame efektyviausius sprendimus ir siekiame geriausio rezultato, profesionaliai įgyvendindami vertę kuriančią komunikaciją.
            </p>
            <p class="main__text-item">
                Už savo klientus bėgame sprintą ir maratoną bei duodame daugiau nei tikisi.
            </p>
        </div>
        <div class="main__words">
            <h2 class="main__words-item">We speed,</h2>
            <h2 class="main__words-item">you succeed</h2>
        </div>
    </main>
</template>

<script>
export default {
    setup() {
        return
    },
}
</script>

<style scoped lang="scss">
@import '../assets/style.scss';

@include sub-page-header;

.main {
    &__text {
        max-width: 700px;
        margin-left: 48px;
        margin-bottom: 48px;

        p {
            line-height: 1.5;
            text-align: justify;
            color: $gray;

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }
    }

    &__words {
        display: grid;
        justify-items: end;
        align-content: center;
        margin-bottom: 48px;

        &-item {
            font-size: 96px;
            line-height: 90px;
            text-transform: uppercase;
            color: $gray;
            text-wrap: nowrap;

            &:last-child {
                color: $purple;
                margin-right: 24px;
            }

            @media screen and (max-width: 800px) {
                font-size: 12vw;
                line-height: 11vw;

                &:last-child {
                    margin-right: 3vw;
                }
            }
        }

        .separator {
            height: 8px;
            width: 8px;
            margin: 0 8px;
            background: $purple;

            &:last-of-type {
                background: $l-purple;
            }
        }
    }

    @media (max-width: 1019px) {
        &__text {
            max-width: 100%;
            margin-left: initial;
        }
    }
}
</style>