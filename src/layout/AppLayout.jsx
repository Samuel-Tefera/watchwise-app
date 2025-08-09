import React from 'react';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 overflow-y-auto py-[4.35rem]">
        <Outlet />
      </main>
    </div>
  );
}
