import { describe, it, expect, beforeEach } from 'vitest';
import { BFSTraversal, TreeNode } from '../src/trees/bfsTraversal';

describe('BFSTraversal', () => {
    let bfs: BFSTraversal;
    let root: TreeNode;

    beforeEach(() => {
        bfs = new BFSTraversal();
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

    it('should perform level order traversal correctly', () => {
        expect(bfs.levelOrder(root)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should perform level-wise traversal when byLevel is true', () => {
        expect(bfs.levelOrder(root, true)).toEqual([[1], [2, 3], [4, 5]]);
    });

    it('should handle empty tree', () => {
        expect(bfs.levelOrder(null)).toEqual([]);
        expect(bfs.levelOrder(null, true)).toEqual([]);
    });

    it('should handle single node tree', () => {
        const singleNode: TreeNode = { value: 1, left: null, right: null };
        expect(bfs.levelOrder(singleNode)).toEqual([1]);
        expect(bfs.levelOrder(singleNode, true)).toEqual([[1]]);
    });
});
