// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Sidebar } from '../layouts/Sidebar';
import { cn } from "../utils/cn";
import { Header } from '../layouts/Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900">
        <Sidebar />
        <div className={cn(
            "transition-[margin] duration-300"
        )}>
            <Header />
        </div>
    </div>
  )
}

export default Layout