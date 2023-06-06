<template>
  <div class="page flex flex-col h-full">
    <base-layout>
      <template #header>
        <app-header />
      </template>

      <router-view></router-view>

      <template #footer>
        <app-footer />
      </template>
    </base-layout>
  </div>
</template>

<script setup>
import BaseLayout from '~/layout/base-layout.vue';
import AppHeader from '~/components/app-header/index.vue';
import AppFooter from '~/components/app-footer/index.vue';

</script>

<style scoped></style>