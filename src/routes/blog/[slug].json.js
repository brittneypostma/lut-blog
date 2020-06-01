import posts from './_posts.js'
import marked from 'marked'
import path from 'path'
import fs from 'fs'

// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params

	// if (lookup.has(slug)) {
	res.writeHead(200, {
		'Content-Type': 'application/json',
	})

	const post = fs.readFileSync(
		path.resolve('src/posts', 'first-post.md'),
		'utf-8'
	)
	const renderer = new marked.Renderer()
	const html = marked(post, { renderer })
	const data = {
		title: 'A new post',
		slug: 'a-new-post',
		html,
	}

	res.end(JSON.stringify(data))
	// } else {
	// 	res.writeHead(404, {
	// 		'Content-Type': 'application/json'
	// 	});

	// 	res.end(JSON.stringify({
	// 		message: `Not found`
	// 	}));
	// }
}
