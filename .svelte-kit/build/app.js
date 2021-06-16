import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<!-- <link rel=\"icon\" href=\"https://fav.farm/💩\" /> -->\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-6779bf5e.js",
			css: ["/./_app/assets/start-8077b9bf.css"],
			js: ["/./_app/start-6779bf5e.js","/./_app/chunks/vendor-55eff8e9.js","/./_app/chunks/preload-helper-9f12a5fd.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/about.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/posts\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/posts/__layout.svelte", "src/routes/posts/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/posts\/post\.json$/,
						params: empty,
						load: () => import("../../src/routes/posts/post.json.js")
					},
		{
						type: 'page',
						pattern: /^\/posts\/about\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/posts/__layout.svelte", "src/routes/posts/about.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/posts\/([^/]+?)\/?$/,
						params: (m) => ({ slug: d(m[1])}),
						a: ["src/routes/__layout.svelte", "src/routes/posts/__layout.svelte", "src/routes/posts/[slug].svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request))
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/about.svelte": () => import("../../src/routes/about.svelte"),"src/routes/posts/__layout.svelte": () => import("../../src/routes/posts/__layout.svelte"),"src/routes/posts/index.svelte": () => import("../../src/routes/posts/index.svelte"),"src/routes/posts/about.svelte": () => import("../../src/routes/posts/about.svelte"),"src/routes/posts/[slug].svelte": () => import("../../src/routes/posts/[slug].svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-b1aaf5a8.js","css":["/./_app/assets/pages/__layout.svelte-7c1012c9.css"],"js":["/./_app/pages/__layout.svelte-b1aaf5a8.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/__error.svelte":{"entry":"/./_app/pages/__error.svelte-902d2231.js","css":[],"js":["/./_app/pages/__error.svelte-902d2231.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-afa21264.js","css":[],"js":["/./_app/pages/index.svelte-afa21264.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-b84632ba.js","css":[],"js":["/./_app/pages/about.svelte-b84632ba.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/posts/__layout.svelte":{"entry":"/./_app/pages/posts/__layout.svelte-657524a2.js","css":[],"js":["/./_app/pages/posts/__layout.svelte-657524a2.js","/./_app/chunks/goodbye-31dbaa29.js","/./_app/chunks/vendor-55eff8e9.js","/./_app/chunks/hello-69c3ca6b.js","/./_app/chunks/started-0599db51.js"],"styles":null},"src/routes/posts/index.svelte":{"entry":"/./_app/pages/posts/index.svelte-2b52bcc1.js","css":[],"js":["/./_app/pages/posts/index.svelte-2b52bcc1.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/posts/about.svelte":{"entry":"/./_app/pages/posts/about.svelte-80837ddb.js","css":[],"js":["/./_app/pages/posts/about.svelte-80837ddb.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null},"src/routes/posts/[slug].svelte":{"entry":"/./_app/pages/posts/[slug].svelte-ff9cf9bb.js","css":[],"js":["/./_app/pages/posts/[slug].svelte-ff9cf9bb.js","/./_app/chunks/preload-helper-9f12a5fd.js","/./_app/chunks/vendor-55eff8e9.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"","assets":"/."} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}