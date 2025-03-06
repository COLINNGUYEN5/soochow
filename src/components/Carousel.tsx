import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@material-tailwind/react";
import {Link} from "react-router-dom";

export function CarouselWithContent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-full"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <Link to={"/sites/waishuangxi"}>
                    <div className="relative h-full w-full">
                        <img
                            src="/waishuangxi.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid place-items-center bg-black/75">
                            <Typography variant="h1" color="white" className="text-3xl md:text-4xl lg:text-5xl">
                                Waishuangxi
                            </Typography>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <Link to={"sites/national"}>
                    <div className="relative h-full w-full">
                        <img
                            src="/national.jpg"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <Typography variant="h1" color="white" className="text-3xl md:text-4xl lg:text-5xl">
                                National Palace Museum
                            </Typography>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <Link to={"sites/chiang"}>
                    <div className="relative h-full w-full">
                        <img
                            src="/chiang.jpg"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <Typography variant="h1" color="white" className="text-3xl md:text-4xl lg:text-5xl">
                                Chiang Kai-Shek Shilin Residence
                            </Typography>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
                <Link to={"sites/shilin"}>
                    <div className="relative h-full w-full">
                        <img
                            src="/shilin.jpg"
                            alt="image 4"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                            <Typography variant="h1" color="white" className="text-3xl md:text-4xl lg:text-5xl">
                                Shilin Night Market
                            </Typography>
                        </div>
                    </div>
                </Link>
            </SwiperSlide>
        </Swiper>
    );
}
