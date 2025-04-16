import './App.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthLayout from "./components/layout/auth.tsx";
import LoginPage from "./pages/auth/login.tsx";
import BlankLayout from "./components/layout/blank.tsx";
import {HelmetProvider} from 'react-helmet-async';

function App() {

    return (
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<BlankLayout/>}>
                        {/* 登录页使用 AuthLayout */}
                        <Route element={<AuthLayout/>}>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Route>

                        {/*/!* 登录后的页面使用 MainLayout *!/*/}
                        {/*<Route element={<MainLayout />}>*/}
                        {/*    <Route path="/" element={<Navigate to="/dashboard" replace />} />*/}
                        {/*    <Route path="/dashboard" element={<Dashboard />} />*/}
                        {/*    <Route path="/settings" element={<Settings />} />*/}
                        {/*</Route>*/}

                        {/*/!* 未匹配到的页面 *!/*/}
                        {/*<Route path="*" element={<Navigate to="/login" replace />} />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default App
