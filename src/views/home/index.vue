<template>
  <div>
    {{ routes }}
  </div>
</template>

<script>
import { routes } from "@/router/routes";
// import subMenu from "@/components/subMenu/subMenu.vue";

export default {
  name: 'tabLayout',
  // components: {
  //     subMenu
  // },
  data() {
      return {
          collapsed: false,
          routes
      }
  },
  created() {
    console.log(this.routes)
  }
};
</script>

<style scoped>

</style>