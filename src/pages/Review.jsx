// import React from 'react'
// import { FaStar } from "react-icons/fa6";
// import { FaMapMarkerAlt } from "react-icons/fa";

// export default function Review() {
//   return (
//     <>
//     <div className='flex'>
//     <div className='bg-blue-700 w-[25%] h-[1200px]'></div>
//       <div className='bg-pink-500 w-[30%] h-[1200px]'></div>
//       <div className='bg-yellow-400 w-[20%] h-[1200px]'></div>
//       <div className='bg-red-500 w-[25%] h-[1200px]'></div>
//     </div>
//      <div className='pt-40 pl-20 absolute bottom-[-400px] left-56'>
//      <h1 className='text-2xl font-bold w-[200px]'>Most Popular Visit Destination</h1>
//         <div className='flex'>
//            <div>
//            <div className='pt-5'>
//                 <h1 className='bg-blue-600 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>01</h1>
//                 <h1 className='text-lg font-bold pt-1'>Angkor Wat</h1>
//                 <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
//              </div>
//              <div className='pt-5'>
//                 <h1 className='bg-pink-400 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>02</h1>
//                 <h1 className='text-lg font-bold pt-1'>Angkor Thom</h1>
//                 <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
//              </div>
//              <div className='pt-5 pb-10'>
//                 <h1 className='bg-orange-500 w-10 h-9 text-white text-xl rounded-xl pl-2 font-bold'>03</h1>
//                 <h1 className='text-lg font-bold pt-1'>Phnum Kulen</h1>
//                 <p className='w-[400px] text-xs text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit accusantium accusamus suscipit sed illum similique.</p>
//              </div>
//            </div>

//            <div className='pl-1'>
//                 <img className='w-[200px] h-64 rounded-[49%]' src="./images/2.jpg" alt="" />
//                 <img className='w-24 h-32 rounded-[30%] border-white border-2 bottom-28 relative right-7 ' src="./images/5.jpeg" alt="" />
//            </div>
//         </div>
//         <div className='text-purple-400'>Explore</div>
//         <h1 className='font-bold text-lg'>Explore to destination</h1>
//         <div className='flex gap-4'>
//                 <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
//                      <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 1.jpg" alt="" />
//                      <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
//                          <p className=' text-xs pl-5'>4.9</p>
//                          <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
//                               <FaStar />
//                          </div>                       
//                      </div>
//                      <div className='left-2 relative'>
//                            <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
//                            <div className='flex pb- pt-1'>
//                               <div className='text-red-500'>
//                                     <FaMapMarkerAlt />
//                               </div>
//                               <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                              
//                            </div>
                           
//                            <div className='flex justify-between'>
//                               <div className='flex'>
//                                  <p className='font-bold '>$30</p>
//                                  <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
//                               </div>
                              
//                               <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
//                            </div>
//                      </div>
//                 </div>
//                 <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
//                      <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 1.jpg" alt="" />
//                      <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
//                          <p className=' text-xs pl-5'>4.9</p>
//                          <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
//                               <FaStar />
//                          </div>                       
//                      </div>
//                      <div className='left-2 relative'>
//                            <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
//                            <div className='flex pb- pt-1'>
//                               <div className='text-red-500'>
//                                     <FaMapMarkerAlt />
//                               </div>
//                               <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                              
//                            </div>
                           
//                            <div className='flex justify-between'>
//                               <div className='flex'>
//                                  <p className='font-bold '>$30</p>
//                                  <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
//                               </div>
                              
//                               <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
//                            </div>
//                      </div>
//                 </div>
//                 <div className='bg-white h-[295px] w-48 shadow-lg top-10 relative rounded-t-[15%] rounded-b-xl'>
//                      <img className='w-48 h-52 rounded-t-[15%] relative' src="./images/paris 1.jpg" alt="" />
//                      <div className='bg-white w-10 h-5 absolute bottom-[265px] left-[140px] rounded-3xl'>
//                          <p className=' text-xs pl-5'>4.9</p>
//                          <div className='text-yellow-400 bottom-3 relative text-xs pl-1'>
//                               <FaStar />
//                          </div>                       
//                      </div>
//                      <div className='left-2 relative'>
//                            <h1 className='font-bold text-md pt-1'>ABC Hotel</h1>
//                            <div className='flex pb- pt-1'>
//                               <div className='text-red-500'>
//                                     <FaMapMarkerAlt />
//                               </div>
//                               <p className='text-gray-400 text-xs'>Phum Mouy, Srok 1</p>
                              
//                            </div>
                           
//                            <div className='flex justify-between'>
//                               <div className='flex'>
//                                  <p className='font-bold '>$30</p>
//                                  <span className='text-xs text-gray-400 pt-1.5'>/per night</span>
//                               </div>
                              
//                               <button type="button" className='bg-blue-200 h-8 w-20 rounded-lg text-xs right-4 relative'>Book Now</button>
//                            </div>
//                      </div>
//                 </div>
               
//         </div>
         
      
//      </div>
    
//     </>
//   )
// }
