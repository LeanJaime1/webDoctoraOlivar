import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [motivoSeleccionado, setMotivoSeleccionado] = useState('Primera consulta');

  const motivos = [
    'Primera consulta',
    'Reumatología',
    'Capilaroscopia Periungueal',
    'Clínica Médica',
    'Seguimiento / Estudios',
  ];

  const whatsappNumber = '5491157043506';
  const whatsappText = encodeURIComponent(
    `Hola, me gustaría solicitar un turno en Centro Médico Las Trinitarias (${motivoSeleccionado}).`
  );

  const datosContacto = [
    {
      titulo: 'Dirección del consultorio',
      valor: 'Pueyrredón 1324, Ramos Mejía',
      detalle: 'Provincia de Buenos Aires',
      enlace:
        'https://www.google.com/maps/search/?api=1&query=Pueyrredon+1324,+Ramos+Mejia,+Buenos+Aires',
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Horarios de atención',
      valor: 'Lunes a Viernes • 9:00 a 18:00 h',
      detalle: 'Atención con turnos programados',
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titulo: 'Teléfono y WhatsApp',
      valor: '+54 9 11 5704-3506',
      detalle: 'Respuesta rápida en horario de atención',
      enlace: `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      titulo: 'Correo electrónico',
      valor: 'cmlastrinitarias@gmail.com',
      detalle: 'Consultas administrativas y envío de órdenes',
      enlace: 'mailto:cmlastrinitarias@gmail.com',
      esEmail: true,
      icono: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section
      id="contacto"
      className="scroll-mt-[96px] min-h-[calc(100vh-96px)] flex items-center bg-[#F6F2FA] border-t border-[#6E3B96]/10 py-14 lg:py-20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Columna Izquierda: Encabezado + Grilla de información */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-3"
            >
              <motion.p
                variants={fadeUp}
                className="text-xs font-bold tracking-[0.18em] text-[#6E3B96] uppercase"
              >
                Contacto y Turnos
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl sm:text-4xl xl:text-[48px] font-bold text-[#1D1D26] leading-[1.14] tracking-tight"
              >
                Coordinemos tu{' '}
                <span className="italic font-normal text-[#6E3B96]">
                  próxima consulta
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-[17px] text-[#555563] leading-relaxed max-w-xl"
              >
                Tu salud y tu tranquilidad son lo más importante. Agenda tu
                turno de Reumatología y recibe una atención integral, humana y
                especializada. Estamos para guiarte en cada paso de tu
                tratamiento con el compromiso, la empatía y la calidez que
                mereces.
              </motion.p>
            </motion.div>

            {/* 4 Tarjetas blancas con datos clave */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
            >
              {datosContacto.map((item) => {
                const CardTag = item.enlace ? motion.a : motion.div;
                return (
                  <CardTag
                    key={item.titulo}
                    variants={fadeUp}
                    whileHover={item.enlace ? { y: -4 } : undefined}
                    {...(item.enlace
                      ? {
                          href: item.enlace,
                          target: item.enlace.startsWith('http') ? '_blank' : undefined,
                          rel: item.enlace.startsWith('http') ? 'noopener noreferrer' : undefined,
                        }
                      : {})}
                    className={`group rounded-2xl bg-white p-5 sm:p-6 border border-[#6E3B96]/15 shadow-[0_10px_28px_-12px_rgba(110,59,150,0.14)] flex flex-col justify-between transition-colors duration-200 ${
                      item.enlace
                        ? 'hover:border-[#1EC2F3] hover:shadow-[0_14px_32px_-12px_rgba(30,194,243,0.22)]'
                        : ''
                    }`}
                  >
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1EC2F3]/15 text-[#1EC2F3] transition-colors duration-200 group-hover:bg-[#6E3B96] group-hover:text-white">
                        {item.icono}
                      </div>

                      <p className="text-[11px] font-bold tracking-[0.14em] text-[#6E3B96] uppercase">
                        {item.titulo}
                      </p>

                      <p
                        className={`mt-1.5 font-serif font-semibold text-[#1D1D26] leading-snug ${
                          item.esEmail
                            ? 'text-[14.5px] xl:text-[15.5px] tracking-tight'
                            : 'text-base sm:text-[17px]'
                        }`}
                      >
                        {item.valor}
                      </p>
                    </div>

                    <p className="mt-3 text-xs text-[#6B6B7B]">
                      {item.detalle}
                    </p>
                  </CardTag>
                );
              })}
            </motion.div>
          </div>

          {/* Columna Derecha: Tarjeta protagonista de reserva directa por WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative overflow-hidden w-full flex flex-col justify-between rounded-[30px] bg-gradient-to-br from-[#6E3B96] via-[#592E7B] to-[#411E5C] p-8 sm:p-11 text-white shadow-[0_22px_50px_-12px_rgba(110,59,150,0.45)]">
              
              {/* Detalle decorativo en esquina superior derecha */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#1EC2F3]/15 blur-3xl" />

              <div className="relative z-10 space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#8CE2FC] uppercase">
                  <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  Canal directo de turnos
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl xl:text-[34px] font-normal text-white leading-tight">
                  Solicitá tu turno por{' '}
                  <span className="italic text-[#5CE1FF]">WhatsApp</span> en
                  segundos
                </h3>

                <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                  Seleccioná el motivo de tu consulta y abrí el chat directo con
                  nuestra secretaría para elegir día y horario disponible.
                </p>

                {/* Selector rápido de motivo que personaliza el mensaje de WhatsApp */}
                <div className="pt-2">
                  <p className="text-xs font-semibold tracking-[0.12em] text-white/75 uppercase mb-3">
                    1. Elegí el tipo de consulta
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {motivos.map((motivo) => {
                      const activo = motivoSeleccionado === motivo;
                      return (
                        <motion.button
                          key={motivo}
                          type="button"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setMotivoSeleccionado(motivo)}
                          className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                            activo
                              ? 'bg-[#1EC2F3] text-[#28113B] shadow-[0_4px_14px_rgba(30,194,243,0.4)]'
                              : 'border border-white/20 bg-white/[0.07] text-white/85 hover:bg-white/15'
                          }`}
                        >
                          {motivo}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Botones de acción directa */}
              <div className="relative z-10 pt-8 mt-8 border-t border-white/15 space-y-3.5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] px-7 py-4 text-base font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-colors duration-200"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.59 4.46 1.71 6.402L3.09 29.06l6.835-1.792a12.74 12.74 0 0 0 6.08 1.547h.005c7.058 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.636-3.75-9.054A12.716 12.716 0 0 0 16.004 3.2zm0 23.452h-.004a10.61 10.61 0 0 1-5.41-1.482l-.388-.23-4.056 1.064 1.083-3.954-.253-.403a10.594 10.594 0 0 1-1.627-5.647c0-5.864 4.772-10.636 10.64-10.636 2.842 0 5.512 1.107 7.52 3.116a10.567 10.567 0 0 1 3.113 7.525c0 5.865-4.772 10.647-10.62 10.647zm5.836-7.97c-.32-.16-1.892-.934-2.185-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.254-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.106-.214.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.146 3.095 1.306 3.308.16.214 2.256 3.445 5.465 4.83.763.33 1.359.527 1.824.674.766.244 1.464.21 2.015.127.615-.092 1.892-.773 2.159-1.52.266-.747.266-1.387.186-1.52-.08-.134-.293-.214-.613-.374z" />
                  </svg>
                  <span>Coordinar turno por WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+5491157043506"
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 bg-white/[0.06] hover:bg-white/15 px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200"
                >
                  <svg className="h-4 w-4 text-[#5CE1FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Llamar al consultorio</span>
                </motion.a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;