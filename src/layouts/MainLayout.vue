<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar style="margin: 0 10vw; padding: 0 0">
        <q-toolbar-title> Zach Long </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: "MainLayout",
});
</script>
