import React from "react";
import { useState } from "react";
import { Slide, Bounce } from "react-awesome-reveal";

import "./History.css";

function History() {
  const [show, setShow] = useState(false);
  return (
    <div id="History">
      <Slide>
        <div className="header">
          <h1>THE HISTORY of MANTICORE</h1>
        </div>
      </Slide>

      <Bounce>
        <section className="top-pic">
          <img src="../img/pic01.png" class="pic01" />
        </section>
      </Bounce>


      <Bounce>
        <section class="top-topic">
          <div class="top-topic01">
            <p>
              The manticore, derived from the Early Middle Persian merthykhuwar or
              martiora, meaning "man-eater" (also known as a mantichora or a
              martichore), is a fearsome hybrid creature found in classical and
              medieval literature. It has the body of a lion, the head of a man
              and a scorpion tail that can shoot poisonous darts.
            </p>
          </div>

          <div class="top-topic02">
            <p>
              The manticore is one of the most bizarre and ferocious creatures
              depicted throughout classical and medieval bestiaries. Its roots can
              be traced back to India and Persia (modern-day Iran). The myth of
              the manticore spreads over several centuries and is mentioned most
              famously by Ctesias (5th century BCE), Pliny the Elder (23-79 CE)
              and Pausanias (c. 115 to c. 180 CE).
            </p>
          </div>
        </section>
      </Bounce>

      {/* ส่วนที่จะซ่อน */}
      {show ? (
        <section className="origin">
          <Slide>
            <div className="origin-group">
              <h4 className="origin-head">Origin</h4>
              <p className="origin-text">
                The manticore was thought to have its origins in ancient India and
                Persia. It debuts, with its appearance in around 700 BCE and
                usually ends at around the 9th Century. Some sources state that it
                originated in ancient Persian mythology, while others claim that
                it was an Indian creature. According to Aelian in his
                Characteristics of Animals, "Ctesias claims to have seen one such
                creature which was brought to the Persian king as a gift" (4.21).
                Other writers back up this claim, stating that although Ctesias
                first saw the creature in Persia, it had originally come from
                India. It is, therefore, perhaps correct to say that it originated
                in Persian literature but was portrayed as a creature from Indian
                mythology.
              </p>
            </div>
          </Slide>
        </section>
      ) : null}

      {show ? (

        <section className="whatManti">
          <Bounce>
            <h4 className="whatManti-head">What is a Manticore?</h4>

            <div className="box-whatManti">
              <p className="whatManti-text">
                A manticore is a mythological creature that was said to be
                unconquerable. The mighty beast is best known for its strange but
                magnificent features. It is often said that the beast had the head
                of a man, the body of a lion, and the tail of a scorpion. They are
                thought to be one of the mightiest of beasts and were capable of
                devouring every animal in the jungle except for elephants. There
                is no given explanation for why these creatures were unable to
                defeat elephants, only documentation that for some reason
                elephants seemed to be able to evade even the most powerful of the
                manticores.
              </p>
              <img src="../img/pic02.png" class="pic02" />
            </div>
          </Bounce>
        </section>
      ) : null}

      {show ? (
        <section className="QA">
          <Slide>
          <h4 className="QA-head"> Questions & Answers </h4>
          <div className="q1">
            <p className="question">What is a manticore?</p>
            <p className="answer">
              A manticore is a creature from Persian and Indian mythology that
              is often featured in Greek and medieval literature and art. It has
              the head of a human, the body of a lion, and a scorpion tail that
              can shoot poisonous barbs. It is a most fearsome creature.
            </p>
          </div>

          <div className="q1">
            <p className="question">How was the manticore killed?</p>
            <p className="answer">
              Like other large, dangerous creatures, the manticore could be
              killed with spears and arrows if they could be caught. They were
              very fast and often hid away in burrows under the ground.
            </p>
          </div>

          <div className="q1">
            <p className="question">What is a manticore's weakness?</p>
            <p className="answer">
              Although a manticore does not have many weaknesses, it has an
              aversion to elephants in fact, elephants are the one creature that
              manticores will avoid.
            </p>
          </div>

          <div className="q1">
            <p className="question">What is the myth of the manticore?</p>
            <p className="answer">
              The manticore does not have one particular myth about it but is
              mentioned in Persian, Greek and medieval literature and
              bestiaries.
            </p>
          </div>

          <div className="q1">
            <p className="question">Are manticores venomous?</p>
            <p className="answer">
              Manticores have a scorpion-like tail, which they are able to shoot
              poisonous darts from.
            </p>
          </div>
          </Slide>
        </section>
      ) : null}

      <div id="ReadMoreBox">
        <button className="readmorebtn" onClick={() => setShow(!show)}>
          readmore
        </button>
      </div>
    </div>
  );
}

export default History;
