'use client'
import { Container } from "@mui/material";
import { usePathname } from "next/navigation";
import BreadCrumb from '@/components/BreadCrumbs';

export default function Cardiac() {
    const pathname = usePathname();
    console.log(pathname.split('/'));
    return <div><Container maxWidth="xl">
      <BreadCrumb />
      THIS IS Departments/Cardiac pg </Container></div>
  }
