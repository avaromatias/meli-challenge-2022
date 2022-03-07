import Breadcrumbs from "@mui/material/Breadcrumbs"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"

export const Breadcrumb = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="#999999" href="#" fontSize={14}>
      Electrónica, Audio y Video
    </Link>,
    <Link underline="hover" key="2" color="#999999" href="#" fontSize={14}>
      iPod
    </Link>,
    <Typography key="3" color="#999999" fontWeight="bold" fontSize={14}>
      32 GB
    </Typography>,
  ]

  return (
    <Stack spacing={2} marginY="16px">
      <Breadcrumbs separator="›" aria-label="breadcrumb" color="#999999">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  )
}
