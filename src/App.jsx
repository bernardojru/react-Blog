import { Container, Loading } from "./AppStyle.js";

import { AuthProvider } from "./context/AuthContext.jsx";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication.jsx";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { About } from "./pages/About/About";
import { Footer } from "./components/Footer/Footer.jsx";
import { CreatePost } from "./pages/CreatePost/CreatePost.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { Post } from "./pages/Post/Post.jsx";
import { EditPost } from "./pages/EditPost/EditPost.jsx";

export function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  if (loadingUser) {
    return <Loading>Carregando...</Loading>;
  }
  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/" />}
              />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}