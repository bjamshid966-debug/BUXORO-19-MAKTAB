import { RouterProvider, useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { AcademicsPage } from '@/pages/AcademicsPage';
import { ClubsPage } from '@/pages/ClubsPage';
import { AchievementsPage } from '@/pages/AchievementsPage';
import { ContactPage } from '@/pages/ContactPage';

function AppContent() {
  const { route } = useRouter();

  const renderPage = () => {
    switch (route) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'academics': return <AcademicsPage />;
      case 'clubs': return <ClubsPage />;
      case 'achievements': return <AchievementsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

export default App;
