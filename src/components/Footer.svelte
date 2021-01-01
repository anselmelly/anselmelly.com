<script>
  let socials = [
    {
      link: "https://facebook.com/anselmelly",
      icon:
        '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
      name: "Twitter",
    },
    {
      link: "https://www.linkedin.com/in/anselmelly/",
      icon:
        '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
      name: "LinkedIn",
    },
    {
      link: "https://twitter/anselmelly/",
      icon:
        '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',
      name: "Twitter",
    },

    {
      link: "https://github.com/anselmelly/",
      icon:
        '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
      name: "LinkedIn",
    },
  ];
  let today = new Date();
  let year = today.getFullYear();
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="bg-gray-900">
  <div
    class="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
    <div class="flex justify-center space-x-6 md:order-2">
      
      {#each socials as social}
        <a
          href={social.link}
          class="text-gray-200 hover:text-gray-300"
          target="_blank">
          <span class="sr-only">{social.name}</span>
          <svg
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true">
            {@html social.icon}
          </svg>
        </a>
      {/each}
    </div>
    <div
        class="fb-like text-white text-center"
        data-share="true"
        data-width="450"
        data-show-faces="true" />
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center text-base text-gray-300">
        &copy;
        {year}
        anselmelly. All rights reserved.
      </p>
    </div>
  </div>
</footer>
