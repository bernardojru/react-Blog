import { DashboardContainer,Button, PostHeader,PostRow } from "./DashboardStyle";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

export function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  const {deleteDocument} = useDeleteDocument('posts')


  if(loading) {
      return <p>Carregando...</p>
  }
  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      <div>
        {posts && posts.length === 0 ? (
          <div>
            <p>Não foram encontrados posts</p>
            <Button to="/posts/create">Criar primeiro post</Button>
          </div>
        ) : (
          <>
            <PostHeader>
                <span>Título</span>
                <span>Ações</span>
            </PostHeader>
            {posts &&
              posts.map((post) => (
                <PostRow key={post.id}>
                  <p>{post.title}</p>
                  <div>
                    <Link to={`/posts/${post.id}`}>Ver</Link>
                    <Link to={`/posts/edit/${post.id}`}>Editar</Link>
                    <button onClick={() => deleteDocument(post.id)}>Excluir</button>
                  </div>
                </PostRow>
              ))}
          </>
        )}
      </div>
      <div></div>
    </DashboardContainer>
  );
}