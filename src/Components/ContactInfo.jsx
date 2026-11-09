const ContactInfo = ({icon, title1, Details}) => {
  return (
    <>
        <div className="px-4 py-3 contact-card" style={{backgroundColor: "rgba(217, 217, 217, 0.3)",  borderRadius: "5px"}}>
            <div className="icon-contact-hold d-flex align-items-center justify-content-center" style={{backgroundColor: "white", height: "50px", width: "52px", borderRadius: "5px"}}>
                {icon}
            </div>

            <div className="contact-line mt-4 mb-3"></div>

            <h6 className="mb-2" style={{fontWeight: "600", fontSize: "16px"}}>{title1}</h6>
            <p className="" style={{fontWeight: "500", fontSize: "14px"}}>{Details}</p>
        </div>
    </>
  )
}

export default ContactInfo