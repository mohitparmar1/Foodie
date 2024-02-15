import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import { Search } from "lucide-react";

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-9 flex flex-col gap-5">
                <h1 className="text-5xl font-bold tracking-tight text-center text-orange-600 -mt-16">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl text-center">Food is just a click away!</span>
                <div>
                    <img src="Search" />
                </div>
            </div>
            <div
                className="grid
                md:grid-cols-2 gap-5"
            >
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span
                        className="font-bold text-3xl tracking-tight">
                        Order Takeway even faster
                    </span>
                    <span>
                        Download our app to get food delivery at your fingertips
                    </span>
                    <img
                        src={appDownloadImage}
                        alt="Download the app"
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;