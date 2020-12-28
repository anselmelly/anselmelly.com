<script>
    export let s_name = 's_services';
    let services = [
        {
            title:"Website Development",
            description:"Creating beatiful,intuitive and responsive websites to make you stand out online"
        },{
            title:"Website Management",
            description:"Always on standby to keep your website up and running 99.9% of the time. Security updates and patches, troubleshooting and content management"
        },
        {
            title:"Software Development",
            description:"Developing cloud applications to enable you engage with your clients in realtime from anywhere"
        },
        {
            title:"Technical support",
            description:"I offer advice or guide your technical team on how to troubleshoot your website and we'll have you running in no time"
        }
    ];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-gray-900" id="{s_name}">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-300">
                The Services
            </h2>
            <p class="mt-4 text-lg text-gray-300">
               I provide an [array] of services tailored at ensuring you standout online, e.g. blogging, ecommerce or just simple static website
            </p>
        </div>
        <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-8">
            {#each services as service}
            <div class="flex">
                <!-- Heroicon name: check -->
                <svg
                    class="flex-shrink-0 h-6 w-6 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7" />
                </svg>
                <div class="ml-3">
                    <dt class="text-lg leading-6 font-medium text-gray-300">
                        {service.title}
                    </dt>
                    <dd class="mt-2 text-base text-gray-300">
                       {service.description}
                    </dd>
                </div>
            </div>
            {/each}
        </dl>
    </div>
</div>
