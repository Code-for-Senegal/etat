import Logo from "./Logo"

const Footer = () => {
    return(
        <footer className="bg-lightest text-gray-dark dark:bg-darkest dark:text-gray-lightest">
            <div className="container mx-auto">
                {/* logo */}
                <nav className="w-full flex relative justify-between items-center mx-auto px-8 h-20">
                    <div className="inline-flex">
                        <Logo/>
                    </div>
                    {/* login */}
                    <div className="flex-initial">
                        <div className="flex justify-end items-center relative">
                            Copyright, 2021 - Code for Senegal
                        </div>
                    </div>
                </nav>
            </div>
        </footer>
    )
}

export default Footer