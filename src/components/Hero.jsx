import { motion } from 'framer-motion';

const Hero = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="inicio"
      className="relative flex-1 flex items-center min-h-[calc(100vh-96px)] scroll-mt-[96px] overflow-hidden bg-gradient-to-b from-[#F8F5FC] via-white to-white py-12 lg:py-16"
    >
      {/* Destello decorativo*/}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#6E3B96]/5 blur-3xl"
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-12 lg:gap-y-8 items-center">
          
          {/* Textos superiores (orden 1 en mobile y desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:col-span-6 space-y-7 xl:space-y-8"
          >
            {/* Píldora superior */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#6E3B96]/25 bg-white/85 px-5 py-2 shadow-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#6E3B96] animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.15em] text-[#6E3B96] uppercase">
                Especialista en Reumatología
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl xl:text-[60px] font-bold text-[#1D1D26] leading-[1.12] tracking-tight"
            >
              Cuidado Integral
              <span className="block italic font-normal text-[#6E3B96] my-2">
                para tu Salud Articular
              </span>
              e Inmunológica.
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg xl:text-[19px] text-[#555563] leading-[1.7] max-w-xl"
            >
              Abordaje integral en Centro Médico Las Trinitarias para
              diagnosticar afecciones, tratar el dolor y cuidar tu salud clínica
              general con la calidez de la medicina de cabecera.
            </motion.p>
          </motion.div>

          {/* Columna Derecha (orden 2 en mobile, ocupa 2 filas en desktop) */}
          <div className="order-2 lg:col-span-6 lg:row-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] xl:max-w-[490px]">
              {/* Resplandor / Aura */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute -inset-3 rounded-t-full bg-[#6E3B96]/25 blur-2xl"
              />

              {/* Contenedor con forma de arco */}
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-t-full bg-[#EFE9F6] ring-4 ring-[#6E3B96]/20 shadow-[0_22px_50px_-12px_rgba(110,59,150,0.45)] aspect-[4/4.85]"
              >
                <motion.img
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  src="home.jpeg"
                  alt="Profesional de Centro Médico Las Trinitarias"
                  className="h-full w-full object-cover object-top"
                />
                {/* Viñeta sutil inferior */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#36184F]/35 to-transparent" />
              </motion.div>

              {/* Píldora flotante superior*/}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-12 -right-3 sm:-right-6 z-10"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-full bg-[#6E3B96] px-6 py-2.5 text-xs sm:text-sm font-medium text-white shadow-lg"
                >
                  Reumatología • Médica Clínica
                </motion.div>
              </motion.div>

              {/* Tarjeta flotante inferior izquierda*/}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 -left-3 sm:-left-8 z-10"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="flex items-center gap-3.5 rounded-2xl bg-white/95 backdrop-blur-sm p-4 pr-7 shadow-[0_10px_30px_rgba(110,59,150,0.16)] border border-[#6E3B96]/15"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#1EC2F3]/15 text-[#1EC2F3]">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1D1D26]">
                      Atención presencial
                    </p>
                    <p className="text-xs text-[#6E3B96] font-medium">
                      Turnos programados
                    </p>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>

          {/* Botones de acción centrados en mobile y alineados a la izquierda en desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="order-3 lg:col-span-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#6E3B96] hover:bg-[#582E7A] px-8 py-4 text-[15px] font-medium text-white shadow-[0_6px_20px_rgba(110,59,150,0.35)] transition-colors duration-200"
            >
              <span>Agendar consulta</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#mision"
              className="inline-flex items-center justify-center rounded-full border border-[#1EC2F3]/60 bg-white hover:bg-[#1EC2F3]/10 px-8 py-4 text-[15px] font-medium text-[#2A2A35] hover:border-[#1EC2F3] transition-colors duration-200"
            >
              Conocer nuestro enfoque
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;