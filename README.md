# Raunak Das - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Features image upload functionality, multiple sections (Home, About, Portfolio, Contacts), and a clean, professional design.

## Features

✨ **Modern Design**: Clean and professional layout with smooth animations
🖼️ **Image Upload**: Upload hero images via drag-and-drop or file picker
📱 **Responsive**: Full mobile support with adaptive layouts
📄 **Multiple Sections**:
  - **Home**: Hero section with image upload
  - **About**: Professional bio and skills showcase
  - **Portfolio**: Project showcase with project cards
  - **Contacts**: Contact form with validation

🧩 **Component-Based**: Well-organized, reusable React components
⚡ **Performance**: Optimized with Next.js Image component
🎨 **Tailwind CSS**: Utility-first styling

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar with section links
│   │   ├── Hero.tsx            # Hero section with image upload
│   │   ├── About.tsx           # About section with bio and skills
│   │   ├── Portfolio.tsx       # Portfolio projects showcase
│   │   ├── Contacts.tsx        # Contact form
│   │   └── ImageUploadManager.tsx  # Image upload utility component
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── public/
│   └── images/                 # Image storage directory
│       └── placeholder.svg     # Placeholder image
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Uploading Hero Image
1. Hover over or click on the hero image placeholder
2. Either:
   - Drag and drop an image file
   - Click to open file picker
3. Selected image will display in the hero section

### Navigation
- Click on navbar items (Home, About, Portfolio, Contacts) to navigate
- Smooth scroll animation automatically scrolls to sections

### Contact Form
- Fill in name, email, subject, and message
- Submit form (currently logs to console - integrate with backend for production)
- Success message appears on successful submission

## Key Components

### Navbar
Sticky navigation header with branding and section links. Highlights current section.

### Hero
Main hero section featuring:
- Large greeting heading
- Introductory paragraph
- Image upload functionality with drag-drop support
- About section introduction

### About
Displays:
- Professional biography
- Skills list
- Experience summary

### Portfolio
Showcases projects with:
- Project image
- Project description
- Technology stack tags
- View project link

### Contacts
Contact form with:
- Form validation
- Success messages
- Multiple contact methods
- Social links

## Customization

### Update Personal Information
Edit the following files:
- `app/components/Navbar.tsx` - Change name
- `app/components/Hero.tsx` - Update greeting and bio
- `app/components/About.tsx` - Update bio and skills
- `app/components/Contacts.tsx` - Update contact information
- `app/layout.tsx` - Update page title and description

### Add Projects
Edit `app/components/Portfolio.tsx`:
```typescript
const projects: Project[] = [
  {
    id: 5,
    title: 'Your Project Name',
    description: 'Project description...',
    tech: ['Tech1', 'Tech2'],
    imageUrl: '/images/your-image.jpg',
    link: 'https://project-link.com'
  },
  // ... more projects
];
```

### Modify Colors
Edit `tailwind.config.js` to customize:
- Primary colors
- Typography
- Spacing
- Other design tokens

## Production

### Build and Deploy

1. **Build for production**:
```bash
npm run build
```

2. **Start production server**:
```bash
npm run start
```

3. **Deploy to Vercel** (recommended):
```bash
vercel deploy
```

### Backend Integration

For production image uploads:
1. Set up a backend API endpoint
2. Modify `Hero.tsx` to upload to your server
3. Store images in cloud storage (AWS S3, Cloudinary, etc.)
4. Update image URLs in components

For contact form submissions:
1. Create backend endpoint for form handling
2. Update `Contacts.tsx` handleSubmit function
3. Add email service integration (SendGrid, Nodemailer, etc.)

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Next.js Image** - Optimized images

## Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Client-side component rendering where needed
- ✅ CSS optimization with Tailwind
- ✅ Responsive images for different devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Images not loading
- Ensure image path is correct in public/images folder
- Check Next.js Image component props

### Form not submitting
- Backend endpoint not configured (currently logs to console)
- Check console for errors

### Styling issues
- Clear `.next` folder and rebuild
- Ensure Tailwind CSS is properly configured

## License

MIT License - feel free to use for personal or commercial projects

## Support

For questions or issues, please open an issue in the repository.
