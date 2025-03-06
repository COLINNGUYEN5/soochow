export default function Collab() {
    return (
        <div className="flex flex-row gap-x-4">
                <a href={"https://www.wpi.edu/"} className="flex flex-row items-center gap-x-2">
                    <img src="/wpi-logo.png" alt="profile-picture" className="w-12 h-12 object-cover"/>
                    <h1>WPI</h1>
                </a>
                <a href={"https://www.scu.edu.tw/"} className="flex flex-row items-center gap-x-2">
                    <img src="/scu-logo.png" alt="profile-picture" className="w-12 h-12 object-cover"/>
                    <h1>SCU</h1>
                </a>
        </div>
    )
}