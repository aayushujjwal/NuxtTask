<script setup>
//const
const { projects } = useConstants();
useHead({
  title: "Full Stack Developer Portfolio | Personal Projects",
  meta: [
    {
      property: "og:title",
      content: "Aayush Ujjwal | Personal Projects",
    },
    {
      property: "og:site_name",
      content: "Aayush Ujjwal",
    },
    {
      property: "og:site",
      content: "https://www.aayush.com/projects",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <ProjectSection :projects="projects" />
  </NuxtLayout>
</template>
