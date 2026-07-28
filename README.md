<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hungry Mommy Café | Artisanal Coffee, Gourmet Food & Cozy Dining in Galle</title>
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Discover Hungry Mommy Café in Galle, Sri Lanka. Savor handcrafted espresso, gourmet burgers, fresh pastas, decadent desserts, and warm hospitality in a cozy, stylish ambiance.">
  <meta name="keywords" content="Hungry Mommy Cafe, Galle Cafe, Best Coffee in Galle, Hirimbura Road Cafe, Sri Lanka Cafe, Coffee Shop Galle, Breakfast Galle, Burgers Galle, Pasta Galle">
  <meta name="author" content="Hungry Mommy Café">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://hungrymommy.lk/">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://hungrymommy.lk/">
  <meta property="og:title" content="Hungry Mommy Café | Artisanal Coffee & Dining in Galle">
  <meta property="og:description" content="Fresh coffee, handcrafted meals, and sweet cozy moments await you at Hungry Mommy Café, Hirimbura Rd, Galle. Visit us today!">
  <meta property="og:image" content="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://hungrymommy.lk/">
  <meta property="twitter:title" content="Hungry Mommy Café | Artisanal Coffee & Dining in Galle">
  <meta property="twitter:description" content="Fresh coffee, handcrafted meals, and sweet cozy moments await you at Hungry Mommy Café, Hirimbura Rd, Galle.">
  <meta property="twitter:image" content="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">

  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- EMBEDDED CSS STYLES -->
  <style>
    /* ==========================================
       DESIGN SYSTEM & CSS VARIABLES
       ========================================== */
    :root {
      --primary: #6F4E37;        /* Coffee Brown */
      --primary-dark: #523825;
      --secondary: #C49A6C;      /* Latte */
      --secondary-light: #E8D3B9;
      --accent: #E89A3D;         /* Warm Orange */
      --accent-hover: #D48427;
      --bg-light: #FAF7F2;       /* Cream Background */
      --card-bg: #FFFFFF;
      --text-dark: #2C2C2C;      /* Dark Text */
      --text-muted: #666666;
      --text-light: #888888;
      
      --font-heading: 'Playfair Display', Georgia, serif;
      --font-body: 'Poppins', -apple-system, BlinkMacSystemFont, sans-serif;
      
      --radius-sm: 8px;
      --radius-md: 16px;
      --radius-lg: 24px;
      --radius-full: 9999px;
      
      --shadow-sm: 0 4px 15px rgba(44, 44, 44, 0.05);
      --shadow-md: 0 10px 30px rgba(111, 78, 55, 0.1);
      --shadow-lg: 0 20px 40px rgba(111, 78, 55, 0.15);
      
      --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    /* ==========================================
       RESET & GLOBAL BASE STYLES
       ========================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      font-family: var(--font-body);
      background-color: var(--bg-light);
      color: var(--text-dark);
      line-height: 1.6;
      overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
      color: var(--text-dark);
      font-weight: 700;
      line-height: 1.25;
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: var(--transition);
    }

    ul {
      list-style: none;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    button, input, textarea {
      font-family: inherit;
      outline: none;
      border: none;
    }

    /* ==========================================
       LAYOUT UTILITIES
       ========================================== */
    .container {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-padding {
      padding: 90px 0;
    }

    .grid {
      display: grid;
      gap: 30px;
    }

    .grid-2 {
      grid-template-columns: repeat(2, 1fr);
    }

    .align-center {
      align-items: center;
    }

    .text-center {
      text-align: center;
    }

    .mt-20 {
      margin-top: 20px;
    }

    .section-header {
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    .section-subtitle {
      display: inline-block;
      color: var(--accent);
      font-family: var(--font-body);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      margin-bottom: 8px;
    }

    .section-title {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 15px;
    }

    .section-description {
      color: var(--text-muted);
      font-size: 1.05rem;
    }

    /* ==========================================
       BUTTONS & BADGES
       ========================================== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 12px 28px;
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 0.95rem;
      cursor: pointer;
      transition: var(--transition);
      box-shadow: var(--shadow-sm);
    }

    .btn-primary {
      background-color: var(--primary);
      color: var(--bg-light);
    }

    .btn-primary:hover {
      background-color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .btn-secondary {
      background-color: var(--secondary);
      color: #ffffff;
    }

    .btn-secondary:hover {
      background-color: #B28859;
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
    }

    .btn-accent {
      background-color: var(--accent);
      color: #ffffff;
    }

    .btn-accent:hover {
      background-color: var(--accent-hover);
      transform: translateY(-3px);
    }

    .btn-lg {
      padding: 16px 36px;
      font-size: 1.05rem;
    }

    .btn-outline-sm {
      background: transparent;
      border: 1.5px solid var(--primary);
      color: var(--primary);
      padding: 8px 18px;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
    }

    .btn-outline-sm:hover {
      background: var(--primary);
      color: #ffffff;
    }

    .btn-block {
      width: 100%;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      background-color: rgba(232, 154, 61, 0.15);
      color: var(--accent);
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
    }

    /* ==========================================
       PRELOADER
       ========================================== */
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--bg-light);
      z-index: 99999;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }

    #preloader.fade-out {
      opacity: 0;
      visibility: hidden;
    }

    .loader-content {
      text-align: center;
    }

    .coffee-cup {
      font-size: 3.5rem;
      color: var(--primary);
      position: relative;
      display: inline-block;
    }

    .steam {
      position: absolute;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
    }

    .steam span {
      width: 4px;
      height: 16px;
      background-color: var(--secondary);
      border-radius: 4px;
      animation: steamAnim 1.5s infinite ease-in-out;
    }

    .steam span:nth-child(2) { animation-delay: 0.3s; }
    .steam span:nth-child(3) { animation-delay: 0.6s; }

    @keyframes steamAnim {
      0% { transform: translateY(0) scaleX(1); opacity: 0; }
      50% { opacity: 0.8; }
      100% { transform: translateY(-15px) scaleX(1.5); opacity: 0; }
    }

    .loader-content h2 {
      font-size: 1.8rem;
      color: var(--primary);
      margin-top: 15px;
    }

    .loader-content p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    /* ==========================================
       HEADER & STICKY NAV
       ========================================== */
    .site-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background: rgba(250, 247, 242, 0.92);
      backdrop-filter: blur(10px);
      padding: 18px 0;
      transition: var(--transition);
    }

    .site-header.scrolled {
      padding: 12px 0;
      box-shadow: var(--shadow-sm);
      background: rgba(255, 255, 255, 0.98);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-icon {
      font-size: 1.8rem;
      color: var(--primary);
      background: var(--secondary-light);
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-text .title {
      font-family: var(--font-heading);
      font-size: 1.35rem;
      font-weight: 800;
      color: var(--primary);
      line-height: 1;
    }

    .logo-text .subtitle {
      font-size: 0.65rem;
      letter-spacing: 2.5px;
      color: var(--accent);
      font-weight: 600;
      margin-top: 2px;
    }

    .nav-list {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    .nav-link {
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--text-dark);
      position: relative;
      padding: 5px 0;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--accent);
      transition: var(--transition);
    }

    .nav-link:hover, .nav-link.active {
      color: var(--primary);
    }

    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .mobile-toggle {
      display: none;
      font-size: 1.5rem;
      color: var(--primary);
      background: transparent;
      cursor: pointer;
    }

    /* ==========================================
       HERO SECTION
       ========================================== */
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat;
      padding-top: 100px;
      color: #ffffff;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(44, 44, 44, 0.85) 0%, rgba(111, 78, 55, 0.75) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      padding: 40px 0;
    }

    .hero-badge {
      background: rgba(232, 154, 61, 0.25);
      color: #FFD59E;
      margin-bottom: 20px;
    }

    .hero-title {
      font-size: 3.8rem;
      color: #ffffff;
      margin-bottom: 20px;
      text-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }

    .hero-subtitle {
      font-size: 1.2rem;
      color: #E2E2E2;
      margin-bottom: 35px;
      line-height: 1.7;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 50px;
    }

    .hero-features {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
      padding-top: 25px;
      border-top: 1px solid rgba(255,255,255,0.2);
    }

    .hero-feature-item {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.95rem;
      color: #F0F0F0;
    }

    .hero-feature-item i {
      color: var(--accent);
    }

    /* ==========================================
       ABOUT SECTION
       ========================================== */
    .about-image-wrapper {
      position: relative;
    }

    .main-img-box img {
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg);
      object-fit: cover;
      width: 100%;
      max-height: 500px;
    }

    .floating-experience-badge {
      position: absolute;
      bottom: -20px;
      right: -20px;
      background: var(--primary);
      color: #ffffff;
      padding: 25px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .floating-experience-badge .exp-num {
      font-family: var(--font-heading);
      font-size: 2.2rem;
      font-weight: 800;
      color: var(--accent);
    }

    .floating-experience-badge .exp-text {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .about-content h2 {
      margin-bottom: 20px;
    }

    .about-lead {
      font-size: 1.1rem;
      color: var(--primary);
      font-weight: 500;
      margin-bottom: 15px;
    }

    .about-content p {
      color: var(--text-muted);
      margin-bottom: 20px;
    }

    .about-highlights {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin-top: 25px;
    }

    .highlight-item {
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }

    .highlight-item i {
      font-size: 1.5rem;
      color: var(--accent);
      background: rgba(232, 154, 61, 0.1);
      padding: 12px;
      border-radius: var(--radius-sm);
    }

    .highlight-item h4 {
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--text-dark);
    }

    .highlight-item p {
      font-size: 0.85rem;
      margin-bottom: 0;
    }

    /* ==========================================
       STATS SECTION
       ========================================== */
    .stats-section {
      background: var(--primary);
      color: #ffffff;
      padding: 60px 0;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 30px;
      text-align: center;
    }

    .stat-card i {
      font-size: 2.5rem;
      color: var(--accent);
      margin-bottom: 15px;
    }

    .stat-card h3 {
      font-size: 2.8rem;
      color: #ffffff;
      margin-bottom: 5px;
    }

    .stat-card p {
      font-size: 0.95rem;
      color: var(--secondary-light);
    }

    /* ==========================================
       FEATURED MENU SECTION
       ========================================== */
    .menu-tabs {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 40px;
    }

    .tab-btn {
      padding: 10px 22px;
      border-radius: var(--radius-full);
      background-color: var(--card-bg);
      color: var(--text-dark);
      font-weight: 500;
      font-size: 0.9rem;
      cursor: pointer;
      transition: var(--transition);
      border: 1px solid rgba(0,0,0,0.05);
      box-shadow: var(--shadow-sm);
    }

    .tab-btn:hover, .tab-btn.active {
      background-color: var(--primary);
      color: #ffffff;
      box-shadow: var(--shadow-md);
    }

    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 30px;
    }

    .menu-card {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      display: flex;
      flex-direction: column;
    }

    .menu-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
    }

    .card-img-wrapper {
      position: relative;
      height: 220px;
      overflow: hidden;
    }

    .card-img-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .menu-card:hover .card-img-wrapper img {
      transform: scale(1.08);
    }

    .price-tag {
      position: absolute;
      top: 15px;
      right: 15px;
      background: var(--accent);
      color: #ffffff;
      padding: 6px 14px;
      border-radius: var(--radius-full);
      font-weight: 700;
      font-size: 0.9rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }

    .card-content {
      padding: 22px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .card-title-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
      margin-bottom: 10px;
    }

    .card-title-row h3 {
      font-size: 1.2rem;
      color: var(--primary);
    }

    .badge-mini {
      background: rgba(196, 154, 108, 0.2);
      color: var(--primary);
      font-size: 0.7rem;
      padding: 3px 8px;
      border-radius: 4px;
      font-weight: 600;
      white-space: nowrap;
    }

    .card-content p {
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.5;
    }

    /* ==========================================
       SPECIAL DRINKS SECTION
       ========================================== */
    .specials-section {
      background-color: rgba(196, 154, 108, 0.08);
    }

    .specials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    .special-card {
      background: var(--card-bg);
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      border: 1px solid rgba(196, 154, 108, 0.2);
      display: flex;
      flex-direction: column;
    }

    .special-img {
      height: 240px;
      overflow: hidden;
    }

    .special-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .special-card:hover .special-img img {
      transform: scale(1.05);
    }

    .special-info {
      padding: 25px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .special-tag {
      color: var(--accent);
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }

    .special-info h3 {
      font-size: 1.35rem;
      color: var(--primary);
      margin-bottom: 10px;
    }

    .special-info p {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .special-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 15px;
      border-top: 1px dashed #eee;
    }

    .special-price {
      font-family: var(--font-heading);
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--primary);
    }

    /* ==========================================
       GALLERY SECTION
       ========================================== */
    .gallery-masonry {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .gallery-item {
      position: relative;
      border-radius: var(--radius-md);
      overflow: hidden;
      height: 260px;
      cursor: pointer;
    }

    .gallery-item.item-tall {
      grid-row: span 2;
      height: 540px;
    }

    .gallery-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .gallery-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(111, 78, 55, 0.7);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      opacity: 0;
      transition: var(--transition);
    }

    .gallery-overlay i {
      font-size: 2rem;
      margin-bottom: 10px;
      color: var(--accent);
    }

    .gallery-overlay span {
      font-weight: 600;
      font-size: 1rem;
    }

    .gallery-item:hover .gallery-overlay {
      opacity: 1;
    }

    .gallery-item:hover img {
      transform: scale(1.1);
    }

    /* ==========================================
       WHY CHOOSE US SECTION
       ========================================== */
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .feature-card {
      background: var(--card-bg);
      padding: 35px 25px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      transition: var(--transition);
      text-align: center;
      border-bottom: 3px solid transparent;
    }

    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-md);
      border-bottom-color: var(--accent);
    }

    .feature-icon {
      width: 70px;
      height: 70px;
      background: var(--bg-light);
      color: var(--accent);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      margin: 0 auto 20px auto;
      transition: var(--transition);
    }

    .feature-card:hover .feature-icon {
      background: var(--accent);
      color: #ffffff;
    }

    .feature-card h3 {
      font-size: 1.25rem;
      color: var(--primary);
      margin-bottom: 12px;
    }

    .feature-card p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    /* ==========================================
       REVIEWS SECTION
       ========================================== */
    .reviews-section {
      background-color: var(--bg-light);
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    .review-card {
      background: var(--card-bg);
      padding: 30px;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .stars {
      color: #FFC107;
      font-size: 0.9rem;
      margin-bottom: 15px;
    }

    .review-text {
      color: var(--text-dark);
      font-style: italic;
      font-size: 0.95rem;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .reviewer-info {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .avatar {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background: var(--primary);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
    }

    .reviewer-info h4 {
      font-family: var(--font-body);
      font-size: 0.95rem;
      color: var(--text-dark);
    }

    .reviewer-info span {
      font-size: 0.8rem;
      color: var(--text-light);
    }

    /* ==========================================
       FAQ SECTION
       ========================================== */
    .faq-accordion {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      background: var(--card-bg);
      border-radius: var(--radius-sm);
      margin-bottom: 15px;
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .faq-question {
      width: 100%;
      padding: 20px 25px;
      background: transparent;
      text-align: left;
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--primary);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .faq-question i {
      transition: transform 0.3s ease;
      color: var(--accent);
    }

    .faq-item.active .faq-question i {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease, padding 0.3s ease;
      padding: 0 25px;
      color: var(--text-muted);
      font-size: 0.95rem;
    }

    .faq-item.active .faq-answer {
      max-height: 200px;
      padding: 0 25px 20px 25px;
    }

    /* ==========================================
       LOCATION SECTION
       ========================================== */
    .location-section {
      background-color: #ffffff;
    }

    .location-details {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin: 25px 0 35px 0;
    }

    .detail-item {
      display: flex;
      gap: 15px;
      align-items: flex-start;
    }

    .detail-item i {
      font-size: 1.3rem;
      color: var(--accent);
      background: rgba(232, 154, 61, 0.1);
      padding: 12px;
      border-radius: 50%;
    }

    .detail-item h4 {
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--text-dark);
    }

    .detail-item p {
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .location-actions {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    .map-container {
      box-shadow: var(--shadow-md);
      border-radius: var(--radius-md);
      overflow: hidden;
    }

    /* ==========================================
       CONTACT FORM SECTION
       ========================================== */
    .contact-section {
      background-color: var(--bg-light);
    }

    .contact-card-box {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      padding: 50px;
      box-shadow: var(--shadow-md);
    }

    .contact-text h2 {
      font-size: 2.2rem;
      color: var(--primary);
      margin-bottom: 15px;
    }

    .contact-text p {
      color: var(--text-muted);
      margin-bottom: 30px;
    }

    .contact-meta p {
      display: flex;
      align-items: center;
      gap: 12px;
      color: var(--text-dark);
      font-weight: 500;
      margin-bottom: 12px;
    }

    .contact-meta i {
      color: var(--accent);
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-group label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-dark);
    }

    .form-group input, .form-group textarea {
      padding: 12px 18px;
      border-radius: var(--radius-sm);
      border: 1px solid #E0E0E0;
      background-color: var(--bg-light);
      font-size: 0.95rem;
      transition: var(--transition);
    }

    .form-group input:focus, .form-group textarea:focus {
      border-color: var(--primary);
      background-color: #ffffff;
    }

    .form-status {
      font-size: 0.9rem;
      font-weight: 500;
      margin-top: 10px;
      text-align: center;
    }

    .form-status.success { color: #2E7D32; }
    .form-status.error { color: #C62828; }

    /* ==========================================
       NEWSLETTER SECTION
       ========================================== */
    .newsletter-section {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
      color: #ffffff;
      padding: 70px 0;
    }

    .newsletter-section h2 {
      color: #ffffff;
      font-size: 2.2rem;
      margin-bottom: 10px;
    }

    .newsletter-section p {
      color: var(--secondary-light);
      margin-bottom: 30px;
    }

    .newsletter-form {
      display: flex;
      justify-content: center;
      max-width: 550px;
      margin: 0 auto;
      gap: 10px;
    }

    .newsletter-form input {
      flex-grow: 1;
      padding: 14px 22px;
      border-radius: var(--radius-full);
      font-size: 0.95rem;
    }

    /* ==========================================
       FOOTER
       ========================================== */
    .site-footer {
      background: #1F1915;
      color: #B3A89F;
      padding-top: 80px;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 40px;
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .footer-logo .title {
      color: #ffffff;
    }

    .brand-col p {
      font-size: 0.9rem;
      margin: 20px 0;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-links a {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255,255,255,0.08);
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }

    .social-links a:hover {
      background: var(--accent);
      transform: translateY(-3px);
    }

    .footer-col h4 {
      color: #ffffff;
      font-family: var(--font-body);
      font-size: 1.1rem;
      margin-bottom: 22px;
      position: relative;
      padding-bottom: 8px;
    }

    .footer-col h4::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 35px;
      height: 2px;
      background-color: var(--accent);
    }

    .footer-links li {
      margin-bottom: 12px;
    }

    .footer-links a {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .footer-links a:hover {
      color: var(--accent);
      padding-left: 5px;
    }

    .hours-list li {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      margin-bottom: 10px;
      padding-bottom: 8px;
      border-bottom: 1px dashed rgba(255,255,255,0.08);
    }

    .hours-list strong {
      color: #ffffff;
    }

    .status-open {
      color: #4CAF50;
      font-weight: 600;
      margin-top: 5px;
      display: inline-block;
    }

    .footer-col p {
      font-size: 0.9rem;
      margin-bottom: 12px;
      display: flex;
      gap: 10px;
    }

    .footer-col p i {
      color: var(--accent);
      margin-top: 3px;
    }

    .footer-bottom {
      padding: 25px 0;
      font-size: 0.85rem;
      background: #17120F;
    }

    /* ==========================================
       FLOATING BUTTONS
       ========================================== */
    .whatsapp-float {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #25D366;
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
      z-index: 999;
      transition: var(--transition);
    }

    .whatsapp-float:hover {
      transform: scale(1.1) translateY(-3px);
    }

    .back-to-top {
      position: fixed;
      bottom: 100px;
      right: 30px;
      width: 45px;
      height: 45px;
      background-color: var(--primary);
      color: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      box-shadow: var(--shadow-md);
      z-index: 998;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: var(--transition);
    }

    .back-to-top.show {
      opacity: 1;
      visibility: visible;
    }

    .back-to-top:hover {
      background-color: var(--accent);
      transform: translateY(-3px);
    }

    .mobile-call-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #ffffff;
      padding: 12px 20px;
      box-shadow: 0 -5px 20px rgba(0,0,0,0.1);
      z-index: 1000;
    }

    .btn-full {
      width: 100%;
      border-radius: var(--radius-sm);
    }

    /* ==========================================
       SCROLL FADE ANIMATION CLASSES
       ========================================== */
    .fade-in-up {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .fade-in-up.appear {
      opacity: 1;
      transform: translateY(0);
    }

    /* ==========================================
       RESPONSIVE DESIGN
       ========================================== */
    @media (max-width: 992px) {
      .hero-title { font-size: 3rem; }
      .grid-2 { grid-template-columns: 1fr; }
      .about-image-wrapper { margin-bottom: 30px; }
      .contact-card-box { padding: 30px; }
    }

    @media (max-width: 768px) {
      .nav-menu {
        position: fixed;
        top: 75px;
        left: -100%;
        width: 100%;
        height: calc(100vh - 75px);
        background-color: #ffffff;
        flex-direction: column;
        padding: 40px 20px;
        transition: left 0.4s ease;
        box-shadow: var(--shadow-md);
      }

      .nav-menu.active { left: 0; }
      .nav-list { flex-direction: column; gap: 20px; }
      .mobile-toggle { display: block; }
      .nav-btn { display: none; }

      .hero-title { font-size: 2.3rem; }
      .hero-subtitle { font-size: 1rem; }
      .section-title { font-size: 2rem; }

      .gallery-item.item-tall {
        grid-row: span 1;
        height: 260px;
      }

      .mobile-call-bar { display: block; }
      .whatsapp-float { bottom: 80px; }
      .back-to-top { bottom: 150px; }

      .newsletter-form {
        flex-direction: column;
      }
    }
  </style>

  <!-- Structured Schema Markup (JSON-LD) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Hungry Mommy Café",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "@id": "https://maps.app.goo.gl/nM3PMx6GSFvLfb4EA",
    "url": "https://hungrymommy.lk/",
    "telephone": "+94705128206",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "384 Justing Kanda, Hirimbura Rd",
      "addressLocality": "Galle",
      "postalCode": "80000",
      "addressCountry": "LK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.0535,
      "longitude": 80.2210
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://maps.app.goo.gl/nM3PMx6GSFvLfb4EA"
    ],
    "servesCuisine": ["Coffee", "Breakfast", "Burgers", "Pasta", "Desserts", "Beverages"]
  }
  </script>
</head>
<body>

  <!-- Preloader -->
  <div id="preloader">
    <div class="loader-content">
      <div class="coffee-cup">
        <i class="fa-solid fa-mug-hot"></i>
        <div class="steam"><span></span><span></span><span></span></div>
      </div>
      <h2>Hungry Mommy</h2>
      <p>Brewing perfection...</p>
    </div>
  </div>

  <!-- Header / Navigation -->
  <header class="site-header" id="header">
    <div class="container nav-container">
      <a href="#hero" class="brand-logo">
        <i class="fa-solid fa-utensils logo-icon"></i>
        <div class="logo-text">
          <span class="title">Hungry Mommy</span>
          <span class="subtitle">CAFÉ & BISTRO</span>
        </div>
      </a>

      <nav class="nav-menu" id="nav-menu">
        <ul class="nav-list">
          <li><a href="#hero" class="nav-link active">Home</a></li>
          <li><a href="#about" class="nav-link">About Us</a></li>
          <li><a href="#menu" class="nav-link">Menu</a></li>
          <li><a href="#specials" class="nav-link">Specials</a></li>
          <li><a href="#gallery" class="nav-link">Gallery</a></li>
          <li><a href="#why-us" class="nav-link">Why Us</a></li>
          <li><a href="#reviews" class="nav-link">Reviews</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="tel:+94705128206" class="btn btn-primary nav-btn">
          <i class="fa-solid fa-phone"></i> <span>Call Us</span>
        </a>
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero-section" id="hero">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <span class="badge hero-badge"><i class="fa-solid fa-heart"></i> Galle's Premier Café Destination</span>
      <h1 class="hero-title">Fresh Coffee, Delicious Food & Cozy Moments.</h1>
      <p class="hero-subtitle">
        Welcome to Hungry Mommy Café, your perfect place to relax, enjoy handcrafted coffee, tasty meals, and unforgettable moments.
      </p>
      <div class="hero-buttons">
        <a href="#menu" class="btn btn-primary btn-lg">
          <i class="fa-solid fa-utensils"></i> View Menu
        </a>
        <a href="tel:+94705128206" class="btn btn-secondary btn-lg">
          <i class="fa-solid fa-phone"></i> Call Now
        </a>
      </div>
      <div class="hero-features">
        <div class="hero-feature-item">
          <i class="fa-solid fa-clock"></i>
          <span>Open Daily: 8:00 AM – 9:00 PM</span>
        </div>
        <div class="hero-feature-item">
          <i class="fa-solid fa-location-dot"></i>
          <span>Hirimbura Rd, Galle</span>
        </div>
        <div class="hero-feature-item">
          <i class="fa-solid fa-star"></i>
          <span>4.9 / 5.0 Rated Experience</span>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about-section section-padding" id="about">
    <div class="container">
      <div class="grid grid-2 align-center">
        <div class="about-image-wrapper">
          <div class="main-img-box">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80" alt="Master Barista Pouring Fresh Coffee at Hungry Mommy Cafe" class="about-img main-img">
          </div>
          <div class="floating-experience-badge">
            <span class="exp-num">100%</span>
            <span class="exp-text">Fresh & Handcrafted Daily</span>
          </div>
        </div>

        <div class="about-content">
          <span class="section-subtitle">Our Heart & Story</span>
          <h2 class="section-title">A Warm Haven of Flavor and Hospitality</h2>
          <p class="about-lead">
            At Hungry Mommy Café, we believe that great food and exceptional coffee have the unique power to bring people together.
          </p>
          <p>
            Tucked away on Hirimbura Road in Galle, our café was created as a cozy sanctuary where time slows down. From the crack of dawn, our kitchen wakes up to the scent of freshly roasted beans, sizzling breakfast plates, and freshly baked goods.
          </p>
          <p>
            Whether you are dropping in for a rich morning espresso, sharing a hearty gourmet lunch with family, enjoying afternoon desserts with friends, or catching up on work, we offer a welcoming atmosphere tailored just for you.
          </p>

          <div class="about-highlights">
            <div class="highlight-item">
              <i class="fa-solid fa-wheat-awn"></i>
              <div>
                <h4>Fresh Ingredients</h4>
                <p>Locally sourced produce, artisanal meats, and high-altitude espresso beans.</p>
              </div>
            </div>
            <div class="highlight-item">
              <i class="fa-solid fa-smile-beam"></i>
              <div>
                <h4>Warm & Friendly Service</h4>
                <p>Genuine Sri Lankan warmth and hospitality that makes you feel right at home.</p>
              </div>
            </div>
            <div class="highlight-item">
              <i class="fa-solid fa-heart"></i>
              <div>
                <h4>Comfortable Atmosphere</h4>
                <p>Thoughtfully designed for families, friends, students, and couples alike.</p>
              </div>
            </div>
          </div>

          <a href="#contact" class="btn btn-primary mt-20">
            <i class="fa-solid fa-location-dot"></i> Visit Us Today
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Animated Statistics Section -->
  <section class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card">
          <i class="fa-solid fa-mug-hot"></i>
          <h3 class="stat-number" data-target="15000">0</h3>
          <p>Cups Brewed</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-face-smile"></i>
          <h3 class="stat-number" data-target="9800">0</h3>
          <p>Happy Visitors</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-utensils"></i>
          <h3 class="stat-number" data-target="40">0</h3>
          <p>Menu Varieties</p>
        </div>
        <div class="stat-card">
          <i class="fa-solid fa-star"></i>
          <h3 class="stat-number-text">4.9 / 5</h3>
          <p>Average Customer Rating</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Menu Section -->
  <section class="menu-section section-padding" id="menu">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Culinary Delights</span>
        <h2 class="section-title">Our Featured Menu</h2>
        <p class="section-description">
          Explore our handcrafted selections of coffees, hearty mains, pastas, signature drinks, and tempting sweet treats.
        </p>
      </div>

      <!-- Menu Category Tabs -->
      <div class="menu-tabs">
        <button class="tab-btn active" data-category="all">All Items</button>
        <button class="tab-btn" data-category="coffee">☕ Coffee</button>
        <button class="tab-btn" data-category="mains">🍔 Mains & Burgers</button>
        <button class="tab-btn" data-category="pasta">🍝 Pasta</button>
        <button class="tab-btn" data-category="dessert">🍰 Desserts</button>
        <button class="tab-btn" data-category="drinks">🥤 Smoothies & Drinks</button>
      </div>

      <!-- Menu Grid -->
      <div class="menu-grid">
        <!-- Coffee Items -->
        <div class="menu-card" data-category="coffee">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80" alt="Classic Cappuccino" loading="lazy">
            <span class="price-tag">LKR 850</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Classic Cappuccino</h3>
              <span class="badge-mini">Popular</span>
            </div>
            <p>Rich espresso layered with velvety steamed milk foam and dusted with organic cocoa powder.</p>
          </div>
        </div>

        <div class="menu-card" data-category="coffee">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80" alt="Single or Double Espresso" loading="lazy">
            <span class="price-tag">LKR 600</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Signature Espresso</h3>
            </div>
            <p>A bold, concentrated shot of pure arabica coffee extracted to golden crema perfection.</p>
          </div>
        </div>

        <div class="menu-card" data-category="coffee">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80" alt="Caffè Latte" loading="lazy">
            <span class="price-tag">LKR 900</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Smooth Caffè Latte</h3>
              <span class="badge-mini">Barista Choice</span>
            </div>
            <p>Smooth espresso combined with silky micro-foamed milk and delicate poured latte art.</p>
          </div>
        </div>

        <div class="menu-card" data-category="coffee">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80" alt="Rich Caffè Mocha" loading="lazy">
            <span class="price-tag">LKR 1,050</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Rich Caffè Mocha</h3>
            </div>
            <p>Espresso blended with rich Dutch dark chocolate and smooth steamed whole milk.</p>
          </div>
        </div>

        <div class="menu-card" data-category="coffee">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80" alt="Artisanal Iced Coffee" loading="lazy">
            <span class="price-tag">LKR 950</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Artisanal Iced Coffee</h3>
            </div>
            <p>Chilled double-shot espresso poured over ice with your choice of sweet condensed or fresh milk.</p>
          </div>
        </div>

        <!-- Mains & Burgers -->
        <div class="menu-card" data-category="mains">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" alt="Hungry Mommy Chicken Burger" loading="lazy">
            <span class="price-tag">LKR 1,650</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Crispy Chicken Burger</h3>
              <span class="badge-mini">Chef Special</span>
            </div>
            <p>Golden fried seasoned chicken breast, melted cheddar cheese, fresh lettuce, and signature garlic aioli on a toasted brioche bun.</p>
          </div>
        </div>

        <div class="menu-card" data-category="mains">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80" alt="Gourmet Beef Burger" loading="lazy">
            <span class="price-tag">LKR 1,950</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Gourmet Beef Burger</h3>
            </div>
            <p>Juicy handcrafted beef patty, caramelized onions, crisp pickles, aged cheddar, and house smoky BBQ glaze.</p>
          </div>
        </div>

        <div class="menu-card" data-category="mains">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80" alt="Triple Deck Club Sandwich" loading="lazy">
            <span class="price-tag">LKR 1,450</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Triple Deck Club Sandwich</h3>
            </div>
            <p>Toasted multi-grain bread layered with grilled chicken, farm egg, tomato, crunchy lettuce, and herb mayonnaise. Served with seasoned fries.</p>
          </div>
        </div>

        <!-- Pasta -->
        <div class="menu-card" data-category="pasta">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1621996346565-e3d5d6281358?auto=format&fit=crop&w=600&q=80" alt="Creamy Pasta Alfredo" loading="lazy">
            <span class="price-tag">LKR 1,750</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Creamy Pasta Alfredo</h3>
              <span class="badge-mini">Bestseller</span>
            </div>
            <p>Al dente pasta simmered in rich garlic parmesan cream sauce, finished with fresh parsley and extra virgin olive oil.</p>
          </div>
        </div>

        <div class="menu-card" data-category="pasta">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" alt="Spicy Chicken Pasta" loading="lazy">
            <span class="price-tag">LKR 1,850</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Spicy Chicken Pasta</h3>
            </div>
            <p>Penne pasta tossed with tender grilled chicken chunks, bell peppers, garlic chili flakes, and fresh basil leaves.</p>
          </div>
        </div>

        <!-- Desserts -->
        <div class="menu-card" data-category="dessert">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" alt="Decadent Chocolate Cake" loading="lazy">
            <span class="price-tag">LKR 950</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Decadent Chocolate Cake</h3>
            </div>
            <p>Moist chocolate sponge layers rich with silky chocolate fudge ganache. Pure indulgence for dessert lovers.</p>
          </div>
        </div>

        <div class="menu-card" data-category="dessert">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80" alt="New York Style Cheesecake" loading="lazy">
            <span class="price-tag">LKR 1,100</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Classic Cheesecake</h3>
            </div>
            <p>Baked New York style creamy cheesecake resting on a buttery biscuit base, served with tart berry compote.</p>
          </div>
        </div>

        <div class="menu-card" data-category="dessert">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80" alt="Warm Fudgy Brownie" loading="lazy">
            <span class="price-tag">LKR 750</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Warm Fudgy Brownie</h3>
            </div>
            <p>Rich chocolate brownie served warm, topped with a scoop of Madagascar vanilla bean ice cream and chocolate drizzle.</p>
          </div>
        </div>

        <!-- Drinks -->
        <div class="menu-card" data-category="drinks">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80" alt="Tropical Fresh Juices" loading="lazy">
            <span class="price-tag">LKR 700</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Fresh Island Juices</h3>
            </div>
            <p>Freshly squeezed tropical Sri Lankan fruits: Watermelon, Mango, Passion Fruit, or Lime mint refresher.</p>
          </div>
        </div>

        <div class="menu-card" data-category="drinks">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80" alt="Gourmet Milkshakes" loading="lazy">
            <span class="price-tag">LKR 950</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Gourmet Milkshakes</h3>
            </div>
            <p>Thick, velvety milkshakes available in Belgian Chocolate, Strawberry Bliss, or Vanilla Bean.</p>
          </div>
        </div>

        <div class="menu-card" data-category="drinks">
          <div class="card-img-wrapper">
            <img src="https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80" alt="Tropical Fruit Smoothie" loading="lazy">
            <span class="price-tag">LKR 1,000</span>
          </div>
          <div class="card-content">
            <div class="card-title-row">
              <h3>Tropical Energy Smoothie</h3>
            </div>
            <p>Blended fresh mango, banana, wild berries, honey, and natural Greek yogurt for a nutrient-rich boost.</p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Special Drinks Section -->
  <section class="specials-section section-padding" id="specials">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Exclusively Crafted</span>
        <h2 class="section-title">Signature Special Drinks</h2>
        <p class="section-description">
          Sip on perfection with our uniquely crafted beverages, designed by our master baristas for an unforgettable taste experience.
        </p>
      </div>

      <div class="specials-grid">
        <!-- Special 1 -->
        <div class="special-card">
          <div class="special-img">
            <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" alt="Mom's Salted Caramel Latte" loading="lazy">
          </div>
          <div class="special-info">
            <span class="special-tag">House Favorite</span>
            <h3>Mom's Salted Caramel Latte</h3>
            <p>A dreamy combination of double espresso, house-crafted buttered caramel, textured oat milk, finished with sea salt flakes.</p>
            <div class="special-footer">
              <span class="special-price">LKR 1,150</span>
              <a href="tel:+94705128206" class="btn btn-outline-sm"><i class="fa-solid fa-mug-hot"></i> Order Now</a>
            </div>
          </div>
        </div>

        <!-- Special 2 -->
        <div class="special-card">
          <div class="special-img">
            <img src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80" alt="Ceylon Cinnamon Spiced Cold Brew" loading="lazy">
          </div>
          <div class="special-info">
            <span class="special-tag">Local Infusion</span>
            <h3>Ceylon Spiced Cinnamon Brew</h3>
            <p>12-hour steep cold brew infused with pure Ceylon cinnamon, star anise, sweet honey, and topped with light cold foam.</p>
            <div class="special-footer">
              <span class="special-price">LKR 980</span>
              <a href="tel:+94705128206" class="btn btn-outline-sm"><i class="fa-solid fa-mug-hot"></i> Order Now</a>
            </div>
          </div>
        </div>

        <!-- Special 3 -->
        <div class="special-card">
          <div class="special-img">
            <img src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80" alt="Tropical Mango Coconut Breeze" loading="lazy">
          </div>
          <div class="special-info">
            <span class="special-tag">Island Refreshment</span>
            <h3>Mango Coconut Breeze Frappe</h3>
            <p>Chilled puree of sweet ripe local mangoes blended with coconut cream, crushed ice, and passion fruit seeds.</p>
            <div class="special-footer">
              <span class="special-price">LKR 1,100</span>
              <a href="tel:+94705128206" class="btn btn-outline-sm"><i class="fa-solid fa-wine-glass"></i> Order Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section class="gallery-section section-padding" id="gallery">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Visual Experience</span>
        <h2 class="section-title">Café Gallery & Vibes</h2>
        <p class="section-description">
          Take a peek inside Hungry Mommy Café—where modern aesthetics meet cozy warmth.
        </p>
      </div>

      <div class="gallery-masonry">
        <div class="gallery-item item-tall">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80" alt="Cozy Cafe Seating Interior" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Cozy Interior Vibes</span>
          </div>
        </div>

        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80" alt="Artisan Breakfast Spread" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Fresh Breakfast Table</span>
          </div>
        </div>

        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" alt="Barista Pouring Coffee Art" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Barista Artistry</span>
          </div>
        </div>

        <div class="gallery-item item-wide">
          <img src="https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80" alt="Pastry Display Counter" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Fresh Sweet Pastries</span>
          </div>
        </div>

        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80" alt="Guests Enjoying Coffee" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Happy Moments</span>
          </div>
        </div>

        <div class="gallery-item">
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=800&q=80" alt="Roasted Arabica Coffee Beans" loading="lazy">
          <div class="gallery-overlay">
            <i class="fa-solid fa-camera"></i>
            <span>Premium Roasted Beans</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="why-us-section section-padding" id="why-us">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Our Promise</span>
        <h2 class="section-title">Why Guests Love Us</h2>
        <p class="section-description">
          We combine passionate craftsmanship, pristine ingredients, and genuine care to deliver an unparalleled café experience.
        </p>
      </div>

      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-leaf"></i>
          </div>
          <h3>Fresh Ingredients</h3>
          <p>We source top-tier ingredients, fresh veggies, and organic dairy daily to prepare food that is wholesome and rich in taste.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-user-tie"></i>
          </div>
          <h3>Expert Baristas</h3>
          <p>Our baristas are passionate specialists, dialing in extraction variables to pour you the perfect balanced cup every single time.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-couch"></i>
          </div>
          <h3>Cozy Environment</h3>
          <p>Designed with warm wood tones, relaxed lighting, plush seating, and quiet corners ideal for socializing or working.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-bolt"></i>
          </div>
          <h3>Fast & Friendly Service</h3>
          <p>Prompt, respectful, and cheerful service ensures you never have to wait long to satisfy your cravings.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-mug-hot"></i>
          </div>
          <h3>Quality Coffee</h3>
          <p>Handpicked 100% Arabica beans expertly roasted to preserve natural chocolate, caramel, and fruit notes.</p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <i class="fa-solid fa-tag"></i>
          </div>
          <h3>Affordable Prices</h3>
          <p>Luxury café standards made accessible with fair, transparent pricing across our entire food and beverage menu.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer Reviews Section -->
  <section class="reviews-section section-padding" id="reviews">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Testimonials</span>
        <h2 class="section-title">What Our Guests Say</h2>
        <p class="section-description">
          Read authentic reviews from coffee lovers, families, and travelers who visit Hungry Mommy Café.
        </p>
      </div>

      <div class="reviews-grid">
        <!-- Review 1 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Hands down the best cappuccino in Galle! The crispy chicken burger was so delicious and fresh. The atmosphere is warm and super cozy."
          </p>
          <div class="reviewer-info">
            <div class="avatar">DA</div>
            <div>
              <h4>Dilshan Abeysekara</h4>
              <span>Galle Resident</span>
            </div>
          </div>
        </div>

        <!-- Review 2 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Hungry Mommy Café feels like home! The staff greeted us with big smiles. The Creamy Pasta Alfredo was restaurant-quality and very generous!"
          </p>
          <div class="reviewer-info">
            <div class="avatar">SW</div>
            <div>
              <h4>Sarah Williams</h4>
              <span>Traveler from UK</span>
            </div>
          </div>
        </div>

        <!-- Review 3 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Perfect place to work remotely! Strong WiFi, comfortable seats, and Mom's Salted Caramel Latte is pure perfection. I'll be coming back daily."
          </p>
          <div class="reviewer-info">
            <div class="avatar">KP</div>
            <div>
              <h4>Kasun Perera</h4>
              <span>Digital Nomad</span>
            </div>
          </div>
        </div>

        <!-- Review 4 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Their warm fudgy brownie with vanilla ice cream is out of this world! Very clean café, fast service, and reasonable prices."
          </p>
          <div class="reviewer-info">
            <div class="avatar">NF</div>
            <div>
              <h4>Nipuni Fernando</h4>
              <span>Food Blogger</span>
            </div>
          </div>
        </div>

        <!-- Review 5 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Incredible hospitality! We stopped by for a quick juice and ended up staying for 2 hours enjoying the relaxed music and vibes."
          </p>
          <div class="reviewer-info">
            <div class="avatar">ML</div>
            <div>
              <h4>Marco & Lisa</h4>
              <span>Backpackers</span>
            </div>
          </div>
        </div>

        <!-- Review 6 -->
        <div class="review-card">
          <div class="stars">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
          </div>
          <p class="review-text">
            "Great spot for family gatherings. Kids loved the milkshakes and we loved the gourmet beef burgers. Top tier experience in Galle!"
          </p>
          <div class="reviewer-info">
            <div class="avatar">RJ</div>
            <div>
              <h4>Rohan Jayawardena</h4>
              <span>Visitor from Colombo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Accordion Section -->
  <section class="faq-section section-padding">
    <div class="container">
      <div class="section-header text-center">
        <span class="section-subtitle">Common Inquiries</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
      </div>

      <div class="faq-accordion">
        <div class="faq-item active">
          <button class="faq-question">
            <span>What are your opening hours?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p>We are open 7 days a week from 8:00 AM to 9:00 PM, serving freshly prepared breakfast, lunch, coffee, snacks, and dinner options.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Do you have vegetarian or vegan friendly options?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p>Yes! We offer a variety of vegetarian options including creamy pastas, fresh salads, oat/almond milk options for hot and cold coffees, and fresh fruit smoothies.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Is free Wi-Fi and power available for remote workers?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p>Yes, we offer complimentary high-speed Wi-Fi and accessible power outlets throughout the seating area for remote workers and students.</p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span>Can I place takeaway orders or reserve a table?</span>
            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <div class="faq-answer">
            <p>Absolutely! You can call us directly at <strong>+94 70 512 8206</strong> or message us on WhatsApp to reserve a table or order ahead for quick pickup.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Location & Maps Section -->
  <section class="location-section section-padding" id="location">
    <div class="container">
      <div class="grid grid-2 align-center">
        <div class="location-info">
          <span class="section-subtitle">Find Us</span>
          <h2 class="section-title">Conveniently Located in Galle</h2>
          <p>
            Visit Hungry Mommy Café at Hirimbura Road, Galle. We offer a calm, scenic atmosphere slightly tucked away from city traffic noise.
          </p>

          <div class="location-details">
            <div class="detail-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <h4>Address</h4>
                <p>Hungry Mommy Cafe,<br>384 Justing Kanda, Hirimbura Rd,<br>Galle 80000, Sri Lanka</p>
              </div>
            </div>

            <div class="detail-item">
              <i class="fa-solid fa-phone"></i>
              <div>
                <h4>Phone Contact</h4>
                <p><a href="tel:+94705128206">+94 70 512 8206</a></p>
              </div>
            </div>

            <div class="detail-item">
              <i class="fa-solid fa-clock"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>Monday – Sunday: 8:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          <div class="location-actions">
            <a href="https://maps.app.goo.gl/nM3PMx6GSFvLfb4EA" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
              <i class="fa-solid fa-directions"></i> Get Directions
            </a>
            <a href="tel:+94705128206" class="btn btn-secondary">
              <i class="fa-solid fa-phone"></i> Call Now
            </a>
          </div>
        </div>

        <div class="map-container">
          <!-- Google Maps Embed -->
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8!2d80.221!3d6.0535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDMnMTIuNiJOIDgwwrAxMycxNS42IkU!5e0!3m2!1sen!2slk!4v1680000000000!5m2!1sen!2slk" 
            width="100%" 
            height="450" 
            style="border:0; border-radius: var(--radius-md);" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Hungry Mommy Cafe Location Map">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="contact-section section-padding" id="contact">
    <div class="container">
      <div class="contact-card-box">
        <div class="grid grid-2">
          <div class="contact-text">
            <span class="section-subtitle">Get In Touch</span>
            <h2>We’d Love to Hear From You</h2>
            <p>Have questions about private event bookings, catering, or menu items? Send us a message and our team will get back to you promptly.</p>
            
            <div class="contact-meta">
              <p><i class="fa-solid fa-envelope"></i> info@hungrymommy.lk</p>
              <p><i class="fa-solid fa-phone"></i> +94 70 512 8206</p>
              <p><i class="fa-solid fa-comments"></i> Direct WhatsApp Messaging Available</p>
            </div>
          </div>

          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="name">Your Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" required>
            </div>

            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+94 7X XXX XXXX" required>
            </div>

            <div class="form-group">
              <label for="message">Message or Reservation Inquiry</label>
              <textarea id="message" name="message" rows="4" placeholder="How can we help you today?" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block">
              <i class="fa-solid fa-paper-plane"></i> Send Message
            </button>
            <div id="form-status" class="form-status"></div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Newsletter Signup Section -->
  <section class="newsletter-section">
    <div class="container text-center">
      <h2>Join Our Coffee Lovers Club</h2>
      <p>Subscribe for exclusive discount offers, seasonal updates, and birthday treats!</p>
      <form class="newsletter-form" id="newsletter-form">
        <input type="email" placeholder="Enter your email address..." required>
        <button type="submit" class="btn btn-accent">Subscribe</button>
      </form>
      <div id="newsletter-status"></div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-content">
      <div class="footer-col brand-col">
        <a href="#hero" class="brand-logo footer-logo">
          <i class="fa-solid fa-utensils logo-icon"></i>
          <div class="logo-text">
            <span class="title">Hungry Mommy</span>
            <span class="subtitle">CAFÉ & BISTRO</span>
          </div>
        </a>
        <p>Galle’s warm and inviting café destination for handcrafted coffee, gourmet burgers, pastas, and homemade desserts.</p>
        <div class="social-links">
          <a href="https://maps.app.goo.gl/nM3PMx6GSFvLfb4EA" target="_blank" aria-label="Google Business Profile"><i class="fa-brands fa-google"></i></a>
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://wa.me/94705128206" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#hero"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
          <li><a href="#about"><i class="fa-solid fa-chevron-right"></i> About Us</a></li>
          <li><a href="#menu"><i class="fa-solid fa-chevron-right"></i> Featured Menu</a></li>
          <li><a href="#specials"><i class="fa-solid fa-chevron-right"></i> Signature Drinks</a></li>
          <li><a href="#gallery"><i class="fa-solid fa-chevron-right"></i> Photo Gallery</a></li>
          <li><a href="#location"><i class="fa-solid fa-chevron-right"></i> Directions</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Opening Hours</h4>
        <ul class="hours-list">
          <li><span>Monday - Friday:</span> <strong>8:00 AM - 9:00 PM</strong></li>
          <li><span>Saturday:</span> <strong>8:00 AM - 9:00 PM</strong></li>
          <li><span>Sunday:</span> <strong>8:00 AM - 9:00 PM</strong></li>
          <li><span class="status-open"><i class="fa-solid fa-circle"></i> Open 7 Days A Week</span></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact Us</h4>
        <p><i class="fa-solid fa-location-dot"></i> 384 Justing Kanda, Hirimbura Rd, Galle 80000, Sri Lanka</p>
        <p><i class="fa-solid fa-phone"></i> <a href="tel:+94705128206">+94 70 512 8206</a></p>
        <p><i class="fa-solid fa-envelope"></i> info@hungrymommy.lk</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container text-center">
        <p>&copy; <span id="year"></span> Hungry Mommy Café. All Rights Reserved. Crafted with care in Galle, Sri Lanka.</p>
      </div>
    </div>
  </footer>

  <!-- Floating Buttons -->
  <!-- WhatsApp Floating Button -->
  <a href="https://wa.me/94705128206?text=Hello%20Hungry%20Mommy%20Cafe!%20I%20would%20like%20to%20know%20more%20about%20your%20menu." class="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
    <i class="fa-brands fa-whatsapp"></i>
  </a>

  <!-- Mobile Sticky Call Bar -->
  <div class="mobile-call-bar">
    <a href="tel:+94705128206" class="btn btn-primary btn-full">
      <i class="fa-solid fa-phone-volume"></i> Call Hungry Mommy Café
    </a>
  </div>

  <!-- Back To Top Button -->
  <button id="backToTop" class="back-to-top" aria-label="Back to Top">
    <i class="fa-solid fa-arrow-up"></i>
  </button>

  <!-- EMBEDDED JAVASCRIPT -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {

      /* ==========================================
         1. PRELOADER HIDE
         ========================================== */
      const preloader = document.getElementById('preloader');
      window.addEventListener('load', () => {
        setTimeout(() => {
          if (preloader) {
            preloader.classList.add('fade-out');
          }
        }, 500);
      });

      /* ==========================================
         2. STICKY HEADER & BACK TO TOP BUTTON
         ========================================== */
      const header = document.getElementById('header');
      const backToTopBtn = document.getElementById('backToTop');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }

        if (window.scrollY > 400) {
          backToTopBtn.classList.add('show');
        } else {
          backToTopBtn.classList.remove('show');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      /* ==========================================
         3. MOBILE NAVIGATION TOGGLE
         ========================================== */
      const mobileToggle = document.getElementById('mobile-toggle');
      const navMenu = document.getElementById('nav-menu');
      const navLinks = document.querySelectorAll('.nav-link');

      if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
          const icon = mobileToggle.querySelector('i');
          if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
          } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        });
      }

      // Close menu when link is clicked
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          if (mobileToggle) {
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        });
      });

      /* ==========================================
         4. MENU CATEGORY FILTERING
         ========================================== */
      const tabBtns = document.querySelectorAll('.tab-btn');
      const menuCards = document.querySelectorAll('.menu-card');

      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const category = btn.getAttribute('data-category');

          menuCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
              card.style.display = 'flex';
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 50);
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(20px)';
              setTimeout(() => {
                card.style.display = 'none';
              }, 300);
            }
          });
        });
      });

      /* ==========================================
         5. FAQ ACCORDION LOGIC
         ========================================== */
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all items
          faqItems.forEach(f => f.classList.remove('active'));

          // Toggle current item
          if (!isActive) {
            item.classList.add('active');
          }
        });
      });

      /* ==========================================
         6. INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
         ========================================== */
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');

            // Trigger stat counters if current target is a stat card
            if (entry.target.classList.contains('stat-card')) {
              animateStatCounter(entry.target);
            }

            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const animatedElements = document.querySelectorAll('.about-content, .about-image-wrapper, .menu-card, .special-card, .feature-card, .review-card, .location-info, .map-container, .stat-card');
      
      animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        scrollObserver.observe(el);
      });

      /* ==========================================
         7. ANIMATED STAT COUNTERS
         ========================================== */
      function animateStatCounter(card) {
        const numElement = card.querySelector('.stat-number');
        if (!numElement) return;

        const target = parseInt(numElement.getAttribute('data-target'), 10);
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = target / steps;

        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            numElement.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
          } else {
            numElement.textContent = Math.floor(current).toLocaleString() + '+';
          }
        }, stepTime);
      }

      /* ==========================================
         8. DYNAMIC COPYRIGHT YEAR
         ========================================== */
      const yearSpan = document.getElementById('year');
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }

      /* ==========================================
         9. FORM SUBMISSION HANDLING
         ========================================== */
      const contactForm = document.getElementById('contact-form');
      const formStatus = document.getElementById('form-status');

      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          const btn = contactForm.querySelector('button[type="submit"]');
          btn.disabled = true;
          btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

          setTimeout(() => {
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you! Your message has been sent successfully. We will get back to you shortly.';
            contactForm.reset();
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
          }, 1500);
        });
      }

      const newsletterForm = document.getElementById('newsletter-form');
      const newsletterStatus = document.getElementById('newsletter-status');

      if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
          e.preventDefault();
          newsletterStatus.style.color = '#FFD59E';
          newsletterStatus.style.marginTop = '15px';
          newsletterStatus.textContent = 'Welcome to the Hungry Mommy Coffee Club! Thank you for subscribing.';
          newsletterForm.reset();
        });
      }

    });
  </script>
</body>
</html>
