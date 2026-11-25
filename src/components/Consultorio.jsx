import { motion } from 'framer-motion';

const Consultorio = () => {
  const comodidades = [
    'Ambiente climatizado y accesible en planta baja',
    'Sala de espera confortable con turnos puntuales',
    'Equipamiento diagnóstico en consultorio',
    'Ubicación céntrica de fácil acceso',
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
      transition: { staggerChildren: 0.14 },
    },
  };

  return (
    <section
      id="galeria"
      className="scroll-mt-[96px] min-h-[calc(100vh-96px)] flex items-center bg-[#FAF8FC] py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Encabezado */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-10 lg:mb-12 space-y-3"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold tracking-[0.18em] text-[#6E3B96] uppercase"
          >
            El Consultorio
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl xl:text-[48px] font-bold text-[#1D1D26] leading-[1.14] tracking-tight"
          >
            Un espacio pensado para{' '}
            <span className="italic font-normal text-[#1EC2F3]">
              tu tranquilidad
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-[17px] text-[#555563] leading-relaxed max-w-2xl"
          >
            Instalaciones modernas y accesibles diseñadas para brindarte una
            atención médica cálida, puntual y sin esperas innecesarias.
          </motion.p>
        </motion.div>

        {/* Grilla */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch"
        >
          
          {/* Foto 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 group relative overflow-hidden rounded-[26px] bg-white shadow-[0_14px_35px_-12px_rgba(110,59,150,0.18)] border border-[#6E3B96]/15 h-[380px] lg:h-[500px] xl:h-[530px]"
          >
            <img
              src="consultorio2.jpeg"
              alt="Interior del consultorio médico en Centro Médico Las Trinitarias"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261136]/75 via-[#261136]/20 to-transparent p-6">
              <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-[#6E3B96]">
                Atención personalizada
              </span>
            </div>
          </motion.div>

          {/* Foto 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 group relative overflow-hidden rounded-[26px] bg-white shadow-[0_14px_35px_-12px_rgba(110,59,150,0.18)] border border-[#6E3B96]/15 h-[380px] lg:h-[500px] xl:h-[530px]"
          >
            <img
              src="consultorio1.jpeg"
              alt="Sala de recepción y espera de Centro Médico Las Trinitarias"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#261136]/75 via-[#261136]/20 to-transparent p-6">
              <span className="inline-block rounded-full bg-white/95 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-[#6E3B96]">
                Confort y calidez
              </span>
            </div>
          </motion.div>

          {/* Tarjeta Institucional */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="lg:col-span-4 flex flex-col justify-between rounded-[26px] bg-white p-7 sm:p-9 border border-[#1EC2F3]/35 shadow-[0_14px_35px_-12px_rgba(30,194,243,0.14)] lg:h-[500px] xl:h-[530px]"
          >
            <div className="space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1EC2F3]/15 text-[#1EC2F3]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D1D26] leading-snug">
                Comodidad en cada visita
              </h3>

              <p className="text-sm sm:text-[15px] text-[#555563] leading-relaxed">
                Diseñamos cada detalle de Centro Médico Las Trinitarias para que tu consulta transcurra en un entorno sereno y cuidado.
              </p>

              <ul className="space-y-3.5 pt-2">
                {comodidades.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#4A4A55]">
                    <svg className="h-5 w-5 mt-0.5 flex-shrink-0 text-[#1EC2F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-5 border-t border-gray-100">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#6E3B96] hover:text-[#1EC2F3] transition-colors"
              >
                <span>Cómo llegar al centro</span>
                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Consultorio;