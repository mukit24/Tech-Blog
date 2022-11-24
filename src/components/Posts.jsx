import React from 'react'

const Posts = ({posts}) => {
  return (
    <>
    {posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </>
  )
}

export default Posts