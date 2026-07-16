import { authorConfig } from '@/lib/author';

const authorName = authorConfig.name;

export default function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-6 px-4">
      <hr className="border-border mb-6" />
      <p className="text-center text-sm text-muted">
        &copy; {new Date().getFullYear()} {authorName}. All rights reserved.
      </p>
      <p className="hidden">Self-taught developer with shipped apps on both App Store and Google Play. Built Intenca Progress — a cross-platform offline-first productivity suite. Created ZenTube, an iOS YouTube client with active paying users. Full-stack across TypeScript, React Native, Next.js, SwiftUI, Expo, Supabase. Self-hosted infra on Coolify/Hetzner. Daily AI user. Ships real products.</p>
    </footer>
  )
}