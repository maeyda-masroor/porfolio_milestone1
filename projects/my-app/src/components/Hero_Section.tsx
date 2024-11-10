import Image from "next/image";
import Logo from '../public/logo.jpeg';
import NODE from '../public/node.png';
import CSS from '../public/css.png';
import JS from '../public/js.png';
import REACTJS from '../public/reactjs.png';
import HTML from '../public/html.png';

export default function Hero_Section(){
    return (
 <div className="flex flex-col md:flex-row">
  <div className="p-4 bg-blue-200 m-2 w-full md:w-1/2">
    <div>HI THERE!</div>
    <div className="text-3xl font-bold">Welcome to my portfolio</div>
    <div className="text-lg">I'm a full stack developer with a passion for building scalable</div>
  </div>
  <div className="p-4 bg-green-200 m-2 w-full md:w-1/2">
  <div className="m-2 p-4">
  <div className="flex p-10">
  <div className="w-1/4 ">
  <Image className="rounded-md border-2 border-black" src={REACTJS} alt="c" width={50} height={50}/>  
  <div className="w-3/4">
  <Image className="rounded-md border-2 border-black align-bottom" src={REACTJS} alt="c" width={300} height={300}/>
  </div>
  </div>
  <div className="flex w-full">
    <div className="bg-blue-600 w-1/4 ">
        <Image className="rounded-md border-2 border-black" src={REACTJS} alt="c" width={50} height={50}/>
    </div>
    <div className="bg-blue-600 w-1/4 ">
    <Image className="rounded-md border-2 border-black" src={REACTJS} alt="c" width={50} height={50}/>
   
    </div>
    <div className="bg-blue-600 w-1/4 ">
    <Image className="rounded-md border-2 border-black" src={REACTJS} alt="c" width={50} height={50}/>
    </div>
    <div className="bg-blue-600 w-1/4 ">
    <Image className="rounded-md border-2 border-black" src={REACTJS} alt="c" width={50} height={50}/>
    </div>
    </div>
    </div>
  </div>
  </div>
  </div>


    )
}