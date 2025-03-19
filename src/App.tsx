// Font imports
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';

import ContentWidthContainer from './components/layout/ContentWidthContainer';

import './App.css';
import TransactionsPage from './pages/TransactionsPage';

const App = () => {
  return (
    <ContentWidthContainer>
      <main className="content">
        <h1>Thriday Code Challenge</h1>
        <section>
          <TransactionsPage/>
        </section>
      </main>
    </ContentWidthContainer>
  );
};

export default App;
