import { Container } from 'react-bootstrap'
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const StaffClientSwitchTwo = () => {
  return (
    <>
        <Container fluid className='px-md-5 mt-md-3 mb-5'>
            <div className='px-md-5 d-flex gap-3 button-holder'>
                <Link to="" className='text-decoration-none'>
                    <div role='button' className='d-flex align-items-center gap-2 left-button'>
                    <RiCalendarScheduleLine size={30} className='flex-shrink-0 left-icon'/>
                    <p className='mb-0' style={{fontWeight: '500', fontsize: "16px"}}>Client Portal</p> 
                    </div>
                </Link>

                <Link to="/Staff" className='text-decoration-none'>
                    <div role='button' className='d-flex align-items-center gap-2 right-button'>
                    <RiCalendarScheduleLine size={30} className='flex-shrink-0 right-icon'/>
                    <p className='mb-0' style={{fontWeight: '500', fontsize: "16px"}}>Staff Portal</p> 
                    </div>
                </Link>
            </div>

            <hr className='mx-md-5 switch-line mt-0'/>
        </Container>
    </>
    
  )
}

export default StaffClientSwitchTwo