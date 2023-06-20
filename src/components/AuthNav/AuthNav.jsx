import { Link, Box } from "./AuthNav.styled"

export const AuthNav = () => {
    return (
        <Box>
        <Link to="/login">Log In</Link>
        <Link to="/register">Register</Link>
      </Box>
    )
}