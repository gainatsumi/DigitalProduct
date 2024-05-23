export const PRODUCT_CATEGORIES = [
  {
    label: "Ebooks",
    value: "e_books" as const,
    featured: [
      {
        name: "All ",
        href: "/products?category=e_books&sort=desc",
        imageSrc: "/nav/ui-kits/allebooks.png",
      },
      {
        name: "Dragon Ball",
        href: `/products?category=e_books&name=DragonBall`,
        imageSrc: "/nav/ui-kits/dragonballic.jpg",
      },
      {
        name: "Doraemon",
        href: "/products?category=e_books&name=doraemon",
        imageSrc: "/nav/ui-kits/doraemonbg.jpg",
      },
      {
        name: "Conan",
        href: "/products?category=e_books&name=conan",
        imageSrc: "/nav/ui-kits/conan.jpg",
      },
    ],
  },
  {
    label: "Courses",
    value: "courses" as const,
    featured: [
      {
        name: "All",
        href: `/products?category=courses`,
        imageSrc: "/nav/icons/allcourse.jpg",
      },
      {
        name: "New Courses",
        href: "/products?category=courses&sort=desc",
        imageSrc: "/nav/icons/newcourse.jpg",
      },
      {
        name: "Programming Course",
        href: "/products?category=courses&name=WebCourse",
        imageSrc: "/nav/icons/course_web3.jpg",
      },
      {
        name: "English Course",
        href: "/products?category=courses&name=EnglishCourse",
        imageSrc: "/nav/icons/course_Eng2.jpg",
      },
    ],
  },
  {
    label: "Musics",
    value: "musics" as const,
    featured: [
      {
        name: "All",
        href: `/products?category=musics`,
        imageSrc: "/nav/icons/allmusic.jpg",
      },
      {
        name: "New Music",
        href: "/products?category=musics&sort=desc",
        imageSrc: "/nav/icons/newmusic.jpg",
      },
      {
        name: "Sơn Tùng mtp",
        href: "/products?category=musics&name=SonTung",
        imageSrc: "/nav/icons/SonTung2.jpg",
      },
      {
        name: "Taylor Swift",
        href: "/products?category=musics&name=TaylorSwift",
        imageSrc: "/nav/icons/TaylorSwift_22.jpg",
      },
    ],
  },
  {
    label: "Photography",
    value: "photography" as const,
    featured: [
      {
        name: "All",
        href: `/products?category=photography`,
        imageSrc: "/nav/icons/allphoto.jpg",
      },
      {
        name: "Beautifull",
        href: "/products?category=photography&name=Beautiful",
        imageSrc: "/nav/icons/big6.jpg",
      },
      {
        name: "Manga",
        href: "/products?category=photography&name=Manga",
        imageSrc: "/nav/icons/doraemonimg2.jpg",
      },
      {
        name: "Marvel",
        href: "/products?category=photography&name=Marvel",
        imageSrc: "/nav/icons/spiderman2.jpg",
      },
    ],
  },
];
