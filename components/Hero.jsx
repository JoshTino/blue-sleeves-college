import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-170 bg-primary mt-7 p-3 flex flex-col items-center justify-center text-center text-white relative overflow-hidden"
    >
      
      <div className="flex flex-col items-center md:flex-row">
      <motion.div
        className="relative max-w-3xl  md:w-150"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 }
          }
        }}
      >

        <motion.h1
          className="font-nunito text-5xl text-left leading-15 mb-6"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7 }}
        >
          Welcome To <span className="font-donegal">BLUESLEEVES COLLEGE</span>
        </motion.h1>

        <motion.p
          className="mb-6 font-nunito text-left"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6 }}
        >
          A place where excellence meets oppurtunity.
        </motion.p>

      </motion.div>

        <motion.div
          className="mb-7"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >
          <img src="/images/background.jpg"/>
        </motion.div>

      </div>
        <motion.div
          className="flex justify-center gap-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
        >

          <motion.a
            href="https://wa.me/07077679829"
            className="bg-secondary font-nunito cursor-pointer px-6 py-3 hover:bg-red-900"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Today
          </motion.a>

          <motion.a
            href="tel:07077679829"
            className="bg-green-700 font-nunito cursor-pointer text-white px-6 py-3 hover:bg-white hover:text-black"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>

        </motion.div>
    </section>
  );
}