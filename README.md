# DSA-Kit

A comprehensive TypeScript library providing efficient implementations of common Data Structures and Algorithms.

## Features

- 🚀 Efficient implementations of classic algorithms
- 📦 Written in TypeScript with full type support
- ✅ Thoroughly tested with Vitest
- 📚 Well-documented API
- 🎯 Zero dependencies

## Installation

```bash

# Using bun
bun add dsa-kit

# Using npm
npm install dsa-kit

# Using pnpm
pnpm add dsa-kit

# Using yarn
yarn add dsa-kit

```

## Development

This project is developed using [Bun](https://bun.sh), a fast all-in-one JavaScript runtime and toolkit.

### Setting Up Development Environment

```bash
# Install bun (if you haven't already)
curl -fsSL https://bun.sh/install | bash

# Clone the repository
git clone https://github.com/yourusername/dsa-kit

# Install dependencies
bun install

# Run tests
bun test

# Run tests in watch mode
bun test --watch
```

### Development Scripts

```bash
# Type checking
bun run typecheck

# Run tests with coverage
bun test --coverage

# Build the package
bun run build
```

## Available Algorithms

### Sorting Algorithms

#### Merge Sort
```typescript
import { mergeSort } from 'dsa-kit';

// Ascending order (default)
const ascArray = mergeSort([5, 2, 8, 1, 9]);
console.log(ascArray); // [1, 2, 5, 8, 9]

// Descending order
const descArray = mergeSort([5, 2, 8, 1, 9], 'desc');
console.log(descArray); // [9, 8, 5, 2, 1]
```

### Tree Traversals

#### Depth-First Search (DFS)
```typescript
import { DFSTraversal, TreeNode } from 'dsa-kit';

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
};

const dfs = new DFSTraversal();

// Different traversal methods
const inorderResult = dfs.inOrder(tree);    // [2, 1, 3]
const preorderResult = dfs.preOrder(tree);  // [1, 2, 3]
const postorderResult = dfs.postOrder(tree); // [2, 3, 1]
```

#### Breadth-First Search (BFS)
```typescript
import { BFSTraversal, TreeNode } from 'dsa-kit';

const bfs = new BFSTraversal();

// Flat level-order traversal
const flatResult = bfs.levelOrder(tree);
console.log(flatResult); // [1, 2, 3]

// Level-wise traversal
const levelWiseResult = bfs.levelOrder(tree, true);
console.log(levelWiseResult); // [[1], [2, 3]]
```

## API Reference

### Sorting

#### `mergeSort(arr: number[], order?: 'asc' | 'desc'): number[]`
- `arr`: Array of numbers to sort
- `order`: Optional sorting order ('asc' or 'desc')
- Returns: Sorted array
- Time Complexity: O(n log n)
- Space Complexity: O(n)

### Tree Traversals

#### DFS Methods
- `inOrder(root: TreeNode | null): number[]`
- `preOrder(root: TreeNode | null): number[]`
- `postOrder(root: TreeNode | null): number[]`

#### BFS Methods
- `levelOrder(root: TreeNode | null, byLevel?: boolean): number[] | number[][]`
  - `byLevel`: If true, returns array of arrays where each sub-array represents a tree level

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please:
1. Check the [GitHub Issues](https://github.com/DeadpoolX7/dsa-kit/issues)
2. Review the [documentation](https://github.com/DeadpoolX7/dsa-kit/wiki)
3. Submit a new issue if needed

If you found this package helpful, please give it a ⭐️ on [GitHub](https://github.com/DeadpoolX7/dsa-kit)!

## License

MIT License - see the [LICENSE](LICENSE) file for details.
