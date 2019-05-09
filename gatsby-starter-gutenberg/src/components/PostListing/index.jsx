import React from "react";
import { Link } from "gatsby";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <React.Fragment key={post.id}>
            <h2>
              <Link to={post.path} key={post.title}>
                {post.title}
              </Link>
            </h2>
            <p>
              {post.excerpt}
              <Link
                to={post.path}
                style={{ textDecoration: "none", marginLeft: "5px" }}
              >
                Read ⟶
              </Link>
            </p>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default PostListing;
