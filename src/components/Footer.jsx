const Footer = () => {
  const secciones = [
    { name: 'Quiénes Somos', href: '#quienes-somos' },
    { name: 'Misión', href: '#mision' },
    { name: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#4B236B] to-[#34164D] text-white pt-16 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Frase principal superior */}
        <div className="pb-12 border-b border-white/15">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white leading-tight tracking-tight">
            Salud articular &{' '}
            <span className="italic text-[#5CE1FF]">bienestar integral</span>
          </h2>
        </div>

        {/* Grilla central de 4 columnas: Marca/Redes + Secciones + Contacto + Mapa */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Columna 1: Logo, descripción y Redes Sociales (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a
              href="#inicio"
              aria-label="Centro Médico Las Trinitarias"
              className="inline-block group"
            >
              <svg
                className="w-full max-w-[300px] h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                viewBox="0 0 540 165"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path
                    id="trinitarias-heart"
                    d="M95 44C72 16 26 16 14 48C4 75 24 114 95 154C166 114 186 75 176 48C164 16 118 16 95 44Z"
                  />
                  <clipPath id="heart-clip">
                    <use href="#trinitarias-heart" />
                  </clipPath>
                  <linearGradient id="pulse-bar-grad" x1="16" y1="0" x2="524" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E2E4E9" />
                    <stop offset="35%" stopColor="#D1D5DB" />
                    <stop offset="55%" stopColor="#9CA3AF" />
                    <stop offset="100%" stopColor="#B0B5BD" />
                  </linearGradient>
                </defs>

                <use
                  href="#trinitarias-heart"
                  stroke="#FFFFFF"
                  strokeOpacity="0.22"
                  strokeWidth="3"
                />

                <g clipPath="url(#heart-clip)">
                  <rect x="0" y="0" width="190" height="165" fill="#6E3B96" />
                  <path
                    d="M0 95H68L86 67L110 116L126 95H190V165H0V95Z"
                    fill="#1EC2F3"
                  />
                </g>

                <path
                  d="M23 95H68L86 67L110 116L126 95H524"
                  stroke="url(#pulse-bar-grad)"
                  strokeWidth="8"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                />

                <text
                  x="194"
                  y="78"
                  fill="#1EC2F3"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontSize="47"
                  letterSpacing="-0.5"
                >
                  Centro Médico
                </text>

                <text
                  x="195"
                  y="133"
                  fill="#9F68CC"
                  fontFamily="Georgia, 'Times New Roman', serif"
                  fontWeight="700"
                  fontSize="31.5"
                  letterSpacing="1.8"
                >
                  LAS TRINITARIAS
                </text>
              </svg>
            </a>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Centro médico especializado en Reumatología y Clínica Médica a cargo
              de la Dra. Roselym Olivar. Diagnóstico preciso, alivio duradero y
              medicina con tiempo y empatía.
            </p>

            {/* Redes Sociales (Instagram y Facebook) */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.instagram.com/cmlastrinitarias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Centro Médico Las Trinitarias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 hover:border-[#1EC2F3] hover:bg-[#1EC2F3] hover:text-[#34164D] transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/cmlastrinitarias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Centro Médico Las Trinitarias"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 hover:border-[#1EC2F3] hover:bg-[#1EC2F3] hover:text-[#34164D] transition-all duration-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.55c0-.93.26-1.56 1.59-1.56h1.7V3.13c-.3-.04-1.31-.13-2.49-.13-2.46 0-4.15 1.5-4.15 4.26v2.34H7.36v3.2h2.79V21h3.35z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Secciones (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[#8CE2FC] uppercase">
              Secciones
            </p>
            <ul className="space-y-2.5">
              {secciones.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 hover:text-[#5CE1FF] transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto con dirección real (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[#8CE2FC] uppercase">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <svg className="h-4 w-4 mt-1 flex-shrink-0 text-[#1EC2F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Pueyrredón 1324, Ramos Mejía, Provincia de Buenos Aires</span>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="h-4 w-4 mt-1 flex-shrink-0 text-[#1EC2F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Lunes a Viernes • 9 a 18 h</span>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="h-4 w-4 mt-1 flex-shrink-0 text-[#1EC2F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a
                  href="https://wa.me/5491123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5CE1FF] transition-colors"
                >
                  WhatsApp +54 9 11 2345-6789
                </a>
              </li>

              <li className="text-white/70 pt-0.5">
                Dra. Roselym Olivar • Reumatología y Clínica Médica
              </li>
            </ul>
          </div>

          {/* Columna 4: Dónde estamos - Mapa interactivo (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[#8CE2FC] uppercase">
              Dónde estamos
            </p>
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-lg h-44">
              <iframe
                title="Ubicación Centro Médico Las Trinitarias - Pueyrredón 1324, Ramos Mejía"
                src="https://maps.google.com/maps?q=Pueyrredon%201324,%20Ramos%20Mejia,%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pueyrredon+1324,+Ramos+Mejia,+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-lg bg-[#2B1240]/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow hover:bg-[#1EC2F3] hover:text-[#2B1240] transition-colors"
              >
                <span>Abrir en Maps</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Aviso médico legal */}
        <div className="rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-4 flex items-start sm:items-center gap-3.5 text-xs sm:text-[13px] text-white/75">
          <svg
            className="h-5 w-5 flex-shrink-0 text-[#5CE1FF] mt-0.5 sm:mt-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <p>
            La información de este sitio es orientativa y no reemplaza la consulta
            médica. Ante una urgencia, dirigite a la guardia más cercana o
            comunicate al 911 / 107 (SAME).
          </p>
        </div>

        {/* Barra inferior: Copyright + Créditos de desarrollador */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            © {new Date().getFullYear()} Centro Médico Las Trinitarias. Todos los
            derechos reservados.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Diseño y desarrollo web por</span>
            <a
              href="https://leandrojaime.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-white underline underline-offset-4 decoration-[#1EC2F3] hover:text-[#5CE1FF] transition-colors"
            >
              <span>Lean Jaime</span>
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;