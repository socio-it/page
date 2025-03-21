import { Grid2, Stack, Typography } from "@mui/material";

export default function beSocio() {
  return (
    <Stack> 
      <Grid2 container justifyContent="center" spacing={2}>
        <Grid2 size={{xs:10, md:6}}>
          <Typography variant="h4" textAlign="center" marginTop={{ xs: 3, md: 6 }}>
            Te ayudamos a potenciar la gestión tecnológica de tu empresa con un
            servicio automatizado de CIO eficiente, accesible y adaptado a tus necesidades.
          </Typography>  
        </Grid2>      
      </Grid2>

      <Grid2 container justifyContent="center" spacing={2}>
        <Grid2 size={{xs:12, md:8}} fontStyle={"bold"}>
          <Typography variant="subtitle1" textAlign="left" marginTop={{ xs: 3, md: 6 }} fontWeight={"bold"}>
            Ejemplo de Automatización:
          </Typography>         
        </Grid2>      
      </Grid2>      

      <Grid2 container justifyContent="center" spacing={2}>
        <Grid2 size={{xs:12, md:8}} fontStyle={"bold"}>
          <Typography variant="subtitle1" textAlign="left" marginTop={{ xs: 3, md: 6 }} fontWeight={"bold"}>
            Ejemplo de Automatización:
          </Typography>         
        </Grid2>      
      </Grid2>

      <Grid2 container justifyContent="center" spacing={2}>
        <Grid2 size={{xs:12, md:8}} fontStyle={"bold"}>
          <Typography variant="subtitle1" textAlign="left" marginTop={{ xs: 3, md: 6 }} fontWeight={"bold"}>
            Blogs:
          </Typography>         
        </Grid2>      
      </Grid2>
    </Stack>
  );
}
