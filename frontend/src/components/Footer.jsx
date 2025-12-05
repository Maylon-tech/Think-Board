import { Link } from "react-router"

const Footer = () => {

  return (
    <footer className='bg-base-300 border-b border-base-content/10'>
          <div className="mx-auto max-w-6xl p-4">
            
            <div className="flex items-center justify-between">
                <Link to="/" className='p-1 md:p-2'>
                    <h1 
                        className="text-md md:text-2xl font-bold text-primary font-mono tracking-tight"
                    >
                        ThinkBoard                    
                    </h1>
                </Link>
                  
                <div className="not-[]:">
                    <p className="text-xs md:text-lg">
                        by NemotoDev 2025
                    </p>                       
                </div>
                  
            </div>
        </div>
    </footer>
  )
}

export default Footer
