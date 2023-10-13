import { BrowserRouter} from 'react-router-dom'

import './App.css';
import { GNB } from './components/GNB';
import { MainBody } from './components/MainBody';
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
