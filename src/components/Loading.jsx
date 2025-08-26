import image from "../assets/image.png";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#052776] via-black to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <motion.img
          src={image}
          alt="loading..."
          className="mx-auto"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{
            scale: [0.7, 1.1, 1],
            opacity: 1,
            rotate: [0, 0, 0, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            times: [0, 0.5, 0.8, 1],
          }}
        />
        <motion.p
          className="text-[#799be8] text-2xl mt-4 font-extrabold"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
