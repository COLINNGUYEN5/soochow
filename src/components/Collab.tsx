export default function Collab() {
    return (
        <div className="flex flex-row gap-x-4">
                <a href={"https://www.wpi.edu/"} className="flex flex-row items-center gap-x-2">
                    <img src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/wpi-logo.png" alt="WPI Logo" className="w-12 h-12 object-cover"/>
                    <h1>WPI</h1>
                </a>
                <a href={"https://www.scu.edu.tw/"} className="flex flex-row items-center gap-x-2">
                    <img src="https://pub-61be2e1134b34ab087b28b1b2f3f2054.r2.dev/scu-logo.png" alt="Soochow Logo" className="w-12 h-12 object-cover"/>
                    <h1>SCU</h1>
                </a>
        </div>
    )
}