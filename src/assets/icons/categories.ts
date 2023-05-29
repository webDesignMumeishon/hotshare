interface Icon {
  url: string;
}

interface Icons {
  [key: string]: Icon;
}

const icons: Icons = {
  Beachfront: {
    url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
  },
  Ski: {
    url: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
  },
};

export default icons;
