<script lang="ts">
    import AetherboundMap from '$lib/components/AetherboundMap.svelte';
    import { base } from '$app/paths';
</script>

<main>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> /
        <a href="{base}/Campaigns">Campaigns</a> /
        <a href="{base}/Campaigns/Main">Main</a>
    </div>

    <hr>
    
    <h1>Main</h1>

    <img class="map-main" src="{base}/main/map.png" alt="The map">

    <br>

    <h2>My character</h2>
    <p>
        Im playing a rogue, this rogue is named <a href="{base}/Campaigns/Main/Characters/Vaelis Thorne">
        Vealis Thorne</a>.
    </p>

    <hr class="light-line">
    
    <section class="article">
        <h2>Links</h2>
        <ul>
            <li><a href="{base}/Campaigns/Main/Characters">Characters</a></li>
            <ul>
                <li><a href="{base}/Campaigns/Main/Characters/Vaelis Thorne">Vaelis Thorne</a></li>
            </ul>
            <li><a href="{base}/Campaigns/Main/Hierarchy">Hierarchy</a></li>
        </ul>
    </section>
</main>