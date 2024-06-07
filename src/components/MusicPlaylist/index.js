import './index.css'
import {Component} from 'react'
import {FiSearch} from 'react-icons/fi'
import MusicItem from '../MusicItem'

class MusicPlaylist extends Component {
  state = {searchInput: '', musicList: []}

  componentDidMount() {
    const {tracksList} = this.props
    this.setState({musicList: tracksList})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteMusicItem = id => {
    const {musicList} = this.state
    const remainingMusics = musicList.filter(eachItem => eachItem.id !== id)
    this.setState({musicList: remainingMusics})
  }

  render() {
    const {searchInput, musicList} = this.state
    const filteredMusicList = musicList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const musicLength = filteredMusicList.length
    return (
      <div className="musicBgContainer">
        <div className="ed-sheeranContainer">
          <h1 className="singerName">Ed Sheeran</h1>
          <p className="singerText">Singer</p>
        </div>
        <div className="music-list-container">
          <div className="playlist-search-container">
            <p className="playlist-title">Songs Playlist</p>
            <div className="search-container">
              <input
                type="search"
                className="search-box"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <FiSearch size="18" color="#ffffff" />
            </div>
          </div>
          {musicLength > 0 ? (
            <ul className="music-list">
              {filteredMusicList.map(eachItem => (
                <MusicItem
                  musicDetails={eachItem}
                  key={eachItem.id}
                  onDeleteMusicItem={this.onDeleteMusicItem}
                />
              ))}
            </ul>
          ) : (
            <div className="no-songsFound-div">
              <p className="nosongs-found-heading">No Songs Found</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default MusicPlaylist
