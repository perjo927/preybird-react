import React, { Component } from 'react';
import GridView from './components/GridView';
import ContentCard from './components/ContentCard';
import PlayDataService from './services/PlayDataService'
import logo from './assets/logo.svg';
import './App.css';

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

  render() {

    const playCards = this.state.playData.map((playItem) =>
      <div>
        <h6>{playItem.title}</h6>
        <ContentCard key="{index}"
          img="{playItem.img}"
          title="{playItem.title}">
        </ContentCard>
      </div>
    );

    return (
      <div className="App">
        <header>
          <object type="image/svg+xml" data={logo} className="logo">
          </object>
          <h1>perplay</h1>
        </header>

        <main>
          <GridView>
            {/*<div className="Grid-view">*/}
            {playCards}
            {/*</div>*/}

            {/*{this.state.playData.map((playItem) =>
              <div>
                <h6>{playItem.title}</h6>
                <img src="{playItem.img}"/>
                <ContentCard img="{playItem.img}"
                  title="{playItem.title}">
                </ContentCard>
              </div>
            )}*/}

          </GridView>
        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
