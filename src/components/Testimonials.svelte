<script>
    export let s_name = 's_testimonials'
    let testimonials = [
        {
            'name':'Huston Malande',
            'url':'https://www.linkedin.com/in/hustonmalande/',
            'title':'CEO, Skyline',
            'text':'Ansel is an exceptional developer: honest and trustworthy, has technical depth and breadth of experience, and is the essential kind of project hacker who figures things out and gets them to work by any means necessary. I highly recommend him.'
        },
        {
            'name':'Brian Ngaira',
            'url':'https://www.linkedin.com/in/brian-ngaira-b21b8871/',
            'title':'Managing Director, Web Afriq',
            'text':'Projects are enjoyable when working with a skilled, talented, reliable problem solver. That is working with Ansel Melly'
        },
    ]
</script>
<div class="bg-gray-900" id={s_name}>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-12 lg:px-8">
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
            {#each testimonials as testimony}
            <div class="bg-gray-900 p-6 rounded-3xl">
                <blockquote class="mt-6 md:flex-grow md:flex md:flex-col">
                    <div
                        class="relative text-lg font-medium text-white md:flex-grow">
                        <svg
                            class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true">
                            <path
                                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="relative pl-3 ml-2">
                            {testimony.text}
                        </p>
                    </div>
                    <footer class="mt-8">
                        <div class="flex">
                            <div class="ml-4">
                                <div class="text-base font-medium text-white">
                                    <a href="{testimony.url}" target="_blank">
                                        {testimony.name}
                                    </a>
                                </div>
                                <div
                                    class="text-base font-medium text-indigo-200">
                                    {testimony.title}
                                </div>
                            </div>
                        </div>
                    </footer>
                </blockquote>
            </div>
            {/each}
        </div>
    </div>
</div>
