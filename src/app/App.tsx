import { Footer, Header, Profile } from '../components/';
import { Route, Routes } from 'react-router-dom';
import { Login, MainPage, NotFound, Register } from '../pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
