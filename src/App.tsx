import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import AirportDetailPage from "./pages/AirportDetailPage";
import Navigation from "../src/components/Navigation";
import {useAppDispatch} from "./hook/redux";
import {fetchHandBooks} from "./store/actions/handBookActions";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchHandBooks())
    }, [dispatch]);

  return (
    <div>
        <Navigation />
      <Routes>
          <Route path="/" element={ <MainPage/> } />
          <Route path="/auth" element={ <AuthPage/> } />
          <Route path="/airport/:id" element={ <AirportDetailPage/> } />
      </Routes>
    </div>
  );
}

export default App;
