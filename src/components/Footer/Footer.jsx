import "./footer.scss"
import { motion } from "framer-motion";
import { creditsFadeInUpVariants } from "../../motionUtils";
import TWT from "./twitter-64.png";
import GH from "./github-11-64.png";
import LI from "./linkedin-90.png";
import FB from "./facebook-90.png";
import { GITHUB_BASE_URL } from "../../requests";

const Footer = () => {
	return (
		<motion.footer
			variants={creditsFadeInUpVariants}
			initial='initial'
			animate='animate'
			exit='exit'
			className='Footer'
		>
			<div className="Footer__social">
				<img src={FB}/>
				<img src={TWT}/>
				<motion.a href={GITHUB_BASE_URL}>
					<img src={GH}/>
				</motion.a>
				<motion.a href="https://www.linkedin.com/in/youlun-jiang/">
					<img src={LI}/>
				</motion.a>
			</div>
			
			<lu className="Footer__col">
				<li>Audio Descriptioin</li>
				<li>Help Center</li>
				<li>Gift Cards</li>
				<li>Media Center</li>

				<li>Inverstor Relations</li>
				<li>Jobs</li>
				<li>Netflix Shop</li>
				<li>Terms of Use</li>

				<li>Privacy</li>
				<li>Legal Notices</li>
				<li>Cookie Preferences</li>
				<li>Corporate Information</li>

				<li>Contact Us</li>
				<li>Do Not Sell or Share My Personal Information</li>
				<li>Ad Choices</li>				
			</lu>
			
		</motion.footer>
	)
}

export default Footer;
