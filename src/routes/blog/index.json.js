import posts from './_posts.js'
import marked from 'marked'
import path from 'path'
import fs from 'fs'

function getAllPosts(filesPath) {
	const data = fs.readdirSync(filesPath).map(fileName => {
		const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8')
		const renderer = new marked.Renderer()
		const html = marked(post, { renderer })
		return {
			title: 'A new post',
			slug: 'a-new-post',
			html,
		}
	})
	return data
}

export function get(req, res) {
	const posts = getAllPosts('src/posts')

	res.end(JSON.stringify(posts))
}
