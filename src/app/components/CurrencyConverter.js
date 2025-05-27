// 'use client';
// import { useEffect } from 'react';
// import useGeoLocation from "react-ipgeolocation";

// export function currencyConvertor(dollar) {
//     if(localStorage.getItem('country')) {
//         const location = useGeoLocation();
//         useEffect(() => {
//             if (location.country) {
//                 localStorage.setItem('country', location.country);
//             }
//         }, [location.country]);
//         const country = localStorage.getItem('country');
          
//         if(country === "IN") {
//             return '₹'+dollar * 75;
//         }
//         else {
//             return '$'+dollar;
//         }
//     }
// }