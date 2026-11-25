import { motion } from 'framer-motion';

const Me = () => {
  const pilares = [
    {
      titulo: 'Escucha sin prisa',
      descripcion:
        'La primera consulta dura el tiempo que sea necesario para entender tu historia.',
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      titulo: 'Plan personalizado',
      descripcion:
        'Cada tratamiento se adapta a tu enfermedad, tu vida y tus objetivos.',
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
      ),
    },
    {
      titulo: 'Rigor científico',
      descripcion:
        'Medicina basada en evidencia, explicada en palabras claras y comprensibles.',
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
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
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section
      id="quienes-somos"
      className="scroll-mt-[88px] min-h-[calc(100vh-88px)] flex items-center bg-white py-12 lg:py-16"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-x-14 lg:gap-y-7 items-center">
          
          {/* Columna Izquierda: Foto con marco celeste desplazado + Tarjeta institucional */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-none lg:col-span-5 lg:row-span-2 flex justify-center"
          >
            <div className="relative w-full max-w-[430px] xl:max-w-[460px]">
              {/* Marco exterior fino en celeste de la marca */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="hidden sm:block absolute -inset-3.5 rounded-[32px] border border-[#1EC2F3]/50 pointer-events-none"
              />

              {/* Contenedor principal de la imagen */}
              <div className="relative overflow-hidden rounded-[26px] bg-[#EFE9F6] shadow-[0_18px_40px_-15px_rgba(110,59,150,0.22)] aspect-[4/4.85]">
                <img
                  src="quien-soy.jpeg"
                  alt="Médica especialista en Reumatología y Clínica Médica"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              {/* Tarjeta flotante inferior derecha */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 right-3 sm:-right-4 z-10 rounded-2xl bg-white px-7 py-4 shadow-[0_12px_30px_rgba(110,59,150,0.12)] border border-[#6E3B96]/15"
              >
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#6E3B96] leading-tight">
                  Reumatología
                </p>
                <p className="mt-1 text-[11px] font-semibold tracking-[0.14em] text-[#7A7A88] uppercase">
                  Salud Articular e Inmunológica
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna Derecha: Textos */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="order-1 lg:order-none lg:col-span-7 space-y-6 xl:space-y-7 pt-4 lg:pt-0"
          >
            {/* Etiqueta superior */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.18em] text-[#6E3B96] uppercase"
            >
              Quiénes somos
            </motion.p>

            {/* Título */}
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl xl:text-[48px] font-bold text-[#1D1D26] leading-[1.14] tracking-tight"
            >
              Una medicina que{' '}
              <span className="italic font-normal text-[#1EC2F3]">escucha</span>
              , explica y acompaña.
            </motion.h2>

            {/* Párrafos descriptivos */}
            <motion.div
              variants={fadeUp}
              className="space-y-4 text-base sm:text-[17px] xl:text-[18px] text-[#555563] leading-[1.72]"
            >
              <p>
                La Reumatología es la especialidad médica dedicada al estudio,
                diagnóstico y tratamiento de las enfermedades que afectan al
                sistema musculoesquelético y al sistema inmunológico. Entre ellas
                se encuentran patologías autoinmunes complejas como la Artritis
                Reumatoide, Lupus Eritematoso Sistémico, Esclerosis sistémica,
                miopatías inflamatorias, vasculitis sistémicas entre otras, así
                como afecciones osteomusculares degenerativas de alta
                prevalencia, como la Osteoartritis y Osteoporosis.
              </p>
              <p>
                La función de un especialista en Reumatología es brindar una
                evaluación precisa y un plan de tratamiento oportuno para lograr
                el control efectivo de estas condiciones, prevenir el daño
                articular y mejorar la calidad de vida de cada paciente.
              </p>
            </motion.div>
          </motion.div>

          {/* 3 Tarjetas inferiores */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="order-3 lg:order-none lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3"
          >
            {pilares.map((item) => (
              <motion.div
                key={item.titulo}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-[#6E3B96]/20 bg-white p-6 transition-all duration-200 hover:border-[#6E3B96]/50 hover:shadow-[0_10px_25px_rgba(110,59,150,0.08)]"
              >
                {/* Círculo del ícono */}
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#6E3B96]/10 text-[#6E3B96] transition-colors duration-200 group-hover:bg-[#6E3B96] group-hover:text-white">
                  {item.icono}
                </div>

                <h3 className="font-serif text-base font-bold text-[#1D1D26] mb-2">
                  {item.titulo}
                </h3>

                <p className="text-sm text-[#5E5E6E] leading-relaxed">
                  {item.descripcion}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Me;