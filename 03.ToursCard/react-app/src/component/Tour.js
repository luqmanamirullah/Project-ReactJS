
const Tour = ({id, img, destination, title, price, desc, handleDelete, setReadMore, readMore}) => {
  return (
    <div className="tour-card-section">
        <img src={img} alt="Destination" width="100%"/>
        <div className="content">
            <h3>{destination}</h3>
            <div className="content-header">
                <h1>{title}</h1>
                <h1 className="price">${price}</h1>
            </div>
            <p>{!readMore ? `${(desc).substring(0, 150)}...` : desc } <span className="btn-text" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</span></p>
            <button type="button" onClick={() => handleDelete(id)}>Not Intrested</button>
    </div>
</div>
  )
}

export default Tour