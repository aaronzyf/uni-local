/**
 *
 * @description
 * @createTime 2025/4/12 22:46
 */
import React, {PropsWithChildren} from "react";
import { Outlet } from "react-router-dom";
const BlankLayout: React.FC<PropsWithChildren<{}>> = ({}) => {


    return (
        <div className={'w-full h-screen'}>
            <Outlet/>
        </div>
    )

}
export default BlankLayout;
