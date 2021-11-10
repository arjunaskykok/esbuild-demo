require("esbuild").build({
  entryPoints: ["input_typescript.ts"],
  outfile: "output.js",
  bundle: true,
  loader: {".ts": "ts"}
})
.then(() => console.log("⚡ Done"))
.catch(() => process.exit(1));
