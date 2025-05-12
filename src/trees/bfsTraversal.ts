/**
 * Interface for binary tree node
 */
export interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * BFS Traversal implementation for binary trees
 */
export class BFSTraversal {
    /**
     * Performs level order traversal (BFS)
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(w) where w is max width of tree
     * @param root - Root node of the tree
     * @param byLevel - If true, returns array of arrays where each sub-array represents a level
     * @returns Array of node values in level order, or array of arrays if byLevel is true
     */
    public levelOrder(root: TreeNode | null, byLevel: boolean = false): number[] | number[][] {
        if (!root) return byLevel ? [] : [];

        const result: number[][] = [];
        const queue: [TreeNode, number][] = [[root, 0]];

        while (queue.length > 0) {
            const [node, level] = queue.shift()!;

            if (result[level]) {
                result[level].push(node.value);
            } else {
                result[level] = [node.value];
            }

            if (node.left) queue.push([node.left, level + 1]);
            if (node.right) queue.push([node.right, level + 1]);
        }

        return byLevel ? result : result.flat();
    }
}
