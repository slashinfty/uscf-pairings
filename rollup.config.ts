import typescript from '@rollup/plugin-typescript';

const config = {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'uscf-pairings',
        entryFileNames: '[name]-umd.js'
    },
    plugins: [
        typescript({
            sourceMap: true
        })
    ]
};

export default config;