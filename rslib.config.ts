import { defineConfig } from "@rslib/core";
import { pluginVue } from "@rsbuild/plugin-vue";
import { pluginVueJsx } from "@rsbuild/plugin-vue-jsx";
import { pluginBabel } from "@rsbuild/plugin-babel";

export default defineConfig({
    source: {
        entry: {
            index: ["./src/**"],
        },
    },
    lib: [
        {
            bundle: false,
            dts: true,
            format: "esm",
        },
    ],
    output: {
        target: "web",
    },
    plugins: [
        pluginBabel({
            include: /\.(?:jsx|tsx)$/,
        }),
        pluginVue(),
        pluginVueJsx(),
    ],
});
