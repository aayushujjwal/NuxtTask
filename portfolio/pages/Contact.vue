<script setup>
useHead({
  title: "Full Stack Developer Portfolio | Aayush Ujjwal",
  meta: [
    {
      property: "og:title",
      content: "Aayush Ujjwal | Contact",
    },
    {
      property: "og:site_name",
      content: "Aayush Ujjwal",
    },
    {
      property: "og:site",
      content: "https://www.aayush.com/contact",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="bg-white dark:bg-[#121212]">
      <Contact id="contact" />
    </div>
  </NuxtLayout>
</template>
