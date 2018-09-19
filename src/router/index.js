import VueRouter from "vue-router"
import Vue from "vue"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import TelSignUp from "../components/TelSignUp"
import Home from "../components/Home"
import NewsList from "../components/NewsList"
import Order from "../components/Order"
import Agent from "../components/Agent"
import Zhaoshang from "../components/Zhaoshang"
import Introduction from "../components/Introduction"
import Personal from "../components/Personal"
import OrderDetail from "../components/OrderDetail"

Vue.use(VueRouter)

const routes = [
  { path: "/", component: SignUp },
  { path: "/telsignup", component: TelSignUp },
  { path: "/signin", component: SignIn },
  { path: "/home", component: Home },
  { path: "/newslist", component: NewsList },
  { path: "/order", component: Order },
  { path: "/agent", component: Agent },
  { path: "/zhaoshang", component: Zhaoshang },
  { path: "/introduction", component: Introduction },
  { path: "/personal", component: Personal },
  { path: "/orderdetail/:id", component: OrderDetail }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
