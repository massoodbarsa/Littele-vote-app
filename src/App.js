import './App.scss';
import LeftComp from './components/LeftComp'
import MiddleComp from './components/MiddleComp'
import RightComp from './components/RightComp'
import VoteContextProvider from './context/voteContextProvider'

function App() {
  return (
    <div className="App">
      <VoteContextProvider>
        <LeftComp />
        <MiddleComp />
        <RightComp />
      </VoteContextProvider>
    </div>
  );
}

export default App;
