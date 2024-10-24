import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from '@/components/ThemeProvider.tsx';
import { AnimatedGridPatternDemo } from './components/AnimatedGridPatternDemo.tsx';
import { ModeToggle } from './components/ModeToggle.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blog } from './pages/blog.tsx';
import Navbar from './components/Navbar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <AnimatedGridPatternDemo />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/blogs' element={<Blog />} />
        </Routes>
        <div className='absolute top-3 right-3'></div>
        <Navbar />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
