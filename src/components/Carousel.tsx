import LiquidDistortion from '../components/LiquidDistortion';

export default function Carousel() {
    return (
        <div className="relative h-full w-full overflow-hidden">
            <LiquidDistortion
                slides={[
                    {
                        image: '/soochow/front.jpg',
                        title: 'Soochow University',
                        quote: 'Unto a Full-grown Man.',
                        link: '/sites/soochow',
                    },
                    {
                        image: '/waishuangxi/front.jpg',
                        title: 'Waishuangxi',
                        quote: 'Everything about the history and culture of Shilin was built by the river.',
                        link: '/sites/waishuangxi',
                    },
                    {
                        image: '/neishuangxi/front.JPG',
                        title: 'Neishuangxi',
                        quote: 'This place is a nice change of pace compared to the city.',
                        link: '/sites/neishuangxi',
                    },
                    {
                        image: '/national/national.jpg',
                        title: 'National Palace Museum',
                        quote: 'If you want to keep power and authority, you must have a culture to be associated with.',
                        link: '/sites/national',
                    },
                    {
                        image: '/soka/soka-front.jpg',
                        title: 'Soka Art Museum',
                        quote: 'Each life has unlimited potential. How you bring out “Nam Myoho Renge Kyo”, brings out your highest human being in',
                        link: '/sites/soka',
                    },
                    {
                        image: '/aboriginal/front.jpg',
                        title: 'Shung Ye Museum of Formosan Aborigines',
                        quote: 'The art that the Aboriginal tribes of Taiwan had invoked a feeling of strong pride for their culture.',
                        link: '/sites/aboriginal',
                    },
                    {
                        image: '/shilin/front.jpg',
                        title: 'Shilin Night Market',
                        quote: 'Everytime I go there, I leave with my pockets empty and my stomach full.',
                        link: '/sites/shilin',
                    },
                    {
                        image: '/fuyu/team.jpg',
                        title: 'Fuyu Tea House',
                        quote: 'Everyone that lives here has known each other for a long time. All the generations know each other and everything that happens here.',
                        link: '/sites/fuyu',
                    },
                    {
                        image: '/shuangxi/shuangxi-front.jpg',
                        title: 'Shuangxi Park',
                        quote: 'I felt quite relaxed in the park and I really liked the pavilion in the middle— you can chill there, enjoy the lake view, or just take a break.',
                        link: '/sites/shuangxi',
                    },
                    {
                        image: '/zhishanyan/front.jpg',
                        title: 'Zhishanyan',
                        quote: 'The hill holds such powerful memories and serves as a remind of Taiwans complex past.',
                        link: '/sites/zhishanyan',
                    },
                    {
                        image: '/shennong/front.jpg',
                        title: 'Shennong Temple',
                        quote: 'The hill holds such powerful memories and serves as a remind of Taiwans complex past.',
                        link: '/sites/shennong',
                    },
                ]}
                displacementImage="/clouds.jpg"
                autoPlaySpeed={[10, 3]}
                displacementSize={[500, 650]}
                distortionIntensity={[40, 40]}
            />
        </div>
    );
}