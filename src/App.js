import './App.scss';
import Header from './components/Header';
import LeftComp from './components/LeftComp'
import MiddleComp from './components/MiddleComp'
import RightComp from './components/RightComp'
import VoteContextProvider from './context/voteContextProvider'

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <VoteContextProvider>
          <LeftComp />
          <MiddleComp />
          <RightComp />
        </VoteContextProvider>
      </div></>
  );
}

export default App;
