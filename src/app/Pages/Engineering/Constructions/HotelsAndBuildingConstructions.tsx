import React from "react";
import ProjectsAndEngineeringItem from "../../Home/ProjectsAndEngineering";
import { title } from "process";

const Projects: { title: string, description: string, metrics: Record<string, number>, img: string, location: string }[] = [
    {
        title: "Solitaire",
        location: "Nigeria",
        description: "Discover our contemporary four-bedroom villa, featuring a stunning double-volume living room with wall-tiled accents, floor-to-ceiling windows that bathe the space in natural light, ceiling-mounted Bluetooth speakers for immersive sound, and a dedicated virtual reality room. The villa boasts four modern bathrooms and four bedrooms, each with its own long balcony, all thoughtfully furnished. This villa is an ideal choice for short-term rentals and vacation getaways.",
        metrics: { "Planning": 100, "Financing": 100, "Completion": 100 },
        img: "https://lh3.googleusercontent.com/pw/AIL4fc-CTFV5tGYTnp9sqiyfiQPkLZ_QI1z_br3ccBBmFo4dgQE84WV0PKC_q-wogcmWxUzFySAHGuPq8Ug2b3CM5UN8o7mBfdKhHjdmnGS3qz8U6o3qf0Uu=w2400"
    },
    {
        title: "Twinmotion",
        location: "Nigeria",
        description: "Explore our charming row houses and fully detached four-bedroom buildings. Each building comes with its own parking space for up to two cars, along with a delightful lawn area on the ground floor. The four spacious bedrooms are all ensuite, and each room offers a private balcony with a lovely view. These two-story homes feature two rooms on each floor and are equipped with convenient Bluetooth ceiling speakers. Perfectly planned for vacation rentals and short-term stays.",
        metrics: { "Planning": 100, "Financing": 100, "Completion": 95 },
        img: "https://lh3.googleusercontent.com/pw/AIL4fc91R3Cndp22w4ljZOP4j0e9iW-JSvT3zpsaMAwuFME2i1UP6fbwivqOIrNdJe0RwzYoN6MlkBN-p_TKzOB20Z-mMXqjwI6VzEMQdaXjBQxeS0B_3JsS=w1920-h1080"
    },
    {
        title: "Apartment Building",
        location: "Germany",
        description: "We're in the planning phase for affordable apartment buildings that will be completed and available for sale. Each apartment will offer a minimum of 100 sqm of floor space, complete with balconies and a fully fitted kitchen. If you're interested in participating in the project financing of this endeavor, we invite you to reach out to us for further details.",
        metrics: { "Planning": 60, "Financing": 20, "Completion": 0 },
        img: "https://images.adsttc.com/media/images/5b7c/03d2/f197/cc92/f600/010f/large_jpg/ADP_Toedistrasse_Outside_3.jpg?1534854084"
    },
    {
        title: "5 Star Hotel",
        location: "Germany",
        description: "We're excited to announce our upcoming 5-star hotel project in Europe, featuring expansive resorts, a swimming pool, a restaurant, spa facilities, and massage services. Currently, we are in the planning stage and actively securing the necessary financing, with an estimated budget of approximately 12 million euros. We anticipate an annual revenue of at least 5 million euros once the project is up and running. Stay tuned for more updates on this luxurious destination!.",
        metrics: { "Planning": 40, "Financing": 15, "Completion": 0 },
        img: "https://www.snyder-associates.com/wp-content/uploads/2018/11/HiltonDesMoines_lobby-2-1024x600.jpg"
    }
]

const HotelsAndBuildingConstruction = () => {
    return (
        <div className="w-full border">
            {
                Projects.map(project => (
                    <div key={project.title} className="w-full border-b last:border-b-0 bg-white hover:shadow-2xl hover:border-blue-900 md:grid md:grid-cols-2 gap-16 md:p-16">
                        <div className="w-full h-72  md:h-96 bg-red col-span-1">
                            <img alt="" className="h-full w-full object-cover" src={project.img}></img>
                        </div>
                        <div className="md:col-span-1 md:p-0 p-6">
                            <p className="text-3xl font-bold mb-6 flex flex-row items-center">{project.title}<span className="text-sm font-normal">&nbsp;{project.location.toUpperCase()}</span></p>
                            <p className="text-md md:text-xl">{project.description}</p>
                            {
                                Object.keys(project.metrics).map(metric => (
                                    <div className="w-full my-3 grid grid-flow-row grid-cols-7 border-b items-center">
                                        <p className="col-span-2">{metric}</p>
                                        <div className="col-span-5">
                                            <div className="bg-blue-950 rounded-xl text-white shadow text-sm text-right px-6" style={{ width: `${project.metrics[metric]}%` }}>
                                                {project.metrics[metric]}%
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div>

                            </div>
                            <button type="button" className="px-6 py-3 bg-blue-950 text-white mt-6">
                                More Details
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HotelsAndBuildingConstruction;