import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import logoDeeper from '../img/dev/logo_deeper.webp';
import AnchorLink from './AnchorLink';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-start">
              <AnchorLink to="/#hero">
                <img src={logoDeeper} alt="logo" className="h-12 scale-[0.68] md:scale-[0.85]" />
              </AnchorLink>
            </div>
            <nav className="hidden md:flex space-x-8">
              <AnchorLink to="/#service-flow" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">
                サービスの流れ
              </AnchorLink>
              <AnchorLink to="/#results" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">
                実績
              </AnchorLink>
              <AnchorLink to="/#benefits" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">
                特徴
              </AnchorLink>
              <AnchorLink to="/#company" className="text-gray-900 hover:text-teal-600 transition-colors cursor-pointer border-b-2 border-blue-900 pb-1">
                会社紹介
              </AnchorLink>
            </nav>
            <AnchorLink
              to="/#contact-form"
              className="bg-gradient-to-r from-green-600 to-green-500 text-white px-3 md:px-5 py-1.5 rounded-lg hover:from-green-500 hover:to-green-400 whitespace-nowrap cursor-pointer font-bold text-lg btn-primary transition-all hover-pulse-ring"
            >
              <span id="cta_schedule_header">無料で相談する 》</span>
            </AnchorLink>
            {/* <a
              id="cta_schedule_header"
              href="https://timerex.net/s/info_cbe9_f3ff/48c82dac"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-green text-white px-3 md:px-5 py-1.5 rounded-lg hover:bg-brand-green/90 whitespace-nowrap cursor-pointer font-bold text-lg btn-primary"
            >
              お問い合わせ
            </a> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-gray-400 text-sm">
                成果報酬型の営業代行サービス。<br />
                <strong>初期費用0円</strong>で確実に結果を出します。
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">サービス</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><AnchorLink to="/#hero" className="hover:text-white transition-colors cursor-pointer">フォーム営業代行</AnchorLink></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">会社情報</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/company" className="hover:text-white transition-colors cursor-pointer">会社概要</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors cursor-pointer">プライバシーポリシー</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors cursor-pointer">利用規約</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">お問い合わせ</h5>
              <AnchorLink
                to="/#contact-form"
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 text-sm whitespace-nowrap cursor-pointer mb-4 inline-block btn-primary"
              >
                <span id="cta_schedule_footer">お問い合わせ</span>
              </AnchorLink>
              {/* <a
                id="cta_schedule_footer"
                href="https://timerex.net/s/info_cbe9_f3ff/48c82dac"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-green text-white px-6 py-2 rounded-lg hover:bg-brand-green/90 text-sm whitespace-nowrap cursor-pointer mb-4 inline-block btn-primary"
              >
                お問い合わせ
              </a> */}
              <div className="text-sm text-gray-400">
                <p>営業時間: 平日 9:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 営業代行サービス. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

