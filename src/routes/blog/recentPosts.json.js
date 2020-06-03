import fs from 'fs'
import path from 'path'
import marked from 'marked'
import grayMatter from 'gray-matter'

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).map(fileName => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), 'utf-8')

    // Parse Front matter from string
    const { data, content } = grayMatter(post)

    // Turns markdown into html
    const renderer = new marked.Renderer()
    const html = marked(content, { renderer })

    // Builds data
    return {
      html,
      slug: fileName.substring(0, fileName.length - 3),
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
  const [one, two, three] = sortPosts(posts)

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(JSON.stringify([one, two, three]))
}
