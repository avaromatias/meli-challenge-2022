import { Container } from "@mui/material"
import { SMALL_MARGIN } from "../Constants"

interface WithContainerProps {
  children: any
}

/**
 * A functional React component as a wrapper for a page with container.
 * Renders the container and content
 */
export default function WithContainer(props: WithContainerProps) {
  return (
    <Container fixed style={{ marginTop: SMALL_MARGIN }}>
      {props.children}
    </Container>
  )
}
