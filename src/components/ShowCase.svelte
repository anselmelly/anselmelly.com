<script>
    export let s_name = "s_showcase";
    let showcase = [
        {
            name: "NCBA Group",
            url: "https://ncbagroup.com/",
            image: "ncbagroup.png",
        },
        {
            name: "Hapakenya",
            url: "https://hapakenya.com",
            image: "hapakenya.png",
        },
        {
            name: "Bonitta On Safari",
            url: "https://aluochbonnita.com/",
            image: "bonnita.png",
        },
        {
            name: "KENIC",
            url: "https://kenic.or.ke/",
            image: "kenic.png",
        },
    ];
</script>

<div class="bg-gray-900" id={s_name}>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
            <a name="showcase">
                <h2 class="text-3xl font-extrabold text-gray-300">Showcase</h2>
            </a>
            <p class="mt-4 text-lg text-gray-300">
                a preview of some of the works
            </p>
        </div>
        <div class="grid grid-cols-2 gap-2 place-content-evenly p-2 mt-4">
            {#each showcase as scase}
                <div
                    class="flex flex-col items-center p-5 bg-gray-900 text-gray-300">
                    <a href={scase.url} alt={scase.name}>
                        <img alt="" src="./showcase/{scase.image}" />
                    </a>
                    <p class="pt-5">
                        <a href={scase.url} target="_blank">{scase.name}</a>
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
