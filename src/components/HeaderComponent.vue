<template>
    <header class="page-nav">
        <div class="page-nav__wrapper">
            <div class="page-nav__logo">
                <a href="/" class="page-nav__logo-link">
                    <img
                        src="@/assets/img/media-go_logo.svg"
                        alt="Media Go logotipas"
                        class="page-nav__logo-image"
                        v-if="!invertHeader"
                    />
                    <img
                        src="@/assets/img/media-go_logo-w.svg"
                        alt="Media Go logotipas"
                        class="page-nav__logo-image"
                        v-else
                    />
                </a>
            </div>
            <div class="page-nav__mobile-btn" id="menu-switch">
                <span>Meniu</span>
                <div class="page-nav__mobile-btn-icon">
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                    <div class="icon-fragment"></div>
                </div>
            </div>
            <nav>
                <ul class="page-nav__nav">
                    <li
                        class="page-nav__nav-item"
                        v-for="navItem in navItems"
                        :key="navItem.name"
                    >
                        <router-link
                            :to="{ name: navItem.name }"
                            @click="checkPath"
                            >{{ navItem.text }}</router-link
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
    setup() {
        const navItems = [
            { text: "Apie mus", name: "About" },
            { text: "Paslaugos", name: "Services" },
            { text: "Klientai", name: "Clients" },
            { text: "Partneriai", name: "Partners" },
            { text: "Kontaktai", name: "Contact" },
        ];

        const invertHeader = ref(false);

        const checkPath = (event) => {
            if (event.target.href !== "/") {
                invertHeader.value = false;
                document
                    .querySelector("header.page-nav")
                    ?.classList.remove("inverted");
            }
        };

        onMounted(() => {
            if (location.pathname === "/") {
                invertHeader.value = true;
                document
                    .querySelector("header.page-nav")
                    ?.classList.add("inverted");
            }

            window.addEventListener("scroll", () => {
                if (window.scrollY > window.innerHeight - 88) {
                    invertHeader.value = false;
                    document
                        .querySelector("header.page-nav")
                        ?.classList.remove("inverted");
                } else if (location.pathname === "/") {
                    invertHeader.value = true;
                    document
                        .querySelector("header.page-nav")
                        ?.classList.add("inverted");
                }
            });

            let menuBtn = document.querySelector("#menu-switch");

            menuBtn?.addEventListener("click", () => {
                if (menuBtn?.classList.contains("menu-open")) {
                    menuBtn?.classList.remove("menu-open");
                    menuBtn.querySelector("span").innerHTML = "Meniu";
                } else {
                    menuBtn?.classList.add("menu-open");
                    menuBtn.querySelector("span").innerHTML = "Uždaryti";
                }
            });

            Array.from(
                document.querySelectorAll(".page-nav__nav-item a")
            ).forEach((element) => {
                element.addEventListener("click", () => {
                    if (menuBtn?.classList.contains("menu-open")) {
                        menuBtn?.classList.remove("menu-open");
                        menuBtn.querySelector("span").innerHTML = "Meniu";
                    }
                });
            });
        });

        return {
            navItems,
            invertHeader,
            checkPath,
        };
    },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.page-nav {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    padding: 28px 48px;
    background: #fff;
    box-shadow: 0 4px 6px rgba($gray, 0.05);
    transition: all ease 300ms;

    &__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        &-image {
            display: block;
            height: 32px;
        }
    }

    &__mobile-btn {
        display: none;
        align-items: center;
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: $gray;
        cursor: pointer;
        transition: all ease 300ms;

        span {
            margin-right: 8px;
            transition: all ease 300ms;
        }

        &-icon {
            display: grid;
            padding: 2px;
            grid-template-columns: repeat(3, 1fr);
            gap: 4px;

            .icon-fragment {
                width: 4px;
                height: 4px;
                background: $gray;
                transition: all ease 300ms;
                opacity: 1;
            }
        }

        &.menu-open {
            span {
                color: $l-purple;
            }
            .icon-fragment {
                background: $l-purple;

                &:nth-child(2n) {
                    opacity: 0;
                }
            }
            // nav
            & + nav {
                transform: translateX(0);

                @media (max-width: 565px) {
                    width: 100%;

                    ul,
                    li {
                        width: 100%;
                    }
                }
            }
        }

        @media (max-width: 1199px) {
            & + nav {
                display: block !important;
                position: absolute;
                height: calc(100vh - 88px);
                top: 88px;
                right: 0;
                background: #fff;
                transition: all ease 300ms;
                transform: translateX(100%);

                ul {
                    display: flex;
                    flex-direction: column;
                }

                li {
                    width: 100%;
                    margin: 0;
                    border-bottom: 1px solid $l-gray;
                    text-align: right;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding: 24px 48px;
                        padding-left: 96px;
                        font-size: 20px;
                        line-height: 24px;
                        color: $gray !important;
                    }
                }
            }
        }
    }

    nav {
        display: flex;
        align-items: center;
    }
    &__nav {
        display: flex;
        align-items: center;
        list-style: none;
        text-indent: none;

        &-item {
            &:not(:first-child) {
                margin-left: 16px;
            }

            a {
                padding: 10px 12px;
                font-size: 14px;
                line-height: 24px;
                font-weight: 700;
                text-transform: uppercase;
                cursor: pointer;
                transition: all ease 300ms;
                border: 1px solid transparent;

                &.router-link-active,
                &:hover {
                    color: $l-purple;
                }
                &:hover {
                    border: 1px solid $purple;
                }
            }
        }
    }

    &.inverted {
        background: transparent;
        backdrop-filter: blur(25px);
        box-shadow: none;

        $this: "page-nav";
        .#{$this}__nav-item {
            a {
                color: #fff;

                &.router-link-active,
                &:hover {
                    color: $l-purple;
                }
                &:hover {
                    border: 1px solid #fff;
                }
            }
        }

        .#{$this}__mobile-btn {
            color: #fff;

            .icon-fragment {
                background: #fff;
            }

            &.menu-open {
                .icon-fragment {
                    background: $l-purple;
                }
            }
        }
    }

    @media (max-width: 767px) {
        padding-left: 24px;
        padding-right: 24px;
    }

    @media (max-width: 1199px) {
        &__mobile-btn {
            display: flex;
        }
    }
}
</style>
