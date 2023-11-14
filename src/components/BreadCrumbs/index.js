// 'use client'
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import { Container } from "@mui/material";
// import Typography from '@mui/material/Typography';
// import { usePathname } from "next/navigation";


// const HeadBar = () => {
//     const breadcrumbs = [
//         <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
//           MUI
//         </Link>,
//         <Link
//           underline="hover"
//           key="2"
//           color="inherit"
//           href = usePathname();
//           onClick={handleClick}
//         >
//           Core
//         </Link>,
//         <Typography key="3" color="text.primary">
//           Breadcrumb
//         </Typography>,
//       ];
//     return (

// export default function breadcrumb() {
//     const pathname = usePathname();
//     console.log(pathname.split('/'));
//     return <div><Container maxWidth="xl">THIS IS Departments/Cardiac pg </Container></div>
//   }



//   const Departments  = () => {
//     return <Breadcrumbs separator="›" aria-label="breadcrumb">
//     {breadcrumbs}
//   </Breadcrumbs>
// }
// import { useLocation }  from 'react-router-dom';
'use client'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { Breadcrumbs } from "@mui/material";

export default function BreadCrumb() {
    const location = usePathname();
    let current_path = ''
    const crumbs  = location.split('/')
    .map((crumb, idx) => {current_path = `/${crumb}`
    return (
        <Link underline="hover" key={idx} color="inherit" href={current_path} >
            {crumb != '' ? crumb.charAt(0).toUpperCase() + crumb.slice(1) : 'Home'}
            </Link>
    )
})
    return (
        <Breadcrumbs separator=">">
        {crumbs}
        </Breadcrumbs>
    )
}