import { Link } from "react-router-dom"
import Navbar3 from "../../Components/A_navbar"
 import MenuType from "./MenuTypeList"
 import Menu from "./MenuList"

const HotelMenu=()=>{
    return(
        <div>
            <Navbar3/>
            <table>
                <tr>
                    <td className="md-6">
                        <Link to="/MenuTypeList">
                        <button className="btn btn-info">Show All MenuTypes</button>
                        </Link>
                        
                    </td>
                    <td>
                        <Link to="/menuList">
                        
                        <button className="btn btn-info">Show All Menu</button>
                        </Link>
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default HotelMenu