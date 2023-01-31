import React from "react";


export default function Footer() {
  return(

<footer className="p-4 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 by Ben Simmers</span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://github.com/BenSimmers" className="mr-4 hover:underline md:mr-6 ">Github</a>
        </li>
        <li>
            <a href="https://bensimmers.dev/" className="mr-4 hover:underline md:mr-6">Personal Site</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/benjamin-simmers-45385b236/" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
    </ul>
</footer>


  )

}