<template>
  <q-page class="">
    <div class="page">
      <div class="column items-stretch section">
        <div>
          <!-- <q-img alt="Oh hey, it's Zach Long" /> -->
          <h4>Oh hey, it's</h4>
          <h1>Zach Long</h1>
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eius
          provident, aut quisquam porro fugit quaerat dolorum quia nam odit
          excepturi neque accusamus ipsam doloremque accusantium iure sint dicta
          unde.
        </p>
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
                class="col-12 col-md-6 bg-accent experience_card-title"
              >
                <h3>{{ experience.title }}</h3>
                <p>{{ experience.date }}</p>
              </q-card-section>

              <q-card-section class="col-12 col-md-6 bg-secondary">
                <h3>{{ experience.role }}</h3>
                <p>{{ experience.location }}</p>
              </q-card-section>
            </div>
          </div>
        </div>
      </PageSection>
      <PageSection title="Contact">
        <div class="row q-gutter-md">
          <q-card
            v-for="(contact, index) in contacts"
            class="col"
            :key="index"
            flat
          >
            <q-card-section class="bg-secondary">
              <q-icon :name="contact.icon" />
              <h3>{{ contact.title }}</h3>
              <a>{{ contact.link }}</a>
            </q-card-section>
          </q-card>
        </div>
      </PageSection>
    </div>
  </q-page>
</template>

<script setup>
import PageSection from "src/components/PageSection.vue";

defineOptions({
  name: "HomePage",
});

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
    link: "zachtlong42 [at] gmail [dot] com",
    icon: "email",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/zachlong-42/",
    icon: "fa-linkedin",
  },
];
</script>

<style lang="scss">
.page {
  margin: 0 10vw;
}

.experience_card {
  border-radius: $generic-border-radius;
  overflow: hidden;
}

.experience_card-title {
  color: $primary;
}

.experience_card h3 {
  line-height: normal;
  font-size: 20px;
  font-weight: 500;
}
</style>
