// app/about/cntnt01.tsx
export const coolTitle = ""; // This overwrites the global title

export default function Cntnt01() {
  // Common settings for all icons
  const iconClass = "w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform grayscale hover:grayscale-0 opacity-80 hover:opacity-100";

  return (
    <div className="flex flex-row justify-center items-center gap-8 py-6">
      
      {/* Mastodon */}
      <a href="https://mastodon.social/" target="_blank" rel="noopener noreferrer" title="Mastodon">
        <img src="https://cdn.simpleicons.org/mastodon/2C90D9" alt="Mastodon" className={iconClass} />
      </a>

      {/* YouTube */}
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" title="YouTube">
        <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className={iconClass} />
      </a>

      {/* Email */}
      <a href="mailto:exmp@example.com" title="Email">
        <img src="https://cdn.simpleicons.org/minutemailer/gray" alt="Email" className={iconClass} />
      </a>

      {/* Patreon */}
      <a href="https://patreon.com/" target="_blank" rel="noopener noreferrer" title="Patreon">
        <img src="https://cdn.simpleicons.org/patreon/FF424D" alt="Patreon" className={iconClass} />
      </a>

    </div>
  );
}
