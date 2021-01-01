<script>

import * as animateScroll from "svelte-scrollto";

</script>
<div class="bg-gray-900">
    <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2
            class="text-3xl font-extrabold tracking-tight text-gray-300 sm:text-4xl">
            <span class="block">Ready to dive in?</span>
            <span class="block text-indigo-300">Start now.</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
                <a
                    href="#!"
                    on:click={() => {
                        animateScroll.scrollTo({
                            element: '#s_contacts',
                            duration: 1000,
                            offset:-100
                        });
                    }}
                    class="inline-flex items-center justify-start px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    Get a quote
                </a>
            </div>
        </div>
    </div>
</div>
