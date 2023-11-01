import Footer from './Footer'
import Navbar from './Nav'
import Hero from './hero'
import Projects from './project'

const main = () => {
    return (
        <div className='bg-indigo-600'>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
        </div >
    )
}

export default main