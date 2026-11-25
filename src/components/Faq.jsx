import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const preguntas = [
    {
      pregunta: '¿Cuándo debo consultar a un reumatólogo?',
      respuesta:
        'Es recomendable consultar ante dolor o rigidez articular matutina de más de 30 minutos, hinchazón inexplicada en dedos, rodillas o muñecas, fatiga persistente, o análisis con FAN (anticuerpos antinucleares) o eritrosedimentación elevada.',
    },
    {
      pregunta: '¿Cuál es la diferencia entre un traumatólogo y un reumatólogo?',
      respuesta:
        'El traumatólogo trata lesiones mecánicas, fracturas, esguinces y patologías que suelen requerir cirugía o rehabilitación física. El reumatólogo se especializa en enfermedades autoinmunes, inflamatorias y metabólicas del aparato locomotor (como artritis, lupus u osteoporosis) mediante tratamientos clínicos.',
    },
    {
      pregunta: '¿Qué estudios debo llevar a la primera consulta?',
      respuesta:
        'Traé todos los análisis de laboratorio recientes, radiografías, ecografías o resonancias previas que tengas, junto con un listado de la medicación que tomás actualmente. Si no tenés estudios previos, no es necesario realizarlos antes de la primera evaluación.',
    },
    {
      pregunta: '¿Atienden por obras sociales, prepagas o de forma particular?',
      respuesta:
        'Trabajamos con atención particular y con reintegros para obras sociales y medicina prepaga, entregando factura y resumen de historia clínica detallados para su presentación. Consultanos por WhatsApp para confirmar la cobertura de tu plan.',
    },
    {
      pregunta: '¿Cómo solicito o reprogramo un turno presencial?',
      respuesta:
        'Podés solicitar tu turno directamente desde el botón "Solicitar Turno" de esta página o escribiéndonos por WhatsApp. Si necesitás reprogramar, te pedimos avisar con al menos 24 horas de anticipación para liberar el horario a otro paciente.',
    },
  ];

  // Variantes de animación Framer Motion
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="scroll-mt-[96px] min-h-[calc(100vh-96px)] flex items-center bg-white py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          {/* Encabezado */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12 lg:mb-14 space-y-3"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.18em] text-[#6E3B96] uppercase"
            >
              Preguntas Frecuentes
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl xl:text-[48px] font-bold text-[#1D1D26] leading-[1.14] tracking-tight"
            >
              Respuestas antes de tu{' '}
              <span className="italic font-normal text-[#6E3B96]">
                primera visita
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-[17px] text-[#555563] max-w-2xl mx-auto"
            >
              Despejá las dudas habituales sobre la consulta médica, estudios
              previos y modalidades de atención.
            </motion.p>
          </motion.div>

          {/* Lista de acordeón */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4 lg:space-y-5"
          >
            {preguntas.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.pregunta}
                  variants={fadeUp}
                  className={`rounded-2xl border bg-white transition-colors duration-200 ${
                    isOpen
                      ? 'border-[#6E3B96]/45 shadow-[0_12px_32px_-10px_rgba(110,59,150,0.2)]'
                      : 'border-[#6E3B96]/20 hover:border-[#6E3B96]/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-7 sm:px-8 py-5 sm:py-6 text-left focus:outline-none cursor-pointer"
                  >
                    <span className="font-serif text-base sm:text-lg xl:text-[19px] font-semibold text-[#1D1D26]">
                      {item.pregunta}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? 'bg-[#1EC2F3]/15 text-[#1EC2F3]'
                          : 'bg-[#6E3B96]/10 text-[#6E3B96]'
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 sm:px-8 pb-7 pt-1 text-sm sm:text-base text-[#555563] leading-[1.75]">
                          {item.respuesta}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Faq;