<template>
  <div>
    <router-link :to="{ name: 'Home' }"></router-link>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
.container {
  /* max-width: 960px; */
  margin: 0;
}
</style>
