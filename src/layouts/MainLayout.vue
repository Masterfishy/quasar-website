<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :elevated="isHeaderElevated">
      <q-toolbar style="margin: 0 10vw; padding: 0 0">
        <q-toolbar-title> Zach Long </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-scroll="onScroll" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer></q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
  name: "MainLayout",
});

const isHeaderElevated = ref(false);

function onScroll(position) {
  isHeaderElevated.value = position > 0;
}
</script>
