# Linklee

A modern URL shortener and redirect service that allows users to create customizable short links and change their destination anytime.

## Features

- Custom username-based short URLs (e.g., linklee.xyz/yourname)
- Google authentication
- Real-time URL validation
- Dynamic URL redirection
- Copy to clipboard functionality
- Link update tracking
- Responsive design for mobile and desktop

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Styling**: Tailwind CSS
- **State Management**: TanStack Query (React Query)
- **Form Handling**: Custom components
- **Icons**: React Icons

## Prerequisites

Before you begin, ensure you have:

- Node.js (v14 or higher)
- npm or yarn
- A Firebase project with Firestore and Authentication enabled

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Deveshb15/linklee-web.git
   cd linklee-web
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase configuration details:
     - Project credentials from Firebase Console
     - Service account credentials from Firebase Admin SDK
     - Set `NEXT_PUBLIC_APP_ENV` to either 'dev' or 'prod'
     - Configure `NEXT_PUBLIC_APP_URL` based on your deployment

4. Set up Firebase:
   - Enable Google Authentication in Firebase Console
   - Create a Firestore database
   - Set up necessary security rules for Firestore
   - Download and configure service account credentials

5. Run the development server:
   ```bash
   pnpm dev
   ```

6. Build for production:
   ```bash
   pnpm build
   ```

Your application should now be running at `http://localhost:3000`

## Firebase Configuration

1. Create a new project in Firebase Console
2. Enable Authentication with Google provider
3. Create a Firestore database
4. Add the following security rules to Firestore:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /{document=**} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

## Environment Variables

Ensure all environment variables in `.env.local` are properly configured:

- Firebase Project Credentials
- Firebase Service Account Details
- App Configuration Settings

Refer to `.env.example` for the complete list of required variables.
