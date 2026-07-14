import Image from 'next/image';

export default function AuthorCard() {
  const name = process.env.NEXT_PUBLIC_AUTHOR_NAME ?? 'Your Name'
  const title = process.env.NEXT_PUBLIC_AUTHOR_TITLE ?? 'Developer'
  const bio = process.env.NEXT_PUBLIC_AUTHOR_BIO ?? ''
  const avatar = process.env.NEXT_PUBLIC_AUTHOR_AVATAR
  const initials = process.env.NEXT_PUBLIC_AUTHOR_INITIALS ?? 'YN'

  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start gap-8 py-8 pt-20 px-4 max-w-2xl mx-auto">
      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-surface border border-border flex items-center justify-center text-2xl font-bold text-muted">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <div className="text-center sm:text-left flex-1">
        <div className="flex items-center justify-center sm:justify-start gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
        </div>
        <p className="text-lg text-muted mt-2">{title}</p>
        {bio && (
          <p className="text-base text-muted mt-4 max-w-prose leading-relaxed">
            {bio}
          </p>
        )}
      </div>
    </section>
  )
}