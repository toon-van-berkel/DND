<script lang="ts">
    import AetherboundMap from '$lib/components/AetherboundMap.svelte';
    import { base } from '$app/paths';
</script>


<main>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> /
        <a href="{base}/Campaigns">Campaigns</a> /
        <a href="{base}/Campaigns/Aetherbound">Aetherbound</a>
    </div>

    <ul>
        <li><a href="{base}/Campaigns/Aetherbound/Islands">Islands</a></li>
        <ul>
            <li><a href="{base}/Campaigns/Aetherbound/Islands/Sableharbor">Sableharbor</a></li>
        </ul>
        <li><a href="{base}/Campaigns/Aetherbound/NPC's">NPC's</a></li>
        <ul>
            <li><a href="{base}/Campaigns/Aetherbound/NPC's/Lucian Ducky">Lucian Ducky</a></li>
            <li><a href="{base}/Campaigns/Aetherbound/NPC's/Aurelion Sol">Aurelion Sol</a></li>
        </ul>
        <li><a href="{base}/Campaigns/Aetherbound/Players">Players</a></li>
        <ul>
            <li><a href="{base}/Campaigns/Aetherbound/Players/Party-1">Party-1</a></li>
            <ul>
                <li><a href="{base}/Campaigns/Aetherbound/Players/Party-1/Velorin Sabletongue">Velorin Sabletongue</a></li>
            </ul>
            <li><a href="{base}/Campaigns/Aetherbound/Players/Party-2">Party-2</a></li>
        </ul>
    </ul>

    <hr>

    <h1>Aetherbound</h1>

    <div class="container-map">
        <AetherboundMap/>
    </div>

    <h2>Sableharbor</h2>
    <p>
        Het eiland dat bekent staat voor de slavernij <a href="{base}/Campaigns/Aetherbound/Islands/Sableharbor">
        Sableharbor</a>. Corrupt en gevaarlijk. <a href="{base}/Campaigns/Aetherbound/Islands/Sableharbor">
        Leer meer...</a>
    </p>
</main>