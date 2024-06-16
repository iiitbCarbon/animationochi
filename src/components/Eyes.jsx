import React, { useEffect, useState } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
console.log("mouse", mouseX)
            const deltaX = mouseX - window.innerWidth / 2;
            const deltaY = mouseY - window.innerHeight / 2;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            console.log("angle",angle)
            setRotate(angle-180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
console.log("rotate",rotate)
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="relative w-full h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
                <div className="absolute gap-10 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center">
                            <div
                                className="  h-full w-10   "
                                style={{
                                    transform: ` rotate(${rotate}deg)`,
                                    transformOrigin: 'center center'
                                }}
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                            <div
                                className="line  w-10 h-full absolute top left-14 transform -translate-x-[50%] -translate-y-[50%]"
                                style={{
                                    transform: `rotate(${rotate}deg)`,
                                    transformOrigin: 'center center'
                                }}
                            >
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;