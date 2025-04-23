# FinTech Solutions - Catálogo de Productos Financieros

Este proyecto es una landing page para una fintech ficticia que muestra un catálogo de productos financieros con detalles clave y filtros de categoría.

## 🚀 Demo

Puedes ver la versión desplegada de este proyecto en [Vercel](https://tu-enlace-al-deploy-en-vercel).

## 📋 Características

- Landing page con diseño y enfocado en servicios financieros
- Catálogo de productos con filtrado por categoría
- Páginas de detalle para cada producto con información completa
- Diseño responsivo (Mobile First)
- Interfaz accesible según estándares de a11y
- Tipado estricto con TypeScript
- Estructura modular y reutilizable

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Geist Font](https://vercel.com/font)

## 🧰 Instalación y uso

1. Clona este repositorio:
```bash
cd finance-products
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 📝 Decisiones técnicas

### Criterios para el diseño de UI

1. **Confianza y seguridad**: Utilicé una paleta de colores basada en azules profundos (confianza), con toques de verde (prosperidad) y naranja para los CTAs, típico en el sector financiero.

2. **Jerarquía clara**: La información se presenta en un orden lógico para facilitar la comprensión de los productos financieros complejos.

3. **Micro-interacciones**: Transiciones sutiles y efectos hover para mejorar la experiencia de usuario sin distraer.

4. **Accesibilidad**: Alto contraste, textos legibles y etiquetas ARIA para garantizar que todos los usuarios puedan acceder a la información.

5. **Responsividad**: Diseño mobile-first que se adapta a cualquier dispositivo, facilitando la consulta de productos financieros en cualquier contexto.

### Decisión entre Tailwind y Styled Components

- **Tailwind CSS**: Utilizado para la estructura principal y layout base. Su enfoque utility-first permite construir rápidamente componentes con estilos consistentes y mantener un sistema de diseño coherente.

- **Styled Components**: Implementado para componentes complejos y reutilizables. Me permitió:
  - Encapsular la lógica de estilos con la de componentes
  - Implementar theming con tipado completo
  - Crear variantes de componentes basadas en props
  - Facilitar la reutilización de estilos complejos

Esta combinación permite aprovechar lo mejor de ambos mundos: la rapidez de desarrollo de Tailwind y la flexibilidad y mantenibilidad de Styled Components.

### Escalabilidad para una aplicación real

Para escalar este proyecto a una aplicación de banca digital real:

1. **Arquitectura**: Implementaría una arquitectura basada en microservicios con APIs separadas para cada dominio (productos, usuarios, transacciones).

2. **Gestión de estado**: Añadiría React Query o SWR para manejo de caché y solicitudes al servidor, junto con un sistema de estado global como Zustand o Redux.

3. **Autenticación**: Incorporaría un sistema de autenticación robusto con NextAuth.js, soporte para 2FA y sesiones seguras.

4. **Internacionalización**: Implementaría i18n para soportar múltiples idiomas y formatos regionales.

5. **Testing**: Ampliaría la cobertura con pruebas unitarias (Jest), de integración (Testing Library) y E2E (Cypress).

6. **CI/CD**: Establecería pipelines de integración continua para garantizar calidad del código y despliegues automatizados.

7. **Monitoreo**: Añadiría sistemas de logging y monitoreo para errores y experiencia de usuario.

8. **Estrcutura de folders** : La actual es basica pero iria creciendo a medida que se agreguen features y routes.
con la nueva forma de router usando la carpeta app nos muestra una forma nuevo de orgizar todo por page o feature.

### Herramientas para rendimiento y monitoreo

1. **Rendimiento**:
   - Next.js Analytics para métricas core web vitals
   - Lighthouse CI para auditoría automática de páginas
   - Bundle analyzer para optimizar tamaño de paquetes JS
   - Optimización de imágenes con next/image y formatos modernos (WebP/AVIF)

2. **Monitoreo de aplicación**:
   - Sentry para monitoreo de errores en producción
   - LogRocket para sesiones de usuario y reproducción de errores
   - Google Analytics o Plausible para analíticas de uso
   - New Relic o Datadog para monitoreo de rendimiento y disponibilidad

3. **UX y A/B Testing**:
   - Hotjar para mapas de calor y grabaciones de sesión
   - Optimizely para pruebas A/B de features
   - Customer.io para segmentación y comunicación con usuarios

Con estas herramientas se podría garantizar un alto rendimiento, rápida detección de problemas y mejora continua basada en datos reales de uso.

---

Este proyecto fue desarrollado como parte de una prueba técnica para demostrar habilidades en desarrollo frontend con React, Next.js, TypeScript, y diseño de UIs modernas para productos financieros.
