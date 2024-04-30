<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :elevated="isHeaderElevated">
      <q-toolbar style="margin: 0 10vw; padding: 0 0">
        <q-toolbar-title> ZACH LONG </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-scroll="onScroll" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <footer class="column items-center bg-accent q-gutter-lg q-mt-xl q-pa-xl">
      <q-btn to="/" color="secondary">
        <h3>Zach Long</h3>
      </q-btn>

      <div>
        <div class="row q-gutter-x-md">
          <a
            href="https://github.com/Masterfishy"
            target="_blank"
            rel="noreferrer"
            class="col"
          >
            <q-icon :name="fabGithub" />
          </a>
          <a
            href="https://www.linkedin.com/in/zachlong-42/"
            target="_blank"
            rel="noreferrer"
            class="col"
          >
            <q-icon :name="fabLinkedin" />
          </a>
        </div>
      </div>

      <small>Made with Quasar</small>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { fabLinkedin, fabGithub } from "@quasar/extras/fontawesome-v6";

defineOptions({
  name: "MainLayout",
});

const isHeaderElevated = ref(false);

function onScroll(position) {
  isHeaderElevated.value = position > 0;
}
</script>

<style lang="scss">
footer {
  color: $primary;
}

footer h3 {
  font-size: 32px;
}

footer a {
  font-size: 24px;
  color: $primary;
  transition: $generic-hover-transition;
}

footer a:hover {
  background: transparent;
  color: $secondary;
}
</style>
