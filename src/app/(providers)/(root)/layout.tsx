import Header from '@/components/Header';
import MenuBar from '@/components/MenuBar';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex h-screen w-[600px] flex-col font-dunggeunmo">
      <div>
        <Header />
      </div>
      <main className="grow overflow-auto" id="main-content">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
          limit={1}
        />
        {children}
      </main>
      <div>
        <MenuBar />
      </div>
    </div>
  );
}

export default RootLayout;
