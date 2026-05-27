import React from 'react';
import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TextPage() {
  const { slug } = useParams();
  
  const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Page Not Found';

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="flex-grow pt-28 pb-32 px-5 md:px-16 max-w-4xl mx-auto w-full"
    >
      <div className="mb-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          BACK TO HOME
        </Link>
      </div>

      <div className="glass-card rounded-[2rem] p-8 md:p-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-on-surface mb-8">{title}</h1>
        <div className="space-y-6 font-sans text-lg text-on-surface-variant leading-relaxed">
          <p>
            Welcome to the {title} page. This is a placeholder for Duo Vita's beautifully curated textual content. 
            In a complete environment, this section would reflect our ethos, legal considerations, or exciting career opportunities.
          </p>
          <p>
            At Duo Vita, we believe in complete transparency and mindful engagement with our community. Whether you're 
            reading about our sustainability initiatives, exploring career paths to join our team in Seoul, or reviewing 
            our privacy commitments, every word is crafted with the same attention to detail as our signature elixirs.
          </p>
          <p className="font-serif text-xl italic text-on-surface pt-4">
            "Every interaction is an opportunity for balance and beauty."
          </p>
        </div>
      </div>
    </motion.main>
  );
}
