<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.aayush.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            Hi there! I am a student at Bengaluru's BNM Institute of Technology, currently in my fourth year of study.
             I possess a deep enthusiasm for both data science and machine learning, 
             and I am actively pursuing opportunities to apply my versatile skill set in these domains,
              while also embracing ongoing learning to remain current with industry trends.
          </p>
          <p class="mt-2">
            I'm passionate in learning new technologies, building responsive
            websites, and documenting my working process when it comes to
            complicated features.
          </p>
          <p class="mt-2">
            Here are a few technologies I've worked on:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>NodeJS</li>
            </ul>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>FastAPI</li>
              <li>C</li>
            </ul>
          </div>
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
