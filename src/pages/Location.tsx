import LocationCards from "../components/LocationCards.tsx";

export default function Location() {
    return (
        <div className="overflow-auto flex flex-col text-center my-10 mx-4">
            <label className="text-6xl font-bold">Sites</label>
            <div className="flex flex-wrap justify-center gap-12 my-5">

                <LocationCards
                    title="Soochow University"
                    description="For two months, our team and 20 of our classmates lived and worked on the Waishuangxi campus of Soochow University (東吳大學). The experience gave us an understanding of the student life and community at the school.
                    When we came to the school, we paired with..."
                    link="/sites/soochow"
                    imageSrc="/soochow/front.jpg"/>

                <LocationCards
                    title="Waishuangxi"
                    description="Given that the Waishuangxi is the heart of our research, our team found it essential to walk along the entire length of the Waishuangxi to truly understand its vibrancy and importance.
                    Unexpectedly, we began to form our own relationship with the river..."
                    link="/sites/waishuangxi"
                    imageSrc="/waishuangxi/front.jpg"/>

                <LocationCards
                    title="Neishuangxi"
                    description="Neishuangxi, combined with the Jingquexi river, is the inner part of the Waishuangxi river. There exists only one road that takes you up the mountain, and through walking this path, the team saw a story being depicted of Neishuangxi’s history."
                    link="/sites/neishuangxi"
                    imageSrc="/neishuangxi/front.JPG"/>

                <LocationCards
                    title="National Palace Museum"
                    description="Originally opened in Beijing 1925, and then moved to Taiwan in 1948 due to the Chinese
                            Civil War, this museum contains over 700,000 artifacts. The treasury is now primarily composed of pieces from the imperial collection,
                            showcasing art from various dynasties."
                    link="/sites/national"
                    imageSrc="/national/national.jpg"/>

                <LocationCards
                    title="Soka Art Museum"
                    description="Soka Art Museum, which is a small, peaceful, and well-curated art exhibition tucked just across the street from the National Palace Museum.
                     Unlike the grand scale of the National Palace Museum, the Soka Art Museum is an uncrowded space where we could see only one exhibit."
                    imageSrc="/soka/soka-front.jpg"
                    link="/sites/soka"/>

                <LocationCards
                    title="Shung Ye Museum of Formosan Aborigines"
                    description="The Shung Ye Museum of Formosan Aborigines is the first private museum that showcases the aborigines' rich culture and history. Created to bridge the knowledge and cultural gap between the Aboriginals and the current population."
                    imageSrc="/aboriginal/front.jpg"
                    link="/sites/aboriginal"/>

                <LocationCards
                    title="Shilin Night Market"
                    description="Neighboring schools such as Soochow University and near the Shilin MRT Station,
                     the Shilin Night Market is popular among both tourists and local people.
                      The night market holds many different types of businesses that includes restaurants, hawker stalls, clothing stores, and many more."
                    link="/sites/shilin"
                    imageSrc="/shilin/front.jpg"/>

                <LocationCards
                    title="Fuyu Tea House"
                    description="Fuyu Tea House (福宇茶莊老字號) is a multi-generational family-owned tea house north of the Shilin MRT station.
                     The tea house is nestled onto a small street next to the main road. They have two locations, one in Shilin,
                      and another one in Taipei."
                    link="/sites/fuyu"
                    imageSrc="/fuyu/tea.jpg"/>

                <LocationCards
                    title="Shuangxi Park"
                    description=" We spent an afternoon taking a stroll through Shuangxi Park and Chinese Garden (雙溪公園).
                                Located at the intersection between Fulin Road and Zhishan Road in Shilin,
                                the traditional Chinese-style park spans 3 acres and serves as a tranquil..."
                    link="/sites/shuangxi"
                    imageSrc="/shuangxi/shuangxi-front.jpg"/>

                <LocationCards
                    title="Zhishanyan"
                    description="After taking 120 steps to reach the top of the hill, Zhishanyan revealed itself as a hidden gem nestled away in the Shilin District of Taiwan. At the summit, we were greeted with diverging stone paths and elderly people using a public reading room."
                    link="/sites/zhishanyan"
                    imageSrc="/zhishanyan/front.jpg"/>

                <LocationCards
                    title="Shen Nong Temple"
                    description="Our team actually visited Shennong temple twice because of how beautiful it was, especially the insanely detailed roof. Shennong Temple is one of the three main ancient temples in Shilin, along with Zhishanyan’s Huiji Temple and Xinjie’s Cixian Temple."
                    link="/sites/shennong"
                    imageSrc="/shennong/front.jpg"/>


            </div>
        </div>
    );
}