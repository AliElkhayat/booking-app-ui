import logo from "../assets/black wolf (1).png"

const Footer = () => {
    return (
        < div className="w-full bg-gradient-to-b from-[#1B004D] to-[#2E0A6F] text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="BlackWOLF" className="h-35 w-35"
                        src={logo} />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Whether you're planning a quick weekend escape or a luxury getaway, we help you find the perfect place to relax, recharge, and feel right at home.
                </p>
            </div>
            <div className="border-t border-[#3B1A7A]">
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://github.com/AliElkhayat">Black Wolf</a> ©2025. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer


