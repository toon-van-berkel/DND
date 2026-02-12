<script lang="ts">
	import HierarchyTree from '$lib/components/HierarchyTree.svelte';
	import type { TreeNode, Edge } from '$lib/components/hierarchy-types';

	const nodes: TreeNode[] = [
		{ 
            id: '0a',
            img: 'main/vaelis/Aurelion Solace.png',
            name: 'Aurelion Solace',
            level: 0 
        },
		{ 
            id: '0b',
            img: 'main/vaelis/Aurelion the Accreted.png',
            name: 'Aurelion the Accreted',
            level: 0 
        },

		{
            id: '1a',
            img: 'main/vaelis/Marrek Vaal.png',
            name: 'Marrek Vaal',
            level: 1
        },
		{
            id: '1b',
            img: 'main/vaelis/Iscara Morn.png',
            name: 'Iscara Morn',
            level: 1
        },
		{
            id: '1c',
            img: 'main/vaelis/Helior Quen.png',
            name: 'Helior Quen',
            level: 1
        },
		{
            id: '1d',
            img: 'main/vaelis/Veska Drin.png',
            name: 'Veska Drin',
            level: 1
        },
		{
            id: '1e',
            img: 'main/vaelis/Noct Sel.png',
            name: 'Noct Sel',
            level: 1
        },
        {
            id: '1f',
            img: 'main/vaelis/Maera Kull.png',
            name: 'Maera Kull',
            level: 1
        },
        {
            id: '1g',
            img: 'main/vaelis/Ryn Locke.png',
            name: 'Ryn Locke',
            level: 1
        },
        {
            id: '1h',
            img: 'main/vaelis/Eldra Veil.png',
            name: 'Eldra Veil',
            level: 1
        },
        {
            id: '2a',
            img: 'main/vaelis/Eldra Veil.png',
            name: 'Naam',
            level: 2
        }
		// {
        //     id: '',
        //     img: '',
        //     name: '',
        //     level: 1
        // }
	];

	const edges: Edge[] = [
        {from: '0a', to: '1e'},
        {from: '0b', to: '1g'}
    ];
</script>

<HierarchyTree {nodes} {edges} />