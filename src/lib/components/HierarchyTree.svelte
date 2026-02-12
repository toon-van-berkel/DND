<script lang="ts">
    import { base } from '$app/paths';
	import { onMount, onDestroy, tick, createEventDispatcher } from 'svelte';
	import type { TreeNode, Edge } from './hierarchy-types';

	export let nodes: TreeNode[] = [];
	export let edges: Edge[] = [];

	export let minCardWidth = 210; // px
	export let gap = 16; // px
	export const hideLinesBelow = 520; // px

	const dispatch = createEventDispatcher<{ nodeClick: { node: TreeNode } }>();

	const levels = () =>
		Array.from(new Set(nodes.map((n) => n.level))).sort((a, b) => a - b);

	const nodesByLevel = (lvl: number) => nodes.filter((n) => n.level === lvl);

	let container: HTMLDivElement | null = null;
	let svg: SVGSVGElement | null = null;

	type Line = { x1: number; y1: number; x2: number; y2: number };
	let lines: Line[] = [];

	let ro: ResizeObserver | null = null;

	function elByNodeId(id: string) {
		return container?.querySelector<HTMLElement>(`[data-node="${id}"]`) ?? null;
	}

	function centerBottom(el: HTMLElement, relativeTo: HTMLElement) {
		const a = el.getBoundingClientRect();
		const r = relativeTo.getBoundingClientRect();
		return { x: a.left - r.left + a.width / 2, y: a.top - r.top + a.height };
	}

	function centerTop(el: HTMLElement, relativeTo: HTMLElement) {
		const a = el.getBoundingClientRect();
		const r = relativeTo.getBoundingClientRect();
		return { x: a.left - r.left + a.width / 2, y: a.top - r.top };
	}

	async function recompute() {
		await tick();
		if (!container || !svg) return;

		const r = container.getBoundingClientRect();
		svg.setAttribute('width', String(r.width));
		svg.setAttribute('height', String(r.height));
		svg.setAttribute('viewBox', `0 0 ${r.width} ${r.height}`);

		const next: Line[] = [];

		for (const e of edges) {
			const fromEl = elByNodeId(e.from);
			const toEl = elByNodeId(e.to);
			if (!fromEl || !toEl) continue;

			const p1 = centerBottom(fromEl, container);
			const p2 = centerTop(toEl, container);

			next.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
		}

		lines = next;
	}

	$: nodes, edges, recompute();

	onMount(() => {
		recompute();

		const onResize = () => recompute();
		window.addEventListener('resize', onResize);

		ro = new ResizeObserver(() => recompute());
		if (container) ro.observe(container);

		return () => window.removeEventListener('resize', onResize);
	});

	onDestroy(() => {
		ro?.disconnect();
	});
</script>

<div
	class="hierarchy"
	bind:this={container}
	style={`--minw:${minCardWidth}px; --gap:${gap}px;`}
>
	<svg class="lines" bind:this={svg} aria-hidden="true">
		{#each lines as l}
			<path
				d={`M ${l.x1} ${l.y1} L ${l.x1} ${(l.y1 + l.y2) / 2} L ${l.x2} ${(l.y1 + l.y2) / 2} L ${l.x2} ${l.y2}`}
				class="connector"
			/>
		{/each}
	</svg>

	{#each levels() as lvl}
		<section class="level lvl-{lvl}">
			<slot name="levelLabel" {lvl}>
				<div class="levelLabel">Level {lvl}</div>
			</slot>

			<div class="row">
				{#each nodesByLevel(lvl) as n (n.id)}
					<button
						type="button"
						class="card"
						data-node={n.id}
						onclick={() => dispatch('nodeClick', { node: n })}
					>
						<slot name="card" {n}>
                            <img src="{base}/{n.img}" alt="{n.name}">
							<h3>{n.name}</h3>
						</slot>
					</button>
				{/each}
			</div>
		</section>
	{/each}
</div>

<style>
	.hierarchy {
		position: relative;
		padding: 24px;
		display: grid;
		gap: 28px;
		background: #fff;
		border-radius: 16px;
	}

	.lines {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 1;
	}

	.connector {
		fill: none;
		stroke: rgba(0, 0, 0, 0.55);
		stroke-width: 2.2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.level {
		position: relative;
		z-index: 2;
	}

	.levelLabel {
		font-size: 12px;
		opacity: 0.6;
		margin-bottom: 10px;
	}

	.row {
		display: grid;
		gap: var(--gap);
		grid-template-columns: repeat(auto-fit, minmax(var(--minw), 1fr));
		align-items: start;
        justify-items: start;
	}

	.card {
		text-align: left;
        max-width: 200px;
		width: 100%;
		background: #fff7f7;
		border: 2px solid rgba(0, 0, 0, 0.12);
		border-radius: 16px;
		padding: 14px 14px 12px;
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
		cursor: pointer;
	}

	.card:focus-visible {
		outline: 3px solid rgba(0, 0, 0, 0.25);
		outline-offset: 3px;
	}

	.card h3 {
		margin: 0 0 6px 0;
		font-size: 18px;
		line-height: 1.1;
	}
    .card img {
        width: 100%;
    }

    .lvl-0 {
        background-color: #FF000060;
    }
    .lvl-1 {
        background-color: #FF000040;
    }

	@media (max-width: 520px) {
		.lines {
			display: none;
		}
	}
</style>
