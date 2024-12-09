import { Link } from "react-router-dom";
 
const Menu=()=>
{
 
 
return(<>
 
 
<ul>
 
<Link to="/"><li> Home</li></Link>
<Link to="/about"><li> about us </li></Link>
<Link to="/faq"><li>FAQ </li></Link>
<Link to="/pay"><li>Payslip</li></Link>
<Link to="/contactus"><li>Contact Us</li></Link> {/* Add Contact Us link */}
   
</ul>
 
</>)
 
 
}
 
export default Menu;