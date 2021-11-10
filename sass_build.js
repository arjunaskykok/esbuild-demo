const sassPlugin = require("esbuild-plugin-sass");

require("esbuild").build({
  entryPoints: ["style.scss"],
  outfile: "bundle.css",
  bundle: true,
  plugins: [sassPlugin()]
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));
