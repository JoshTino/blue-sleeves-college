import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FlaskConical,
  Monitor,
  Library,
  Music,
  Volleyball,
  CircleChevronDown,
  Goal,
  School
} from "lucide-react"

const facilities = [
{
  title: "Physics Laboratory",
  icon: FlaskConical,
  image: "/images/physics-lab.jpg",
  description:
    "Fully equipped science laboratories supporting practical learning in Physics.",
  background: "#172a5a",
  text: "white"
},
{
  title: "ICT Laboratory",
  icon: Monitor,
  image: "/images/ict-lab.jpg",
  description:
    "Modern computer laboratory providing students with digital literacy and CBT examination facilities.",
  background: "white",
  text: "#172a5a"
},
{
  title: "Biology Laboratory",
  icon: FlaskConical,
  image: "/images/biology-lab.jpg",
  description:
    "Fully equipped science laboratories supporting practical learning in Physics..",
  background: "#172a5a",
  text: "white"
},
{
  title: "Modern Classrooms",
  icon: School,
  image: "/images/classroom.jpg",
  description:
    "Spacious classrooms designed for comfortable learning with modern teaching tools.",
  background: "white",
  text: "#172a5a"
},
{
  title: "Music Laboratory",
  icon: Music,
  image: "/images/music.jpg",
  description:
    "Dedicated music lab where students develop creativity through instruments and music theory.",
  background: "#172a5a",
  text: "white"
},
{
  title: "Tennis Court",
  icon: Volleyball,
  image: "/images/tennis-court.jpg",
  description:
    "Outdoor tennis court used for sports development and inter-house competitions.",
  background: "white",
  text: "#172a5a"
},
{
  title: "Badminton Court",
  icon: Volleyball,
  image: "/images/badminton.jpg",
  description:
    "Badminton facility supporting agility, coordination and competitive sports activities.",
  background: "#172a5a",
  text: "white"
},
{
  title: "Football Field",
  icon: Goal,
  image: "/images/football.jpg",
  description:
    "Standard football field used for training, sports festivals and school tournaments.",
  background: "white",
  text: "#172a5a"
},
{
  title: "Volleyball Court",
  icon: Volleyball,
  image: "/images/volleyball.jpg",
  description:
    "Dedicated volleyball court encouraging teamwork and athletic development.",
  background: "#172a5a",
  text: "white"
}
]

export default function Facilities(){

const [openIndex,setOpenIndex] = useState(null)

return(

<section id="facilities" className="py-10 px-4">

<div className="max-w-6xl mx-auto">

<h2 className="text-3xl font-nunito font-bold bg-primary skew-x-7 py-2 text-white text-center mb-12">
Facilities
</h2>

<div className="grid md:grid-cols-3 gap-8">

{facilities.map((facility,i)=>{

const Icon = facility.icon
const isOpen = true /*openIndex === i*/

return(

<motion.div
key={i}
layout
onClick={()=> setOpenIndex(isOpen ? null : i)}
whileHover={{ y:-6, scale:1.02 }}
transition={{ type:"spring", stiffness:200, damping:15 }}
className="cursor-pointer rounded-xl shadow hover:shadow-xl transition overflow-hidden"
style={{
  background: facility.background
}}
>

<div className="p-6 flex items-center justify-between">

<div className="flex items-center gap-4">

<Icon size={28}
  style={{
    color: facility.text
  }}
/>

<h3 className="font-semibold font-nunito text-white"
  style={{
    color: facility.text
  }}
>
{facility.title}
</h3>

</div>

<motion.div
animate={{ rotate:isOpen ? 180 : 0 }}
transition={{ duration:0.35 }}
>

<CircleChevronDown className="text-gray-500"/>

</motion.div>

</div>

<AnimatePresence>

{isOpen && (

<motion.div
initial={{opacity:0,height:0}}
animate={{opacity:1,height:"auto"}}
exit={{opacity:0,height:0}}
transition={{duration:0.45}}
className="px-6 pb-6"
>

<motion.img
src={facility.image}
alt={facility.title}
initial={{scale:0.95, opacity:0}}
animate={{scale:1, opacity:1}}
transition={{duration:0.4}}
className="rounded-lg mb-4 w-full h-40 object-cover"
/>

<motion.p
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:0.15}}
className="text-sm font-nunito"
style={{
    color: facility.text
  }}
>
{facility.description}
</motion.p>

</motion.div>

)}

</AnimatePresence>

</motion.div>

)

})}

</div>

</div>

</section>

)

}