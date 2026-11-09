import Images from "./Images"

const ProcessImage = ({lineStyle1, lineStyle2, src, iconLeft, iconRight, floatNum}) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <span className="icon-one">{iconLeft}</span>
        <div className="arrow-card" style={lineStyle1}></div>
      </div>
        
          <div className="image-wrapper position-relative">
            <Images src={src} className="img-fluid w-100"/>
            <span className="process-number">{floatNum}</span>
          </div>

      <div className="d-flex align-items-center">
        <div className="arrow-card" style={lineStyle2}></div>
        <span className="icon-one">{iconRight}</span>
      </div>
        
    </>
  )
}

export default ProcessImage