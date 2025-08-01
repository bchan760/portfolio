import { ChevronUp } from 'lucide-react';

const BacktoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToTop} className="backtotop-button">
      <ChevronUp size={24} />
    </button>
  );
};

export default BacktoTop;
