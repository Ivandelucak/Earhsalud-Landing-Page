// FILE: src/components/WhatsAppFloatingButton.tsx
"use client";

type WhatsAppFloatingButtonProps = {
  href: string;
  label?: string;
};

export default function WhatsAppFloatingButton({
  href,
  label = "Escribinos por WhatsApp",
}: WhatsAppFloatingButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden
        className="-mt-px"
      >
        <path
          d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0 12 12 0 0 0 2.1 18.36L0 24l5.82-2.04A11.94 11.94 0 0 0 12.06 24a12 12 0 0 0 8.46-20.52ZM12.06 22a9.86 9.86 0 0 1-5-1.36l-.36-.21-3.45 1.2 1.2-3.36-.24-.36A9.95 9.95 0 1 1 22 12.06 9.93 9.93 0 0 1 12.06 22Zm5.7-7.36c-.3-.15-1.77-.87-2.04-.96s-.48-.15-.69.15-.78.96-.96 1.17-.36.21-.66.06a8.1 8.1 0 0 1-2.4-1.47 8.78 8.78 0 0 1-1.62-2.01c-.18-.3 0-.45.12-.6s.3-.36.45-.57.21-.3.3-.51.03-.39-.03-.54c-.06-.15-.69-1.65-.96-2.25s-.51-.51-.69-.51-.39 0-.6 0A1.16 1.16 0 0 0 6 7.5a4.8 4.8 0 0 0-.99 3.54 8.32 8.32 0 0 0 1.77 3.15 18.94 18.94 0 0 0 3.45 3.27 11.5 11.5 0 0 0 2.82 1.5 6.47 6.47 0 0 0 2.97.39c.9-.09 1.77-.72 2.01-1.41s.24-1.29.18-1.41-.27-.24-.48-.33Z"
          fill="currentColor"
        />
      </svg>
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
