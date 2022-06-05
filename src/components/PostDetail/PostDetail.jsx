import { Detail, Tag, CreatedBy } from "./PostDetailStyle";

import { Link } from "react-router-dom";

export function PostDetail({ post }) {
  return (
    <Detail>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <CreatedBy>{post.createdBy}</CreatedBy>
      <Tag>
        {post.tagsArray.map((tag) => (
          <p key={tag.id}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </Tag>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </Detail>
  );
}
