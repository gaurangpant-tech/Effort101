"use client";

import React, { useState } from "react";
import Lottie from "react-lottie";
import styled from "styled-components";
import bunnyCry from "./animations/bunnyCry.json";
import bunnyPlease from "./animations/bunnyPlease.json";
import bunnyYes from "./animations/bunnyYes.json";
import bunnyPunch from "./animations/bunnyPunch.json";
import Button from "./components/Button";
import dogKiss from "./animations/dogKiss.json";

const getRandomPosition = () => {
  if (typeof window !== 'undefined') {
    return {
      randomLeft: `${Math.random() * (window.innerWidth - 100)}px`,
      randomTop: `${Math.random() * (window.innerHeight - 50)}px`,
    };
  } else {
    return {
      randomLeft: "0px",
      randomTop: "0px",
    };
  }
};

function Home() {
  const bunnyCryOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyCry,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyPleaseOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyPlease,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyYesOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyYes,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const bunnyPunchOptions = {
    loop: true,
    autoplay: true,
    animationData: bunnyPunch,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [bunnyState, setBunnyState] = useState("normal");
  const [hovered, setHovered] = useState(false);
  const [randomPosition, setRandomPosition] = useState(getRandomPosition());
  const [hasStarted, setHasStarted] = useState(false);

  const bunnyObj = { 0: "cry", 1: "punch" };
  const handleHover = (hoverState) => {
    setHasStarted(true);
    if (hoverState === true) {
      setRandomPosition(getRandomPosition());
      const randomBunnyState = Math.floor(Math.random() * 2);
      setBunnyState(bunnyObj[randomBunnyState]);
    }
    setHovered(hoverState);
  };

  return (
    <StyledHome data-testid="container">
      <div className="home-container">
        {bunnyState === "yes" ? (
          <div className="title"></div>
        ) : (
          <div className="title" style={{ fontSize: "23px" }}></div>
        )}
        {bunnyState === "yes" ? (
          <div className="title"></div>
        ) : (
          <div className="title" style={{ fontSize: "23px", textAlign: "center" }}>
            ❤️Babyy!!❤️ You said m effort nhi maarta. <br />So here I'm making effort to make you feel special, in my own way 😜
          </div>
        )}
        {bunnyState === "yes" ? (
          <div className="title"></div>
        ) : (
          <div className="title" style={{ fontSize: "22px" }}>
            I Louuvvvvvv Youuuu Babbbyyyy ! ♥️♥️
          </div>
        )}
        {bunnyState === "yes" ? (
          <div className="title">❤️ It&apos;s a Dinner Date Tonight! ❤️</div>
        ) : (
          <div className="title" style={{ fontSize: "23px", textAlign: "center" }}>
            ❤️❤️❤️ Kya m tere liye Effort nahi marta? Don't You Love Me???! ❤️❤️❤️
          </div>
        )}
        <div className="animation">
          {bunnyState === "normal" && <Lottie options={bunnyPleaseOptions} height={300} width={300} />}
          {bunnyState === "cry" && <Lottie options={bunnyCryOptions} height={300} width={300} />}
          {bunnyState === "yes" && <Lottie options={bunnyYesOptions} height={400} width={400} />}
          {bunnyState === "punch" && <Lottie options={bunnyPunchOptions} height={300} width={300} />}
        </div>
        {bunnyState !== "yes" && (
          <div className="buttons">
            <button onClick={() => setBunnyState("yes")} onMouseEnter={() => setBunnyState("normal")}>
              Yes
            </button>
            <Button
              $randomleft={randomPosition.randomLeft}
              $randomtop={randomPosition.randomTop}
              $hasstarted={hasStarted}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              No
            </Button>
          </div>
        )}
      </div>
      <footer className="footer">
      This Site belongs to My Baby ❤️ a.k.a Priyanshi Pandey ❤️
      </footer>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  background-color: #feeafb;
  align-items: center;
  justify-content: center;

  .home-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 1rem;
    text-align: center;

    .title {
      font-size: 2rem;
      color: #5caff3;
      font-family: comic sans ms;
    }
  }

  .animation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
  }

  .buttons {
    display: flex;
    gap: 2rem;
  }

  .footer {
    text-align: center;
    padding: 1rem;
    font-size: 1rem;
    color: #5caff3;
    font-family: comic sans ms;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.5rem;
    }

    .animation {
      width: 90%;
    }

    .buttons {
      flex-direction: column;
      gap: 1rem;
    }

    .footer {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1.2rem;
    }

    .animation {
      width: 100%;
    }

    .buttons {
      flex-direction: column;
      gap: 0.5rem;
    }

    .footer {
      font-size: 0.8rem;
    }
  }
`;

export default Home;
