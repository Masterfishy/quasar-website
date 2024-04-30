<template>
  <q-page id="home">
    <div class="page">
      <div class="column justify-center q-gutter-md hero">
        <div>
          <!-- <q-img alt="Oh hey, it's Zach Long" /> -->
          <h4>Oh hey, it's</h4>
          <h1>Zach Long</h1>
          <h3>Software Developer</h3>
        </div>
        <div>
          <div class="row q-gutter-md">
            <q-btn
              :size="buttonSize"
              color="accent"
              text-color="primary"
              :icon-right="matOpenInNew"
              label="Open Resume"
            />
            <q-btn
              :size="buttonSize"
              color="accent"
              text-color="primary"
              :icon-right="matEmail"
              label="Contact Me"
              @click="scrollToId('contact')"
            />
          </div>
        </div>
      </div>
      <PageSection title="Portfolio">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius
          provident, aut quisquam porro fugit quaerat dolorum quia nam odit
          excepturi neque accusamus ipsam doloremque accusantium iure sint dicta
          unde.
        </p>
        <!-- q-card to="/blogs/{blog.id}" -->
      </PageSection>
      <PageSection title="Experiences">
        <div class="q-gutter-md">
          <div
            class="column"
            v-for="(experience, index) in experiences"
            :key="index"
          >
            <div class="row experience_card">
              <q-card-section
                class="col-12 col-md bg-accent experience_card-title"
              >
                <h3>{{ experience.title }}</h3>
                <p>{{ experience.date }}</p>
              </q-card-section>

              <q-card-section class="col-12 col-md bg-secondary">
                <h3>{{ experience.role }}</h3>
                <p>{{ experience.location }}</p>
              </q-card-section>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection id="contact" title="Contact">
        <div class="row q-gutter-xs">
          <div
            v-for="(contact, index) in contacts"
            class="col-12 col-md text-center contact_card"
            :key="index"
            flat
          >
            <q-card-section class="row items-center q-gutter-md">
              <q-icon
                :name="contact.icon"
                class="contact_card-icon"
                size="md"
              />

              <q-btn
                :size="buttonSize"
                color="secondary"
                class="contact_card-button"
                :label="contact.title"
                :icon-right="contact.actionIcon"
                @click="contact.action()"
              >
                <q-tooltip>
                  {{ contact.tooltip }}
                </q-tooltip>
              </q-btn>
            </q-card-section>
          </div>
        </div>
      </PageSection>
    </div>
  </q-page>
</template>

<script setup>
import PageSection from "src/components/PageSection.vue";

import {
  matEmail,
  matOpenInNew,
  matContentCopy,
} from "@quasar/extras/material-icons";
import { fabLinkedin } from "@quasar/extras/fontawesome-v6";

import { scroll, openURL, copyToClipboard, useQuasar } from "quasar";

defineOptions({
  name: "HomePage",
});

const $q = useQuasar();

const { getScrollTarget, setVerticalScrollPosition } = scroll;
function scrollToId(id) {
  const element = document.getElementById(id);
  const target = getScrollTarget(element);
  const offset = element.offsetTop;
  const duration = 200;
  setVerticalScrollPosition(target, offset, duration);
  // scroll(element, {
  //   duration: 200,
  //   offset: element.offsetTop,
  //   easing: "easeInOutQuad",
  // });
}

const buttonSize = "16px";

// Blogs
// const blogs = axios call

// Experiences
const experiences = [
  {
    title: "DCS Corporation",
    role: "C++ Software Engineer",
    date: "April 2023 - Present",
    location: "Sterling Heights, MI",
    link: "",
  },
  {
    title: "King Abdullah University of Science and Technology",
    role: "Research Intern",
    date: "May 2021 - August 2021",
    location: "Thuwal, Saudi Arabia",
    link: "",
  },
  {
    title: "Capital One",
    role: "Software Engineer Intern",
    date: "May 2020 - August 2020",
    location: "Remote due to Covid-19",
    link: "",
  },
  {
    title: "Peraton",
    role: "Software Engineer Co-Op",
    date: "January 2020 - May 2020",
    location: "Blacksburg, VA",
    link: "",
  },
  {
    title: "1901 Group",
    role: "Software Test Engineer Intern",
    date: "June 2019 - August 2019",
    location: "Blacksburg, VA",
    link: "",
  },
];

// Contacts
const contacts = [
  {
    title: "Email",
    link: "zachtlong42@gmail.com",
    icon: matEmail,
    actionIcon: matContentCopy,
    action: contactCopyEmail,
    tooltip: "Copy email to clipboard",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/zachlong-42/",
    icon: fabLinkedin,
    actionIcon: matOpenInNew,
    action: contactOpenLinkedIn,
    tooltip: "Message me on LinkedIn",
  },
];

function contactCopyEmail() {
  copyToClipboard("zachtlong42@gmail.com")
    .then(() => {
      $q.notify({
        message: "Email copied to clipboard!",
      });
    })
    .catch(() => {
      $q.notify({
        message: "Could not copy email to clipboard!",
      });
    });
}

function contactOpenLinkedIn() {
  openURL("https://www.linkedin.com/in/zachlong-42/", undefined, {
    noreferrer: true,
  });
}
</script>

<style lang="scss">
.page {
  margin: 0 10vw;
}

.hero {
  height: calc(100vh - $toolbar-min-height);
}

.experience_card {
  border-radius: $generic-border-radius;
  overflow: hidden;
}

.experience_card h3 {
  line-height: normal;
  font-size: 20px;
  font-weight: 500;
}

.experience_card-title {
  color: $primary;
}
</style>
