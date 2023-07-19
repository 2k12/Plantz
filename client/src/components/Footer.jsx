import React from 'react';
import './footer.css';

function Footer() {
    return (
        <>

            <footer className="bg-gray-900">
                <div className="container max-w-6xl mx-auto flex items-center px-2 py-2">

                    <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                        <a target="_blank" className="text-gray-900 no-underline hover:text-purple-500 hover:no-underline text-center" href="https://github.com/2k12">
                            <span className="text-gray-200">© 2023 Derechos de autor: 2K12</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
