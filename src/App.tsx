import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import LiveChat from './assets/components/LiveChat'
import HomePage from './assets/components/Homepage'
import CompanyOverview from './assets/components/CompanyOverview'
import CEOMessage from './assets/components/CEOMessage'
import Philosophy from './assets/components/Philosophy'
import History from './assets/components/History'
import BranchLocations from './assets/components/BranchLocations'
import ManufacturingDispatch from './assets/components/ManufacturingDispatch'
import Recruitment from './assets/components/Recruitment'
import BusinessOutsourcing from './assets/components/BusinessOutsourcing'
import EngineerDispatch from './assets/components/EngineerDispatch'
import ForeignEmployment from './assets/components/ForeignEmployment'
import ReemploymentSupport from './assets/components/ReemploymentSupport'
import JobListings from './assets/components/JobListings'
import JobDetail from './assets/components/JobDetail'
import HowToApply from './assets/components/HowToApply'
import CareerResources from './assets/components/CareerResources'
import CandidateRegistration from './assets/components/CandidateRegistration'
import EmployerServices from './assets/components/EmployerServices'
import PostAJob from './assets/components/PostAJob'
import EmployerResources from './assets/components/EmployerResources'
import ClientPortal from './assets/components/ClientPortal'
import SustainabilityPolicy from './assets/components/SustainabilityPolicy'
import EnvironmentalInitiatives from './assets/components/EnvironmentalInitiatives'
import SocialResponsibility from './assets/components/SocialResponsibility'
import Governance from './assets/components/Governance'
import SDGsAlignment from './assets/components/SDGsAlignment'
import NewsListings from './assets/components/NewsListings'
import NewsArticle from './assets/components/NewsArticle'
import EventsCalendar from './assets/components/EventsCalendar'
import JoinOurTeam from './assets/components/JoinOurTeam'
import RecruitmentBlog from './assets/components/RecruitmentBlog'
import ApplicationProcess from './assets/components/ApplicationProcess'
import ContactUs from './assets/components/ContactUs'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LiveChat />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Navigate to="/about/overview" replace />} />
        <Route path="/about/overview" element={<CompanyOverview />} />
        <Route path="/about/ceo" element={<CEOMessage />} />
        <Route path="/about/philosophy" element={<Philosophy />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/locations" element={<BranchLocations />} />
        <Route path="/services" element={<Navigate to="/services/manufacturing" replace />} />
        <Route path="/services/manufacturing" element={<ManufacturingDispatch />} />
        <Route path="/services/recruitment" element={<Recruitment />} />
        <Route path="/services/outsourcing" element={<BusinessOutsourcing />} />
        <Route path="/services/engineer" element={<EngineerDispatch />} />
        <Route path="/services/foreign" element={<ForeignEmployment />} />
        <Route path="/services/reemployment" element={<ReemploymentSupport />} />
        <Route path="/job-seekers" element={<Navigate to="/job-seekers/listings" replace />} />
        <Route path="/job-seekers/listings" element={<JobListings />} />
        <Route path="/job-seekers/job/:id" element={<JobDetail />} />
        <Route path="/job-seekers/how-to-apply" element={<HowToApply />} />
        <Route path="/job-seekers/resources" element={<CareerResources />} />
        <Route path="/job-seekers/register" element={<CandidateRegistration />} />
        <Route path="/employers" element={<Navigate to="/employers/services" replace />} />
        <Route path="/employers/services" element={<EmployerServices />} />
        <Route path="/employers/post-job" element={<PostAJob />} />
        <Route path="/employers/resources" element={<EmployerResources />} />
        <Route path="/employers/portal" element={<ClientPortal />} />
        <Route path="/sustainability" element={<Navigate to="/sustainability/policy" replace />} />
        <Route path="/sustainability/policy" element={<SustainabilityPolicy />} />
        <Route path="/sustainability/environment" element={<EnvironmentalInitiatives />} />
        <Route path="/sustainability/social" element={<SocialResponsibility />} />
        <Route path="/sustainability/governance" element={<Governance />} />
        <Route path="/sustainability/sdgs" element={<SDGsAlignment />} />
        <Route path="/news" element={<NewsListings />} />
        <Route path="/news/article/:id" element={<NewsArticle />} />
        <Route path="/news/events" element={<EventsCalendar />} />
        <Route path="/careers" element={<Navigate to="/careers/join" replace />} />
        <Route path="/careers/join" element={<JoinOurTeam />} />
        <Route path="/careers/blog" element={<RecruitmentBlog />} />
        <Route path="/careers/process" element={<ApplicationProcess />} />
        <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
