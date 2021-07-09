export default function MainLayout(props) {
    return( <>
    <header>Our header</header>
    <main>{props.children}</main>
    <footer>Our footer</footer>
    </>)
}