import { useEffect } from 'react'
import './App.css'
import { getRecords } from './services/firebase';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const records = await getRecords();
      console.log(records);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>My Record List</h1>
    </>
  )
}

export default App
