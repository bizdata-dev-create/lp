import { useState } from 'react';
import { CloseIcon } from './icons';
import { getFormPostUrl, GOOGLE_FORM_CONFIG } from '../config/googleForm';

interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactFormModal({
  isOpen,
  onClose,
  formData,
  onInputChange
}: ContactFormModalProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setSubmitStatus('submitting');

    const fd = new FormData();
    fd.append(GOOGLE_FORM_CONFIG.ENTRY.company, formData.company || "");
    fd.append(GOOGLE_FORM_CONFIG.ENTRY.name, formData.name || "");
    fd.append(GOOGLE_FORM_CONFIG.ENTRY.email, formData.email || "");
    fd.append(GOOGLE_FORM_CONFIG.ENTRY.phone, formData.phone || "");

    try {
      await fetch(getFormPostUrl(), {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });

      // no-corsなので「成功したか」は厳密には判定不可
      // 体感上ほぼ入るので、UIとしては成功扱いにするのが一般的
      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const handleClose = () => {
    setSubmitStatus('idle');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">以下の情報をご入力ください</h3>
            <button 
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-900 cursor-pointer"
              disabled={submitStatus === 'submitting'}
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
          
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <div className="text-green-600 text-lg font-bold mb-4">
                送信成功しました。<br></br>メールにてご案内させて頂きます。<br></br><br></br>
                特典資料をご希望の方は<br></br>以下「お問い合わせ」よりご連絡ください。
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://timerex.net/s/qingyangliangjp_f186/5354f609/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-brand-blue px-4 py-2 rounded-lg text-lg font-bold hover:bg-yellow-300 whitespace-nowrap cursor-pointer btn-primary"
                >
                  お問い合わせ
                </a>
                <button
                  onClick={handleClose}
                  className="bg-brand-red text-white px-6 py-2 rounded-lg font-bold hover:bg-brand-red/90 btn-primary"
                >
                  閉じる
                </button>
              </div>
            </div>
          ) : (
            <form id="contact-form" data-readdy-form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
                会社名 <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={onInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                placeholder="株式会社○○"
              />
            </div>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-1">
                お名前 <span className="text-brand-red">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={onInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                placeholder="山田太郎"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                メールアドレス <span className="text-brand-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={onInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                placeholder="example@company.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                placeholder="03-1234-5678"
              />
            </div>
            
            <div>
              {submitStatus === 'error' && (
                <p className="text-red-600 text-sm mb-2">
                  送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full bg-brand-red text-white py-2 rounded-lg font-bold hover:bg-brand-red/90 whitespace-nowrap cursor-pointer btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === 'submitting' ? '送信中…' : 'サービス資料を請求する'}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
}

