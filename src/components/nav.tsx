import Image from "next/image";
import logo from "../assets/SOcio Logo.png"
import { Grid2 } from "@mui/material";

export default function Nav (){

    return(
        <Grid2 container direction="row" justifyContent="center" >
            <Image src={logo} alt = "logo socio" width={120} height={120}  style={{ position: 'relative', zIndex: -1 }} />
        </Grid2>
    );
}