<template>
    <section class="header">
        <h1 class="header__text">Kontaktai</h1>
    </section>
    <main class="main container">
        <div class="main__contact">
            <div class="main__contact-text">
                <h2>Ieškote partnerių?</h2>
                <h2 class="main__contact-text-cta">Bendraukime:</h2>
            </div>
            <a href="mailto:hello@mediago.lt" class="main__contact-item">
                <img src="@/assets/img/icons/envelope.svg" />
                hello@mediago.lt
            </a>
            <a href="tel:+37069402456" class="main__contact-item">
                <img src="@/assets/img/icons/phone.svg" />
                +370 694 02456
            </a>
        </div>
        <img class="main__illustration" src="@/assets/img/contacts-illustration.png">
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

@include sub-page-header;

.main {
    display: flex;
    justify-content: flex-start;
    padding-top: 48px;
    margin-bottom: 64px;  

    &__contact {
        position: inherit;
        margin-bottom: 48px;
        margin-right: 48px;

        &-text {
            margin-bottom: 36px;

            h2 {
                font-size: 28px;
                line-height: 36px;
                text-transform: uppercase;
            }

            &-cta {
                margin-top: 8px;
                color: $purple;
            }
        }

        &-item {
            display: flex;
            width: fit-content;
            align-items: center;
            margin-bottom: 24px;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 1px;

            img {
                display: block;
                width: 24px;
                margin-right: 16px;
            }

            &:hover {
                color: $purple;
            }
        }
    }

    &__illustration {
        display: block;
        max-height: 220px;
    }

    @media (max-width: 767px) {
        flex-direction: column;

        &__contact {
            margin-bottom: -8px;
        }

        &__illustration {
            align-self: flex-end;
            max-height: none;
            width: 240px;
        }
    }
}
</style>