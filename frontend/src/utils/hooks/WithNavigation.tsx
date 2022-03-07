import { Navbar } from "../../components/Navbar/Navbar"

interface WithNavigationProps {
  children: any
}

/**
 * A functional React component as a wrapper for a page with navigation.
 * Renders the page's navbar and content
 */
export default function WithNavigation(props: WithNavigationProps) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}
