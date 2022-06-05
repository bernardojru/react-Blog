import { Container, Form, Posts, Button } from "./HomeStyle";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { PostDetail } from "../../components/PostDetail/PostDetail";

export function Home() {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }

  }
  return (
    <Container>
      <h1>Veja os nossos posts mais recentes</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </Form>
      <Posts>
        {loading && <p>Carregando...</p>}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className="noposts">
            <p>Não foram encontrados posts</p>
            <Button to="/posts/create">Criar primeiro post</Button>
          </div>
        )}
      </Posts>
    </Container>
  );
}
