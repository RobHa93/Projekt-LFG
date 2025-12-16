import React from 'react'

const Service = () => {
  return (
    <div className="container mx-auto py-16 m-3">
      <h2 className="text-3xl font-bold mb-4">Unsere Services</h2>
      <p className="mb-4">
        Weitere Informationen zu unseren Services finden Sie direkt auf der
        <a
          href="https://langenfeld.sopl.ch/de/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-400 hover:underline"
        >
          Webseite der Langenfeld Garage AG
        </a>.
      </p>
    </div>
  );
};

export default Service;
