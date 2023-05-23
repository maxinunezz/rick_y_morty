import styled from "./About.module.css";
import yo from "../../assets/img/git_pic.jpg";
const MiPersona = () => {
  return (
    <div className={styled.container}>
      <div>
        <img src={yo} alt="yop" />
      </div>
      <div className={styled.yo}>
        <p>
          Hey there! <br /> My name is Maximiliano Nuñez, and I hail from
          Cordoba, Argentina. I'm 24 years old and a proud supporter of the
          <span className={styled.boca}> Boca</span>
          <span className={styled.juniors}> Juniors</span>. Recently, I've
          started pursuing my passion for technology by diving into the world of
          Full Stack Development.
          <br /> Besides my passion for Full Stack Development, I'm also deeply
          interested in the ideas of libertarian philosophy and economics. I
          enjoy exploring how these concepts intersect and impact our society
          and the world at large. Through reading books, listening to podcasts,
          and attending seminars, I'm constantly seeking to expand my
          understanding of these subjects.
          <br /> I believe that a solid understanding of economics and political
          philosophy is crucial for anyone who wants to make a positive impact
          on the world. By studying these disciplines, I hope to gain the
          knowledge and tools necessary to contribute to the creation of a more
          free and prosperous society.
          <br /> When I'm not buried in code or reading up on the latest
          libertarian theories, you can usually find me cheering on the
          <span className={styled.boca}> Boca</span>
          <span className={styled.juniors}> Juniors</span> or exploring the
          outdoors with friends. I'm always up for trying new things and pushing
          myself outside of my comfort zone.
          <br /> Overall, I'm just a regular guy with a thirst for knowledge and
          a drive to succeed. I'm excited to see where this journey takes me,
          and I hope you'll join me along the way!
        </p>
      </div>
    </div>
  );
};
export default MiPersona;
