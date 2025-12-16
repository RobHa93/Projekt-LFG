// Contact Section basierend auf ATG-AG Kontakt
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Hier würde normalerweise die Form-Logik stehen
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
  };

  const openingHours = {
    werkstatt: [
      { days: "Montag - Donnerstag", hours: "07:15 - 12:00 Uhr, 13:30 - 17:30 Uhr" },
      { days: "Freitag", hours: "07:15 - 12:00 Uhr, 13:30 - 17:00 Uhr" },
      { days: "Samstag", hours: "08:00 - 12:00 Uhr" }
    ],
    verkauf: [
      { days: "Montag - Donnerstag", hours: "07:15 - 12:00 Uhr, 13:30 - 18:00 Uhr" },
      { days: "Freitag", hours: "07:15 - 12:00 Uhr, 13:30 - 17:00 Uhr" },
      { days: "Samstag", hours: "08:00 - 12:00 Uhr" }
    ]
  };

  const contactInfo = [
    {
      title: "Hauptnummer",
      icon: "📞",
      value: "044 123 45 67",
      link: "tel:+41441234567"
    },
    {
      title: "E-Mail",
      icon: "📧", 
      value: "info@autocenter-lfg.ch",
      link: "mailto:info@autocenter-lfg.ch"
    },
    {
      title: "Ersatzteillager",
      icon: "📦",
      value: "044 123 45 75", 
      link: "tel:+41441234575"
    },
    {
      title: "24h Pannenhilfe",
      icon: "🚨",
      value: "044 123 45 00",
      link: "tel:+41441234500"
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600">
            Nehmen Sie Kontakt mit uns auf - wir sind gerne für Sie da!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontakt-Formular */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Nachricht senden</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gewünschter Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Bitte wählen...</option>
                  <option value="service">Service & Wartung</option>
                  <option value="reparatur">Reparatur</option>
                  <option value="verkauf">Fahrzeugkauf</option>
                  <option value="probefahrt">Probefahrt</option>
                  <option value="ersatzteile">Ersatzteile</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Nachricht senden 📤
              </button>
            </form>
          </div>

          {/* Kontakt-Informationen */}
          <div className="space-y-8">
            {/* Adresse */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">AutoCenter LFG</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-medium">Musterstraße 123</p>
                    <p className="text-gray-600">8000 Zürich</p>
                    <a 
                      href="https://maps.google.ch/maps?q=Musterstraße+123,8000+Zürich"
                      className="text-blue-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📍 Anfahrt planen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontakt-Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-6">Kontaktmöglichkeiten</h4>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-2xl mr-4">{contact.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800">{contact.title}</p>
                      <p className="text-blue-600">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h4 className="text-xl font-semibold mb-6">Öffnungszeiten</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-gray-800 mb-3">🔧 Werkstatt</h5>
                  <div className="space-y-2">
                    {openingHours.werkstatt.map((time, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{time.days}</span>
                        <span className="text-gray-800 font-medium">{time.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-800 mb-3">🚗 Verkauf</h5>
                  <div className="space-y-2">
                    {openingHours.verkauf.map((time, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{time.days}</span>
                        <span className="text-gray-800 font-medium">{time.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
