// A small set of hand-drawn, single-weight line icons standing in for plant
// photography. Kept as inline SVG (no external images) so the catalog has
// no licensing dependencies and renders instantly.

const pot = (accent) => (
  <path
    d="M30 78 L34 96 Q50 100 66 96 L70 78 Z"
    fill="none"
    stroke={accent}
    strokeWidth="2.5"
    strokeLinejoin="round"
  />
)

const shapes = {
  'sword-leaf': (accent) => (
    <>
      <path d="M50 78 C46 58 42 38 48 14" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 78 C54 56 58 34 52 10" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 78 C48 52 38 34 26 22" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 78 C52 52 62 34 74 22" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  bloom: (accent) => (
    <>
      <path d="M50 78 C50 60 50 44 50 30" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 52 C40 48 32 40 30 30" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 60 C60 56 68 48 70 38" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="22" r="10" fill="none" stroke={accent} strokeWidth="2.5" />
      <circle cx="38" cy="18" r="7" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="62" cy="18" r="7" fill="none" stroke={accent} strokeWidth="2" />
    </>
  ),
  palm: (accent) => (
    <>
      <path d="M50 78 L50 40" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      {[[-30, -8], [-18, -26], [0, -34], [18, -26], [30, -8]].map(([dx, dy], i) => (
        <path
          key={i}
          d={`M50 40 Q${50 + dx / 2} ${40 + dy / 2} ${50 + dx} ${40 + dy}`}
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </>
  ),
  'ribbon-leaf': (accent) => (
    <>
      <path d="M50 78 C50 60 50 46 50 34" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 40 C36 34 24 36 16 46" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 44 C64 38 76 40 84 50" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 34 C46 26 42 18 44 10" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  'broad-leaf': (accent) => (
    <>
      <path d="M50 78 L50 42" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path
        d="M50 42 C30 40 22 24 32 10 C46 18 52 28 50 42 Z"
        fill="none"
        stroke={accent}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M34 16 L46 34" fill="none" stroke={accent} strokeWidth="1.5" />
    </>
  ),
  fern: (accent) => (
    <>
      <path d="M50 78 C50 58 48 40 44 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      {[16, 26, 36, 46, 56].map((y, i) => (
        <g key={i}>
          <path d={`M${50 - i * 1.2} ${78 - y} q-10 -4 -16 -12`} fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
          <path d={`M${50 - i * 1.2} ${78 - y} q10 -4 16 -12`} fill="none" stroke={accent} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
    </>
  ),
  trailing: (accent) => (
    <>
      <path d="M40 30 C40 44 60 44 60 58 C60 72 40 72 40 86" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      {[34, 48, 62, 76].map((cy, i) => (
        <circle key={i} cx={i % 2 === 0 ? 42 : 58} cy={cy} r="4" fill="none" stroke={accent} strokeWidth="2" />
      ))}
    </>
  ),
  succulent: (accent) => (
    <>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2 - Math.PI / 2
        const x = 50 + Math.cos(angle) * 20
        const y = 46 + Math.sin(angle) * 20
        return (
          <path
            key={i}
            d={`M50 46 Q${(50 + x) / 2} ${(46 + y) / 2 - 6} ${x} ${y}`}
            fill="none"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
        )
      })}
      <circle cx="50" cy="46" r="5" fill="none" stroke={accent} strokeWidth="2" />
    </>
  ),
  'coin-leaf': (accent) => (
    <>
      <path d="M50 78 L50 44" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 60 L34 50 M50 56 L66 46 M50 48 L38 36 M50 46 L62 34" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      {[[34, 50], [66, 46], [38, 36], [62, 34]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="6" fill="none" stroke={accent} strokeWidth="2" />
      ))}
    </>
  ),
  rosette: (accent) => (
    <>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const r = 8 + (i % 3) * 8
        const angle = (i / 7) * Math.PI * 2
        const x = 50 + Math.cos(angle) * r
        const y = 50 + Math.sin(angle) * r * 0.7
        return <path key={i} d={`M50 50 Q${x} ${y - 6} ${x} ${y}`} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" />
      })}
    </>
  ),
  cactus: (accent) => (
    <>
      <path d="M50 78 L50 28" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
      <path d="M50 46 Q30 46 30 32" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      <path d="M50 40 Q70 40 70 26" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1="44" y1={34 + i * 8} x2="56" y2={34 + i * 8} stroke={accent} strokeWidth="1" opacity="0.5" />
      ))}
    </>
  ),
}

export default function PlantIcon({ icon, accent = '#4E6E4A', className }) {
  const draw = shapes[icon] || shapes['broad-leaf']
  return (
    <svg viewBox="0 0 100 100" className={className} role="presentation" aria-hidden="true">
      {pot(accent)}
      {draw(accent)}
    </svg>
  )
}
