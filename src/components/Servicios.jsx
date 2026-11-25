import { motion } from 'framer-motion';

const Servicios = () => {
  const servicios = [
    {
      etiqueta: 'Atención Clínica',
      titulo: 'Consulta Médica Especializada en Reumatología',
      descripcion:
        'Evaluación clínica integral, diagnóstico preciso y seguimiento personalizado para patologías autoinmunes y osteoarticulares.',
      destacado: 'Abordaje integral y personalizado',
      icono: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      etiqueta: 'Estudio Diagnóstico',
      titulo: 'Capilaroscopia Periungueal',
      descripcion:
        'Procedimiento no invasivo fundamental para la evaluación de pacientes con Fenómeno de Raynaud. Permite orientar el diagnóstico diferencial entre una etiología primaria o secundaria (como la Esclerosis Sistémica / Esclerodermia) para establecer un abordaje temprano.',
      destacado: 'Procedimiento no invasivo de detección temprana',
      icono: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      ),
    },
  ];

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
      id="servicios"
      className="scroll-mt-[96px] min-h-[calc(100vh-96px)] flex items-center bg-white py-16 lg:py-24"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center max-w-3xl mx-auto mb-14 lg:mb-16 space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.18em] text-[#6E3B96] uppercase"
            >
              Especialidad y Estudios
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-3xl sm:text-4xl xl:text-[48px] font-bold text-[#1D1D26] leading-[1.14] tracking-tight"
            >
              Nuestros{' '}
              <span className="italic font-normal text-[#1EC2F3]">
                Servicios
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch"
          >
            {servicios.map((servicio) => (
              <motion.div
                key={servicio.titulo}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group flex flex-col justify-between rounded-[28px] border border-[#6E3B96]/20 bg-[#FAF8FC] p-8 sm:p-11 xl:p-12 shadow-[0_14px_35px_-15px_rgba(110,59,150,0.14)] transition-all duration-200 hover:bg-white hover:border-[#1EC2F3]/60 hover:shadow-[0_18px_40px_-14px_rgba(30,194,243,0.18)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6E3B96]/10 text-[#6E3B96] transition-colors duration-200 group-hover:bg-[#6E3B96] group-hover:text-white">
                      {servicio.icono}
                    </div>
                    <span className="rounded-full border border-[#1EC2F3]/35 bg-[#1EC2F3]/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#1D1D26]">
                      {servicio.etiqueta}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#1D1D26] leading-snug">
                    {servicio.titulo}
                  </h3>

                  <p className="text-base sm:text-[17px] text-[#555563] leading-[1.8]">
                    {servicio.descripcion}
                  </p>
                </div>

                <div className="pt-7 mt-9 border-t border-[#6E3B96]/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm font-semibold text-[#6E3B96]">
                    {servicio.destacado}
                  </span>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1EC2F3] group-hover:text-[#6E3B96] transition-colors"
                  >
                    <span>Solicitar turno</span>
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
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Servicios;