import './footer.css'
function Footer() {
    return (
        <>
            <footer
                className="bg-gray-900 text-center dark:bg-gray-900 lg:text-left border-t dark:border-purple-500 py-2">
                <div className=" text-center text-neutral-700 dark:text-white ">
                    © 2023 Copyright:
                    <a
                        className="text-neutral-800 dark:text-neutral-400 md:dark:hover:text-purple-500"
                        href="https://github.com/2k12"
                        target='_blank'
                    > 2K12</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;