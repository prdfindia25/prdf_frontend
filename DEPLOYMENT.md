# Firebase Deployment Guide

This guide will help you deploy the PRDF website to Firebase Hosting.

## Prerequisites

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **Firebase CLI** - Install globally: `npm install -g firebase-tools`
3. **Firebase Account** - [Create account](https://firebase.google.com/)

## Step 1: Install Dependencies

```bash
npm install


```

## Step 2: Firebase Setup

1. **Login to Firebase:**

```bash
firebase login
```

2. **Initialize Firebase in your project:**

```bash
firebase init hosting
```

3. **Select your Firebase project** (or create a new one)

4. **Configure hosting:**
   - Public directory: `build`
   - Single-page app: `Yes`
   - Overwrite index.html: `No`

## Step 3: Build and Deploy

1. **Build the project:**

```bash
npm run build
```

2. **Deploy to Firebase:**

```bash
firebase deploy
```

## Step 4: Custom Domain (Optional)

1. **Add custom domain in Firebase Console:**

   - Go to Firebase Console → Hosting
   - Click "Add custom domain"
   - Follow the verification steps

2. **Update DNS records** as instructed by Firebase

## Environment Variables

If you need environment variables, create a `.env` file in the root directory:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_FIREBASE_API_KEY=your_api_key
```

## Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Clear cache: `npm start -- --reset-cache`
- Check for TypeScript errors if using TypeScript

### Deployment Errors

- Verify Firebase CLI is installed: `firebase --version`
- Check Firebase project permissions
- Ensure build directory exists: `ls build/`

### Performance Optimization

- Enable gzip compression in Firebase Console
- Optimize images before deployment
- Consider using Firebase CDN

## Continuous Deployment

To set up automatic deployment:

1. **Connect to GitHub:**

   - Go to Firebase Console → Hosting
   - Click "Connect to GitHub"
   - Select your repository

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`

## Monitoring

- **Firebase Analytics**: Automatically enabled
- **Performance Monitoring**: Available in Firebase Console
- **Error Reporting**: Check Firebase Console for errors

## Security

- **HTTPS**: Automatically enabled by Firebase
- **Security Headers**: Configure in firebase.json
- **Content Security Policy**: Add to public/index.html

## Backup

- **Code**: Use Git for version control
- **Content**: Backup any content management systems
- **Database**: If using Firebase Firestore, enable automatic backups

## Support

For deployment issues:

1. Check Firebase Console for error logs
2. Verify build process locally
3. Contact Firebase support if needed
