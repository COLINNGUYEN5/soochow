import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@material-tailwind/react";

export function CarouselWithContent() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[500px]"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="relative h-full w-full">
                    <img
                        src="/waishuangxi.jpg"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <Typography variant="h1" color="white" className="text-3xl md:text-4xl lg:text-5xl">
                            Waishuangxi River
                        </Typography>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
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
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
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
            </SwiperSlide>
        </Swiper>
    );
}
