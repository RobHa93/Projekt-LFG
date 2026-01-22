import bildFolgt from '../assets/img/bild_folgt.jpg'

export default function MitarbeiterPortrait({ person }) {
  return (
    <div className="group relative flex h-full flex-col overflow-visible rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      
      {/* Rollen-Tags - oben links, 50% außerhalb */}
      <div className="absolute -left-2 -top-3 z-10 flex flex-wrap gap-0.5">
        {person.rollen?.map((rolle) => (
          <span
            key={rolle}
            className="bg-[#fdc700] px-3 py-1 text-xs font-semibold text-gray-900 shadow-md"
            style={{ transform: 'skewX(-10deg)' }}
          >
            <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>
              {rolle}
            </span>
          </span>
        ))}
      </div>

      {/* Bild / Platzhalter (50%) */}
      <div className="relative h-40 w-full bg-gray-200">
        <img
          src={bildFolgt}
          alt={person.name}
          className="h-full w-full object-fill"
        />
      </div>

      {/* Content (50%) */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {person.name}
          </h3>
          <p className="text-sm text-gray-600">
            {person.team}
          </p>
        </div>

        {/* Kontakt nur wenn vorhanden */}
        {(person.telefon || person.email) && (
          <div className="mt-auto space-y-1 text-sm">
            {person.telefon && (
              <a
                href={`tel:${person.telefon.replace(/\s/g, '')}`}
                className="block text-gray-700 hover:text-black"
              >
                {person.telefon}
              </a>
            )}

            {person.email && (
              <a
                href={`mailto:${person.email}`}
                className="block text-gray-700 hover:text-black"
              >
                {person.email}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
