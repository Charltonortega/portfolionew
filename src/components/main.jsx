import AboutMe from './AboutMe'
import Footer from './Footer'
import Navbar from './Nav'
import Contact from './contact'
import Hero from './hero'
import Project from './project'

const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
