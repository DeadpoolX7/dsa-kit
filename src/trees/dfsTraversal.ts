/**
 * Interface for binary tree node
 */
export interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * DFS Traversal implementation for binary trees
 * Includes inorder, preorder, and postorder traversals
 */
export class DFSTraversal {
    /**
     * Performs inorder traversal (Left-Root-Right)
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(h) where h is height of tree
     * @param root - Root node of the tree
     * @returns Array of node values in inorder
     */
    public inOrder(root: TreeNode | null): number[] {
        const result: number[] = [];
        
        const traverse = (node: TreeNode | null) => {
            if (node === null) return;
            
            traverse(node.left);
            result.push(node.value);
            traverse(node.right);
        };
        
        traverse(root);
        return result;
    }

    /**
     * Performs preorder traversal (Root-Left-Right)
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(h) where h is height of tree
     * @param root - Root node of the tree
     * @returns Array of node values in preorder
     */
    public preOrder(root: TreeNode | null): number[] {
        const result: number[] = [];
        
        const traverse = (node: TreeNode | null) => {
            if (node === null) return;
            
            result.push(node.value);
            traverse(node.left);
            traverse(node.right);
        };
        
        traverse(root);
        return result;
    }

    /**
     * Performs postorder traversal (Left-Right-Root)
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(h) where h is height of tree
     * @param root - Root node of the tree
     * @returns Array of node values in postorder
     */
    public postOrder(root: TreeNode | null): number[] {
        const result: number[] = [];
        
        const traverse = (node: TreeNode | null) => {
            if (node === null) return;
            
            traverse(node.left);
            traverse(node.right);
            result.push(node.value);
        };
        
        traverse(root);
        return result;
    }
}
