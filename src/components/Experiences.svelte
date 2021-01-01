<script>
    import Experience from "./Experience.svelte";
    export let s_name = "s_experiences";
    let experiences = [
        {
            name: "Laravel",
            stars: 4,
            bg: "bg-gray-800",
        },
        {
            name: "Wordpress",
            stars: 3,
            bg: "bg-gray-600",
        },

        {
            name: "tailwindcss",
            stars: 2,
            bg: "bg-gray-400",
        },
        {
            name: "Linux",
            stars: 4,
            bg: "bg-gray-800",
        },
        {
            name: "Javascript",
            stars: 4,
            bg: "bg-gray-800",
        },
        {
            name: "Symphoy",
            stars: 3,
            bg: "bg-gray-600",
        },
    ];
</script>

<div
    class="py-10 xl:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    id={s_name}>
    <div class="max-w-7xl mx-auto">
        <div class="max-w-xl mx-auto text-center">
            <a name="showcase">
                <h2 class="text-3xl font-extrabold text-gray-900">
                    Experiences
                </h2>
            </a>
            <p class="mt-4 text-lg text-gray-700">
                My level of confidence in the technologies
            </p>
        </div>
        {#each experiences as experience}
            <Experience
                bg={experience.bg}
                stars={experience.stars}
                name={experience.name} />
        {/each}
    </div>
</div>
