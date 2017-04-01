import './App.css';
import ContentCard from './components/ContentCard';
import GridView from './components/GridView';
import Logo from './components/Logo';
import logo from './assets/logo.svg';
import React, { Component } from 'react';
import PlayDataService from './services/PlayDataService'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playData: []
    };

    this.playDataService = new PlayDataService(`https://content.viaplay.se/pc-se/serier/samtliga`);
    this.getPlayData(this.playDataService);
  }

  getPlayData(service) {
    // TODO: Async await
    service.get()
      .then((data) => {
        const mappedData = service.extractPlayData(data)
        this.setState({ "playData": mappedData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getContentCards() {
    return this.state.playData.map((playItem) =>
        <ContentCard key={playItem.title}
          srcS={playItem.imgS}
          srcL={playItem.imgL}
          title={playItem.title}>
        </ContentCard>
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <Logo src={logo}/>          
          <h1>perplay</h1>
        </header>

        <main>
          <GridView>
            {this.getContentCards()}
          </GridView>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
