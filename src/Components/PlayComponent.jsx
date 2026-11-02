import { FaPlay } from "react-icons/fa";

const PlayComponent = ({stylePlay, sizePlay}) => {
  return (
    <>
        <div role="button" className="play-circle d-flex justify-content-center align-items-center flex-shrink-0" style={stylePlay}>
            <FaPlay size={sizePlay} className="ms-1"/>
        </div>
    </> 
  )
}

export default PlayComponent