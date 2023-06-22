import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import pic1 from "../../assets/large_1x_sound_trackers-removebg-preview.png";
import pic2 from "../../assets/Allegro Music Schools.webp";
import pic3 from "../../assets/istockphoto-1321649448-612x612.jpg";
import { Bounce, Fade, Flip } from "react-awesome-reveal";
const SpecialSecion = () => {
  return (
    <div>
      <Fade>
        <h1 className="text-4xl mt-10 font-serif text-center space-x-6">
          All the Article you need to <br />
          <span className="text-yellow-700  font-bold">
            grow your course details <br />
          </span>
          online
        </h1>
      </Fade>
      <div>
        <Flip>
          <div className="lg:flex lg:mx-48 mx-12">
            <img className="w-72 h-64  mt-10 mb-5 " src={pic1} alt="" />
            <img className="w-72 h-64 mt-10 mb-5 " src={pic2} alt="" />
            <img className="w-72 h-64  mt-10 mb-5 " src={pic3} alt="" />
          </div>
        </Flip>
        <h1>
          <span className="text-xl text-yellow-700 font-semibold">
            The Guitar:
          </span>{" "}
          A Versatile Instrument for Every Musician The guitar is a versatile
          instrument that captivates musicians and audiences. Its six strings
          and fretted fingerboard offer endless possibilities for expression.
          Whether strumming chords or shredding solos, the guitar adapts to any
          genre. Portable and accessible, it allows musicians to create music on
          the go. Learning guitar is rewarding, progressing from basic chords to
          intricate patterns. With online resources, aspiring guitarists have
          abundant support. Strumming or composing, the guitar sparks creativity
          and self-expression.
        </h1>{" "}
        <br />
        <h1>
          <span className="text-xl text-yellow-700 font-semibold">
            The Bass:
          </span>{" "}
          The Backbone of the Band The bass guitar is essential yet often
          overlooked. It creates a solid rhythm and anchors the band's sound.
          With deep, resonant tones, it adds depth and warmth. Bassists build a
          strong sense of timing and groove, working closely with drummers.
          Appreciating the bassline reveals its significance. Learning bass
          requires understanding rhythm and harmony. The bassist holds the band
          together, forming a cohesive sound.
        </h1>
        <br />
        <h1>
          <span className="text-xl text-yellow-700 font-semibold">
            The Drums:
          </span>{" "}
          The Heartbeat of the Band Drums provide the rhythmic foundation,
          driving the band's energy. Each drum contributes a unique sound.
          Drummers create diverse beats and patterns. Coordination, precision,
          and timing are crucial. Working closely with the bassist, drummers
          form a powerful partnership. Through dynamics and accents, they
          enhance musicality. Drumming promotes concentration, discipline, and
          improved motor skills. In any musical setting, drums shape the sound
          and emotional impact.
        </h1>
        <br />
        <h1>
          <span className="text-xl text-yellow-700 font-semibold">
            The Keyboard:
          </span>{" "}
          A Versatile Instrument of Melody and Harmony The keyboard offers
          melody and harmony in one instrument. With a range of sounds, it
          adapts to various musical genres. From pianos to synthesizers,
          keyboards create rich textures. Pianists master finger dexterity and
          dynamics. Synth players explore endless sonic possibilities. Learning
          keyboard cultivates music theory and composition skills. Keyboardists
          collaborate with diverse ensembles. Whether playing classical pieces
          or experimental sounds, the keyboard adds depth and character to the
          music.
        </h1>
        <br />
      </div>
    </div>
  );
};

export default SpecialSecion;
