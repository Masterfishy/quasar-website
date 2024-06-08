<template>
  <q-page id="home">
    <div class="page">
      <div class="flex hero">
        <div class="flex self-center" style="width: 100%">
          <div class="column q-gutter-lg" style="width: 100%">
            <!-- <q-img alt="Oh hey, it's Zach Long" /> -->
            <!-- <h4>Oh hey, it's</h4>
            <h1 class="span-title">Zach Long</h1>
            <h3>Software Developer</h3> -->
            <div class="svg-container" style="width: 100%">
              <svg viewBox="0 0 100 40" class="responsive-svg">
                <text fill="#fff" x="0" y="15" class="svg_hook">
                  Oh hey it's
                </text>
                <text fill="#fff" x="0" y="30" class="svg_title">
                  Zach Long
                </text>
              </svg>
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
        </div>
        <div class="flex column items-center self-end" style="width: 100%">
          <text class="text-secondary">Scroll for more</text>
          <q-icon
            :name="matKeyboardDoubleArrowDown"
            class="text-secondary"
            size="lg"
          />
        </div>
      </div>
      <PageSection title="Portfolio">
        <div class="row q-col-gutter-md">
          <PostPreview
            v-for="preview in postPreviewStore.previews.slice(0, 3)"
            :key="preview.id"
            :preview="preview"
            class="col-12 col-sm-6"
            @click="$router.push(`posts/${preview.id}`)"
          />
          <PostPreview
            :preview="readMorePreview"
            class="col-12 col-sm-6"
            @click="$router.push('posts/')"
          />
        </div>
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
                class="col-12 col-sm bg-accent experience_card-title"
              >
                <h3>{{ experience.title }}</h3>
                <p>{{ experience.date }}</p>
              </q-card-section>

              <q-card-section class="col-12 col-sm bg-secondary">
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
            class="col-12 col-md text-center"
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
import PostPreview from "src/components/PostPreview.vue";

import {
  matEmail,
  matOpenInNew,
  matContentCopy,
  matExpandCircleDown,
  matKeyboardDoubleArrowDown,
} from "@quasar/extras/material-icons";
import { fabLinkedin } from "@quasar/extras/fontawesome-v6";

import { onMounted } from "vue";
import { scroll, openURL, copyToClipboard, useQuasar } from "quasar";

import { postPreviewStore } from "src/stores/store";

defineOptions({
  name: "HomePage",
});

onMounted(() => {
  postPreviewStore.fetchPreviews();
});

const readMorePreview = {
  post_title: "",
  description: "Read more...",
};

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
.hero {
  height: calc(100vh - $toolbar-min-height);
}

.span-title {
  width: 100%;
  font-size: 18em;
  letter-spacing: 0;
  text-align: center;
  line-height: 200px;
  font-weight: 200;
}

.svg-container {
  width: 100%;
  font-family: inherit;
}

.responsive-svg {
  width: 100%;
  height: auto;
  display: block;
}

$svg-title-font-size: 14px;
$svg-title-base-width: 6.888;

.svg_hook {
  font-size: calc(0.3 * $svg-title-font-size);
}

.svg_title {
  font-size: $svg-title-font-size;
  letter-spacing: calc(100px - $svg-title-font-size * $svg-title-base-width);
}

.experience_card {
  border-radius: $generic-border-radius;
  overflow: hidden;
}

.experience_card-title {
  color: $primary;
}
</style>
