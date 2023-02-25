import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['public/App.jsx'],
  bundle: true,
  loader: { '.js': 'jsx' },
  outfile: 'public/out.js',
})