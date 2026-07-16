import { authorConfig } from '@/lib/author';

const authorName = authorConfig.name;

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-6 px-4">
      <hr className="border-border mb-6" />
      <p className="text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {authorName}. All rights reserved.
      </p>
    </footer>
  )
}