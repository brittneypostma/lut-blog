import marked from 'marked'
import grayMatter from 'gray-matter'
import path from 'path'
import fs from 'fs'

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).map(fileName => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8')
    // Parse front matter from string
    const { data, content } = grayMatter(post)
    // Turns md into html
    const renderer = new marked.Renderer()
    const html = marked(content, { renderer })
    // Builds data
    return {
      html,
      ...data
    }
  })
  return data
}

function sortPosts(posts) {
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.date)
    const date2 = new Date(post2.date)
    return date2 - date1
  })
}

export function get(req, res) {
  const posts = getAllPosts('src/posts')
  const sortedPosts = sortPosts(posts)
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(JSON.stringify(sortedPosts))
}
