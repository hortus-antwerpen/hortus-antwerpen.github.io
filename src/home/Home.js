import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="grid-img-left">
          <div className="img-left">
            <img src="img/boom.jpeg" alt="img" height="300" width="450" />
          </div>
          <div className="txt-right">
            <h1 className="title">BOMEN SNOEIEN</h1>
            <p className="txt">
              Het snoeien van een boom is werk voor een echte professional. Indien dit niet correct gebeurt loopt uw boom een
              verhoogde kans op ziektes. Bij Hortus klimmen we met gespecialiseerde klimapparatuur in uw boom en verwijderen we
              dode, storende en overhangende takken. Dit zorgt er voor dat uw boom weer mooi in evenwicht is en voorkomt dat de
              boom te groot wordt waardoor deze een gevaar kan vormen. In uitzonderlijke gevallen zullen wij gebruik maken van een
              hoogtewerker. Al het snoeiafval hakselen wij en voeren wij af indien de klant dit wenst.
            </p>
          </div>
        </div>
        <div className="grid-img-right">
          <div className="img-right">
            <img src="img/kale_boom.jpeg" alt="img" height="300" width="450" />
          </div>
          <div className="txt-left">
            <h1 className="title">BOMEN VELLEN</h1>
            <p className="txt">
              Een boom kan in de meeste situaties niet vrij vallen. Daarom maken we bij Hortus gebruik van gespecialiseerde
              klimtechnieken zodat we de boom van boven af kunnen demonteren. Concreet wil dit zeggen dat we de boom in stukken
              naar beneden laten komen. Deze stukken kunnen wij gecontroleerd laten zakken zodat er niets beschadigd raakt onder
              of rond de boom. In uitzonderlijke gevallen zullen wij gebruik maken van een hoogtewerker. De klant kan steeds
              kiezen hoe de boom verder moet verwerkt worden; ter plaatsen blijven, afvoeren, hakselen, … Voor het vellen van een
              boom is een kapvergunning noodzakelijk. Deze procedure kan enkele weken duren, vraag daarom je kapvergunning zo
              tijdig mogelijk aan. Dit kan je bij het lokale gemeentehuis.
            </p>
          </div>
        </div>
        <div className="grid-img-left">
          <div className="img-left">
            <img src="img/tuin.jpeg" alt="img" height="300" width="450" />
          </div>
          <div className="txt-right">
            <h1 className="title">TUINONDERHOUD</h1>
            <p className="txt">
              Het onderhoud van een tuin vraagt de nodige tijd, inspanning en kennis. Hortus kan het algemene onderhoud van uw
              tuin van u overnemen. Wij zorgen er voor dat u in elk seizoen kunt genieten van een mooie en gezonde tuin. Wij
              werken ook met een periodiek systeem waarbij de klant kiest hoe frequent zijn tuin moet onderhouden worden. Dit kan
              al vanaf één keer per maand. Zo hoeft u niet telkens een afspraak te maken en bent u zeker van het onderhoud van uw
              tuin.
            </p>
          </div>
        </div>
        <div className="grid-img-right">
          <div className="img-right">
            <img src="img/stormschade.jpeg" alt="img" height="300" width="450" />
          </div>
          <div className="txt-left">
            <h1 className="title">STORMSCHADE RUIMEN</h1>
            <p className="txt">
              De laatste jaren krijgen we meer en meer te maken met hevige stormen. Deze stormen kunnen leiden tot het omvallen
              van een boom of het afbreken van grote takken. Indien er een boom of tak op uw woning, omheining of tuinhuis
              gevallen is verwijderen wij deze zo vakkundig mogelijk zonder nog meer schade toe te brengen aan uw eigendom. In
              geval van nood kan u ons 24/7 bereiken en komen wij zo spoedig mogelijk tot bij u. Nadien voeren wij al het hout af
              naar wens van de klant.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
