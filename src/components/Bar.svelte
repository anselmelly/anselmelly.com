<script>
    export let bg = "bg-yellow-200";
    export let percentage = 0;
    export let stars = 1;
</script>

<style>
    .aw-1 {
        width: 20%;
    }
    .aw-2 {
        width: 40%;
    }
    .aw-3 {
        width: 60%;
    }
    .aw-4 {
        width: 80%;
    }
    .aw-5 {
        width: 100%;
    }
</style>

<div class="{bg} rounded-full pr-4 h-6 text-white aw-{stars}">
    &nbsp;{percentage}%
</div>
