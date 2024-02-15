const Footer = () => {
    return (
        <div className="bg-orange-500 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <span
                    className="text-white text-2xl font-bold"
                >Foodie</span>
                <span
                    className="text-white font-bold tracking-tight flex gap-4"
                >
                    <span >© 2021 Foodie. All rights reserved.</span>
                </span>
            </div>
        </div >
    );
}

export default Footer;