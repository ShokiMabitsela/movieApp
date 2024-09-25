import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MoviePage from "./components/MoviePage";
import SeriesSection from "./components/SeriesPage";
import Footer from "./components/Footer";
import LatestMovies from "./components/LatestMovies";
import LatestSeries from "./components/LatestSeries";
import ViewMovie from "./routes/ViewMovie";
import EditMovie from "./routes/EditMovie";
import AddMovie from "./routes/AddMovie";
import EditSeries from "./routes/EditSeries";
import ViewSeries from "./routes/ViewSeries";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<><MoviePage /><SeriesSection /><Footer /></>} />
        <Route path="/LatestMovies" element={<><LatestMovies /><Footer /></>} />
        <Route path="/LatestSeries" element={<><LatestSeries /><Footer /></>} />
        <Route path="/ViewMovie/:id" element={<><ViewMovie /><Footer/></>} />
        <Route path="/EditMovie/:movieId" element={<><EditMovie /><Footer /></>} />
        <Route path="/AddMovie" element={<><AddMovie /><Footer /></>} />
        <Route path="/ViewSeries/:getId" element={<><ViewSeries /><Footer /></>} />
        <Route path="/EditSeries/:id" element={<><EditSeries /><Footer /></>} />
      </Routes>
    </Router>
  );
}
