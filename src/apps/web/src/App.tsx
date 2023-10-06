import { BrowserRouter} from 'react-router-dom'

import './App.css';
import { MainBody } from './components/MainBody';
import { GNB } from './components/GNB';
import { Layout } from './pages/Layout';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <GNB/>
        <MainBody/>
      </Layout>
    </BrowserRouter>
  );
};
