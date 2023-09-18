import Image from 'next/image'
/*import Header from './components/Header'; */
import Navbar from './components/Navbar';
import Invest from './components/Invest';
import Service from './components/Service';
import Trading from './components/Trading';
import Testimonial from './components/Testimonial'; 
import Awards from './components/Awards';
import Articles from './components/Articles';
import FAQS from './components/FAQS';
import Footer from './components/Footer';

import { NavigateBeforeRounded } from '@mui/icons-material';

const cards = [
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",
    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
  {
    feedback: "“ I am Very Happy With New Platform “",

    name: "Rajesh H.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <Invest/>
      <Service/>
      <Trading/>

      <Testimonial cards={cards}/>
      <Awards/>
      <Articles/>
      <FAQS/>
      <Footer/>
    </main>
  )
}
