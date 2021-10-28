import React, {useState} from 'react'
import Link from 'next/link'
import {Transition} from '@headlessui/react'
import {useRouter} from 'next/router'
import i18n from '../lib/i18n'
import SwitchLanguage from './main_switch-language'
import {RiInstagramFill, RiFacebookCircleFill} from "react-icons/ri"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {locale} = useRouter()
  let history = useRouter()
  const navBarItems = [
    {
      id: 1,
      name: i18n.navigation.item_1[locale],
      href: i18n.navigation.item_1_url[locale],
    }, {
      id: 2,
      name: i18n.navigation.item_2[locale],
      href: i18n.navigation.item_2_url[locale],
    }, {
      id: 3,
      name: i18n.navigation.item_3[locale],
      href: i18n.navigation.item_3_url[locale],
    }, {
      id: 4,
      name: i18n.navigation.item_4[locale],
      href: i18n.navigation.item_4_url[locale],
    }, {
      id: 5,
      name: i18n.navigation.item_5[locale],
      href: i18n.navigation.item_5_url[locale],
    }]

  return (
    <div className='sticky top-8  md:top-9 sm:top-12 z-20'>
      <nav className='bg-white bg-opacity-90  '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 customTop'>
          <div className='flex items-center justify-between h-16'>
            <div className='hidden md:block'>
              <div className='flex items-baseline space-x-4'>
                {navBarItems.map((item) => {
                    const activeItem = history.pathname
                    const listOfItem = item.href.toLowerCase()
                    const isEqual = (listOfItem === activeItem)
                    return (
                      <div key={item.id}
                           className={`hover:text-yellow-600  p-2 ${isEqual ? 'text-yellow-600 font-extrabold' : 'text-yellow-500 font-medium'}`}
                      >
                        <Link href={item.href} passHref>
                          {item.name}
                        </Link>
                      </div>
                    )
                  }
                )}
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-yellow-500 inline-flex items-center justify-center p-2 rounded-md text-yellow-50 hover:text-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className='flex flex-row'>
              <RiFacebookCircleFill
                className='lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-600 ml-2 p-2 text-5xl cursor-pointer'>
                <Link href='https://m.facebook.com/Mephistophelespub/' passHref/>
              </RiFacebookCircleFill>
              <RiInstagramFill
                className='lg:inline-block lg:mt-0 text-yellow-500 hover:text-yellow-600 p-2 text-5xl cursor-pointer'>
                <Link href='https://www.instagram.com/mephistophelespub/' passHref/>
              </RiInstagramFill>

              <div className='lg:inline-block lg:mt-0 m-1 p-1 cursor-pointer'>
                <SwitchLanguage/>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          {(ref) => (
            <div className='md:hidden' id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navBarItems.map((item) =>
                  <a key={item.id}
                     href={item.href}
                     className='text-yellow-500 hover:text-yellow-600 hover:font-black block px-3 py-2 rounded-md text-base text-center'
                  >
                    {item.name}
                  </a>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default NavBar