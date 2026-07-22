# Symmetry Interiors — Angular 18

Premium luxury interior design + furniture e-commerce UI with an Admin CMS in the same Angular application.

## Run locally

```powershell
npm install
npm start
```

Open:
http://localhost:4200

Admin:
http://localhost:4200/admin

## Important

This is a UI-first starter. Backend, authentication, database, real payments, Cloudinary/S3 uploads, analytics APIs and order processing are not implemented.

Replace the placeholder SVG images in `src/assets/images/` with your actual images.

Replace `src/assets/images/LOGO-PLACEHOLDER.svg` with the official Symmetry Interiors logo. The code already references this path.

No dark/black/colored image overlays are used.

## Structure

- `src/app/core/`
- `src/app/shared/components/`
- `src/app/website/`
- `src/app/admin/`
- `src/assets/images/`

## Main website routes

- `/`
- `/about`
- `/services`
- `/shop`
- `/product/1`
- `/projects`
- `/projects/1`
- `/global-sourcing`
- `/blog`
- `/blog/1`
- `/testimonials`
- `/faq`
- `/contact`
- `/cart`
- `/checkout`
- `/privacy-policy`
- `/terms`

## Admin routes

- `/admin/dashboard`
- `/admin/banners`
- `/admin/products`
- `/admin/categories`
- `/admin/collections`
- `/admin/projects`
- `/admin/blogs`
- `/admin/testimonials`
- `/admin/team`
- `/admin/enquiries`
- `/admin/orders`
- `/admin/media`
- `/admin/settings`

The current admin is a frontend UI only. Add AuthGuard/JWT protection before production use.
