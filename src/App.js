import { Routes, Route, Link } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Home from "./pages/home/home/home";
import Header from "./pages/global/header/header";
import Footer from "./pages/global/footer/footer";
import AboutUsPage from "./pages/aboutus_page/aboutus_page";
import FindGym from "./pages/findgym/findgym";
import RegisterGymPage from "./pages/gymregister_page/gymregister_page";
import ContactUsPage from "./pages/contact_us_page/contact_us_page";
import GymRegisterForm from "./pages/gym_register_form_page/gym_register_form_page";
import GymIntro from "./pages/gym_details_page/gym/gym";
import GymInquiryForm from "./pages/gym_details_page/gym_inquiry_form/gym_inquiry_form";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Header />
            <AuthContextProvider>
              {/* <Link to={value}></Link> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/findgym" element={<FindGym />} />
              <Route path="/registergym" element={<RegisterGymPage />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/gymregisterform" element={<GymRegisterForm />} />
              <Route path="/aboutgym/:id" element={<GymIntro />} />
              <Route path="/gyminquiry/:id" element={<GymInquiryForm />} />
              {/* <Route path="/aa" element={<Protect Component={All} />} /> */}
              {/* <Route path="/manageStock" element={<ManageStock />} /> */}
            </Routes>
            <Footer />
            </AuthContextProvider>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

