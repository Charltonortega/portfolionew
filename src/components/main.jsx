import AboutMe from './AboutMe'
import Footer from './Footer'
import Navbar from './Nav'
import Hero from './hero'
import Project from './project'

const Main = () => {
    return (
        <div className='bg-white'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Project />
            <Footer />
        </div>
    )
}

export default Main
