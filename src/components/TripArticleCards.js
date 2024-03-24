import './triparticlecards.css';
import TripArticleTemplate from './TripArticleTemplate';

function TripArticleCards() {
  return (
    <div className="trip">
      <div className="tripcard">
        <TripArticleTemplate
          articleId="4"
          picture="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww"
          heading="Roaming in Barcelona"
          text="Barcelona, Spain, blends history, culture and
           stunning architecture, showcased by Antoni Gaudí's
           Sagrada Família and Park Güell. With bustling streets,
           tapas bars, and Mediterranean beaches, Barcelona
           captivates with its charm and allure."
        />

        <TripArticleTemplate
          articleId="5"
          picture="https://plus.unsplash.com/premium_photo-1664304481949-7342698006f3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFudGFyY3RpY2F8ZW58MHx8MHx8fDA%3D"
          heading="Remote Wilderness: Antarctica "
          text="Antarctica: Extreme, pristine wilderness with
           unique wildlife, vital for scientific research,
           and facing environmental challenges. Its icy expanse
           shelters iconic species like penguins and whales,
           while research stations study climate change. "
        />

        <TripArticleTemplate
          articleId="6"
          picture="https://images.unsplash.com/photo-1584986098745-02507619826c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D"
          heading="A Global Metropolis - London"
          text="London, the bustling capital of England and the United Kingdom,
           is a global metropolis steeped in history, culture, and diversity.
           It's home to iconic landmarks such as Big Ben, the Tower of London
           and Buckingham Palace, as well as world-class museums "
        />
      </div>
    </div>
  );
}

export default TripArticleCards;
