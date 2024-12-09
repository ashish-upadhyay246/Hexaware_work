import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Login from './Login';
import Welcome from "./Welcome";
import Welcome1 from "./Welcome1";
import NotWelcome from "./NotWelcome";
import Payslip from "./Payslip";
import Invoice from "./Invoice";
import User from "./User";
import Protected from "./Protected";
import ContactUs from "./ContactUs";
import Email from "./Email";
import Message from "./Message";
import Phone from "./Phone";
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/faq" element={<Faq />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/invalid" element={<NotWelcome />} />
            
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/welcome1" element={<Welcome1 />} />
            <Route path ="/user/:nm" element={<User/>}/>
            <Route path="/pay" element={<Protected Component={Payslip} />} />
            
            <Route path="/contactus" element={<ContactUs />}>
        <Route path="email" element={<Email />} />
        <Route path="message" element={<Message />} />
        <Route path="phone" element={<Phone />} />
      </Route>
        </Routes>
    );
};

export default Routing;