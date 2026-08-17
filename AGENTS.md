# Project Guidelines

### Development & Verification
- **Dev Server**: Next.js runs in `dev` mode with Hot Module Reloading (HMR) on the host machine.
- **Verification**:
  - For UI, text, and component updates, use `npm run lint` for quick type and syntax validation.
  - Do NOT run `npm run build` for routine UI edits unless adding new routes, updating Next.js configuration, or validating static production builds.

### Architecture & Patterns
- **Configuration**: All external links (subscriptions, one-time payments, social links) live in `config/payment-links.ts` and `config/social-links.ts` mapped to environment variables (`.env.local`).
- **Campaign Features**: For temporary campaigns (e.g., specific election drives), create isolated components rather than adding conditional complexity to core components, ensuring easy cleanup later.
