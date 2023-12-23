import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
        
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<>Hello</>} />
          <Route path="/profile" element={<>profile</>} />
          <Route path="/search" element={<>search</>} />
          <Route path="/trending" element={<>trending</>} />
          <Route path="/create" element={<>create</>} />
          <Route path="/*" element={<>Not available</>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
