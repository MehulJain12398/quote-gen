import React,{ useState ,useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [quote,setQuote] = useState("")

  const fetchQuote = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => setQuote(res?.data?.slip?.advice))
  }

  useEffect(() => {
    fetchQuote()

  }, [])


  return (
    <div className="app">
      <div className='card'>
        <h1 className='heading'>{quote}</h1>
        <button className='button' onClick={fetchQuote}>
          <span>HIT ME !!!</span>
        </button>
      </div>
      
    </div>
  );
}

export default React.memo(App);
