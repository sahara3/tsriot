import buble from 'rollup-plugin-buble';

export default {
    input: 'lib/tsriot.js',
    external: ['riot'],
    globals: {'riot': 'riot'},
    output: {file: 'lib/index.js', format: 'cjs'},
    plugins: [
        buble()
    ]
};
