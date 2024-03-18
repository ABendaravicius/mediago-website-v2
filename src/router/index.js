import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ClientsView from "../views/ClientsView.vue";
import PartnersView from "../views/PartnersView.vue";
import ContactView from "../views/ContactView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
        meta: {
            title: "Apie mus | MEDIA GO",
        },
    },
    {
        path: "/services",
        name: "Services",
        component: ServicesView,
        meta: {
            title: "Paslaugos | MEDIA GO",
        },
    },
    {
        path: "/clients",
        name: "Clients",
        component: ClientsView,
        meta: {
            title: "Klientai | MEDIA GO",
        },
    },
    {
        path: "/partners",
        name: "Partners",
        component: PartnersView,
        meta: {
            title: "Partneriai | MEDIA GO",
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactView,
        meta: {
            title: "Kontaktai | MEDIA GO",
        },
    },
    // 404
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: NotFound,
        meta: {
            title: "404",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title =
        toRoute.meta && toRoute.meta.title
            ? String(toRoute.meta.title)
            : "MEDIA GO";
    window.scrollTo(0, 0);
    next();
});

export default router;
