import Button from "react-bootstrap/esm/Button"
import { Link } from "react-router-dom"

const ButtonComp = ({address, buttonClass, buttonText, onClick, disabled}) => {
  return (
    <>
        <Button as={Link} to={address} className={buttonClass} style={{backgroundColor: "#3A65F2", border: "none", padding: "10px 40px", borderRadius: "10px", fontFamily: "Montserrat", color: "white", fontSize: 16, fontWeight: 500}} onClick={onClick} disabled={disabled}>{buttonText}</Button>
    </>
  )
}

export default ButtonComp