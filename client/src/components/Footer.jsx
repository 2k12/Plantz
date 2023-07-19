import React from 'react';
import './footer.css';

function Footer() {
    return (
        <>
            <footer className="footer bg-gray-900 border-t border-purple-500">
                <div className="container max-w-6xl mx-auto flex items-center justify-center px-2 py-2">
                    <p className="text-white mr-2">© 2023 Derechos de autor:</p>
                    <a
                        className="text-gray-900 dark:text-neutral-400 md:dark:hover:text-purple-500"
                        href="https://github.com/2k12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        2K12
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer;
