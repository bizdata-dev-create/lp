import SpecialOffer from '../components/SpecialOffer';

interface SpecialOfferSectionProps {
  ctaId: string;
  materialCtaId?: string;
  benefitItems: string[];
  onOpenModal?: () => void;
}

export default function SpecialOfferSection({ ctaId, materialCtaId, benefitItems, onOpenModal }: SpecialOfferSectionProps) {
  return (
    <SpecialOffer
      ctaId={ctaId}
      materialCtaId={materialCtaId}
      benefitItems={benefitItems}
      onOpenModal={onOpenModal}
    />
  );
}
