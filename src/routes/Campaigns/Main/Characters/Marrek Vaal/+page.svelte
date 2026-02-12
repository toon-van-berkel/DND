<script lang="ts">
    import { base } from '$app/paths';
</script>

<main class="article">
    <div class="breadcrumbs">
        <a href="{base}/">Home</a> /
        <a href="{base}/Campaigns">Campaigns</a> /
        <a href="{base}/Campaigns/Main">Main</a> /
        <a href="{base}/Campaigns/Main/Characters">Characters</a> /
        <a href="{base}/Campaigns/Main/Characters/Marrek Vaal">Marrek Vaal</a>
    </div>

    <section>
        <h1>Marrek Vaal — Chains & Flesh</h1>
    </section>

    <hr>

    <section class="side-side">
        <div>
            <h2>Origin</h2>
            <p>
                Marrek Vaal was born in the lowest levels of Rivulus, where names were traded for debts. 
                His family disappeared into slavery before he could remember their faces. He survived by 
                working the transport tunnels beneath the city, learning routes no guard bothered to map. 
                In time, he stopped fearing chains and began studying how they worked.
            </p>

            <hr class="light-line">

            <h2>Current Role</h2>
            <p>
                Marrek controls much of Rivulus’ slave movement and labor distribution. He owns the holding 
                pits where the newly captured are broken in spirit. He negotiates quietly with Sora’s 
                officials when shipments are required. No one enters or leaves Rivulus in chains without his 
                knowledge.
            </p>

            <hr class="light-line">

            <h2>Reputation</h2>
            <p>
                He is known for never raising his voice. He is known for iron discipline and flawless logistics. 
                He is known for punishing betrayal publicly and efficiently. He is known for saying, “Chains are 
                simply misplaced trust.”
            </p>
        </div>
        <div class="image-container">
            <img src="{base}/main/vaelis/Marrek Vaal.png" alt="Marrek Vaal">
        </div>
    </section>

    <section class="Character-card">
        <div>
            <h2>Marrek Vaal - Chains & Flesh</h2>
            <p>Medium Humanoid (Any), Lawful Evil</p>

            <hr>

            <p>
                <b>Armor Class:</b> 18 (Reinforced Tactical Leather)<br>
                <b>Hit Points:</b> 225 (18d10 + 108)<br>
                <b>Speed:</b> 30 ft
            </p>

            <hr>

            <table>
                <thead>
                    <tr>
                        <th>STR</th>
                        <th>DEX</th>
                        <th>CON</th>
                        <th>INT</th>
                        <th>WIS</th>
                        <th>CHA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>18 (+4)</td>
                        <td>16 (+3)</td>
                        <td>18 (+4)</td>
                        <td>14 (+2)</td>
                        <td>15 (+2)</td>
                        <td>22 (+6)</td>
                    </tr>
                </tbody>
            </table>

            <hr>

            <p>
                <b>Saving Throws</b>: <br>
                STR +8 <br>
                CON +9 <br>
                Wis +7 <br>
                Cha +10
            </p>
            <p>
                <b>Skills:</b> <br>
                Intimidation +8 <br>
                Athletics +9 <br>
                Perception +7
            </p>
            <p>
                <b>Damage Resistances:</b> Bludgeoning, Piercing, and Slashing from nonmagical attacks
            </p>
            <p>
                <b>Darkvision:</b> 120 ft <br>
                <b>Passive Perception:</b> 17 <br>
                <b>Multiattack:</b> Marrek makes two melee attacks.
            </p>

            <hr>

            <h2>Broken Loyalty (Recharge 5-6)</h2>
            <p>
                Marrek targets one creature he can see within 30 ft. The target must make a DC 18 Wisdom 
                saving throw. <br>
            </p>
            <p><b>On a failure:</b></p>
            <ul>
                <li>The target is magically compelled until the end of its next turn.</li>
                <li>On its turn, it must use its action to attack the nearest creature other than Marrek.</li>
                <li>The attack deals full damage.</li>
            </ul>
            <p><b>On a success:</b></p>
            <ul>
                <li>The target takes half damage from its forced attack instead (representing partial mental 
                    resistance).</li>
            </ul>
            <p><b>On a natural 20:</b></p>
            <ul>
                <li>The target is completely unaffected and immune to Broken Loyalty for 24 hours.</li>
            </ul> <br>
            <p>This is a charm effect.</p>

            <hr class="light-line">

            <h2>Iron Dominion (Recharge 4–6)</h2>
            <p>
                Marrek conjures spectral chains around one creature within 40 ft. The target must make a Dexterity 
                saving throw against DC 18
            </p>
            <p><b>On a failure:</b></p>
            <ul>
                <li>The creature is Restrained until they succeed a DEX saving throw.</li>
                <li>At the end of each of its turns, it may repeat the save.</li>
            </ul>
            <p><b>On a success:</b></p>
            <ul>
                <li>The creature’s speed is halved until the end of its next turn.</li>
            </ul>
            <p>The chains are magical.</p>
        </div>

        <div>
            <hr class="light-line">

            <h2>Iron Commander</h2>
            <p>
                Marrek cannot be surprised. Whenever a creature within 10 ft. of him fails a saving throw, he gains 
                +2 AC until the start of his next turn.
            </p>
        </div>
    </section>
</main>