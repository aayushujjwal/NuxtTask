<script setup>
//const
const { skillWithLogo } = useConstants();
useHead({
  title: "Full Stack Developer Portfolio | Skills",
  meta: [
    {
      property: "og:title",
      content: "Aayush Ujjwal",
    },
    {
      property: "og:site_name",
      content: "Aayush Ujjwal",
    },
    {
      property: "og:site",
      content: "https://www.aayush.com/skills",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <Skills :skill-set="skillWithLogo" />
  </NuxtLayout>
</template>
