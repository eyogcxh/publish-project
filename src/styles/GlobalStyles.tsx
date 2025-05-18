import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .ant-layout-header {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 24px;
    background: #001529;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }

  .ant-layout-footer {
    text-align: center;
    background: #f0f2f5;
    padding: 24px 50px;
  }

  .ant-layout-content {
    flex: 1;
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    border-radius: 2px;
  }

  .dashboard-card {
    margin-bottom: 24px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .dashboard-statistic {
    padding: 20px;
  }

  .chart-container {
    padding: 16px;
    background: #fff;
    border-radius: 2px;
  }
`;