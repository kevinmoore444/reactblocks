import './App.css';
import Advertisement from './components/advertisement';
import Header from './components/header';
import Main from './components/main';
import Navigation from './components/navigation';
import SubContents from './components/subcontents';

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
    </div>
  );
}

export default App;
