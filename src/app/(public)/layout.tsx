

import Footer from '@/component/shared/Footer';
import Navbar from '@/component/shared/Navbar';
import React from 'react';



const PublicLayout = ({children}:{children:React.ReactNode}) => {
  return (
  <div className="max-w-363 mx-auto">
    <Navbar/>
     <div className="min-h-screen">
            {children}
        </div>
       <Footer/>
  </div>

    
  )
}

export default PublicLayout