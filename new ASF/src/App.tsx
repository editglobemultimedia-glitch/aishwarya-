import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from './components/shared/Layout'

// Pages
import Home from './pages/Home'
import AboutLanding from './pages/about/AboutLanding'
import Philosophy from './pages/about/Philosophy'
import PanchaMahabhuta from './pages/about/PanchaMahabhuta'
import Bhagavadgita from './pages/about/Bhagavadgita'
import Vision from './pages/about/Vision'
import Mission from './pages/about/Mission'
import Team from './pages/Team'
import CampaignsLanding from './pages/campaigns/CampaignsLanding'
import CampaignVishwaMahotsav from './pages/campaigns/VishwaMahotsav'
import CampaignResearchCentre from './pages/campaigns/ResearchCentre'
import CampaignSeva from './pages/campaigns/Seva'
import CampaignEducation from './pages/campaigns/Education'
import CampaignEnvironment from './pages/campaigns/Environment'
import ProjectsLanding from './pages/projects/ProjectsLanding'
import ProjectVishwaMahotsav from './pages/projects/ProjectVishwaMahotsav'
import ProjectResearchCentre from './pages/projects/ProjectResearchCentre'
import ProjectOrganicFarming from './pages/projects/ProjectOrganicFarming'
import ProjectHealthyLiving from './pages/projects/ProjectHealthyLiving'
import ASFClub from './pages/asfclub/ASFClub'
import Stories from './pages/asfclub/Stories'
import Partners from './pages/Partners'
import GetInvolved from './pages/GetInvolved'
import MediaLanding from './pages/media/MediaLanding'
import Newsletter from './pages/media/Newsletter'
import Gallery from './pages/media/Gallery'
import Videos from './pages/media/Videos'
import Contact from './pages/Contact'
import SupportUs from './pages/SupportUs'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/about" element={<AboutLanding />} />
          <Route path="/about/philosophy" element={<Philosophy />} />
          <Route path="/about/pancha-mahabhuta" element={<PanchaMahabhuta />} />
          <Route path="/about/bhagavadgita" element={<Bhagavadgita />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/team" element={<Team />} />
          <Route path="/campaigns" element={<CampaignsLanding />} />
          <Route path="/campaigns/vishwa-mahotsav" element={<CampaignVishwaMahotsav />} />
          <Route path="/campaigns/research-centre" element={<CampaignResearchCentre />} />
          <Route path="/campaigns/seva" element={<CampaignSeva />} />
          <Route path="/campaigns/education-youth" element={<CampaignEducation />} />
          <Route path="/campaigns/environment" element={<CampaignEnvironment />} />
          <Route path="/projects" element={<ProjectsLanding />} />
          <Route path="/projects/vishwa-mahotsav" element={<ProjectVishwaMahotsav />} />
          <Route path="/projects/research-centre" element={<ProjectResearchCentre />} />
          <Route path="/projects/organic-farming" element={<ProjectOrganicFarming />} />
          <Route path="/projects/healthy-living-carnival" element={<ProjectHealthyLiving />} />
          <Route path="/asf-club" element={<ASFClub />} />
          <Route path="/asf-club/stories" element={<Stories />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/media" element={<MediaLanding />} />
          <Route path="/media/newsletter" element={<Newsletter />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
