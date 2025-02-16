// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';

import { Outlet } from "react-router-dom";

import { useMediaQuery } from "@uidotdev/usehooks";

import { Sidebar } from '../layouts/Sidebar';
import { Header } from '../layouts/Header';

import { cn } from "../utils/cn";

const Layout = () => {

    const isDesktopDevice = useMediaQuery("(min-width: 768px)");
    const [collapsed, setCollapsed] = useState(false);

    const sidebarRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900">
        <Sidebar 
            ref={sidebarRef}
            collapsed={collapsed}
        />
        <div className={cn(
            "transition-[margin] duration-300"
        )}>
            <Header />
            <div className="overflow-y-auto h-[calc(100vh-60px)] p-6 overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default Layout