import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {musicDetails, onDeleteMusicItem} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const deleteMusic = () => {
    onDeleteMusicItem(id)
  }

  return (
    <li className="songDetail-container">
      <div className="music-div">
        <img src={imageUrl} alt="track" className="song-Coverimage" />
        <div>
          <p className="music-name">{name}</p>
          <p className="music-genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-container">
        <p className="time-duration">{duration}</p>
        <button
          data-testid="delete"
          className="delete-button"
          onClick={deleteMusic}
          label="delete"
          type="button"
        >
          <AiOutlineDelete size="20" color="#ffffff" />
        </button>
      </div>
    </li>
  )
}
export default MusicItem
