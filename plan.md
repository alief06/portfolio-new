# Velorah — Implementation Plan

## Direction

A cinematic **dark editorial / liquid-glass** hero: quiet, premium, and atmospheric. The provided video carries all visual depth; the interface stays restrained so the typography can breathe.

- **Core principles:** cinematic restraint, sharp hierarchy, tactile glass, responsive quietness.
- **Color philosophy:** deep navy anchors the experience while white typography feels like a focused beam of light; muted gray creates calm contrast rather than decoration.
- **Layout paradigm:** one vertically centered stage, with the navigation floating as a slim masthead and the hero occupying the viewport's visual center.
- **Signature elements:** the Velorah® serif wordmark, thin liquid-glass edge highlights, and staggered fade-rise motion.
- **Interaction philosophy:** small, confident feedback—links brighten and CTAs lift slightly without breaking the calm.
- **Animation:** 800ms ease-out rise-in with 200ms intervals; no perpetual UI motion competing with the video.
- **Typography:** Instrument Serif for the display voice and Inter 400/500 for utility copy and navigation.
- **Brand essence:** digital spaces for deep thinkers and inspired work; quiet, cinematic, intentional.
- **Brand voice:** poetic but direct. Example lines: “Begin the work beneath the noise.” / “Make room for the thought that matters.”
- **Wordmark:** a large Instrument Serif “Velorah” with a small raised registered mark, kept simple so it reads like a crafted masthead.
- **Signature color:** deep navy blue (`hsl(201 100% 13%)`).

## Project structure

- `src/App.tsx` — single-page hero composition, navigation data, semantic layout, and video background.
- `src/components/ui/button.tsx` — small shadcn-style button primitive used by both CTAs.
- `src/index.css` — Tailwind layers, HSL theme tokens, liquid-glass treatment, typography, and motion.
- `public/manus-routes.json` — WebDev route declaration for the root page.
- `vite.config.ts`, `tailwind.config.ts`, `postcss.config.js` — frontend toolchain configuration.

## Serving

Vite serves the app on `0.0.0.0:3000` for the managed Preview. The hero video is intentionally referenced from the supplied CloudFront URL and is not copied into project storage.
