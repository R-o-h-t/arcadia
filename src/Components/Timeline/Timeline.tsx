import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import "./Timeline.css";

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2030
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            <div>
              Elon Musk âgé de 58 ans et Diego Arkadia âgé de 27 ans partent sur
              mars avec la nouvelle fusée révolutionnaire BasaltX. Départ de la
              Terre le 12 mars 2030 et arrivé sur mars le 23 octobre
            </div>
            <div>
              Après le crash, nos deux astronautes sont restés 8 mois sur mars
              jusqu’à ce qu’une nouvelle fusée vienne les chercher. Au cour de
              cette période de survie Elon Musk est mort tandis que Diego
              Arkadia est revenu sur Terre.
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2031
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            Après son retour sur Terre, Diego Arcadia décide de se préparer à
            re-tourner sur Mars pour y installer son hôtel.
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2040{" "}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            Les préparatifs pour aller s’installé sur Mars sont prêt. Après 8
            mois de voyage Mr Arkadia est de nouveau sur mars.
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2045{" "}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            Après 5 ans de construction d’un écosystème dans un dôme et d’un
            aménagement habitable. Diego Arkadia lance la construction de son
            hôtel.
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2047{" "}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            Arkadia ouvre ses portes officiellement, Diego Arkadia est alors âgé
            de 44 ans.
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className="timeline-date">
          2122{" "}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-text">
          <div>
            Après 75 ans d’hôtellerie Martienne, Arkadia s’est étendu et ses
            activités avec. Le voyage sur Mars n’est désormais plus uniquement
            réservé aux grandes et riches personnalités du globe. Le voyage ne
            se fait plus en 8 mois mais bien en une seule semaine de voyage.
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
