import React from 'react'

const NavbarComponent = () => {

    function startDark(){
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const handleDark = () =>{
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
    
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        console.log(document.documentElement.classList)
    }

    return (
        <nav class="bg-lightBG1 dark:bg-darkBG2 fixed w-full top-0 start-0 h-[250px]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="">                
                    <span class="self-center text-3xl font-bold whitespace-nowrap dark:text-white">Social Media Dashboard</span>
                    <p class="text-cardText text-start font-semibold whitespace-nowrap dark:text-darkCardText">Total Followers: 23,004</p>
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <label class="inline-flex items-center cursor-pointer">
                        <input id='theme-toggle' type="checkbox" value="" class="sr-only peer" onClick={() => handleDark()}/>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">Dark Mode</span>
                            <div class="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent
