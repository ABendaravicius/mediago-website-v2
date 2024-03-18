<template>
    <section class="header">
        <h1 class="header__text">Partneriai</h1>
    </section>
    <main class="main container">
        <div class="main__content">
            <div class="main__content-item">
                <div class="main__content-card">
                    <div class="main__content-card-first">
                        <p>TEISINIŲ PASLAUGŲ PARTNERIS</p>
                    </div>
                    <div class="main__content-card-second">
                        <img src="@/assets/img/logos/colored/jr-advokate.jpeg" style="width:50%;"/>
                        <img src="@/assets/img/logos/colored/jr-advokate.jpeg" style="width:50%;"/>
                    </div>
                </div>
            </div>
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
    &__content {
        margin-bottom: 64px;

        &-item:not(:first-child) {
            margin-top: 48px;
            padding-top: 64px;
            border-top: 1px solid #E5E5E5;
        }

        &-card {
            display: flex;
            overflow: hidden;
            box-shadow: 4px 4px 6px rgba($gray, .35);

            &-first{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                padding: 72px 48px;
                background: $gray;

                p {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 28px;
                    text-align: center;
                    color: #FFF;
                }
            }
            &-second {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;

                img {
                    display: block;
                    position: absolute;
                    padding: 16px;
                    max-width: 100%;
                    max-height: 160px;
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

            @media (max-width: 565px) {
                flex-direction: column;
                margin-bottom: 24px;

                &-first,
                &-second {
                    width: 100%;
                    height: 160px;
                }
                &-first {
                    height: fit-content;
                    padding: 24px 48px !important;
                    order: 2;

                    p {
                        font-size: 16px;
                        line-height: 24px;
                    }
                }
            }

            @media (max-width: 1199px) {
                img {
                    &:first-child {
                        opacity: 0;
                    }
                    &:last-child {
                        opacity: 1;
                    }
                }
            }
        }

        &-item-exp {
            display: flex;
            align-items: center;
            margin-top: 24px;

            h2 {
                font-size: 28px;
                line-height: 36px;
                text-transform: uppercase;
                color: $purple;
            }
            &-logos {
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-left: 24px;
                gap: 36px;

                img {
                    display: block;
                }
            }

            @media (max-width: 767px) {
                flex-wrap: wrap;

                h2 {
                    width: 100%;
                }

                &-logos {
                    width: 100%;
                    height: fit-content;
                    margin-left: 0;
                    margin-top: 16px;
                    flex-wrap: wrap;
                    gap: 24px;
                }
            }
        }
    }
}
</style>