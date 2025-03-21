"use client";

import dynamic from "next/dynamic";
import { Grid2 } from "@mui/material";

const Nav = dynamic(() => import("./nav"));
const Bar = dynamic(() => import("./navbar"))
export default function NavWrapper() {
    return (
    <Grid2 container direction="row" justifyContent="center">
        <Grid2 size = {{xs: 10, md: 8}}>
            <Nav />
            <Bar />
        </Grid2>
  </Grid2>  
    );
}