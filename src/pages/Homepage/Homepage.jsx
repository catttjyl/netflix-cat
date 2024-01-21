import "./homepage.scss"
import Banner from "../../components/Banner/Banner"
import Row from "../../components/Row/Row"
import Footer from "../../components/Footer/Footer";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";

const Homepage = () => {
    const rows = useRetrieveData('movies');

    return (
        <motion.div
            className="Homepage"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Banner />
            {rows && rows.map(props => (
                <Row key={props.id} {...props} />
            ))}
            <Footer />
        </motion.div>
    )
}

export default Homepage
