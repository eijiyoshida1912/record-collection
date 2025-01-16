import { useEffect } from 'react'
import './App.css'
import { getRecords } from './services/firebase';
import AddRecordForm from './components/AddRecordForm';

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
      <AddRecordForm />
    </>
  )
}

export default App
