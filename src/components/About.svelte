<script>
    import * as animateScroll from "svelte-scrollto";
    export let s_name = 's_about';
</script>
<div class="py-10 xl:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="{s_name}">
    <div class="max-w-max lg:max-w-7xl mx-auto">
        <div class="relative z-10 mb-8 md:mb-2 md:px-6">
            <div class="text-base max-w-prose lg:max-w-none">
                <a id="s_about">
                    <h2
                        class="leading-6 text-center text-gray-900 font-semibold tracking-wide uppercase">
                        *****
                    </h2>
                </a>
                <p
                    class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    About Me
                </p>
            </div>
        </div>
        <div class="relative">
            <svg
                class="hidden md:block absolute top-0 right-0 -mt-20 -mr-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true">
                <defs>
                    <pattern
                        id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse">
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-blue-100"
                            fill="currentColor" />
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="384"
                    fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)" />
            </svg>
            <svg
                class="hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20"
                width="404"
                height="384"
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true">
                <defs>
                    <pattern
                        id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse">
                        <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-blue-100"
                            fill="currentColor" />
                    </pattern>
                </defs>
                <rect
                    width="404"
                    height="384"
                    fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)" />
            </svg>
            <div class="relative md:bg-white md:p-6">
                <div class="lg:grid lg:grid-cols-2 lg:gap-6 place-items-center">
                    <div
                        class="prose prose-indigo prose-lg text-gray-900 lg:max-w-none text-center md:text-left">
                        <p class="text-lg">
                            I am Senior soft || web + developer with a great
                            deal of experience in converting ideas to usable
                            applications.
                        </p>

                        <p class="text-lg">
                            I am a PHP Disciple and a champion of
                            <a
                                href="https://laravel.com/"
                                target="_blank">Laravel</a>,
                            <a
                                href="https://wordpress.org/"
                                target="_blank">wordpress</a>,<a
                                href="https://symfony.com/"
                                target="_blank">symphony</a>
                            and anything php really...
                        </p>

                        <p class="text-lg">
                            I can handle javascript pretty well "I am still
                            learning" with "svelte and nodejs" FYI I can hold my
                            own
                        </p>

                        <p class="text-lg">
                            I am a proponent of
                            <em><b>"small applications + great impact"</b></em>
                            types of applications e.g user blogs and sme
                            ecommerce applications. This does not imply that i
                            am against enterprise ;)
                        </p>

                        <p class="text-lg">
                            On my spare time I ride my mountain bike discovering
                            the coffee houses in my locale "Blog coming soon"
                        </p>
                    </div>
                    <div
                        class="mt-6 prose prose-indigo prose-lg text-gray-900 lg:mt-0 items-center">
                        <img
                            class="w-full lg:w-96 shadow-xl"
                            src="https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            alt="coffee+code" />
                    </div>
                </div>
                <div class="inline-flex rounded-md shadow mt-6 w-full md:mt-8 lg:w-1/4">
                    <a
                        href="#!"
                        on:click={() => {
                            animateScroll.scrollTo({
                                element: '#s_contacts',
                                duration: 1000,
                                offset:-100
                            });
                        }}
                        class="flex items-center justify-center px-5 py-3 border border-transparent text-base 
                        font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-900 w-full">
                        Ask me anything
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
