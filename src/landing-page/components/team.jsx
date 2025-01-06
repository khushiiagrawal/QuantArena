import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';

export function TeamSection() {
    return (
        <div id='TeamSection'>
            <div className="py-16 w-screen bg-gray-200 text-center">
            {/* Section Heading */}
            <h2 className="text-3xl text-[#824AD8]">
                <span className="font-semibold  font-montserrat">
                    MEET THE TEAM THAT MAKES
                </span>
                <br />
                <span className="italic">magic </span> 
                <span className="font-semibold  font-montserrat">
                HAPPEN
                </span>
                
            </h2>
            <div className="w-40 h-0.5 bg-[#FFC362] my-4 mx-auto"></div>

            {/* Team Cards */}
            <div className="mt-12  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                {/* Team Member 1 */}
                <div className="relative">
                    <img
                        src={pic1}
                        alt="Rajiv Kumar"
                        className="w-[300px] h-[320px] object-cover rounded-lg mx-auto"
                    />
                    <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-[230px] bg-black bg-opacity-80 text-white p-1 rounded">
                        <h3 className="text-lg font-medium">Rajiv Kumar</h3>
                        <p className="text-sm">Co-founder & CEO</p>
                    </div>
                </div>

                {/* Team Member 2 */}
                <div className="relative">
                    <img
                        src={pic2}
                        alt="Shruti"
                        className="w-[300px] h-[320px] object-cover rounded-lg mx-auto"
                    />
                    <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-[230px] bg-black bg-opacity-80 text-white p-1 rounded">
                        <h3 className="text-lg font-medium">Shruti</h3>
                        <p className="text-sm">Co-founder & CEO</p>
                    </div>
                </div>

                {/* Team Member 3 */}
                <div className="relative">
                    <img
                        src={pic3}
                        alt="Saumya"
                        className="w-[300px] h-[320px] object-cover rounded-lg mx-auto"
                    />
                    <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-[230px] bg-black bg-opacity-80 text-white p-1 rounded">
                        <h3 className="text-lg font-medium">Saumya</h3>
                        <p className="text-sm">Co-founder & CEO</p>
                    </div>
                </div>

                {/* Team Member 4 */}
                <div className="relative">
                    <img
                        src={pic4}
                        alt="Sanjay"
                        className="w-[300px] h-[320px] object-cover rounded-lg mx-auto"
                    />
                    <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 w-[230px] bg-black bg-opacity-80 text-white p-1 rounded">
                        <h3 className="text-lg font-medium">Sanjay</h3>
                        <p className="text-sm">Co-founder & CEO</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'></div>
        </div>
        </div>
        
    );
}
