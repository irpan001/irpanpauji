type Portofolio = {
  id: string;
  name: string;
  image: string;
  link: string;
  description: string;
};

export const PortofolioData: Portofolio[] = [
  {
    id: '01',
    name: 'Web-based Financial Information System using PHP and MySQL',
    image: '/images/SI Keuangan.jpg',
    link: 'https://youtu.be/YSvxsXHO4bg',
    description: 'Developed a simple financial information system using PHP and MySQL to record student tuition payments, government funding, and expense tracking. Improved administrative efficiency by digitizing manual financial records.',
  },
  {
    id: '02',
    name: 'Sistem Penjadwalan Skripsi Mengguakan Algoritma Genetika',
    image: '/images/SI Jadwal Skripsi.png',
    link: 'https://youtu.be/4LdpKRn4bG8',
    description: 'Built a thesis scheduling system using PHP and MySQL, implementing a Genetic Algorithm to automatically generate non-conflicting schedules.Increased scheduling accuracy and reduced manual coordination errors between students and faculty.',
  },
  {
    id: '03',
    name: 'Cooperation Agreement Information System',
    image: '/images/SI pks.jpg',
    link: '',
    description: 'Developed a PKS (Partnership Agreement System) using PHP and MySQL with automated email reminders for contract renewals three months before expiration.Helped the organization reduce missed contract deadlines and improve operational compliance. (Project details are confidential under company policy)',
  },
  {
    id: '04',
    name: 'Simple Ecomerce Website',
    image: '/images/online shop.png',
    link: 'https://my-shop-beta-five.vercel.app/',
    description: 'Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.',
  },
]