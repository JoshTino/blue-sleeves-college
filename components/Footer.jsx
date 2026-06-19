import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){

return(

<footer className="bg-primary text-white py-10">

<div className="max-w-6xl mx-auto px-5 grid md:grid-cols-3 gap-8">

<div>
<h3 className="font-bold text-lg font-nunito">
BLUESLEEVES COLLEGE
</h3>
<p className="font-nunito">Agege, Lagos State, Nigeria, 100283</p>
</div>

<div>
{/*<h4 className="font-semibold mb-2">Quick Links</h4>*/}
<ul className="space-y-1">
<a href="#gallery" className="font-nunito"><li>Gallery</li></a>
<a href="#academics" className="font-nunito"><li>Academics</li></a>
<a href="#facilities" className="font-nunito"><li>Facilities</li></a>
</ul>
</div>

<div className="flex justify-around gap-4">
<a href="https://facebook.com/profile.php?id=61566284780060"><Facebook/></a>
<a href=""><Instagram/></a>
<Twitter/>
</div>

</div>

<p className="text-center mt-6 text-sm font-nunito">
© {new Date().getFullYear()} BLUESLEEVES COLLEGE
</p>

</footer>

)

}