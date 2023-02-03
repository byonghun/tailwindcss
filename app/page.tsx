
// this is used to make this file a client component from a server component
"use client"

// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import React, { useState } from 'react'
import { ArrowDown } from './arrowDown'

const inter = Inter({ subsets: ['latin'] })

function Typography() {
  return (
    <div>
      <h1 className="text-9xl">Title 1</h1>
      <h1 className="text-2xl">Title 2</h1>
      <h3 className="text-xl">Title 3</h3>
      <p className="text-base">A regular p</p>
      <p className="text-sm">A description p</p>
      <p className="text-xs note">A little note</p>
    </div>
  )
}

function SpacingAndSizing() {
  return (
    <div className="flex min-h-screen space-y-8">
      <div className="w-1/5 bg-red-500">
        Sidebar
      </div>
      <div className="w-4/5 bg-green-500">
        Main
      </div>
    </div>
  )
}

function FlexAndGrow() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex">
        <div className='grow'>Main Content</div>
        <div className='flex flex-col flex-none'>
          <div>Sidebar</div>
          <div>Menu</div>
        </div>
      </div>
    </div>
  )
}

function Basis() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex">
        <div className='basis-4/12'>Sidebar</div>
        <div className='basis-6/12'>Main Content</div>
        <div className='basis-2/12'>Another Sidebar</div>
      </div>
    </div>
  )
}

function SimpleMobileBehavior() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-col md:flex-row">
        <div className='w-32 bg-sky-500'>Sidebar</div>
        <div className='w-full bg-red-500'>Main Content</div>
      </div>
    </div>
  )
}

function FlexBox() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full flex-wrap">
          <div className="w-32 grow">01</div>
          <div className="w-32 grow">02</div>
          <div className="w-32 grow">03</div>
          <div className="w-32 grow">04</div>
          <div className="w-32 grow">05</div>
          <div className="w-32 grow">06</div>
        </div>
      </div>
    </div>
  )
}

function JustifyContent() {
  return (
    <div className="Parent">
      <div>Header</div>
      <div className="flex justify-evenly">
        <div className="">Sidebar</div>
        <div className="">Main Content</div>
      </div>
    </div>
  )
}

function Grid() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-sky-500 p-6 rounded-lg'>First Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Second Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Third Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Fourth Column</div>
        </div>
      </div>
    </div>
  )
}

// Spanning Columns
function GridAndSpanningColumns() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-sky-500 p-6 rounded-lg'>First Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Second Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Third Column</div>
          <div className='bg-red-500 p-6 rounded-lg col-span-4'>Fourth Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Fifth Column</div>
          <div className='bg-sky-500 p-6 rounded-lg'>Sixth Column</div>
        </div>
      </div>
    </div>
  )
}

function ColStartAndSpan() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4 p-6 rounded-lg bg-sky-500">01</div>
          <div className="col-start-1 col-end-3 p-6 rounded-lg bg-sky-500">02</div>
          <div className="col-start-3 col-end-5 p-6 rounded-lg bg-red-500">middle</div>
          <div className="col-end-7 col-span-2 p-6 rounded-lg bg-sky-500">03</div>
          <div className="col-start-1 col-end-7 p-6 rounded-lg bg-sky-500">04</div>
        </div>
      </div>
    </div>
  )
}


const ResponsivePageGenerated: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Responsive Page</h1>
        <p className="text-gray-700 text-center mb-4">
          This page is created using Tailwind CSS and TypeScript.
        </p>
        <div className="flex flex-col items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

// Grid Row
const GridFlowCol:React.FC = () => {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-flow-col grid-rows-4 gap-4">
          <div className="row-span-3 p-6 rounded-lg bg-sky-500">01</div>
          <div className="p-6 rounded-lg bg-sky-500">02</div>
          <div className="p-6 rounded-lg bg-sky-500">03</div>
          <div className="p-6 rounded-lg bg-sky-500">04</div>
          <div className="row-span-2 p-6 rounded-lg bg-sky-500">05</div>
          <div className="p-6 rounded-lg bg-sky-500">06</div>
          <div className="p-6 rounded-lg bg-sky-500">07</div>
          <div className="p-6 rounded-lg bg-sky-500">08</div>
          <div className="p-6 rounded-lg bg-sky-500">09</div>
          <div className="p-6 rounded-lg bg-sky-500">10</div>
          <div className="p-6 rounded-lg bg-sky-500">11</div>
          <div className="p-6 rounded-lg bg-sky-500">12</div>
        </div>
      </div>
    </div>
  )
}

interface Props {
  colNum: string;
  rowNum: string;
}

// AutoFlow
const GridFlowDense: React.FC<Props> = ({ colNum = 3, rowNum = 3 }) => {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container mx-auto">
        <div className={`grid grid-flow-dense grid-cols-${colNum} grid-rows-${rowNum} gap-4`}>
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">01</div>
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">02</div>
          <div className="p-6 rounded-lg bg-sky-500">03</div>
          <div className="p-6 rounded-lg bg-sky-500">04</div>
          <div className="p-6 rounded-lg bg-sky-500">05</div>
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">06</div>
          <div className="p-6 rounded-lg bg-sky-500">07</div>
          <div className="p-6 rounded-lg bg-sky-500">08</div>
          <div className="p-6 rounded-lg bg-sky-500">09</div>
          <div className="col-span-2 p-6 rounded-lg bg-sky-500">10</div>
          <div className="p-6 rounded-lg bg-sky-500">11</div>
          <div className="p-6 rounded-lg bg-sky-500">12</div>
        </div>
      </div>
    </div>
  )
}

