# Figma Land - Modern Landing Page

A responsive, modern landing page for Figma Land - a design tool platform that helps freelancers and teams organize their workflow and create better products.

## 🌟 Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Video player, testimonial slider, contact form
- **Multiple Sections** - Hero, Features, Video Demo, Partners, Testimonials, Pricing, Contact
- **Social Integration** - Social media links and sharing capabilities
- **Contact Form** - Functional contact form with modal feedback
- **Smooth Scrolling** - Seamless navigation between sections

## 🚀 Live Demo

Open `Html/index.html` in your browser to view the website.

## 📁 Project Structure

```
├── Html/
│   └── index.html          # Main HTML file
├── Css/
│   └── style.css          # All styling and responsive design
├── javascript/
│   └── script.js          # Interactive functionality
├── assets/                # Images, videos, and icons
│   ├── bg-image1.png      # Hero background
│   ├── sample video.mp4   # Demo video
│   ├── MacbookPro-shape.png
│   ├── left-container.png
│   ├── company logos/     # Partner company logos
│   ├── social icons/      # Social media icons
│   └── avatars/          # Testimonial user photos
└── README.md             # Project documentation
```

## 🎨 Sections Overview

### 1. **Header & Navigation**
- Clean navigation bar with logo and social links
- Smooth scroll navigation to different sections
- Responsive hamburger menu (mobile-ready)

### 2. **Hero Section**
- Eye-catching headline: "The best products start with Figma"
- Call-to-action button
- Beautiful background imagery

### 3. **Features Section**
- Three key features highlighted:
  - OpenType features & Variable fonts
  - Design with real data
  - Fastest way to take action

### 4. **Video Demo**
- Interactive video player with custom play button
- Demo video showcasing the product

### 5. **Organization Section**
- "Fastest way to organize" content
- MacBook Pro mockup visualization

### 6. **Subscription/Newsletter**
- Email subscription form
- "Lightning fast prototyping" messaging

### 7. **Partners Section**
- Showcase of major client companies:
  - Google, Amazon, Microsoft, Uber, Dropbox
- Interactive hover effects on partner cards

### 8. **Testimonials**
- Auto-rotating testimonial slider (5-second intervals)
- Manual navigation with dot indicators
- Real user feedback with photos and roles

### 9. **Pricing Plans**
- Three-tier pricing structure:
  - **FREE** - $0/month
  - **STANDARD** - $10/month (Featured)
  - **BUSINESS** - $99/month
- Feature comparison and call-to-action buttons

### 10. **Contact Section**
- Contact form with validation
- Success modal feedback
- Contact information with map integration
- Social media links

### 11. **Footer**
- Multi-column layout with links
- Contact information
- Social media integration

## 💻 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling, flexbox, animations, and responsive design
- **Vanilla JavaScript** - Interactive functionality without frameworks
- **Google Fonts** - Open Sans font family
- **Google Maps** - Embedded map in contact section

## 🎯 Key Features Implementation

### Interactive Video Player
```javascript
// Custom video controls with play/pause functionality
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hide');
    } else {
        video.pause();
        playIcon.classList.remove('hide');
    }
});
```

### Testimonial Slider
```javascript
// Auto-rotating testimonials every 5 seconds
setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalSlides;
    showSlide(nextIndex);
}, 5000);
```

### Contact Form Modal
```javascript
// Form submission with modal feedback
form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = "block";
});
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Desktop** - 1200px and above
- **Tablet** - 768px to 1199px
- **Mobile** - Below 768px

## 🎨 Color Scheme

- **Primary Blue** - #2c90f2
- **Dark Background** - #252B42
- **Text Dark** - #1e1e1e
- **Text Light** - #64748b
- **White** - #ffffff
- **Gradient Accent** - Pink to Purple gradient

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `Html/index.html` in your web browser
3. **Navigate** through different sections using the navigation menu
4. **Test** interactive features like video player and contact form

## 📞 Contact Information

- **Address**: 6386 Spring St undefined Anchorage, Georgia 12473 United States
- **Phone**: (843) 555-0130
- **Email**: willie.jennings@example.com

## 🔗 Social Media

- Twitter: [https://twitter.com](https://twitter.com)
- Facebook: [https://facebook.com](https://facebook.com)
- LinkedIn: [https://linkedin.com](https://linkedin.com)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📈 Future Enhancements

- [ ] Add dark/light theme toggle
- [ ] Implement backend for contact form
- [ ] Add more animation effects
- [ ] Integrate with actual payment system for pricing
- [ ] Add blog section
- [ ] Implement user authentication
- [ ] Add multi-language support

## 🐛 Known Issues

- Video may not autoplay on some mobile browsers due to autoplay policies
- Contact form currently shows success modal without actual email sending

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer (limited support)

---

**Built with ❤️ by Abhay Awasthi**

*This is a modern, responsive landing page showcasing best practices in web development and user experience design.*
