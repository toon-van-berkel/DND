export type NodeId = string;

export type TreeNode = {
	id: NodeId;
	name: string;
	img: string;
	level: number;
};

export type Edge = { from: NodeId; to: NodeId };
