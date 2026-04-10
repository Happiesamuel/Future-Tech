"use client";

import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScoll";
import Footer from "@/components/layout/Footer";
import App from "@/components/layout/App";
import Revolution from "@/components/Home/Revolution";
import Preloader from "@/components/layout/Preloader";
import React from "react";

export default function NewApp({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />

      <div className="w-full relative text-white">
        <div className="max-w-480 mx-auto my-0">
          <Navbar />
          <SmoothScroll>
            <div className="bg-[#1a1a1a] min-h-screen">
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
                    repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
                    repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
                    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
                    radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
                  `,
                  backgroundSize:
                    "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
                  backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
                }}
              />
              <div className="max-w-480 mx-auto my-0">
                <App>
                  {children}
                  <Revolution />
                  <Footer />
                </App>
              </div>
            </div>
          </SmoothScroll>
        </div>
      </div>
    </>
  );
}
// "use client";
// import Navbar from "@/components/layout/Navbar";
// import SmoothScroll from "@/components/layout/SmoothScoll";
// import Footer from "@/components/layout/Footer";
// import App from "@/components/layout/App";
// import Revolution from "@/components/Home/Revolution";
// import Preloader from "@/components/layout/Preloader";
// import React, { useEffect, useState } from "react";
// export default function NewApp({ children }: { children: React.ReactNode }) {
//   const [load, setLoad] = useState(true);
//   useEffect(function () {
//     setTimeout(() => {
//       setLoad(false);
//     }, 3000);
//   }, []);
//   return (
//     <>
//       {load ? (
//         <Preloader />
//       ) : (
//         <div className="  w-full relative text-white">
//           <div className="max-w-480 mx-auto my-0">
//             <Navbar />
//             <SmoothScroll>
//               <div className="bg-[#101014]  min-h-screen">
//                 <div
//                   className="absolute  inset-0 z-0 pointer-events-none"
//                   style={{
//                     backgroundImage: `
//         repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
//         repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
//        repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
//         repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
//         radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
//       `,
//                     backgroundSize:
//                       "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
//                     backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
//                   }}
//                 />
//                 <div className="max-w-480 mx-auto my-0">
//                   <App>
//                     {children}
//                     <Revolution />

//                     <Footer />
//                   </App>
//                 </div>
//               </div>
//             </SmoothScroll>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
