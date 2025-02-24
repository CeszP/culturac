import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="p-4 text-white bg-blue-600">
            <div className="container flex justify-between mx-auto">
                <Link href="/" className="text-xl font-bold">
                    Eventos MX
                </Link>
                <div className="space-x-4">
                    <Link href="/eventos">Eventos</Link>
                    <Link href="/planeacion">Planeación</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
