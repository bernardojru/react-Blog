import { PostContainer, Tags} from "./postStyle";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <PostContainer>
      {loading && <p>Carregando post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <Tags>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </Tags>
        </>
      )}
    </PostContainer>
  );
}
