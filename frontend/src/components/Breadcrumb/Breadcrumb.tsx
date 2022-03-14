import { SECONDARY_GRAY, SMALL_MARGIN } from "../../utils/Constants"

import Breadcrumbs from "@mui/material/Breadcrumbs"
import { Category } from "../../types/Category"
import Link from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

interface BreadcrumbProps {
  categories?: Array<Category>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  let lastCategory =
    props.categories && props.categories !== undefined
      ? props.categories[props.categories.length - 1]
      : null

  return (
    <>
      {props.categories && props.categories !== undefined ? (
        <Stack spacing={2} marginY={SMALL_MARGIN}>
          <Breadcrumbs
            separator="›"
            aria-label="breadcrumb"
            color={SECONDARY_GRAY}
          >
            {props.categories.map((category) =>
              category !== lastCategory ? (
                <Link
                  underline="hover"
                  key={category.id}
                  color={SECONDARY_GRAY}
                  href="#"
                  fontSize={14}
                >
                  {category.name}
                </Link>
              ) : (
                <Typography
                  key={category?.id}
                  color={SECONDARY_GRAY}
                  fontWeight="bold"
                  fontSize={14}
                >
                  {category?.name}
                </Typography>
              )
            )}
          </Breadcrumbs>
        </Stack>
      ) : null}
    </>
  )
}
