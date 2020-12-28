<script>
    import Bar from "./Bar.svelte";
    export let name = "";
    export let stars = 1;
    export let bg = '';
    let percentageStars = (stars/5) * 100;
    
</script>

<div class="grid grid-cols-2 bg-white gap-x-8 py-2">
    <div class="flex flex-row items-center mx-auto text-gray-900">
        <p>{name}</p>
    </div>
    <div>
        <div class="">
            <div class="grid grid-cols-1 text-right py-2 text-white">
                
                    <Bar bg="{bg}" percentage={percentageStars} {stars}/>
                
            </div>
        </div>
    </div>
</div>
