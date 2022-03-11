import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface Category {
  id: string,
  name: string
}

interface BreadcrumbProps {
  categories?: Array<Category>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  let lastCategory = props.categories && props.categories != undefined ? props.categories[props.categories.length - 1] : null

  return (
    <>
    {props.categories && props.categories != undefined ? <Stack spacing={2} marginY="16px">
      <Breadcrumbs separator="›" aria-label="breadcrumb" color="#999999">
        {props.categories.map(category => (
          category != lastCategory
          ? (<Link underline="hover" key={category.id} color="#999999" href="#" fontSize={14}>
            {category.name}
          </Link>)
          : (<Typography key={category?.id} color="#999999" fontWeight="bold" fontSize={14}>
            {category?.name}
          </Typography>)
        ))}
      </Breadcrumbs>
    </Stack> : null}
    </>
  )
}
