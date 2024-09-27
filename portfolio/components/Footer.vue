<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <div>
          <a href="https://www.instagram.com/aayush_ujjwal/?hl=en" aria-label="Instagram" target="_blank" class="footerIcon">
            <IconsInstaIcon />
          </a>

          <a href="https://www.linkedin.com/in/aayush-ujjwal-6a1838230/" aria-label="Linkden" target="_blank" class="footerIcon">
            <IconsLinkedInIcon />
          </a>

          <a href="https://github.com/aayushujjwal" aria-label="Github" target="_blank" class="footerIcon">
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present Aayush Ujjwal. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
// utils and hooks
const { navigation } = useConstants();
const CURRENT_YEAR = new Date().getFullYear();
</script>
