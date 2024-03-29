import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import Logo from '../Logo'

const Header = () => {

    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const switchTheme = () => {
        if (isMounted) {
            setTheme(theme === "light" ? "dark" : "light");
        }
    }

    return (
        <header>
            <div className="container mx-auto">
                {/* logo */}
                <nav className="w-full flex relative justify-between items-center mx-auto px-8 h-20">
                    <div className="inline-flex text-2xl">
                        <Logo/>
                    </div>

                    {/* login */}
                    <div className="flex-initial">
                        <div className="flex justify-end items-center relative">

                            <div className="flex mr-4 items-center">
                                <div className="block relative">
                                    <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative " onClick={switchTheme}>
                                        <div className="flex items-center h-5">
                                            <div className="_xpkakx">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <a className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full" href="https://github.com/Code-for-Senegal/etat" target="_blank">
                                    <div className="flex items-center relative cursor-pointer whitespace-nowrap">
                                        Contribuer
                                        <div className="_xpkakx">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="currentcolor" className="w-5 h-5">
                                                <path d="M6.68952 16.3109C6.68952 16.3891 6.59677 16.4516 6.47984 16.4516C6.34677 16.4633 6.25403 16.4008 6.25403 16.3109C6.25403 16.2328 6.34677 16.1703 6.46371 16.1703C6.58468 16.1586 6.68952 16.2211 6.68952 16.3109ZM5.43548 16.1352C5.40726 16.2133 5.4879 16.3031 5.60887 16.3266C5.71371 16.3656 5.83468 16.3266 5.85887 16.2484C5.88306 16.1703 5.80645 16.0805 5.68548 16.0453C5.58065 16.018 5.46371 16.057 5.43548 16.1352ZM7.21774 16.0688C7.10081 16.0961 7.02016 16.1703 7.03226 16.2602C7.04435 16.3383 7.14919 16.3891 7.27016 16.3617C7.3871 16.3344 7.46774 16.2602 7.45564 16.182C7.44355 16.1078 7.33468 16.057 7.21774 16.0688ZM9.87097 1.10001C4.27823 1.10001 0 5.21329 0 10.6313C0 14.9633 2.81452 18.6703 6.83468 19.975C7.35081 20.0648 7.53226 19.7563 7.53226 19.5023C7.53226 19.2602 7.52016 17.9242 7.52016 17.1039C7.52016 17.1039 4.69758 17.6898 4.10484 15.9398C4.10484 15.9398 3.64516 14.8031 2.98387 14.5102C2.98387 14.5102 2.06048 13.8969 3.04839 13.9086C3.04839 13.9086 4.05242 13.9867 4.60484 14.9164C5.4879 16.4242 6.96774 15.9906 7.54435 15.7328C7.6371 15.1078 7.89919 14.6742 8.18952 14.4164C5.93548 14.1742 3.66129 13.8578 3.66129 10.1C3.66129 9.02579 3.96774 8.48672 4.6129 7.79922C4.50806 7.54532 4.16532 6.49844 4.71774 5.14688C5.56048 4.89297 7.5 6.20157 7.5 6.20157C8.30645 5.98282 9.17339 5.86954 10.0323 5.86954C10.8911 5.86954 11.7581 5.98282 12.5645 6.20157C12.5645 6.20157 14.504 4.88907 15.3468 5.14688C15.8992 6.50235 15.5565 7.54532 15.4516 7.79922C16.0968 8.49063 16.4919 9.02969 16.4919 10.1C16.4919 13.8695 14.1169 14.1703 11.8629 14.4164C12.2339 14.725 12.5484 15.3109 12.5484 16.2289C12.5484 17.5453 12.5363 19.1742 12.5363 19.4945C12.5363 19.7484 12.7218 20.057 13.2339 19.9672C17.2661 18.6703 20 14.9633 20 10.6313C20 5.21329 15.4637 1.10001 9.87097 1.10001ZM3.91935 14.5727C3.86694 14.6117 3.87903 14.7016 3.94758 14.7758C4.0121 14.8383 4.10484 14.8656 4.15726 14.8148C4.20968 14.7758 4.19758 14.6859 4.12903 14.6117C4.06452 14.5492 3.97177 14.5219 3.91935 14.5727ZM3.48387 14.2563C3.45565 14.307 3.49597 14.3695 3.57661 14.4086C3.64113 14.4477 3.72177 14.4359 3.75 14.3813C3.77823 14.3305 3.7379 14.268 3.65726 14.2289C3.57661 14.2055 3.5121 14.2172 3.48387 14.2563ZM4.79032 15.6469C4.72581 15.6977 4.75 15.8148 4.84274 15.8891C4.93548 15.9789 5.05242 15.9906 5.10484 15.9281C5.15726 15.8773 5.13306 15.7602 5.05242 15.6859C4.96371 15.5961 4.84274 15.5844 4.79032 15.6469ZM4.33065 15.0727C4.26613 15.1117 4.26613 15.2133 4.33065 15.3031C4.39516 15.393 4.50403 15.432 4.55645 15.393C4.62097 15.3422 4.62097 15.2406 4.55645 15.1508C4.5 15.0609 4.39516 15.0219 4.33065 15.0727Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
