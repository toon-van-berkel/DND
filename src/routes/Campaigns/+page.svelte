<script>
    import { base } from '$app/paths';
</script>


<main>
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> /
        <a href="{base}/Campaigns">Campaigns</a>
    </div>

    <hr>
    
    <h1>Campaigns</h1>
    <div class="cards">
        <a href="{base}/Campaigns/Main">
            <img src="{base}/camp1.png" alt="camp 1">
            <div>
                <h2>Main</h2>
                <br>
                <span>DM: Tijs</span>
                <span>Party: 4p</span>
            </div>
        </a>
        <a href="{base}/Campaigns/Scouting">
            <img src="{base}/camp2.png" alt="camp 2">
            <div>
                <h2>Scouting campaign</h2>
                <br>
                <span>DM: Tijs</span>
                <span>Party: 4p</span>
            </div>
        </a>
        <a href="{base}/Campaigns/Aetherbound">
            <img src="{base}/camp3.png" alt="camp 3">
            <div>
                <h2>Aetherbound - The hidden power source</h2>
                <br>
                <span>DM: Toon</span>
                <span>Party: 9p</span>
            </div>
        </a>
    </div>
</main>