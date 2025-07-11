'use client'
import Image from 'next/image'
import React, { useRef, useState, MutableRefObject } from 'react'
import shubhi from '@/app/img/members/shubhi.jpeg'
import urvashi from '@/app/img/members/urvashi.jpeg'
import prabel from '@/app/img/members/prabel.jpg'
import Link from 'next/link'
import brijesh from '@/app/img/members/brijesh.jpeg'
import shreyansh from '@/app/img/members/shreyansh.png'
import shashank from '@/app/img/members/shasank.jpeg'
import suyash from '@/app/img/members/suyash.jpeg'
import jay from '@/app/img/members/jay.jpg'
import ritik from '@/app/img/members/ritik.png'
import om from '@/app/img/members/om.jpeg'
import group from '@/app/img/members/Group.jpg'
import linkedin from '@/app/img/Linkedin.svg'
import insta from '@/app/img/Instagram.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
// -- ANIMATION ---
import { useEffect } from 'react'
type Props = {}
const Team = ({}: Props) => {
  // ANIMATION FUNCTION
  useEffect(() => {
    AOS.init()
  }, [])

  const elementRef: MutableRefObject<HTMLImageElement | null> = useRef(null)
  const [point, setPoint] = useState({ x: 0, y: 0 })


  return (
    <>
      <section className="w-[90vw] mx-auto bg-[#101010] overflow-x-hidden">
        <section className="container mx-auto mb-12 md:mb-0">
          <h2
            className="bg-gradient-to-r from-main to-pink bg-clip-text text-transparent pt-8 mt-24 bg-[#101010] mb-10 text-[48px] font-bold w-full text-center"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            OUR TEAM
          </h2>
          <div className="flex items-center flex-col gap-1 mb-8 md:hidden">
            <Image
              alt="members"
              src={prabel}
              className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
            />
            <span className="md:text-[20px] text-[14px] font-bold text-white">
              Prabel Singh
            </span>
            <span className="md:text-[18px] text-[12px] font-normal text-white">
              President
            </span>
            <div className="flex justify-around gap-4">
              <Link
                target="_blank"
                href={'https://www.linkedin.com/in/prabal-pratap-singh-jadon-2a3152252/'}
              >
                <Image
                  src={linkedin}
                  alt="mane"
                  className="w-[20px] md:w-[40px]"
                />
              </Link>
              <Link
                target="_blank"
                href={'https://www.instagram.com/prabal_singh_019/'}
              >
                <Image
                  src={insta}
                  alt="mane"
                  className="w-[20px] md:w-[40px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex  md:w-[650px] justify-around md:justify-between mx-auto">
            <div
              className="flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="10"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={shubhi}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Shubhi Upadhyay
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                Vice President
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/shubhi-upadhyay-66707b24a/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://www.instagram.com/shubhii05_/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            <div
              className="hidden md:flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={prabel}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Prabel Singh
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                President
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/prabal-pratap-singh-jadon-2a3152252/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={'https://www.instagram.com/prabal_singh_019'}
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            <div
              className="flex items-center flex-col gap-1"
              data-aos="fade-in"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={urvashi}
                className="md:w-[160px] md:h-[160px] w-[80px] h-[80px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Urvashi Singh
              </span>
              <span className="md:text-[18px] text-[12px] font-normal text-white">
                Vice Precident
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/urvashi-singh-25495a25a/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://www.instagram.com/__.urvashiiii.__/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex grid grid-cols-3 gap-y-12 container justify-between mx-auto mt-20">
            {/* shruti  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="900"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={brijesh}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Brijesh Tomar
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Marketing Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={
                    'https://www.linkedin.com/in/brijesh-tomar-60a8b2282/'
                  }
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://www.instagram.com/brijeshtomar_11/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* rukaiya  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1200"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={ritik}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Ritik Sharma
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Management Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  href={'https://www.linkedin.com/in/ritik-sharma-a7a780259/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://www.instagram.com/branded_pandit_ji__/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* rukaiya  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1200"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={om}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Om Jain
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Content Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  href={'https://www.linkedin.com/in/om-jain-28b168296/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    '#'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* anamika  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1500"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={shreyansh}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Shreyansh Shukla
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Tech Head
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/shreyanshs31/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://instagram.com/shreyanshs31_'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* archi  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="1800"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={shashank}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Shashank Sharma
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Finance Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/shashank-shekhar-750288247/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    'https://www.instagram.com/sshhashank/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* muskan  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="2100"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={suyash}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Suyash Pawar
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Pr & Funds Head
              </span>
              <div className="flex justify-around gap-4">
                <Link
                  target="_blank"
                  href={'https://www.linkedin.com/in/suyash-pawar-939bb8257/'}
                >
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link href={'https://www.instagram.com/suyashpawarsp/'} target="_blank">
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
            {/* kunal  */}
            <div
              className="flex flex-col items-center gap-1"
              data-aos="fade-in"
              data-aos-delay="2400"
              data-aos-duration="1000"
            >
              <Image
                alt="members"
                src={jay}
                className="md:w-[160px] w-[80px] h-[80px] md:h-[160px] rounded-[50%] object-contain object-top"
              />
              <span className="md:text-[20px] text-[14px] font-bold text-white">
                Jay Prajapati
              </span>
              <span className="md:text-[16px] text-[12px] font-normal text-white">
                Design Head
              </span>
              <div className="flex justify-around gap-4">
                <Link href={'https://www.linkedin.com/in/jay-prajapati-144922256/'}>
                  <Image
                    src={linkedin}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
                <Link
                  href={
                    'https://www.instagram.com/_jayyyy04/'
                  }
                >
                  <Image
                    src={insta}
                    alt="mane"
                    className="w-[20px] md:w-[40px]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto my-24 relative ">
            <Image
              ref={elementRef}
              onClick={(event) => {
                if (elementRef.current) {
                  let height = elementRef.current.clientHeight
                  let width = elementRef.current.clientWidth
                  let screenWidth = (window.innerWidth - width) / 2
                  const rect = elementRef.current.getBoundingClientRect()
                  const x = ((event.clientX - screenWidth - 5) / width) * 100
                  const y = ((event.clientY - rect.top) / height) * 100
                  setPoint({ x, y })
                }
              }}
              src={group}
              alt="group"
              className="w-full rounded-[15px] cursor-pointer"
              data-aos="zoom-out"
              data-aos-delay="0"
              data-aos-duration="1000"
            />
          </div>
        </section>
      </section>
    </>
  )
}

const Dot = ({ tag }: any) => {
  const [visible, setVisible] = useState(false)

  const handleMouseEnter = () => {
    setVisible(true)
  }

  const handleMouseLeave = () => {
    setVisible(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-[rgba(0,0,0,0.8)] absolute cursor-pointer w-[1.75vw] h-[1.75vw] rounded-full border-[4px] border-[rgba(255,255,255,0.4)] opacity-40 transition-all hover:opacity-100"
      style={{ left: `${tag.x}%`, top: `${tag.y}%` }}
    >
      <div
        className="py-4 w-[2.75vw] -translate-x-[30%]"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      ></div>
      <div
        className="relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseOut={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`${
            visible ? 'block' : 'hidden'
          } w-fit absolute translate-y-[0%] left-[50%] -translate-x-[50%] bg-[rgba(0,0,0,0.8)] px-3 py-1 rounded-md text-white z-10`}
        >
          <h1 className="font-bold text-lg text-center whitespace-nowrap">
            {tag.name}
          </h1>
          <p className="text-center">({tag.position})</p>
        </div>
      </div>
    </div>
  )
}

export default Team
