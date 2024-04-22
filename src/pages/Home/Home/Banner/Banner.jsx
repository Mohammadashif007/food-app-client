import bannerImage from "../../../../assets/images/banner/banner.jpeg";
const Banner = () => {
    return (
        <div
            className="my-10 rounded-2xl"
            style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "450px",
            }}
        >
            <div className="text-white flex flex-col justify-center pl-10 py-16">
                <div>
                    <h1 className="text-6xl font-semibold">
                        Order your <br /> favorite food here
                    </h1>
                    <p className="text-[18px] my-6">
                        Embark on a Flavorful Journey with Our Curated <br />{" "}
                        Collection of Recipes – From Quick and Easy Dishes to
                        Gourmet Creations!
                    </p>
                    <button className="bg-white px-4 py-2 rounded-full text-black">
                        View Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
