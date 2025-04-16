/**
 *
 * @description
 * @createTime 2025/4/12 22:46
 */
import React, {PropsWithChildren, useEffect} from "react";
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet-async";


const AuthLayout: React.FC<PropsWithChildren<{}>> = ({}) => {


    useEffect(() => {
        if (window.VANTA) {
            VANTA.GLOBE({
                el: "#your-element-selector",
                mouseControls: false,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00
            })
        }
    }, [])


    return (
        <>
            <Helmet>
                <title>Login Page - UniLocal</title>
            </Helmet>
            <div className={"w-full h-full absolute scale-x-[-1]"} id={"your-element-selector"}></div>
            <div className={'w-full h-full absolute z-10'}>
                <div className={"container mx-auto "}>
                    <div className={'flex flex-row h-screen'}>
                        <div className={'flex-1 h-full flex flex-col justify-center'}>

                        </div>
                        <div className="w-1/4 h-full flex flex-col justify-center bg-black/30">
                            <Outlet/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default AuthLayout;
