<template>
  <section class="profile">
    <div class="w-48 mx-auto lg:ml-0">
      <img
        src="/profile-pics/profile.webp"
        width="350"
        height="350"
        alt="profile image"
        loading="lazy"
        class="rounded-lg"
      />
    </div>
    <article class="mt-3">
      <h1>Aayush Ujjwal</h1>
      <p class="text-center lg:text-left">Full Stack Developer</p>

      <div class="profile-social-icons">
        <a
          href="https://www.instagram.com/aayush_ujjwal/?hl=en"
          aria-label="Instagram"
          target="blank"
        >
          <IconsInstaIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/aayush-ujjwal-6a1838230/"
          aria-label="Linkden"
          target="blank"
        >
          <IconsLinkedInIcon />
        </a>

        <a href="https://github.com/aayushujjwal" aria-label="Github" target="blank">
          <IconsGithubIcon />
        </a>
      </div>
    </article>
  </section>
</template>
