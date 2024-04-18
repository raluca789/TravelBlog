import DestinationTemplate from './DestinationTemplate';
import './Destination.css';

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations Right Now</h1>
      <p>Discover handpicked top world destinations</p>

      <DestinationTemplate
        className="first-des"
        heading="Maldives: The Ultimate Tropical Paradise"
        text="The Maldives, an archipelago in the Indian Ocean, is renowned for
            its pristine white-sand beaches, crystal-clear turquoise waters and
            vibrant marine life. Comprising over 1,000 coral islands grouped
            into 26 atolls, the Maldives offers a secluded escape for travelers
            seeking luxury, relaxation and unparalleled natural beauty."
        imgdest1="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhkJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D"
        imgdest2="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhkJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDI%3D"
      />

      <DestinationTemplate
        className="first-des-reverse"
        heading="Unveiling Rome's Timeless Treasures"
        text="Rome, Italy, stands as a testament to centuries of history and culture. From the iconic Colosseum to the grandeur of Vatican City,
         every corner tells a story. Vibrant streets, bustling piazzas, and exquisite cuisine complete the experience, making Rome a must-visit
        destination for travelers seeking a glimpse into the past while embracing the present."
        imgdest1="https://images.unsplash.com/photo-1566136599746-ca90cc5a436e?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgdest2="https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGl0YWx5JTIwbGVtb25zfGVufDB8fDB8fHwy"
      />

      <DestinationTemplate
        className="first-des"
        heading="The Jewel of the Emirates"
        text="Abu Dhabi, the capital of the United Arab Emirates, is a captivating blend of tradition and innovation.
         With its futuristic skyline, rich cultural heritage, and luxurious amenities, it offers visitors an 
         unforgettable experience. From iconic landmarks like the Sheikh Zayed Grand Mosque to pristine beaches
         and world-class attractions, Abu Dhabi promises Arabian hospitality and contemporary elegance at every turn."
        imgdest1="https://images.unsplash.com/photo-1602490539849-a349e9b61019?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWJ1JTIwZGhhYml8ZW58MHx8MHx8fDI%3D"
        imgdest2="https://images.unsplash.com/photo-1597656303066-85eb659aeb29?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRlc2VydCUyMGFidSUyMGRoYWJpfGVufDB8fDB8fHwy"
      />
    </div>
  );
};

export default Destination;
