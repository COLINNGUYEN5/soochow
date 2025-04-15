import LocationCards from "../components/LocationCards.tsx";

export default function Location() {
    return (
        <div className="overflow-auto flex flex-col text-center my-10 mx-4">
            <label className="text-6xl font-bold">Locations</label>
            <div className="flex flex-wrap justify-center gap-12 my-5">

                <LocationCards
                    title="Soochow University"
                    description="For two months, our team and 20 of our classmates lived and worked on the Waishuangxi campus of Soochow University (東吳大學).
                     The experience gave us an understanding of the student life and community at the school."
                    link="/sites/soochow"
                    imageSrc="/soochow/front.jpg"/>

                <LocationCards
                    title="Waishuangxi"
                    description="The area does not have government-standardized borders, so what we define as the Waishuangxi watershed area is the area
                            in Shilin west of the start of the Waishuangxi— where Jingquexi and Neishuangxi merge— and east of Keelung River."
                    link="/sites/waishuangxi"
                    imageSrc="/waishuangxi.jpg"/>

                <LocationCards
                    title="National Palace Museum"
                    description="Originally opened in Beijing 1925, and then moved to Taiwan in 1948 due to the Chinese
                            Civil War, this museum contains over 700,000 artifacts. The treasury is now primarily composed of pieces from the imperial collection,
                            showcasing art from various dynasties."
                    link="/sites/national"
                    imageSrc="/national/national.jpg"/>

                <LocationCards
                    title="Shilin Night Market"
                    description="Neighboring schools such as Soochow University and near the Shilin MRT Station,
                     the Shilin Night Market is popular among both tourists and local people.
                      The night market holds many different types of businesses that includes restaurants, hawker stalls, clothing stores, and many more."
                    link="/sites/shilin"
                    imageSrc="/shilin/front.jpg"/>

                <LocationCards
                    title="Fuyu Tea House"
                    description="Fuyu Tea House is a multi-generational family-owned tea house north of the Shilin MRT station.
                     The tea house is nestled onto a small street next to the main road. They have two locations, one in Shilin,
                      and another one in Taipei."
                    link="/sites/fuyu"
                    imageSrc="/fuyu/tea.jpg"/>

                <LocationCards
                    title="Shuangxi Park"
                    description="Shuangxi Park is a microcosm of traditional Chinese culture and it serves different purposes for everyone.
                     For local residents, the park’s flora and fauna provide a place of relaxation, recreation, and more, like filming."
                    link="/sites/shuangxi"
                    imageSrc="/shuangxi/shuangxi-front.jpg"/>

                <LocationCards
                    title="Soka Art Museum"
                    description="Soka Art Museum, which is a small, peaceful, and well-curated art exhibition tucked just across the street from the National Palace Museum.
                     Unlike the grand scale of the National Palace Museum, the Soka Art Museum is an uncrowded space where we could see only one exhibit."
                    imageSrc="/soka/soka-front.jpg"
                    link="/sites/soka"/>



            </div>
        </div>
    );
}