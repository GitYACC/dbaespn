"use client"
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000); // Change the interval to adjust the animation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <Transition
        show={isVisible}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-blue-500 text-white font-bold px-4 py-2 rounded">
          Hello, world!
        </div>
      </Transition>
    </div>
  );
}