import RevealEmail from '@/components/RevealEmail';

export default function GetInTouchButton() {
  return (
    <div className="flex justify-center py-2">
      <RevealEmail
        autoOpen
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg border border-accent text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Get in touch
      </RevealEmail>
    </div>
  );
}