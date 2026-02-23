import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">明日剧场</span>
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              国内首个将元宇宙虚拟剧场概念具象化，融合视讯通讯与动作捕捉技术的沉浸式艺术展演空间。
            </p>
            <p className="text-sm text-gray-500">
              © 2024 澳门未来视野科技有限公司. 保留所有权利.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/platform" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  数智虚拟展演平台
                </Link>
              </li>
              <li>
                <Link to="/manual" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  操作手册
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  课程体系
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  学术成果
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(853) 66810358</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>tot@alexzhenwu.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>澳门</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              北京師範大學未來設計學院種子基金支持项目
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">2022年全球數字科技創意大賽銀獎</span>
              <span className="text-gray-500 text-sm">2023年Unity黑馬計劃</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

