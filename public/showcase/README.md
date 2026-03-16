# Prikaz aplikacije – slike i video

Stavite ovde fajlove za sekciju "Prikaz aplikacije":

- **mapa.png** – screenshot: pregled na mapi
- **vozila.png** – screenshot: lista vozila / rute
- **izvestaji.png** – screenshot: izveštaji i obaveštenja
- **demo.mp4** – video demo aplikacije (opciono: **demo-poster.jpg** kao naslovna slika videa)

Preporuka: slike u rezoluciji oko 1080×2340 px (proporcije telefona).

**Kada dodate fajlove**, u `app/components/AppShowcase.tsx` u nizu `showcaseItems` postavite:
- `imageSrc: "/showcase/mapa.png"` (i isto za vozila.png, izvestaji.png)
- `videoSrc: "/showcase/demo.mp4"` i opciono `videoPoster: "/showcase/demo-poster.jpg"`
