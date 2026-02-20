# Images Guide

## Image Structure

```
d:/VS CODE/images/
├── icons/                          # Feature section icons
│   ├── international.svg          # Internships icon
│   ├── technology-park.svg        # Technology Park icon
│   ├── partnerships.svg           # Partnerships icon
│   └── scholarships.svg           # Scholarships icon
│
├── logos/                         # University and organization logos
│   ├── austria-1.svg             # FH Joanneum Austria
│   ├── austria-2.svg             # JKU Austria
│   ├── ustb.svg                  # USTB China
│   ├── njtu.svg                  # NJTU China
│   ├── cumt.svg                  # CUMT China
│   ├── gdut.svg                  # GDUT China
│   ├── shu.svg                   # SHU China
│   ├── siat.svg                  # SIAT China
│   ├── xpire.svg                 # National Partner
│   ├── adt-telecom.svg           # National Partner
│   ├── lenovo.svg                # National Partner
│   ├── midstorm.svg              # National Partner
│   ├── the-little-art.svg        # National Partner
│   ├── zalmi-foundation.svg      # National Partner
│   ├── aips.svg                  # National Partner
│   ├── youth-network.svg         # National Partner
│   ├── kpk-gov.svg               # National Partner
│   ├── international-center.svg  # National Partner
│   ├── china-pak.svg             # National Partner
│   ├── national-radio.svg        # National Partner
│   ├── nescom.svg                # National Partner
│   ├── fpcci.svg                 # National Partner
│   ├── akhuwat.svg               # National Partner
│   └── haripur-chamber.svg       # National Partner
│
└── logo-paf-iast.svg             # Main university logo
```

## Where Images Are Used

### Homepage (index.html)
- **Feature Icons**: International, Technology Park, Partnerships, Scholarships
- **International Collaborations**: 8 university logos
- **National Collaborations**: 16 organization logos

### Pages Using Images
- **Academics**: Department icons (can be added)
- **Research**: Research center icons (can be added)
- **Events**: News/event images (can be added)
- **About**: Campus images (can be added)

## How to Add Your Own Images

### 1. Download Images from Original Website
You can download images from: https://paf-iast.edu.pk/wp-content/uploads/

Example paths:
```
https://paf-iast.edu.pk/wp-content/uploads/2024/07/Xpire.jpg
https://paf-iast.edu.pk/wp-content/uploads/2024/07/Lenovo.jpg
https://paf-iast.edu.pk/wp-content/uploads/2021/03/project-management.png
```

### 2. Add Images to Folders
1. Download the images to your computer
2. Place them in `d:/VS CODE/images/logos/` or `d:/VS CODE/images/icons/`
3. Update the HTML to reference them

### 3. Update HTML References
Example for adding a new icon:
```html
<div class="feature-icon">
    <img src="images/icons/your-image.png" alt="Icon Name">
</div>
```

### 4. Supported Image Formats
- PNG (recommended for icons)
- JPG/JPEG (good for photos)
- SVG (vector - scalable, used in this site)
- WebP (modern format)

## Current Image Format

All images are currently **SVG format** (Vector graphics):
- Scalable to any size without quality loss
- Small file size
- Professional appearance
- Compatible with all browsers

## Replace SVG Images with Real Photos

To replace SVG placeholders with actual images:

1. **Remove SVG images** from the relevant folders
2. **Download PNG/JPG images** from the original website
3. **Update image paths** in HTML files
4. **Adjust CSS** if needed for sizing

Example replacement:
```html
<!-- Before (SVG) -->
<img src="images/logos/xpire.svg" alt="Xpire">

<!-- After (PNG) -->
<img src="images/logos/xpire.png" alt="Xpire">
```

## Image Usage in Components

### Logo Items
```css
.logo-item img {
    max-width: 100%;
    height: 60px;
    object-fit: contain;
}
```

### Feature Icons
```css
.feature-icon img {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    display: block;
}
```

### Insight Cards (News)
```css
.insight-image {
    height: 200px;
    background-size: cover;
    background-position: center;
}
```

## Tips for Best Results

1. **Logo dimensions**: 120x60px or similar aspect ratio
2. **Icon dimensions**: 80x80px for square icons
3. **Quality**: Use high-quality images (300+ DPI for print)
4. **Format**: Use PNG for transparency, JPG for photos
5. **Optimization**: Compress images before uploading
6. **Alt Text**: Always include descriptive alt text for accessibility

## Download Images from PAF-IAST Website

Official media files available at:
- https://paf-iast.edu.pk/gallery/
- https://paf-iast.edu.pk/wp-content/uploads/

Contact info:
- Email: info@paf-iast.edu.pk
- Phone: +92-995-111 723 278

## Need Help?

If you need to add actual images from the original website:
1. Visit https://paf-iast.edu.pk/
2. Right-click on any image
3. Select "Save image as..."
4. Place it in the appropriate folder
5. Update the src attribute in the HTML
