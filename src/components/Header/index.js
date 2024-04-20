import './index.css'
import { IoMdMenu } from "react-icons/io";


const Header=()=>(
    <>
        <nav className='nav-container'>
            <IoMdMenu size={30} className='icons'/>
            <h1 className='nav-heading'>Amrutam</h1>
        </nav>
    </>
)
export default Header