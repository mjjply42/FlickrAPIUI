import React, { useState, useEffect } from 'react';
import './App.css';
import { MainContainer,
          Navigation,
          PhotoGrid, } from './styles/grid';
import { Photos } from './components/logic/photoLogic.js';
import { Nav } from './components/logic/navLogic.js';
import { buttonSet } from './config/buttonSet';
import { getRecentPhotos, getPhotoLink } from './utils/photos';

function App() {
  const [photoLinks, updateLinks] = useState([])
  const [loading, updateLoading] = useState(true)

  const getButtonByID = (id) => {
    let selected = {};
    buttonSet.forEach((button, index) => {
      if (button['id'] === id)
        selected = button;
    })
    return (selected);
  }

  const getEachLink = async (result, obj) => {
    let Promises = [];

    Promises = result['photos']['photo'].map(async(item, index) => {
      let res = await getPhotoLink(item['id'], obj['signal']);
      return res
    })
    Promise.all(Promises).then((completed) => {
      updateLinks(completed);
      updateLoading(false)
    })
  }


  const getPhotos = async (id) => {
    updateLoading(true)
    let buttonObj = getButtonByID(id);
    let result = await getRecentPhotos();
    await getEachLink(result, buttonObj);
  }

  useEffect(() => {
      getPhotos(0);
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <MainContainer className="grid-container">
          <Navigation className ="grid-item">
            <Nav newSelection={getPhotos} loading={loading}/>
          </Navigation>
          <PhotoGrid className ="grid-item">
            <Photos photos={photoLinks} loading={loading}/>
          </PhotoGrid>
          
        </MainContainer>
      </header>
    </div>
  );
}

export default App;
