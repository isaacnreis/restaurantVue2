import AddToCart from "@/components/AddToCart.vue";
import Cart from "@/components/Cart.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/addToCart/:id",
    name: "AddToCart",
    component: AddToCart,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
