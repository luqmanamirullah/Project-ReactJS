import { Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/Home";
import PostRoutes from "./PostRoutes";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { DataProvider } from "./context/DataContext";


function App() {
  return (
    <>
    <DataProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/*" element={<PostRoutes/>}/>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DataProvider>
    </>
  );
}

export default App;
