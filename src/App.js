import React, {useState} from 'react'
import Loading from './components/Loading';
import Cursor from './components/sub/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className=' lg:overflow-hidden md:overflow-x-hidden' >
     
      {/* <Loading setLoadingComplete={handleLoadingComplete} /> */}
      {/* <Cursor /> */}
     
       {loading ? (
        <Loading setLoadingComplete={handleLoadingComplete} />
      ) : (
        <Cursor />
      )}
    </div>
  );
}

export default App;
