# Cloudflare Pages Deployment Guide

## Prerequisites

1. GitHub account with access to https://github.com/Akshay115/EyeClinic-MMC
2. Cloudflare account

## Deployment Steps

### 1. Connect Repository to Cloudflare Pages

1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project"
3. Select "Connect to Git"
4. Choose your GitHub account and authorize Cloudflare
5. Select the `EyeClinic-MMC` repository

### 2. Configure Build Settings

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)
- **Environment variables**: (none required)

### 3. Deploy

1. Click "Save and Deploy"
2. Cloudflare will build and deploy your site automatically
3. You'll receive a unique URL like: `https://eyeclinic-mmc.pages.dev`

### 4. Custom Domain (Optional)

1. Go to your project settings in Cloudflare Pages
2. Click "Custom domains"
3. Add your domain (e.g., `www.eyeclinic-mmc.com`)
4. Follow DNS configuration instructions

## Development Workflow

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

### Pushing Changes

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Cloudflare Pages will automatically redeploy when you push changes to the main branch.

## Build Configuration

The project includes:
- Optimized build settings for Vite
- TailwindCSS purging for minimal bundle size
- Framer Motion animations (client-side only)

## Files for Deployment
- `.nvmrc` - Specifies Node.js version 18
- `.node-version` - Alternative Node version specification

**Note**: No `wrangler.toml` file is needed for Cloudflare Pages - all configuration is done through the dashboard.

## Performance

- ✅ Automatic minification
- ✅ Asset optimization
- ✅ CDN distribution
- ✅ HTTP/2 support
- ✅ SSL certificates

## Troubleshooting

### Build Fails

1. Check build logs in Cloudflare Pages dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### Runtime Issues

1. Check browser console for errors
2. Verify environment variables if any
3. Test locally with `npm run preview`

## Support

For deployment issues, check:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
