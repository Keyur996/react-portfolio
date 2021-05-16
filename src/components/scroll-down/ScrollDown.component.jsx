import styled from "styled-components";

const MyScroll = styled.div`
  position: relative;
  z-index: 1;
  bottom: 4em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: 800;
  text-shadow: 1px 1px #45a29e;
  color: #fff;
  animation: 2s linear 0s infinite normal none running MoveUpDown;

  .turn {
    cursor: pointer;
    transform: rotate(90deg);
    color: #000000;
  }

  @keyframes MoveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const ScrollDown = () => {
  return (
    <MyScroll>
      <div>
        <a href="#about" className="turn nav-link">
          &gt;&gt;&gt;
        </a>
      </div>
    </MyScroll>
  );
};
