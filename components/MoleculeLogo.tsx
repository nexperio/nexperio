type Props = { size?: number; animated?: boolean }

export function MoleculeLogo({ size = 28, animated = true }: Props) {
  return (
    <span style={{ display: 'inline-block', width: size, height: size, position: 'relative' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/nexperio-logo-original.png"
        alt="Nexperio"
        width={size}
        height={size}
        style={{
          display: 'block',
          width: size,
          height: size,
          transformOrigin: '50% 50%',
          animation: animated ? 'nx-logo-wobble 9s ease-in-out infinite' : 'none',
          filter: animated ? 'drop-shadow(0 0 0 rgba(255,106,0,0))' : 'none',
        }}
      />
    </span>
  )
}

export function MoleculeLogoLarge({ size = 320 }: { size?: number }) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        style={{
          position: 'absolute',
          inset: '-15%',
          background:
            'radial-gradient(circle, rgba(255,140,0,0.25) 0%, rgba(255,140,0,0) 65%)',
          animation: 'nx-glow 5s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '5%',
          right: '-8%',
          width: size * 0.18,
          height: size * 0.18,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ffd866, #ffa810)',
          opacity: 0.6,
          animation: 'nx-echo-1 6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-8%',
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #ff8a30, #ff5a00)',
          opacity: 0.5,
          animation: 'nx-echo-2 7s ease-in-out infinite',
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/nexperio-logo-original.png"
        alt="Nexperio"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'block',
          transformOrigin: '50% 50%',
          animation: 'nx-hero-wobble 8s ease-in-out infinite',
          filter: 'drop-shadow(0 12px 40px rgba(255,106,0,0.35))',
        }}
      />
    </div>
  )
}

export function NexperioLogo({
  height = 36,
  color,
  gradient = true,
}: {
  height?: number
  color?: string
  gradient?: boolean
}) {
  const wordmarkStyle: React.CSSProperties =
    gradient && !color
      ? {
          fontFamily: "'Adequate', 'Prompt', sans-serif",
          fontWeight: 400,
          fontSize: height * 0.78,
          letterSpacing: '0',
          lineHeight: 1,
          background:
            'linear-gradient(135deg, #ff5a00 0%, #ff8a00 50%, #ffc01e 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }
      : {
          fontFamily: "'Adequate', 'Prompt', sans-serif",
          fontWeight: 400,
          fontSize: height * 0.78,
          letterSpacing: '0',
          lineHeight: 1,
          color: color || 'var(--ink)',
        }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <MoleculeLogo size={height} />
      <span style={wordmarkStyle}>nexperio</span>
    </div>
  )
}
