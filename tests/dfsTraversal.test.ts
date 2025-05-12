import { describe, it, expect, beforeEach } from 'vitest';
import { DFSTraversal, TreeNode } from '../src/trees/dfsTraversal';

describe('DFSTraversal', () => {
    let dfs: DFSTraversal;
    let root: TreeNode;

    beforeEach(() => {
        dfs = new DFSTraversal();
        // Create a test tree:
        //       1
        //      / \
        //     2   3
        //    / \
        //   4   5
        root = {
            value: 1,
            left: {
                value: 2,
                left: { value: 4, left: null, right: null },
                right: { value: 5, left: null, right: null }
            },
            right: {
                value: 3,
                left: null,
                right: null
            }
        };
    });

    it('should perform inorder traversal correctly', () => {
        expect(dfs.inOrder(root)).toEqual([4, 2, 5, 1, 3]);
    });

    it('should perform preorder traversal correctly', () => {
        expect(dfs.preOrder(root)).toEqual([1, 2, 4, 5, 3]);
    });

    it('should perform postorder traversal correctly', () => {
        expect(dfs.postOrder(root)).toEqual([4, 5, 2, 3, 1]);
    });

    it('should handle empty tree', () => {
        expect(dfs.inOrder(null)).toEqual([]);
        expect(dfs.preOrder(null)).toEqual([]);
        expect(dfs.postOrder(null)).toEqual([]);
    });
});
