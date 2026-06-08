import { motion } from "framer-motion";

export default function
LoadingAnimation(){

return(

<motion.div

animate={{
 rotate:360
}}

transition={{
 repeat:Infinity,
 duration:1
}}

className="loader"

/>

);

}