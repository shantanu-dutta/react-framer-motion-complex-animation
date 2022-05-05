import houseImage from './assets/house.jpg';
import { ReactComponent as AirConditioning } from './assets/ac.svg';
import { ReactComponent as Fridge } from './assets/fridge.svg';
import { ReactComponent as TV } from './assets/tv.svg';
import { ReactComponent as Wifi } from './assets/wifi.svg';

export default {
  imgSrc: houseImage,
  imgAlt: 'house exterior',
  title: 'House in the Mountains',
  location: 'Emerald Lake, Canada',
  mapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9947.133297451766!2d-116.54188886062025!3d51.443772998228525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5379df397c545cdb%3A0xfdc48e8bb4d734b9!2sEmerald%20Lake!5e0!3m2!1sen!2sus!4v1618319664103!5m2!1sen!2sus',
  price: '$589 / night',
  shortDescription:
    'House in the Moutains is a full house available for rent in Emerald Lake, Canada.',
  longDescription:
    'House in the Moutains is a 4 bed / 2 bath full house available for rent. Self check-in is available.',
  amenities: [
    {
      icon: AirConditioning,
      name: 'Central Air',
    },
    {
      icon: Fridge,
      name: 'Kitchen',
    },
    {
      icon: TV,
      name: 'Smart TV',
    },
    {
      icon: Wifi,
      name: 'Wifi',
    },
  ],
};
