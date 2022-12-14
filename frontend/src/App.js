import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { IndexPage } from "./pages/Index";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ContactPage } from "./pages/ContactPage";
import { ConfessionPage } from "./pages/ConfessionPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/contact" element={<ContactPage /> } />
      <Route path="/:slug/:id" element={<ConfessionPage /> } />
    </Routes>
  );
}
