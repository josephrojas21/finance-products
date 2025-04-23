# FinTech Solutions - Financial Products Catalog

This project is a landing page for a fictional fintech company that showcases a catalog of financial products with key details and category filters.

## 🚀 Demo

You can see the deployed version of this project on [Vercel](https://finance-products-dd2c7qpmc-joseph-rojas-montoyas-projects.vercel.app/).

## 📋 Features

- Landing page with design focused on financial services
- Product catalog with category filtering
- Detail pages for each product with complete information
- Responsive design (Mobile First)
- Accessible interface according to a11y standards
- Strict typing with TypeScript
- Modular and reusable structure

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Geist Font](https://vercel.com/font)

## 🧰 Installation and Usage

1. Clone this repository:
```bash
cd finance-products
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📝 Technical Decisions

### UI Design Criteria

1. **Trust and Security**: I used a color palette based on deep blues (trust), with touches of green (prosperity) and orange for CTAs, typical in the financial sector.

2. **Clear Hierarchy**: Information is presented in a logical order to facilitate understanding of complex financial products.

3. **Micro-interactions**: Subtle transitions and hover effects to enhance the user experience without distraction.

4. **Accessibility**: High contrast, readable text, and ARIA labels to ensure all users can access the information.

5. **Responsiveness**: Mobile-first design that adapts to any device, making it easy to consult financial products in any context.

### Decision Between Tailwind and Styled Components

- **Tailwind CSS**: Used for the main structure and base layout. Its utility-first approach allows for quickly building components with consistent styles and maintaining a coherent design system.

- **Styled Components**: Implemented for complex and reusable components. It allowed me to:
  - Encapsulate style logic with component logic
  - Implement theming with complete typing
  - Create component variants based on props
  - Facilitate the reuse of complex styles

This combination leverages the best of both worlds: Tailwind's rapid development and Styled Components' flexibility and maintainability.

### Scalability for a Real Application

To scale this project to a real digital banking application:

1. **Architecture**: I would implement a microservices-based architecture with separate APIs for each domain (products, users, transactions).

2. **State Management**: I would add React Query or SWR for cache management and server requests, along with a global state system like Zustand or Redux.

3. **Authentication**: I would incorporate a robust authentication system with NextAuth.js, support for 2FA, and secure sessions.

4. **Internationalization**: I would implement i18n to support multiple languages and regional formats.

5. **Testing**: I would expand coverage with unit tests (Jest), integration tests (Testing Library), and E2E tests (Cypress).

6. **CI/CD**: I would establish continuous integration pipelines to ensure code quality and automated deployments.

7. **Monitoring**: I would add logging and monitoring systems for errors and user experience.

8. **Folder Structure**: The current one is basic but would grow as features and routes are added. With the new router approach using the app folder, it shows us a new way to organize everything by page or feature.

### Tools for Performance and Monitoring

1. **Performance**:
   - Next.js Analytics for core web vitals metrics
   - Lighthouse CI for automatic page auditing
   - Bundle analyzer to optimize JS package size
   - Image optimization with next/image and modern formats (WebP/AVIF)

2. **Application Monitoring**:
   - Sentry for error monitoring in production
   - LogRocket for user sessions and error reproduction
   - Google Analytics or Plausible for usage analytics
   - New Relic or Datadog for performance and availability monitoring

3. **UX and A/B Testing**:
   - Hotjar for heat maps and session recordings
   - Optimizely for A/B testing of features
   - Customer.io for user segmentation and communication

With these tools, high performance, quick problem detection, and continuous improvement based on real usage data could be guaranteed.

---

This project was developed as part of a technical test to demonstrate skills in frontend development with React, Next.js, TypeScript, and modern UI design for financial products.