// Column
const ColumnWithFloatAndClear:React.FC = () => {
  return (
    <div className="h-screen text-white Parent">
      <div className="container px-2">
        <img
          className='w-64 float-left'
          src="https://www.froschluxurytravel.com/img/home/banners/video-background.r3k0zv.1920w.jpeg"
          alt=""
        />
        <img
          className='w-32 float-right'
          src="https://www.froschluxurytravel.com/img/home/banners/video-background.r3k0zv.1920w.jpeg"
          alt=""
        />
        <p className='clear-none'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro eos ducimus ea illo quam eum sed debitis vero, possimus facilis? Nisi, rem. Unde quo, id nesciunt nisi doloribus vero atque!</p>
      </div>
    </div>
  )
}

// position
const Position:React.FC = () => {
  return (
    <div className="h-screen text-white Parent">
      <div className="container px-2">
        <div className="relative w-32 h-32 p-8 bg-red-500 rounded-lg">
          <div className="w-24 h-24 bg-green-500 rounded-lg absolute inset-2"></div>
        </div>
      </div>
    </div>
  )
}

function Overflow () {
  return (
    <div className='text-white bg-slate-900 Parent h-screen'>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-teal-500">01</div>
          <div className="invisible bg-teal-500">02</div>
          <div className="bg-teal-500">03</div>
        </div>
      </div>
    </div>
  )
}

function ZIndex () {
  return (
    <div className="h-screen text-white bg-slate-900 Parent">
      <div className="container flex">
        <div className="bg-red-500 z-40 p-3 border rounded-full border-white">01</div>
        <div className="bg-red-500 z-30 p-3 border rounded-full border-white">02</div>
        <div className="bg-red-500 z-20 p-3 border rounded-full border-white">03</div>
        <div className="bg-red-500 z-10 p-3 border rounded-full border-white">04</div>
        <div className="bg-red-500 z-0 p-3 border rounded-full border-white">05</div>
      </div>
    </div>
  )
}

// object position
function ObjectPositionWithHover() {
  return (
    <div className="h-screen text-white bg-slate-900 Parent">
      <div className="container">
        <img
          className='w-64 h-64 object-none object-left hover:object-right-bottom'
          src="https://www.froschluxurytravel.com/img/home/banners/video-background.r3k0zv.1920w.jpeg"
          alt=""
        />
      </div>
    </div>
  )
}

function TransitionsAndAnimations() {
  return (
    <div className="h-screen p-4 Parent">
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
        <img
          className='w-64 h-64'
          src="https://www.froschluxurytravel.com/img/home/banners/video-background.r3k0zv.1920w.jpeg"
          alt=""
        />
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 text-white rounded-lg cursor-pointer bg-cyan-500 shadow-cyna-500/50 hover:-translate-y-2 transition delay-300 duration-400 ease-linear">
          Say Hello
        </button>
      </div>
    </div>
  )
}

// Transform and Skew - rotate
function TransformAndSkew() {
  return (
    <div className="h-screen p-4 Parent">
      <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
        <img
          className='w-64 h-64 origin-bottom-right hover:rotate-45 transition skew-y-6'
          src="https://www.froschluxurytravel.com/img/home/banners/video-background.r3k0zv.1920w.jpeg"
          alt=""
        />
        <h1 className="text-2xl">Hello</h1>
        <p className="mb-4">This is my div</p>
        <button className="px-3 py-2 text-white rounded-lg cursor-pointer bg-cyan-500 shadow-cyna-500/50 hover:-translate-y-2 transition delay-300 duration-400 ease-linear">
          Say Hello
        </button>
      </div>
    </div>
  )
}

// Design System
function DesignSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Option 1');

  const setOptionValue = (value:string) => {
    setSelected(value);
    setIsOpen(false);
  }

  return (
    <div className='bg-slate-900'>
      <h1>this is a title</h1>
      <h2>This is a subtitle</h2>
      <p className='text-base'>this is a paragraph</p>
      <a href="https://freecodecamp.org">this is an anchor</a>
      <div className='my-4'>
        <button className='btn btn-primary'>this is a primary button</button>
      </div>
      <div className='my-4'>
        <button className='btn btn-secondary'>this is a secondary button</button>
      </div>
      <div className='my-4'>
        <button disabled className='btn btn-secondary'>this is a disabled button</button>
      </div>
      <div><input type="text" placeholder='email' /></div>
      <div><input disabled type="text" placeholder='disabled'/></div>
      <div><input type="date" /></div>
      <div className='flex items-start my-4'>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea a explicabo iste earum, quos eum cumque architecto voluptate possimus nobis, similique vitae officia reiciendis quo alias id tempore dignissimos!</label>
      </div>

      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      <div className="Select">
        <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between child">
          <span>{selected}</span>
          <div className={isOpen ? "rotate-180 transition" : ""}>
            <ArrowDown />
          </div>
        </div>
        {isOpen && <div>
          <ul className='flex flex-col divide-y border-t'>
            <li className='child' onClick={() => setOptionValue("Option 1")}>Option 1</li>
            <li className='child' onClick={() => setOptionValue("Option 2")}>Option 2</li>
            <li className='child' onClick={() => setOptionValue("Option 3")}>Option 3</li>
          </ul>
        </div>}
      </div>

      <h1>this is another title</h1>
      <h2 className='font-bold'>This is another subtitle</h2>
    </div>
  )
}

function Home () {
  return (
    <div className='w-[100vw] h-[100vh]'>hello world</div>
  )
}

export default Home