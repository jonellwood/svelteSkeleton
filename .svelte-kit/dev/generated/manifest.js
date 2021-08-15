const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/timeline.svelte"),
	() => import("../../../src/routes/about.svelte"),
	() => import("../../../src/routes/posts/__layout.svelte"),
	() => import("../../../src/routes/posts/index.svelte"),
	() => import("../../../src/routes/posts/about.svelte"),
	() => import("../../../src/routes/posts/[slug].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/timeline.svelte
	[/^\/timeline\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/posts/index.svelte
	[/^\/posts\/?$/, [c[0], c[5], c[6]], [c[1]]],

	// src/routes/posts/post.json.js
	[/^\/posts\/post\.json$/],

	// src/routes/posts/about.svelte
	[/^\/posts\/about\/?$/, [c[0], c[5], c[7]], [c[1]]],

	// src/routes/posts/[slug].svelte
	[/^\/posts\/([^/]+?)\/?$/, [c[0], c[5], c[8]], [c[1]], (m) => ({ slug: d(m[1])})]
];

export const fallback = [c[0](), c[1]()];