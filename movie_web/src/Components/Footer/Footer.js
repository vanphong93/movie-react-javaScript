import React from "react";
import {
  AppleIcon,
  FacebookIcon,
  GooglePlay,
  GooglePlayIcon,
  InstagramIcon,
  TwitterIcon,
} from "../../Utilities/Icon";

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
            <img src="" width={350} alt="cinema, popcorn, ticket, movie, theatre png" />

            </div>
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-900">Liên hệ</h3>
            <ul className="space-y-1">
              <li>
                <a
                  className="hover:text-purple-500 duration-300"
                  rel="noopener noreferrer"
                  href="#"
                >
                  09333742
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 duration-300"
                  href="#"
                >
                  123 Nguyễn Hữu Trang tp.Hồ Chí Minh
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 duration-300"
                  href="#"
                >
                  movieSevirce@mgail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-900">Dịch vụ</h3>
            <ul className="space-y-1">
              <li>
                <a
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 duration-300"
                  href="#"
                >
                  Khác hàng
                </a>
              </li>
              <li>
                <a
                  rel="noopener noreferrer"
                  className="hover:text-purple-500 duration-300"
                  href="#"
                >
                  Doanh nghiệp
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-900">Ứng dụng</h3>
            <div className="flex space-x-3 ">
              <a rel="noopener noreferrer" href="#">
                <GooglePlayIcon />
              </a>
              <a rel="noopener noreferrer" href="#">
                <AppleIcon />
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-900 font-semibold">
              Social media
            </div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1 hover:text-purple-500 duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1 hover:text-purple-500 duration-300"
              >
                <TwitterIcon />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1 hover:text-purple-500 duration-300"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-600">
        © 2022 Company Co. All rights reserved.
      </div>
    </footer>
  );
}
