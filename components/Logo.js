const Logo = () => {
    return(
        <a href="/" className="flex">
            <div className="flex-auto md:block">
                <svg width="63" height="63" stroke="currentcolor" fill="transparent" style={{ display: 'block' }}>
                    <path d="M26.25 31.5H36.75M13.125 21H49.875H13.125ZM13.125 21C11.7326 21 10.3973 20.4469 9.41269 19.4623C8.42812 18.4777 7.875 17.1424 7.875 15.75C7.875 14.3576 8.42812 13.0223 9.41269 12.0377C10.3973 11.0531 11.7326 10.5 13.125 10.5H49.875C51.2674 10.5 52.6027 11.0531 53.5873 12.0377C54.5719 13.0223 55.125 14.3576 55.125 15.75C55.125 17.1424 54.5719 18.4777 53.5873 19.4623C52.6027 20.4469 51.2674 21 49.875 21H13.125ZM13.125 21V47.25C13.125 48.6424 13.6781 49.9777 14.6627 50.9623C15.6473 51.9469 16.9826 52.5 18.375 52.5H44.625C46.0174 52.5 47.3527 51.9469 48.3373 50.9623C49.3219 49.9777 49.875 48.6424 49.875 47.25V21H13.125Z" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="flex-auto pl-4 items-center relative cursor-pointer">
                Annuaire des sites<br/>publics du Sénégal
            </div>
        </a>
    )
}

export default Logo