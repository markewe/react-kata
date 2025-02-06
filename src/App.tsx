import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "components/Landing";
import Services from "components/Services/Services";
import Appointments from "components/Appointments/Appointments";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments/:id" element={<Appointments />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
