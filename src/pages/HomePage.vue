<template>
  <q-page class="bg-primary flex justify-center">
    <div class="flex page">
      <div class="column items-stretch section">
        <div>
          <!-- <q-img alt="Oh hey, it's Zach Long" /> -->
          <h4 style="color: white">Oh hey, it's</h4>
          <h1 style="color: white">Zach Long</h1>
        </div>
        <div>
          <q-btn
            color="secondary"
            icon-right="open_in_new"
            label="Open Resume"
          />
          <q-btn color="secondary" icon-right="email" label="Contact Me" />
        </div>
      </div>
      <PageSection title="Portfolio">
        <p style="color: white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius
          provident, aut quisquam porro fugit quaerat dolorum quia nam odit
          excepturi neque accusamus ipsam doloremque accusantium iure sint dicta
          unde.
        </p>
      </PageSection>
      <PageSection title="Experiences">
        <p style="color: white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quas
          praesentium ut corporis nulla. Atque doloribus repudiandae dignissimos
          tempore tenetur deleniti similique autem quas necessitatibus,
          accusantium nam cumque. Blanditiis, nemo.
        </p>
      </PageSection>
      <PageSection title="Contact">
        <p style="color: white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quas
          praesentium ut corporis nulla. Atque doloribus repudiandae dignissimos
          tempore tenetur deleniti similique autem quas necessitatibus,
          accusantium nam cumque. Blanditiis, nemo.
        </p>
      </PageSection>
    </div>
  </q-page>
</template>

<script setup>
import PageSection from "src/components/PageSection.vue";

defineOptions({
  name: "HomePage",
});
</script>

<style lang="scss">
.page {
  margin: 0 10vw;
}
</style>
