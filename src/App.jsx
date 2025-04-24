import React, { use } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Detail from './components/Detail';
import Create from './components/Create';
import Edit from './components/Edit';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname, search } = useLocation();
  console.log(pathname, search);



  // ❌ Hide navbar on Detail page
  // const hideNavRoutes = ['/Detail/:id'];
  const isDetailPage = location.pathname.startsWith('/Detail');
  const isCreatePage = location.pathname.startsWith('/create');

  return (
    <div className='h-screen w-screen flex'>
      {(pathname !== '/' || search.length > 0) && (
        <button className='absolute top-[5%] left-[17%] text-red-500' onClick={() => navigate('/')}>
          Home
        </button>
      )}

      {!isDetailPage && !isCreatePage && <Nav />}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create/>} />
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/edit/:id' element = {<Edit/>} />
      </Routes>
    </div>
  );
};

export default App;
