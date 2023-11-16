import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import HeadBar from "@/components/HeadBar";
import TwoImgSplashAngled from "@/components/TwoImgSplashAngled";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <Box>
      <TwoImgSplashAngled
        bgsrc={"./bg-3.jpg"}
        heading={"Medical services that you can trust"}
        sub={"Your health is our priority"}
      />
      <Contact />
      <Stats />
      <Testimonials />
    </Box>
  );
}
