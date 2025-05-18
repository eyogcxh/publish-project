import React from 'react';

import { ConfigProvider, Spin } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import { Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import ExamplePage from '@/pages/example/ExamplePage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors?.background || '#f5f5f5'};
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  h1 {
    font-size: 72px;
    margin-bottom: 16px;
  }
  
  p {
    font-size: 24px;
  }
`;

const App: React.FC = () => {
  return (
    <ConfigProvider locale={ruRU}>
      <AppContainer>
        <React.Suspense fallback={<Spin />}>
          <Routes>
            {/* Публичные маршруты для авторизации */}
            <Route path="/auth/*" element={<ExamplePage />} />
            <Route path="*" element={
              <NotFoundContainer>
                <h1>404</h1>
                <p>Страница не найдена</p>
              </NotFoundContainer>
            } />
          </Routes>
        </React.Suspense>
      </AppContainer>
    </ConfigProvider>
  );
};

export default App;