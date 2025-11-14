import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section
      id='speciality'
      className='flex flex-col items-center gap-6 py-16 bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500 text-white rounded-3xl mx-5 md:mx-10 shadow-lg'
    >
      {/* Heading */}
      <h1 className='text-3xl sm:text-4xl font-bold drop-shadow-md'>
        Find by Speciality
      </h1>
      <p className='sm:w-1/2 text-center text-sm md:text-base text-white/90'>
        Browse our list of trusted doctors and schedule your appointment easily.
      </p>

      {/* Speciality Cards */}
      <div className='flex sm:justify-center gap-6 lg:gap-10 pt-6 w-full overflow-x-auto scrollbar-hide px-4'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            className='flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 cursor-pointer flex-shrink-0 hover:scale-105 hover:shadow-lg transition-all duration-300'
          >
            <img
              src={item.image}
              alt={`Doctor specialized in ${item.speciality}`}
              className='w-16 sm:w-24 mb-2 pointer-events-none'
            />
            <p className='text-sm sm:text-base font-medium text-white'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SpecialityMenu
