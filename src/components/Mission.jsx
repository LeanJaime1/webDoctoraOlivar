import { motion } from 'framer-motion';

const Mission = () => {
  const pilares = [
    {
      titulo: "Diagnóstico temprano",
      descripcion:
        "Detectar a tiempo las enfermedades autoinmunes e inflamatorias previene daños articulares irreversibles.",
      icono: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12h4l3-7 4 14 3-7h4"
          />
        </svg>
      ),
    },
    {
      titulo: "Enfoque integral",
      descripcion:
        "No tratamos síntomas aislados: entendemos al organismo en su totalidad desde la clínica médica.",
      icono: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.828 9.172l-2.121 4.95-4.95 2.121 2.121-4.95 4.95-2.121z"
          />
        </svg>
      ),
    },
    {
      titulo: "Acompañamiento continuo",
      descripcion:
        "Seguimiento directo y cercano para ajustar tratamientos y sostener el bienestar en el tiempo.",
      icono: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="7" cy="7" r="2.5" />
          <circle cx="17" cy="17" r="2.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.5 7H14a3 3 0 013 3v1.5M14.5 17H10a3 3 0 01-3-3v-1.5"
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
      transition: { staggerChildren: 0.14 },
    },
  };

  return (
    <section
      id="mision"
      className="scroll-mt-[88px] relative overflow-hidden bg-gradient-to-br from-[#6E3B96] via-[#5E3082] to-[#462163] py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Cruz médica */}
      <div className="hidden md:block pointer-events-none absolute top-6 right-6 lg:top-10 lg:right-12 select-none">
        <svg
          className="h-[260px] w-[260px] lg:h-[320px] lg:w-[320px]"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cruz médica */}
          <path
            d="M92 28C92 21.3726 97.3726 16 104 16H136C142.627 16 148 21.3726 148 28V92H212C218.627 92 224 97.3726 224 104V136C224 142.627 218.627 148 212 148H148V212C148 218.627 142.627 224 136 224H104C97.3726 224 92 218.627 92 212V148H28C21.3726 148 16 142.627 16 136V104C16 97.3726 21.3726 92 28 92H92V28Z"
            fill="#FFFFFF"
            fillOpacity="0.06"
          />
          {/* Pulso */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.8,
              ease: "easeInOut",
            }}
            d="M16 120H88L102 90L120 150L138 102L148 120H224"
            stroke="#1EC2F3"
            strokeOpacity="0.35"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Destello sutil celeste en esquina inferior izquierda */}
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-[#1EC2F3]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Etiqueta superior */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-xs font-bold tracking-[0.2em] text-[#8CE2FC] uppercase mb-5"
          >
            Nuestra Misión
          </motion.p>

          {/* Cita principal */}
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="border-l-2 border-[#1EC2F3] pl-5 sm:pl-8 max-w-4xl"
          >
            <p className="font-serif text-[22px] sm:text-3xl lg:text-[38px] font-normal text-white leading-[1.35] sm:leading-[1.3] tracking-tight">
              “Nuestra misión es construir una relación médico-paciente{" "}
              <span className="italic text-[#D8B4F8]">
                armónica, empática y de confianza
              </span>
              , orientada a aliviar el dolor, reducir los síntomas y alcanzar un{" "}
              <span className="italic text-[#5CE1FF]">control integral</span> de
              la enfermedad reumática.”
            </p>
          </motion.blockquote>

          {/* 3 Tarjetas translúcidas */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-14"
          >
            {pilares.map((item) => (
              <motion.div
                key={item.titulo}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm p-6 sm:p-7 transition-all duration-200 hover:bg-white/[0.11] hover:border-[#1EC2F3]/40"
              >
                {/* Círculo del ícono en celeste */}
                <div className="mb-4 sm:mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#1EC2F3]/20 text-[#5CE1FF] transition-colors duration-200 group-hover:bg-[#1EC2F3] group-hover:text-[#3A1954]">
                  {item.icono}
                </div>

                <h3 className="font-serif text-lg font-semibold text-white mb-2 sm:mb-2.5">
                  {item.titulo}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
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

export default Mission;