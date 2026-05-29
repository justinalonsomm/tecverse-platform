'use client';

import { useState } from 'react';

export function ContactForm() {

  const [email, setEmail] = useState('');

  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div
      className="
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >

      <div
        className="
          mb-8
          rounded-2xl
          bg-white/[0.03]
          p-2
        "
      >
        <div
          className="
            rounded-xl
            bg-blue-500/20
            px-6
            py-4
            text-center
            font-medium
            text-blue-300
          "
        >
          📢 Mensajes Públicos
        </div>
      </div>

      <div className="
        grid
        gap-6
        md:grid-cols-2
      ">

        <div>
          <label className="
            mb-2
            block
            text-sm
            text-white/50
          ">
            Nombre
          </label>

          <input
            type="text"
            placeholder="Tu nombre"
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-white
              outline-none
            "
          />
        </div>

        <div>
          <label className="
            mb-2
            block
            text-sm
            text-white/50
          ">
            Correo
          </label>

          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              py-4
              text-white
              outline-none
            "
          />

          {!isValidEmail && email.length > 0 && (
            <p className="
              mt-2
              text-sm
              text-red-400
            ">
              Correo inválido
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">

        <label className="
          mb-2
          block
          text-sm
          text-white/50
        ">
          Asunto
        </label>

        <input
          type="text"
          placeholder="¿En qué podemos ayudarte?"
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-white
            outline-none
          "
        />
      </div>

      <div className="mt-6">

        <label className="
          mb-2
          block
          text-sm
          text-white/50
        ">
          Mensaje
        </label>

        <textarea
          rows={6}
          placeholder="Cuéntanos más..."
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            px-5
            py-4
            text-white
            outline-none
          "
        />
      </div>

      <button
        disabled={!isValidEmail}
        className="
          mt-8
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          to-purple-500
          px-8
          py-5
          text-lg
          font-bold
          text-white
          transition-transform
          hover:scale-[1.02]
          disabled:opacity-50
        "
      >
        Enviar mensaje →
      </button>
    </div>
  );
}