import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import '../components/SingleArticle.css';

function SingleArticle() {
  let { articleId } = useParams();
  const articles = [
    {
      id: 1,
      heading: 'Santorini Getaway',
      text: (
        <div class="single-article-container">
          <h1>Santorini: A Paradise in the Aegean Sea</h1>
          <img
            src="https://images.unsplash.com/photo-1604145195376-e2c8195adf29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbnRvcmluaXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Santorini"
          />
          <p>
            Santorini is a mesmerizing island located in the southern Aegean
            Sea. Renowned for its stunning sunsets, crystal-clear waters, and
            picturesque white-washed buildings, Santorini is a dream destination
            for travelers seeking beauty and relaxation.
          </p>

          <h2>Exploring the Beauty</h2>
          <p>
            One of the highlights of Santorini is its unique landscape, formed
            by a volcanic eruption centuries ago. Visitors can wander through
            charming villages perched on dramatic cliffsides, stroll along black
            sand beaches, or take a boat tour to explore hidden caves and
            secluded coves.
          </p>

          <h2>Local Cuisine and Culture</h2>
          <p>
            Indulge in the delicious flavors of Santorini's cuisine, which
            features fresh seafood, locally grown produce, and traditional Greek
            dishes. Don't miss the opportunity to sample the island's famous
            wines, made from grapes grown in volcanic soil.
          </p>

          <h2>Where to Stay</h2>
          <p>
            There are plenty of accommodation options on Santorini, ranging from
            luxury resorts with panoramic views to cozy guesthouses tucked away
            in quiet corners of the island. No matter your budget or preference,
            you're sure to find the perfect place to stay.
          </p>

          <h2>Tips for Travelers</h2>
          <ul>
            <li>Visit Oia to witness the iconic Santorini sunset.</li>
            <li>
              Explore the archaeological site of Akrotiri to learn about the
              island's ancient history.
            </li>
            <li>
              Take a boat tour to the volcanic islands of Nea Kameni and Palea
              Kameni.
            </li>
            <li>
              Sample local specialties like fava, tomatokeftedes, and baklava.
            </li>
            <li>
              Don't forget to bring sunscreen and a hat, as the sun in Santorini
              can be intense.
            </li>
          </ul>

          <p>
            Whether you're seeking romance, adventure, or relaxation, Santorini
            offers a magical experience that will stay with you long after
            you've left its shores.
          </p>

          <p>
            Plan your Santorini getaway today and discover the beauty of this
            enchanting island paradise!
          </p>
        </div>
      ),
    },

    {
      id: 2,
      heading: 'Chasing the Northern Lights in Alta',
      text: (
        <div class="single-article-container">
          <h1>Exploring Aurora Borealis in Alta</h1>
          <img
            src="https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8fDI%3D"
            alt="Aurora Borealis"
          />
          <p>
            Witnessing the ethereal dance of the Northern Lights in Alta is an
            experience like no other. Nestled in Norway's remote Arctic region,
            Alta offers some of the best opportunities to view this captivating
            natural phenomenon.
          </p>

          <h2>A Natural Spectacle</h2>
          <p>
            The Northern Lights, also known as Aurora Borealis, occur when
            charged particles from the sun collide with gases in the Earth's
            atmosphere. The result is a stunning display of colorful lights that
            dance across the night sky.
          </p>

          <h2>The Best Time to Visit</h2>
          <p>
            The Northern Lights are typically visible in Alta from late
            September to early April. During this time, the nights are long, and
            the skies are often clear, providing optimal conditions for viewing
            this celestial spectacle.
          </p>

          <h2>Where to Chase the Lights</h2>
          <p>
            Alta offers several vantage points for viewing the Northern Lights.
            Visitors can venture into the wilderness surrounding the city, where
            minimal light pollution enhances the visibility of the auroras.
            Additionally, guided tours are available for those seeking expert
            assistance in locating the best viewing spots.
          </p>

          <h2>Embracing the Arctic Wilderness</h2>
          <p>
            Beyond the Northern Lights, Alta boasts a wealth of natural beauty
            and outdoor activities. From dog sledding and snowshoeing to
            exploring ice caves and visiting indigenous Sami communities,
            there's no shortage of adventures to embark on in this Arctic
            wonderland.
          </p>

          <h2>Preparing for Your Journey</h2>
          <ul>
            <li>
              Dress warmly and in layers to withstand the Arctic temperatures.
            </li>
            <li>
              Bring a camera with manual settings to capture the Northern
              Lights.
            </li>
            <li>
              Check the local weather forecast for optimal viewing conditions.
            </li>
            <li>
              Consider booking accommodations with aurora wake-up calls for a
              chance to see the lights from the comfort of your room.
            </li>
          </ul>

          <p>
            Exploring Aurora Borealis in Alta is an unforgettable adventure that
            promises to leave you in awe of the natural world. Plan your trip
            today and prepare to be mesmerized by the magic of the Northern
            Lights!
          </p>
        </div>
      ),
    },
    {
      id: 3,
      heading: 'One Week in the City of Dreams',
      text: (
        <div class="single-article-container">
          <h1>One Week in the City of Angels: Exploring Los Angeles</h1>
          <img
            src="https://images.unsplash.com/photo-1574910844753-9f49dd2af188?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcyUyMGFuZ2VsZXN8ZW58MHx8MHx8fDA%3D"
            alt="Los Angeles"
          />
          <p>
            Los Angeles, often referred to as the City of Angels, is a sprawling
            metropolis renowned for its vibrant energy, iconic landmarks, and
            diverse culture. Spending a week in this dynamic city offers a
            glimpse into its endless possibilities and experiences.
          </p>

          <h2>Exploring the City</h2>
          <p>
            From the sun-kissed beaches of Santa Monica to the bustling streets
            of Hollywood, Los Angeles is brimming with attractions waiting to be
            discovered. Spend your days exploring world-famous attractions such
            as the Hollywood Walk of Fame, Griffith Observatory, and Universal
            Studios Hollywood.
          </p>

          <h2>Cultural Delights</h2>
          <p>
            Immerse yourself in the rich cultural tapestry of Los Angeles by
            visiting its vibrant neighborhoods. Explore the historic streets of
            Olvera Street, indulge in authentic Mexican cuisine in Boyle
            Heights, or admire the street art in the Arts District. Los Angeles
            is a melting pot of cultures, each offering its own unique charm.
          </p>

          <h2>Outdoor Adventures</h2>
          <p>
            Escape the urban jungle and reconnect with nature in Los Angeles'
            scenic parks and outdoor spaces. Hike to the iconic Hollywood Sign,
            relax amidst the botanical beauty of the Huntington Library and
            Gardens, or enjoy a leisurely stroll along the Venice Beach
            Boardwalk. The possibilities for outdoor adventure are endless.
          </p>

          <h2>Culinary Delights</h2>
          <p>
            Los Angeles boasts a thriving culinary scene, offering a tantalizing
            array of flavors from around the world. Indulge in gourmet cuisine
            at Michelin-starred restaurants, savor authentic street tacos from
            food trucks, or enjoy farm-to-table fare at local eateries. Whatever
            your palate desires, Los Angeles has something to satisfy every
            taste.
          </p>

          <h2>Memories to Last a Lifetime</h2>
          <p>
            As your week in Los Angeles comes to an end, reflect on the memories
            you've created and the experiences you've shared. Whether it's
            watching the sunset from the Griffith Observatory, exploring the
            exhibits at the Getty Center, or simply soaking in the city's
            vibrant atmosphere, Los Angeles leaves an indelible mark on all who
            visit.
          </p>

          <p>
            Plan your week-long adventure in Los Angeles today and discover why
            this city continues to captivate the hearts of travelers from around
            the world.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      heading: 'Roaming in Barcelona',
      text: (
        <div class="single-article-container">
          <h1>
            Roaming in Barcelona: Exploring the Vibrant Streets of Catalonia
          </h1>
          <img
            src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyY2Vsb25hfGVufDB8fDB8fHww"
            alt="Barcelona"
          />
          <p>
            Barcelona, the cosmopolitan capital of Catalonia, is a city alive
            with culture, history, and excitement. From its stunning
            architecture to its lively streets, Barcelona beckons travelers to
            explore its many wonders and hidden gems.
          </p>

          <h2>Exploring Architectural Marvels</h2>
          <p>
            Barcelona is renowned for its unique architecture, with iconic
            landmarks such as Antoni Gaudí's Sagrada Familia and Park Güell
            drawing visitors from around the world. Take a stroll through the
            Gothic Quarter to admire medieval buildings, or marvel at the
            modernist masterpieces along the Passeig de Gràcia.
          </p>

          <h2>Culinary Delights</h2>
          <p>
            Indulge your taste buds in Barcelona's vibrant culinary scene, where
            traditional Catalan dishes blend with modern gastronomy. From savory
            tapas to fresh seafood paella, Barcelona offers a feast for every
            palate. Don't forget to pair your meal with a glass of local wine or
            a refreshing glass of sangria.
          </p>

          <h2>Art and Culture</h2>
          <p>
            Immerse yourself in Barcelona's rich artistic heritage by visiting
            world-class museums such as the Picasso Museum and the Joan Miró
            Foundation. Explore the city's vibrant street art scene in the
            trendy neighborhoods of El Raval and Poblenou, or catch a flamenco
            show for a taste of traditional Spanish culture.
          </p>

          <h2>Beachside Bliss</h2>
          <p>
            Unwind and relax on Barcelona's beautiful beaches, where golden
            sands meet the sparkling Mediterranean Sea. Whether you're soaking
            up the sun at Barceloneta Beach or exploring the scenic coastline of
            Costa Brava, Barcelona offers endless opportunities for beachside
            bliss and relaxation.
          </p>

          <h2>Exploring the Gothic Quarter</h2>
          <p>
            Lose yourself in the labyrinthine streets of Barcelona's Gothic
            Quarter, where medieval history meets modern-day charm. Discover
            hidden squares, ancient churches, and bustling markets as you wander
            through this historic neighborhood, soaking in the vibrant
            atmosphere and rich culture of Catalonia.
          </p>

          <p>
            Barcelona is a city of endless discovery, where every corner reveals
            a new adventure. Whether you're exploring its historic landmarks,
            savoring its culinary delights, or simply soaking up the sun on its
            beautiful beaches, Barcelona promises an unforgettable experience
            that will leave you longing to return.
          </p>

          <p>
            Plan your Barcelona adventure today and discover the magic of this
            vibrant city on the shores of the Mediterranean.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      heading: 'Remote Wilderness: Antarctica',
      text: (
        <div class="single-article-container">
          <h1>Antarctica: A Journey into the Remote Wilderness</h1>
          <img
            src="https://images.unsplash.com/photo-1642928614293-ba6ff94b4a75?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgzfHxhbnRhcmN0aWNhfGVufDB8fDB8fHww"
            alt="Antarctica"
          />
          <p>
            Antarctica is a land of unparalleled beauty and mystery, offering a
            once-in-a-lifetime adventure for intrepid travelers. As the
            southernmost continent on Earth, Antarctica is a vast, icy
            wilderness that remains largely untouched by human civilization.
          </p>

          <h2>Immersing in the Frozen Landscape</h2>
          <p>
            Exploring Antarctica means immersing yourself in a pristine
            environment unlike any other. From towering icebergs to expansive
            glaciers, the landscape is both breathtaking and humbling. Visitors
            can witness stunning wildlife, including penguins, seals, and
            whales, in their natural habitat.
          </p>

          <h2>Adventure Activities</h2>
          <p>
            Antarctica offers a range of adventure activities for
            thrill-seekers. You can embark on exhilarating excursions such as
            kayaking amidst icebergs, hiking across glaciers, or even camping on
            the ice under the midnight sun.
          </p>

          <h2>Scientific Research Stations</h2>
          <p>
            Antarctica is also home to numerous scientific research stations
            operated by various countries. Visitors have the opportunity to
            learn about ongoing research projects, interact with scientists, and
            gain insight into the continent's unique ecosystems and climate
            patterns.
          </p>

          <h2>Preparing for the Journey</h2>
          <p>
            Traveling to Antarctica requires careful preparation due to its
            extreme climate and remote location. Be sure to pack appropriate
            cold-weather gear, including insulated clothing, waterproof boots,
            and protective eyewear. It's also essential to book your journey
            with a reputable tour operator experienced in Antarctic travel.
          </p>

          <h2>Environmental Conservation</h2>
          <p>
            As you embark on your Antarctic adventure, remember to prioritize
            environmental conservation and minimize your impact on this fragile
            ecosystem. Respect wildlife habitats, adhere to designated trails,
            and follow guidelines set forth by your tour guides to ensure the
            preservation of Antarctica's pristine wilderness for future
            generations.
          </p>

          <p>
            A journey to Antarctica is more than just a vacation; it's a
            transformative experience that will leave you with a newfound
            appreciation for the natural world and a lifetime of memories.
          </p>

          <p>
            Start planning your Antarctic expedition today and embark on the
            adventure of a lifetime!
          </p>
        </div>
      ),
    },
    {
      id: 6,
      heading: 'A Global Metropolis - London',
      text: (
        <div class="single-article-container">
          <h1>A Global Metropolis - London</h1>
          <img
            src="https://images.unsplash.com/photo-1543832923-44667a44c804?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="London"
          />
          <p>
            London, the capital city of England, is a vibrant and diverse
            metropolis that offers endless opportunities for exploration and
            discovery. From historic landmarks to world-class museums, bustling
            markets to serene parks, London has something to offer every
            traveler.
          </p>

          <h2>Exploring the City's Landmarks</h2>
          <p>
            Begin your London getaway by exploring the city's iconic landmarks,
            such as the Tower of London, Buckingham Palace, and the Houses of
            Parliament. Take a stroll along the River Thames and marvel at the
            majestic architecture that lines its banks.
          </p>

          <h2>Immersing in Culture</h2>
          <p>
            London is renowned for its rich cultural heritage and vibrant arts
            scene. Visit world-class museums like the British Museum, the
            National Gallery, and the Tate Modern to admire priceless works of
            art spanning centuries. Catch a show in London's famous West End
            theater district or explore the city's diverse culinary scene, which
            offers cuisines from around the world.
          </p>

          <h2>Exploring Neighborhoods</h2>
          <p>
            Each of London's neighborhoods has its own distinct character and
            charm. Explore the trendy streets of Shoreditch, browse the
            boutiques of Notting Hill, or immerse yourself in the multicultural
            atmosphere of Brixton. Don't miss the chance to visit London's
            famous markets, such as Borough Market and Camden Market, where you
            can sample delicious street food and shop for unique souvenirs.
          </p>

          <h2>Outdoor Escapes</h2>
          <p>
            Despite being a bustling metropolis, London boasts numerous green
            spaces where you can escape the hustle and bustle of the city. Take
            a leisurely stroll through Hyde Park, enjoy a picnic in Regent's
            Park, or explore the serene beauty of Kew Gardens. London's parks
            offer a peaceful oasis amidst the urban landscape.
          </p>

          <h2>Planning Your London Getaway</h2>
          <p>
            With its rich history, vibrant culture, and diverse attractions,
            London is the perfect destination for a memorable getaway. Whether
            you're interested in history, art, food, or simply soaking up the
            atmosphere of a bustling global city, London has something to offer
            every traveler.
          </p>

          <p>
            Start planning your London getaway today and experience the magic of
            this global metropolis!
          </p>
        </div>
      ),
    },
  ];

  const article = articles.find((item) => item.id === parseInt(articleId));

  return (
    <div>
      <Navbar />
      <Hero
        className="hero-about"
        heroPic="https://images.unsplash.com/photo-1504119089809-1d5100a33f27?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHN1bnNldCUyMGNoaWNhZ298ZW58MHwwfDB8fHwy"
        title="Articles"
        btnClass="hide"
      />
      <div>
        <h2>{article.heading}</h2>
        <p>{article.text}</p>
      </div>

      <Footer />
    </div>
  );
}

export default SingleArticle;
