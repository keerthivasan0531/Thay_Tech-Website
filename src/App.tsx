import React from "react";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Service from "./components/service/service_home/Service";
import Development from "./components/service/devlopment/Development";
import OutSourcing from "./components/service/outsourcing/Outsourcing";
import ITConsulting from "./components/service/it_consulting/ItConsulting";
import CloudSupport from "./components/service/cloud_support/Cloud_Support";
import SoftwareTraining from "./components/service/software_training/SoftwareTraining";
import SoftwareDevelopment from "./components/service/devlopment/SoftwareDevelopment";
import ProductDevelopment from "./components/service/devlopment/ProductDevelopment";
import ApplicationSupport from "./components/service/cloud_support/ApplicationSupport";
import DatabaseSupport from "./components/service/cloud_support/DatabaseSupport";
import OSSupport from "./components/service/cloud_support/OSSupport";
import NetworkSupport from "./components/service/cloud_support/NetworkSupport";
import InfrastructureOutsourcing from "./components/service/outsourcing/InfrastructureOutsourcing";
import CorporateTraining from "./components/service/software_training/CorporateTraining";
import OnJobTraining from "./components/service/software_training/OnJobTraining";
import ProjectTraining from "./components/service/software_training/ProjectTraining";
import OnlineOfflineTraining from "./components/service/software_training/OnlineOfflineTraining";
import Contact from "./components/contact/Contact";
import TechIntegration from "./components/service/it_consulting/TechIntegeration";
import StaffOutSourcing from "./components/service/outsourcing/StaffOutsourcing";
import Career from "./components/career/Career";
import About from "./components/about/AboutUs";


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/outsourcing" element={<OutSourcing />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/cloud-support" element={<CloudSupport />} />
          <Route path="/services/software-training" element={<SoftwareTraining />} />
          <Route path="/services/development/software-development" element={<SoftwareDevelopment />} />
          <Route path="/services/development/product-development" element={<ProductDevelopment />} />
          <Route path="/services/cloud-support/application-support" element={<ApplicationSupport />} />
          <Route path="/services/cloud-support/database-support" element={<DatabaseSupport />} />
          <Route path="/services/cloud-support/operating-system" element={<OSSupport />} />
          <Route path="/services/cloud-support/network-support" element={<NetworkSupport />} />
          <Route path="/services/outsourcing/infrastructure-outsourcing" element={<InfrastructureOutsourcing />} />
          <Route path="/services/outsourcing/staff-outsourcing" element={<StaffOutSourcing />} />
          <Route path="/services/software-training/corporate-training" element={<CorporateTraining />} />
          <Route path="/services/software-training/on-job-training" element={<OnJobTraining />} />
          <Route path="/services/software-training/project-training" element={<ProjectTraining />} />
          <Route path="/services/software-training/online-offline-training" element={<OnlineOfflineTraining />} />
          <Route path="/services/it-consulting/tech-integration" element={<TechIntegration />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
