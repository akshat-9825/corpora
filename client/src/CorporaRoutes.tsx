import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import HomePage from "./pages/HomePage";
import Layout from "./layout";

function CorporaRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<>profile</>} />
          <Route path="/search" element={<>search</>} />
          <Route path="/trending" element={<>trending</>} />
          <Route path="/create" element={<>create</>} />
          <Route path="/*" element={<>Not available</>} />
          <Route path="/login" element={<Authentication type="login" />} />
          <Route path="/signup" element={<Authentication type="signup" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default CorporaRoutes;
