// import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ReactGA from 'react-ga';

import "./assets/style/reset.scss";
import "./assets/style/common.scss";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID as string; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

const App = () => {
    // RouteChangeTracker();

	  return (
		  <div className='App'>
          <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/product/:productId" element={<Product />}></Route>
                  {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
                  <Route path="*" element={<NotFound />}></Route>
              </Routes>
              <Footer />
          </BrowserRouter>
      </div>
	  );
};

export default App;
