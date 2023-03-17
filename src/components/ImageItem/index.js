import './index.css'

const ImageItem = props => {
  const {imageDetails, clickThumbnail, randomImageId} = props
  const {id, thumbnailUrl} = imageDetails
  const onClickThumbnail = () => {
    clickThumbnail(id, randomImageId)
  }
  return (
    <>
      <li className="thumbnail-container">
        <button type="button" onClick={onClickThumbnail}>
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    </>
  )
}

export default ImageItem
