import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";

const env = process.env.NODE_ENV;
const config = {
  input: "src/index.js",
  plugins: []
};

if (env === "es" || env === "cjs") {
  config.output = { format: env };
  config.external = ["react", "prop-types"];
  config.plugins.push(
    babel({
      plugins: ["external-helpers"]
    })
  );
}

if (env === "development" || env === "production") {
  config.output = { format: "umd" };
  config.name = "RWSIndicator";
  config.plugins.push(
    commonjs({
      include: [
        "node_modules/react/**",
        "node_modules/prop-types/**",
        "node_modules/fbjs/**",
        "node_modules/object-assign/**"
      ]
    }),
    nodeResolve({
      jsnext: true
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env)
    })
  );
}

if (env === "production") {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
