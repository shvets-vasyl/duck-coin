import defaultTransition from "@/utils/page-transition/default"

export default defineNuxtRouteMiddleware(async (to, from) => {
  defaultTransition(to, from)
})
