import Navbar from '@/components/Navbar';
import '@/assets/styles/global.css';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';


import { ToastContainer} from 'react-toastify';
import { GlobalProvider } from '@/context/GlobalContext';
import 'react-toastify/dist/ReactToastify.css';



export const metadata = {
    title: 'PropertyPulse | Find The Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rentals, find rentals, find properties',
};

const MainLayout = ({children}) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
            <body>
              <Navbar />
              <main>{children}</main>
              <Footer/>
              <ToastContainer/>
            </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}

export default MainLayout