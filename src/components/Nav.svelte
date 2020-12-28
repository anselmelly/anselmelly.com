<!-- This example requires Tailwind CSS v2.0+ -->
<script>
    import Logo from "./Logo.svelte";
    import * as animateScroll from "svelte-scrollto";
    $: isOpen = false;
    let menus = [
        {
            name: "About",
            id: "s_about",
        },
        {
            name: "Services",
            id: "s_services",
        },
        {
            name: "Clients",
            id: "s_clients",
        },
        {
            name: "Showcase",
            id: "s_showcase",
        },
        {
            name: "Experiences",
            id: "s_experiences",
        },
        {
            name: "Testimonials",
            id: "s_testimonials",
        },
        {
            name: "Contacts",
            id: "s_contacts",
        },
    ];
</script>

<div class="fixed w-full z-20 shadow-xl bg-white">
    <div
        class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
                <span class="sr-only">AnselMelly</span>
                <Logo />
            </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
            <button
                on:click={() => {
                    isOpen = true;
                    console.log(isOpen);
                }}
                type="button"
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Open menu</span>
                <!-- Heroicon name: menu -->
                <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <nav class="hidden md:flex space-x-10">
            {#each menus as menu}
                <a
                    href="#!"
                    on:click={() => animateScroll.scrollTo({
                            element: '#' + menu.id,
                            duration: 1000,
                        })}
                    class="text-base font-medium text-blue-500 hover:text-gray-900">
                    {menu.name}
                </a>
            {/each}
        </nav>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.
  
      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div
        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden {isOpen ? 'visible' : 'invisible'}">
        <div
            class="shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                    <div>
                        <Logo />
                    </div>
                    <div class="-mr-2">
                        <button
                            on:click={() => {
                                isOpen = false;
                                console.log(isOpen);
                            }}
                            type="button"
                            class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span class="sr-only">Close menu</span>
                            <!-- Heroicon name: x -->
                            <svg
                                class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="py-6 px-5">
                <div class="grid grid-cols-2 gap-4">
                    {#each menus as menu}
                        <a
                            href="#!"
                            on:click={() => {
                                animateScroll.scrollTo({
                                    element: '#' + menu.id,
                                    duration: 1000,
                                    offset:-100
                                });
                                isOpen=false;
                            }}
                            class="text-base font-medium text-blue-500 hover:text-gray-900">
                            {menu.name}
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
