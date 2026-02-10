<script lang="ts">
    import AetherboundMap from '$lib/components/AetherboundMap.svelte';
    import { base } from '$app/paths';
</script>


<main>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> /
        <a href="{base}/Campaigns">Campaigns</a> /
        <a href="{base}/Campaigns/ae">Aetherbound</a>
    </div>
    <h1>Aetherbound</h1>

    <div class="container-map">
        <AetherboundMap/>
    </div>

    <h2>Sableharbor</h2>
    <p>Het eiland dat bekent staat voor de slavernij <a href="{base}/Campaigns/ae/Islands/Sableharbor">Sableharbor</a>. Corrupt en gevaarlijk. <a href="{base}/Campaigns/ae/Islands/Sableharbor">Leer meer...</a></p>
</main>