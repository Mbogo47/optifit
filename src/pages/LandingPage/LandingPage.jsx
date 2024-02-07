import Classes from "../../components/Classes/Classes"
import Contact from "../../components/Contact/Contact"
import Home from "../../components/Home/Home"
import Schedule from "../../components/Schedule/Schedule"
import Services from "../../components/Services/Services"
import Trainers from "../../components/Trainer/Trainers"

const LandingPage = () => {
    return (
        <>
            <Home />
            <Classes />
            <Schedule />
            <Trainers />
            <Services />
            <Contact />
        </>
 )
}

export default LandingPage