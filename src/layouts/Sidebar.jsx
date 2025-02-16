// eslint-disable-next-line no-unused-vars
import React, { forwardRef } from 'react'
import { cn } from '../utils/cn';
import logo from "../assets/logo1.png"

const Sidebar = forwardRef(({}, ref) => {
  return (
    <aside 
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_300ms_cubic_bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-900"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logo} alt="forkly" />
      </div>
    </aside>
  );
});

Sidebar.displayName = 'Sidebar';

// export { Sidebar };
