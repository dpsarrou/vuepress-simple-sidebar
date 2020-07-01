/*!
 * Vuepress Simple Sidebar Plugin
 * Copyright 2020 Dimitrios Psarrou <dpsarrou@gmail.com>
 * Licensed under MIT (https://github.com/dpsarrou/vuepress-simple-sidebar/blob/master/LICENSE)
 */

/**
 * A structure that implements a nested tree of nodes and basic methods to traverse it.
 */
export class Tree {

    private tree = new Map<string, TreeNode>();

    /**
     * The character that denotes the nested path for the keys
     * Eg. for a key of the form parent/child/grandchild, '/' would
     * be defined as separator
     *
     * @param pathSeparator
     */
    constructor(private pathSeparator = '/') { }

    public toObject(): PojoNode[] {
        return [...this.tree.values()].map(node => this.convertToObject(node));
    }

    private convertToObject(node: TreeNode): PojoNode {
        return {
            path: node.path,
            value: node.value,
            children: [...node.children.values()].map(node => this.convertToObject(node))
        };
    }

    public map(callback: (node: TreeNode) => any): any[] {
        const nodes: any[] = [];
        this.tree.forEach(node => nodes.push(callback(node)));
        return nodes;
    }

    /**
     * Adds a node to the specified key
     *
     * @param key The key to add the node
     * @param value The value to store
     */
    public addNode(key: string, value: any) {
        const node = this.findInTree(key, this.tree);
        node.value = value;
        return node;
    }

    /**
     * Searches a tree and returns the node tree (existing or a new empty instance)
     * for the specified key.
     *
     * @param key
     * @param tree
     */
    private findInTree(key: string, tree: Map<string, any>, parent: TreeNode | undefined = undefined): TreeNode {
        const parts = key.split(this.pathSeparator);
        const name = String(parts.shift());
        const node = tree.get(name) || this.createNode(name);
        tree.set(name, node);
        if (parent) {
            node.path = this.joinPath(parent.path, name);
        }
        if (parts.length > 0 && parts[0] !== '') {
            return this.findInTree(parts.join(this.pathSeparator), node.children, node);
        }
        return node;
    }

    private createNode(path: string): TreeNode {
        return {
            path: path === '' ? this.pathSeparator : path,
            value: undefined,
            children: new Map<string, any>()
        }
    }

    private joinPath(path1: string, path2: string): string {
        return path1.replace(new RegExp(this.pathSeparator + '$'), '')
            + this.pathSeparator
            + path2.replace(new RegExp('^' + this.pathSeparator), '');
    }
}
export interface TreeNode {
    path: string;
    value: any;
    children: Map<string, TreeNode>;
}

interface PojoNode {
    path: string,
    value: any;
    children: object[];
}