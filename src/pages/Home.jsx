import React, { useRef } from 'react'
// import Header from '../components/Header'
import { GoDotFill } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { RiShieldCheckLine } from "react-icons/ri";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaHotel } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { FaStar } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";

export default function Home() {
  const home = useRef();
  const review = useRef();
  const about = useRef();
  const contact = useRef();
  const srcollHandle = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({top: elmRef.current.offsetTop,behavior: "smooth"});
  }
  return (
    <>
        {/* Head */}
      <section ref={home} className=''>
      <div className='md:grid-4'>
          <img className='w-full h-screen' src='./images/1.jpg' alt="AngKor wat" />
      </div>
      <div  className='flex gap-10 bottom-[520px] text-xl sticky top-០'>
          <h1 className='relative left-20 text-2xl text-white'>Travel</h1>
            <ul className='md:flex lg:flex flex gap-10 relative left-[290px] text-white'>
              <li className='cursor-pointer' onClick={() => srcollHandle(home)}>Home</li>
              <li className='cursor-pointer' onClick={() => srcollHandle(review)} >Review</li>
              <li className='cursor-pointer' onClick={() => srcollHandle(about)}>About</li>
              <li className='cursor-pointer' onClick={() => srcollHandle(contact)}>Contact Us</li>
            </ul>
          <div>
            <div className='left-[450px] relative bg-white w-32 h-12 pt-2 rounded-full text-center bottom-2'>Sign In</div>
          </div>
      </div>
      <div className='absolute bottom-[250px] text-white text-7xl font-bold left-20'>Visit <br/> Cambodia </div>
      <div className='absolute bottom-24 flex gap-0 left-[950px]'>
        <div className=' text-white'>
          <GoDotFill />        
        </div>
        <div className='text-gray-400'>
          <GoDotFill />   
        </div>
        <div className='text-gray-400'>
          <GoDotFill />   
        </div>
      </div>

      <div className=''>
        <div className=' absolute bottom-4 bg-white center pl-5 pt-4 rounded-3xl w-32 h-28 left-72 '>
            <div className='flex gap-2 bg-teal-500 w-24 rounded-3xl h-10 pl-4 pt-1 right-1 bottom-1 relative  '>
                <div className='text-white pt-2'>
                    <FaHotel />
                </div>
                <div className=' font-bold w-32 h-12 pt-1 text-white'>Hotel</div>
            </div>
        </div>
        <div className='flex gap-10 absolute shadow-rd bg-white w-[650px] h-36 left-72 bottom-[-70px] rounded-2xl border-b-black'>
          <div className='bg-white shadow-rd flex gap-10 relative pt-4 top-10 h-20 w-[500px] left-10 rounded-3xl'>
               <div>
                  <div className='flex gap-1 pl-5'>
                    <div className='pt-1'>
                        <IoLocationOutline />
                    </div>
                    <h1 className='font-bold'>Location</h1>
                  </div>                 
                  <h2 className='text-gray-400 pl-10'>Where are you going?</h2>
                </div>
                <div className='pr-6'>
                    <div className='flex gap-1'>
                        <div className='pt-1'>
                            <RiShieldCheckLine />
                        </div>
                        <h1 className='font-bold'>Check in</h1>
                    </div>                  
                  <h2 className='text-gray-400 pl-5'>Add date</h2>
                </div>
                <div>
                    <div className='flex gap-1'>
                            <div className='pt-1'>
                                <MdOutlineShoppingCartCheckout />
                            </div>
                            <h1 className='font-bold'>Check Out</h1>
                    </div> 
                  <h2 className='text-gray-400 pl-5'>Add date</h2>
                </div>
          </div>
          <div className='bg-teal-500 w-16 h-14 text-white text-3xl top-14 relative rounded-xl pl-4 pt-3 left-6'>
              <ImSearch />
          </div>
          
        </div>
       
      {/* review */}
        <div ref={review} className='flex pl-40'>
        <div className='pt-40 pl-20 bottom-[-400px] left-56'>
        <h1 className='text-2xl font-bold w-[200px]'>Most Popular Visit Destination</h1>
            <div className='flex'>
              <div>
              <div className='pt-5'>
                    <h1 className='bg-blue-600 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>01</h1>
                    <h1 className='text-lg font-bold pt-1'>Angkor Wat</h1>
                    <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
                </div>
                <div className='pt-5'>
                    <h1 className='bg-pink-400 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>02</h1>
                    <h1 className='text-lg font-bold pt-1'>Angkor Thom</h1>
                    <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
                </div>
                <div className='pt-5 pb-10'>
                    <h1 className='bg-orange-500 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>03</h1>
                    <h1 className='text-lg font-bold pt-1'>Phnum Kulen</h1>
                    <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
                </div>
              </div>

              <div className='pl-40'>
                    <img className='w-[200px] h-64 rounded-[49%]' src="./images/2.jpg" alt="" />
                    <img className='w-24 h-32 rounded-[30%] border-white border-2 bottom-28 relative right-7 ' src="./images/5.jpeg" alt="" />
              </div>
            </div>
            <div className='text-purple-400'>Explore</div>
            <h1 className='font-bold text-lg'>Explore to destination</h1>
            <div className='flex gap-4'>
                    <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
                        <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 1.jpg" alt="" />
                        <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
                            <p className=' text-xs pl-5'>4.9</p>
                            <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
                                  <FaStar />
                            </div>                       
                        </div>
                        <div className='left-2 relative'>
                              <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
                              <div className='flex pb- pt-1'>
                                  <div className='text-red-500'>
                                        <FaMapMarkerAlt />
                                  </div>
                                  <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                                  
                              </div>
                              
                              <div className='flex justify-between'>
                                  <div className='flex'>
                                    <p className='font-bold '>$30</p>
                                    <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
                                  </div>
                                  
                                  <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
                              </div>
                        </div>
                    </div>
                    <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
                        <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 2.jpg" alt="" />
                        <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
                            <p className=' text-xs pl-5'>4.9</p>
                            <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
                                  <FaStar />
                            </div>                       
                        </div>
                        <div className='left-2 relative'>
                              <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
                              <div className='flex pb- pt-1'>
                                  <div className='text-red-500'>
                                        <FaMapMarkerAlt />
                                  </div>
                                  <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                                  
                              </div>
                              
                              <div className='flex justify-between'>
                                  <div className='flex'>
                                    <p className='font-bold '>$30</p>
                                    <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
                                  </div>
                                  
                                  <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
                              </div>
                        </div>
                    </div>
                    <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
                        <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 3.jpg" alt="" />
                        <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
                            <p className=' text-xs pl-5'>4.9</p>
                            <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
                                  <FaStar />
                            </div>                       
                        </div>
                        <div className='left-2 relative'>
                              <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
                              <div className='flex pb- pt-1'>
                                  <div className='text-red-500'>
                                        <FaMapMarkerAlt />
                                  </div>
                                  <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                                  
                              </div>
                              
                              <div className='flex justify-between'>
                                  <div className='flex'>
                                    <p className='font-bold '>$30</p>
                                    <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
                                  </div>
                                  
                                  <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
                              </div>
                        </div>
                    </div>
                    <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
                        <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 4.jpg" alt="" />
                        <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
                            <p className=' text-xs pl-5'>4.9</p>
                            <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
                                  <FaStar />
                            </div>                       
                        </div>
                        <div className='left-2 relative'>
                              <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
                              <div className='flex pb- pt-1'>
                                  <div className='text-red-500'>
                                        <FaMapMarkerAlt />
                                  </div>
                                  <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                                  
                              </div>
                              
                              <div className='flex justify-between'>
                                  <div className='flex'>
                                    <p className='font-bold '>$30</p>
                                    <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
                                  </div>
                                  
                                  <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
                              </div>
                        </div>
                    </div>
            </div>
            
          
        </div>
      </div>
    {/* About Us */}
    <div ref={about} className=' right-10 top-20 relative'>
          <div className='flex bottom-[150px] left-[5px] gap-10'>
              <div className='left-72 top-20 relative'>
                <h1 className='font-bold text-3xl '>About Us</h1>
                <p className='text-gray-300 text-lg'>Since 2010</p>
                <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur quo cum asperiores similique dolorem aliquam vel sequi doloremque possimus ab quibusdam voluptatem laborum! Repellat rerum deserunt ex. Asperiores ipsa ad deserunt aliquid delectus quo esse vel incidunt maiores aut corporis a, corrupti recusandae porro cum! Odit aliquid eveniet id inventore sapiente porro, at ipsum veritatis sunt assumenda, ad similique.</p>
              </div>
              <div className='pt-32'>
                  <img className='w-60 h-64 left-[430px] relative bottom-11' src='./images/4.webp' alt="2" />
                  <img className='w-56 h-44 bottom-44 relative left-[330px]' src='./images/4.jpg' alt="2" />
                  
              </div>
          </div>
      </div>

      {/* Contact Us */}
      <div ref={contact} className='flex gap-5 pl-60 bottom-[90px] top-10 relative cursor-pointer'>
        <div>
                <h1 className='font-bold text-3xl pb-2'>Contact Us</h1>
                  <p className='w-80 text-gray-500 text-sm'>Feel free to contant us any time.We will get back to you as soon as we can't</p>
                  <div className='pt-10'>
                          <h2 className='bottom-5 relative'>Name</h2>
                          <hr className=" h-px w-80 border-0 bg-black"/>
                          <h2 className='pt-5 pb-5'>Email</h2>
                          <hr className="h-px w-80 border-0 bg-black"/>
                          <h2 className='pt-5 pb-5 relative'>Message</h2>
                          <hr className="h-px w-80 border-0 bg-black"/>
                  </div>
                  <div className='top-10 relative bottom-10 right-1'>
                          <button className='w-80 h-12 bg-black text-white rounded-lg' type="button">SEND</button>
                  </div>
                  <div className='top-14 relative flex gap-6 pl-10'>
                    <div className=' text-2xl w-10 rounded-full h-10 border-2 border-black pl-[5px] pt-[4px]'>
                        <FaFacebookF />
                    </div>
                    <div className=' text-2xl w-10 rounded-full h-10 border-2 border-black pl-[5px] pt-[4px]'>
                      <LiaTelegram />
                    </div>
                    <div className=' text-2xl w-10 rounded-full h-10 border-2 border-black pl-[5px] pt-[5px]'>
                        <FiInstagram />
                    </div>
                    <div className=' text-2xl w-10 rounded-full h-10 border-2 border-black pl-[5px] pt-[5px]'>
                        <FiYoutube />
                    </div>
                  </div>
        </div>
        <div className='w-[350px] h-80 bg-black text-white pl-10 left-28 relative'>
          <h1 className='pt-5 font-bold'>Info</h1>
            <div className='pt-5'>
                <div className='flex gap-4 pb-5'> 
                  <div className='pt-0 text-3xl'>
                  <MdOutlineMail />
                  </div>          
                    <p className='text-sm'>info@getintouch.com.kh</p>
                </div>
                <div className='flex gap-4 pb-5'>
                  <div className='text-white pt-1 text-2xl'>
                      <FaPhoneAlt />
                  </div>
                    <p >+855 10 200 000</p>
                </div>
                <div className='flex gap-4 pb-5'>
                    <div className='pt-0 text-3xl'>
                    <MdOutlineMapsHomeWork />
                    </div>
                    <p className='text-sm'>SangKat Tonle Basac</p>
                </div>
                <div className='flex gap-4'>
                  <div className='pt-0 text-3xl'>
                  <IoMdTime />
                  </div>
                    <p>8:00 am - 5:00 pm</p>
                </div>

            </div>
        
          
        
        </div>
          
        </div>
        </div>
        </section> 
    </>
  )
}
