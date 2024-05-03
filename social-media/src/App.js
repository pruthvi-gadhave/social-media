import { useState } from 'react';
import './App.css';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import Header from './components/Header';
import Postlist from './components/PostList';
import Sidebar from './components/Sidebar';

function App() {


  const [selectedTab, setSelectedTab] = useState("Home");


  return (
    <div className="App">
      <div className='d-flex '>
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='contents'>
          <Header />
          {
            selectedTab === "Home" ? <Postlist/>  : <CreatePost /> 
          }

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
