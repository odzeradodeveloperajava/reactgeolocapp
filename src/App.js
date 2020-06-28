import React from 'react';
import Map from './components/map/map';
import './App.css';
import Header from './components/header/header';
import UploadHandler from './components/upoloadHandler/uploadHandler';
import CardsWrapper from './components/cardsWrapper/cardsWrapper';
import fileHandler from './components/upoloadHandler/fileHandler';
/*global EXIF*/

class App extends React.Component {
    state = {
      items: [],
    }
    addItem = async () => {
      const uploadedFiles = document.getElementById("input").files;

      function uploadedfile(id, callback){
          EXIF.getData(uploadedFiles, function() {
                let object = {
                  cardId: uploadedFiles[id].name,
                  imageUrl: window.URL.createObjectURL(uploadedFiles[id]), // Create url for thumbnail of image //
                  size: uploadedFiles[id].size
                  };
                
                callback (object);
              }
          );
    };

    let data = await uploadedfile(0);
    console.log(data)

    this.setState(prevState => ({
      items: [...prevState.items]
    }));


};
    render(){
      return (
        <div className="pageWrapper">
          <Header />
          <Map />
          <UploadHandler submitFn={this.addItem} />
          <CardsWrapper
              items={this.state.items}
          />
        </div>
      )};
    }
export default App;

