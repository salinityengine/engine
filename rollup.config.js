import cleanup from 'rollup-plugin-cleanup';                    // Remove comments, supports sourcemap
import json from '@rollup/plugin-json';                         // Import JSON
import terser from '@rollup/plugin-terser';                     // Remove comments, minify
import { visualizer } from 'rollup-plugin-visualizer';          // Visualize

import pkg from './package.json' with { type: "json" };

function header() {
    return {
        renderChunk(code) {
            return `/**
 * @description Salinity Engine
 * @about       Easy to use JavaScript game engine.
 * @author      Stephens Nunnally <@stevinz>
 * @version     v${pkg.version}
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/engine
 */
${code}`;
        }
    };
}

const builds = [

    { // Standard Build
        input: './src/Salinity.js',
        treeshake: false,

        plugins: [
            json(),
            cleanup({
                comments: "none",
                extensions: [ "js", "ts" ],
                sourcemap: false,
            }),
        ],

        output: [{
            format: 'esm',
            file: './build/salinity.module.js',
            sourcemap: false,
            plugins: [
                header(),
            ],
        }],
    },

    { // Minified
        input: './src/Salinity.js',
        treeshake: false,

        plugins: [
            json(),
            visualizer(),
        ],

        output: [{
            format: 'esm',
            file: './build/salinity.min.js',
            sourcemap: false,
            plugins: [
                terser({ format: { comments: false } }),
                header(),
            ],
        }],
    },

];

export default builds;
