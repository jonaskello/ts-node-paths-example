# ts-node-paths-example

Small example of using tsconfig paths with ts-node.

## How to setup to work with patched ts-node

```
cd path/to/my/workdir
git clone https://github.com/jonaskello/ts-node-paths-example.git
git clone https://github.com/jonaskello/ts-node.git
cd ts-node
npm install
npm link
cd ../ts-node-paths-example
npm install
npm link ts-node
```

## How to run

```
npm start
```
