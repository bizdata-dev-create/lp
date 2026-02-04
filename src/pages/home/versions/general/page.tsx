import { useState } from 'react';
import Layout from '../../../../components/Layout';
import ContactFormModal from '../../../../components/ContactFormModal';
import HeroSection from '../../../../sections/01HeroSection';
import SpecialOfferSection from '../../../../sections/02SpecialOfferSection';
import ResultsSection from '../../../../sections/03ResultsSection';
import LeadPriceComparisonSection from '../../../../sections/04LeadPriceComparisonSection';
import BenefitsSection from '../../../../sections/05BenefitsSection';
import USPSection from '../../../../sections/06USPSection';
import CompetitiveComparisonSection from '../../../../sections/07CompetitiveComparisonSection';
import ValuePropositionSection from '../../../../sections/08ValuePropositionSection';
import CustomerVoicesSection from '../../../../sections/09CustomerVoicesSection';
import CompanySection from '../../../../sections/10CompanySection';
import PriceDeclarationSection from '../../../../sections/11PriceDeclarationSection';
import PricingSection from '../../../../sections/12PricingSection';
import ServiceFlowSection from '../../../../sections/13ServiceFlowSection';
import FAQSection from '../../../../sections/14FAQSection';
import ContactFormSection from '../../../../sections/15ContactFormSection';
import CTASection from '../../../../sections/16CTASection';
import ServiceIntroductionSection from '../../../../sections/ServiceIntroductionSection';

export default function HomeV1() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // お問い合わせフォーム用の状態
  const [contactFormData, setContactFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    remarks: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Special Offer の共通データ
  const specialOfferBenefits = [
    '本物の営業代行業者の見極め方',
    '高品質LPの作成費用を【1/10】にする方法',
    '御社に最適な営業ルートの選び方',
    '反応率を200%上げる文章の"型"'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const GOOGLE_FORM_ACTION =
      "https://docs.google.com/forms/d/e/1FAIpQLScAzEd3YYnW_zELrdoBQWoCNx2eiN1JhANR4is2GIlY3mtLUw/formResponse";

    try {
      const payload = new URLSearchParams();

      payload.append("entry.1927350659", contactFormData.company || "");
      payload.append("entry.1866246276", contactFormData.name || "");
      payload.append("entry.1765924240", contactFormData.email || "");
      payload.append("entry.1609350815", contactFormData.phone || "");
      payload.append("entry.1625547957", contactFormData.inquiryType || "");
      payload.append("entry.110634519", contactFormData.remarks || "");

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      // フォームをリセット
      setContactFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        remarks: ''
      });

      setSubmitStatus('success');
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <HeroSection />
      
      <SpecialOfferSection
        ctaId="cta_schedule_special_offer_1"
        materialCtaId="cta_material_special_offer_1"
        benefitItems={specialOfferBenefits}
        onOpenModal={() => setIsContactFormOpen(true)}
      />
      <ResultsSection />
      {/* <ServiceIntroductionSection /> */}
      <LeadPriceComparisonSection />
      <BenefitsSection />
      <USPSection />
      <SpecialOfferSection
        ctaId="cta_schedule_special_offer_2"
        materialCtaId="cta_material_special_offer_2"
        benefitItems={specialOfferBenefits}
        onOpenModal={() => setIsContactFormOpen(true)}
      />
      
      <CompetitiveComparisonSection />
      <ValuePropositionSection />
      <CustomerVoicesSection />
      <CompanySection />
      <PriceDeclarationSection />
      <PricingSection />
      <ServiceFlowSection />
      <FAQSection />
      <ContactFormSection
        contactFormData={contactFormData}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        handleContactFormChange={handleContactFormChange}
        handleContactFormSubmit={handleContactFormSubmit}
        setSubmitStatus={setSubmitStatus}
      />
      <CTASection onOpenModal={() => setIsContactFormOpen(true)} />

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formData={formData}
        onInputChange={handleInputChange}
      />
    </Layout>
  );
}
