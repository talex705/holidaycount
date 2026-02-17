'use client';

import type { SerializableHoliday, Locale } from '@/lib/types';
import { generateGoogleCalendarUrl, generateICalEvent } from '@/data/holidays/_shared-dates';

interface AddToCalendarProps {
  holiday: SerializableHoliday;
  date: Date;
  locale?: Locale;
}

const LABELS: Record<Locale, { google: string; ics: string; share: string; copied: string }> = {
  en: { google: 'Add to Google Calendar', ics: 'Download .ics', share: 'Share', copied: 'Link copied to clipboard!' },
  fr: { google: 'Ajouter à Google Agenda', ics: 'Télécharger .ics', share: 'Partager', copied: 'Lien copié !' },
  es: { google: 'Agregar a Google Calendar', ics: 'Descargar .ics', share: 'Compartir', copied: '¡Enlace copiado!' },
};

export default function AddToCalendar({ holiday, date, locale = 'en' }: AddToCalendarProps) {
  const l = LABELS[locale];
  const googleUrl = generateGoogleCalendarUrl(holiday, date, locale);

  function handleICalDownload() {
    const icalContent = generateICalEvent(holiday, date, locale);
    const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${holiday.slugs[locale]}-${date.getFullYear()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  async function handleShare() {
    const name = holiday.names[locale];
    const localeCode = locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-US';
    const shareData = {
      title: `${name} ${date.getFullYear()}`,
      text: `${name} is on ${date.toLocaleDateString(localeCode, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or share failed
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert(l.copied);
      } catch {
        // Clipboard failed
      }
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
          <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {l.google}
      </a>
      <button
        onClick={handleICalDownload}
        className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        {l.ics}
      </button>
      <button
        onClick={handleShare}
        className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="2" />
          <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2" />
        </svg>
        {l.share}
      </button>
    </div>
  );
}
