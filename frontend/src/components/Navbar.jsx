import { Link } from 'react-router-dom'
import { PlusIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
          <div className="mx-auto max-w-6xl p-4">
            
              <div className="flex items-center justify-between">
                  <h1 
                    className="text-lg md:text-3xl font-bold text-primary font-mono tracking-tight"
                  >
                    ThinkBoard                    
                  </h1>
                  
                  <div className="flex items-center gap-4 cursor-pointer">
                      <Link to="/create" className='btn btn-primary p-1 md:p-0'>
                          <PlusIcon className="size-4 md:size-5" />
                          <span className='text-[12px] md:text-2xl'>New Note</span>
                      </Link>
                  </div>
                  
              </div>
        </div>
    </header>
  )
}

export default Navbar
