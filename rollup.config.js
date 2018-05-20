import buble from 'rollup-plugin-buble';

export default {
    input: 'lib/tsriot.js',
    external: ['riot'],
    output: {
        file: 'lib/index.js',
        format: 'cjs',
        globals: { 'riot': 'riot' },
    },
    plugins: [
        buble()
    ]
};
