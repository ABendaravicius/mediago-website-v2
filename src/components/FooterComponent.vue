<template>
    <div class="footer__wrapper">
        <div class="separator__horizontal"></div>
        <footer class="footer">
            <div class="contacts__wrapper">
                <div
                    class="contacts__item"
                    v-for="contact in contacts"
                    :key="contact.icon"
                >
                    <a :href="contact.action">
                        <img
                            :src="
                                require(`@/assets/img/icons/${contact.icon}.svg`)
                            "
                        />
                        {{ contact.text }}
                    </a>
                </div>
            </div>
            <img
                src="@/assets/img/media-go_logo.svg"
                alt="Media Go logotipas"
                class="page-nav__logo-image"
            />
            <div class="social__wrapper">
                <div
                    class="social__item"
                    v-for="social in socials"
                    :key="social.icon"
                >
                    <a :href="social.action">
                        <img
                            :src="
                                require(`@/assets/img/icons/${social.icon}.svg`)
                            "
                        />
                        {{ social.text }}
                    </a>
                </div>
            </div>
        </footer>
        <div class="copyright-text">
            <h6>2022 &copy; Media go</h6>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const contacts = ref([
            // {text: '+370 694 02456', icon: 'phone', action: 'tel:+37069402456'},
            {
                text: "hello@mediago.lt",
                icon: "envelope",
                action: "mailto: hello@mediago.lt",
            },
        ]);
        const socials = ref([
            {
                text: "/media-go-lt",
                icon: "li",
                action: "https://www.linkedin.com/company/media-go-lt",
            },
            {
                text: "/mediagoLT",
                icon: "fb",
                action: "https://www.facebook.com/mediagoLT",
            },
        ]);
        return { contacts, socials };
    },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.separator__horizontal {
    width: 100%;
    height: 64px;
    background: transparent linear-gradient(273deg, #7837d1 0%, #c473fe 100%) 0%
        0% no-repeat padding-box;
    box-shadow: inset 0px 16px 30px #00000029;
}

.footer {
    padding: 36px 48px;
    display: flex;
    justify-content: center;

    &__wrapper {
        background: #fff;
    }

    > img {
        display: block;
        height: 24px;
        padding: 0 64px;
    }

    .contacts {
        &__wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            column-gap: 24px;

            @media (max-width: 767px) {
                display: none;
            }
        }
        &__item {
            display: flex;
            align-items: center;

            img {
                display: block;
                height: 24px;
                max-width: 24px;
                margin-right: 16px;
            }

            a {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 700;
                line-height: 20px;
            }
        }
    }

    .social {
        &__wrapper {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            column-gap: 32px;

            @media (max-width: 767px) {
                display: none;
            }
        }
        &__item {
            display: flex;
            align-items: center;

            img {
                display: block;
                height: 24px;
                margin-right: 8px;
                max-width: 24px;
            }

            a {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-weight: 700;
                line-height: 20px;
            }
        }
    }
}

.copyright-text {
    padding-bottom: 16px;

    h6 {
        font-size: 12px;
        font-weight: 300;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #e5e5e5;
    }
}
</style>
