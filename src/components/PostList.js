import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'

const Wrapper = styled.div`
  .posts-list {
    list-style: none;
    margin-left: 0;
  }

  .post-link {
    text-decoration: none;
  }

  .post-link:hover {

    h3{
      text-decoration: underline;
      color: hsl(0, 0%, 10%);
    }

  }
`

const PostList = ({ posts }) => (
  <Wrapper>
    <h2>Posts</h2>
    <ol className="posts-list">
      {posts.filter(post => post.node.frontmatter.live).map(post => {
        const { path, title } = post.node.frontmatter
        return (
          <li key={path}>
            <Link to={path} className="post-link">
              <h3>{title}</h3>
            </Link>
          </li>
        )
      })}
    </ol>
  </Wrapper>
)

export default PostList
