import './App.css';
import ContentCard from '../components/ContentCard';
import { connect } from 'react-redux'
import { fetchDataIfNeeded } from '../actions'
import GridView from '../components/GridView';
import { ImgSizes } from '../assets/media'
import Logo from '../components/Logo';
import logo from '../assets/logo.svg';
import React, { Component, PropTypes } from 'react';
import PlayDataService from '../services/PlayDataService';
import Spinner from '../components/Spinner';

class App extends Component {

  static propTypes = {
    dataItems: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const service = new PlayDataService(`https://content.viaplay.se/pc-se/serier/samtliga`);
    const { dispatch } = this.props
    dispatch(fetchDataIfNeeded(service))
  }

  getContentCards(dataItems) {
    return dataItems.map((playItem) =>
      <ContentCard key={playItem.imgS}
        srcS={playItem.imgS}
        srcL={playItem.imgL}
        title={playItem.title}
        sizes={ImgSizes}>
      </ContentCard>
    );
  }

  render() {
    const { dataItems, isFetching } = this.props
    const isEmpty = dataItems.length === 0

    return (
      <div>
        {isEmpty
          ? (isFetching ? <Spinner /> : <h2>Error</h2>)
          : <div className="App">

            <header>
              <Logo src={logo} />
              <h1>perplay</h1>
            </header>

            <main>
              <GridView>
                {this.getContentCards(dataItems)}
              </GridView>
            </main>

            <footer></footer>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = state => {
  const { playData } = state
  const {
    isFetching,
    items: dataItems
  } = playData['data'] || {
      isFetching: true,
      items: []
    }

  return {
    dataItems,
    isFetching
  }
}

export default connect(mapStateToProps)(App)