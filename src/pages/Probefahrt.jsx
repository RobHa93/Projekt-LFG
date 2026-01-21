import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'


export default function Probefahrt() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#FFD131] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#FFD131]  sm:text-5xl dark:text-[#FFD131] ">
Probefahrt vereinbaren        </h2>
        <p className="mt-2 text-lg/8 text-black dark:text-black">
          Der nächste Schritt zum Traumauto
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-black">
              Vorname
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FFD131]  dark:bg-black/5 dark:text-black dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-[#FFD131]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900 dark:text-black">
             Nachname
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FFD131] dark:bg-black/5 dark:text-black dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-[#FFD131]"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900 dark:text-black">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-black/5 dark:text-black dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-[#FFD131]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900 dark:text-black">
              Telefon
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-black outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black dark:bg-black/5 dark:outline-black/10 dark:has-[input:focus-within]:outline-[#FFD131]">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:placeholder:text-gray-500 dark:focus:outline-[#FFD131]"
                  >
                    <option>+41</option>
                    <option>058</option>
                    <option>+41</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="12 345-67-89"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900 dark:text-black">
              Nachricht
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-black px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#FFD131] dark:bg-black/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-[#FFD131]"
                defaultValue={''}
              />
            </div>
          <br />
       <div className="flex flex-col gap-y-4 sm:col-span-2">
  {/* Kontaktart auswählen */}
  <fieldset>
    <legend className="block text-sm/6 font-semibold text-gray-900 dark:text-black mb-2">
      Kontakt via
    </legend>

    <div className="flex gap-x-6">
      <label className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
        <input
          type="radio"
          name="contact_via"
          value="Telefon"
          required
          className="accent-[#FFD131]"
        />
        Telefon
      </label>

      <label className="flex items-center gap-x-2 text-sm text-gray-700 dark:text-gray-400">
        <input
          type="radio"
          name="contact_via"
          value="E-Mail"
          className="accent-[#FFD131]"
        />
        E-Mail
      </label>
    </div>
  </fieldset>

  {/* Privacy Policy */}
  <div className="flex gap-x-4">
    <div className="flex h-6 items-center">
      <input
        id="agree-to-policies"
        name="agree-to-policies"
        type="checkbox"
        required
        className="size-4 accent-white"
      />
    </div>
    <label htmlFor="agree-to-policies" className="text-sm/6 text-black dark:text-black">
      Ich akzeptiere die{' '}
      <a href="#" className="font-semibold text-black">
        allgemeinen Geschäftsbedingungen
      </a>
      .
    </label>
  </div>
</div>

          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#FFD131] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#FFD131] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD131] dark:bg-black dark:hover:bg-[#FFD131] dark:focus-visible:outline-[#FFD131]"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  )
}
