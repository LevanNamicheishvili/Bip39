import { defineConfig } from 'tsup';

export default defineConfig({
    format: ['cjs', 'esm'],
    dts: true,
    entryPoints: ['src/index.ts'],
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
});
