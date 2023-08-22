import './globals.css'
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Blog By Shiplu',
  description: ' Blog By Shiplu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Header />

        {children}
        <ToastContainer />
      <Footer />
        </body>
    </html>
  )
}
