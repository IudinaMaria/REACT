import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm md:text-base font-light">
                    &copy; {new Date().getFullYear()} REACT PIZZA TEST. All rights reserved or not, I don't care. :)
                </p>
            </div>
        </footer>
    );
}

export default Footer;