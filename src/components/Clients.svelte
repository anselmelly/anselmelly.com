<script>
    export let s_name = 's_clients';
    let clients = [
        {
            name: "KENIC",
            url: "https://kenic.or.ke",
            logo: "kenic.png",
            bg: "bg-gray-200",
        },
        {
            name: "BAKE",
            url: "https://bake.co.ke",
            logo: "bake.png",
            bg: "bg-gray-200",
        },
        {
            name: "Bonitta",
            url: "https://aluochbonnita.com/",
            logo: "bonnita.png",
            bg: "bg-gray-200",
        },
       
        {
            name: "Sienna Insurance",
            url: "http://siennainsurance.co.ke/",
            logo: "sienna.png",
            bg: "bg-black",
        },
        {
            name: "NCBA Group",
            url: "https://ncbagroup.com/",
            logo: "ncbagroup.png",
            bg: "bg-black",
        },
        {
            name: "Zenevan Consulting",
            url: "https://zenevan.co.ke/",
            logo: "zenevan.png",
            bg: "bg-black",
        },
        {
            name: "Cherehani Africa",
            url: "https://cherehani.org/",
            logo: "cherehani.png",
            bg: "bg-gray-200",
        },
        {
            name: "Mukuru Stoves",
            url: "https://mukurustoves.org/",
            logo: "mukuru.png",
            bg: "bg-gray-200",
        },
        {
            name: "East African Engeneering Consultants",
            url: "http://eaecgroup.com/",
            logo: "eaecgroup.png",
            bg: "bg-gray-200",
        },
    ];
</script>

<div class="bg-white" id="{s_name}">
    <a name="clients">&nbsp;</a>
    <div class="max-w-7xl mx-auto py-32 px-0 sm:px-0 lg:py-32 lg:px-0">
        
            <h2 class="text-3xl text-center font-extrabold text-gray-700 pb-5">Clients</h2>
        
        <p
            class="text-center text-base font-semibold text-gray-600 tracking-wider">
            Trusted by over 5 businesses and users
        </p>
        <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
            {#each clients as client}
                <div
                    class="col-span-1 flex justify-center py-8 px-8 {client.bg}">
                    <a href={client.url} alt={client.name}>
                        <img
                            class="max-h-12"
                            src="./clients/{client.logo}"
                            alt={client.name} />
                    </a>
                </div>
            {/each}
        </div>
    </div>
</div>
