import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './routes/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
