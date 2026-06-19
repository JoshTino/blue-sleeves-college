import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Academics", "Facilities", "Gallery", "Contact"];

  return (
    <motion.header
      className="fixed w-full top-0 bg-primary border-3 border-primary border-b-secondary shadow z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <motion.h1
          className="font-serif text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src="images/logo.jpg" className="size-16" />
        </motion.h1>

        <motion.div
          className="hidden md:flex gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white hover:text-secondary font-nunito"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -2 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? <X size={40} /> : <Menu size={40} />}
        </motion.button>

      </nav>

      <AnimatePresence>
      {open && (
        <motion.div
          className="md:hidden flex flex-col items-center pb-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35 }}
        >
          {links.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="py-2 text-white focus:text-secondary font-bold font-nunito"
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}
      </AnimatePresence>

    </motion.header>
  );
}