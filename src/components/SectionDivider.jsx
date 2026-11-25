import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <div className="w-full bg-white py-3 flex items-center justify-center">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center">
        {/* Línea izquierda */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] flex-1 origin-right bg-gradient-to-r from-transparent via-[#6E3B96]/25 to-[#6E3B96]/45"
        />

        {/* Trazo de pulso matemáticamente centrado en x=40 */}
        <div className="px-4 text-[#1EC2F3] flex items-center justify-center">
          <svg
            className="w-20 h-7 block"
            viewBox="0 0 80 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animación del trazo de pulso */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0.2 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              d="M0 14H28L34 4L40 24L46 10L50 14H80"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Línea derecha */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] flex-1 origin-left bg-gradient-to-l from-transparent via-[#6E3B96]/25 to-[#6E3B96]/45"
        />
      </div>
    </div>
  );
};

export default SectionDivider;