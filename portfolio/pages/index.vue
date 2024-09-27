<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Full Stack Developer Portfolio | Aayush",
  author: {
    "@type": "Person",
    "@id": "#aayush",
  },
  url: "https://www.aayush.com/",
  description:
    "Personal Portfolio Website. Hi, I am Aayush. I'm a Full Stack Developer based in India. Currently focused on developing website using Vue and React. Checkout my projects and github repositories",
  keywords:
    "Full Stack Developer, Software Developer, Software Engineer, Aayush, India",
  image: "https://www.eazypau.com/profile-pics/profile.webp",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#poyizhi",
  name: "Aayush",
  email: "aubnmaiml@gmail.com",
  url: "https://www.aayush.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
