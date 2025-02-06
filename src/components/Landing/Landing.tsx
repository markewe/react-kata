import { heading, intro } from "copy/landing";
import "./Landing.css";
import logo from '../../assets/logo.png'

const Landing = () => {
  return (
    <div className="splash">
      <h1>{heading}</h1>
      <a href="/services"><img src={logo} /></a>
      <p>{intro}</p>
      <p>Click our logo to book your appointment today!</p>
      <p>Or contact us by email: <a href=":mailto:supportbutton@driveway.com">supportbutton@driveway.com</a> or by phone: <a href="te:555-872-3289">555-872-3289</a></p>
    </div>
  );
};

export default Landing;
