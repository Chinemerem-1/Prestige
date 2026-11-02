import { IoCheckbox } from "react-icons/io5";

const Detailslist = ({listOne}) => {

    const checkT = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 16,
        fontWeight: 500
    }

  return (
    <div>
        <div className="d-flex gap-2 align-items-center">
            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
            <p className="mb-0" style={checkT}>{listOne}</p>
        </div>
    </div>
  )
}

export default Detailslistas