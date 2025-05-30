import { ChevronUp } from 'lucide-react';

const BacktoTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-40 right-8 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default BacktoTop;