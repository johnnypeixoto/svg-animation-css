import styled from 'styled-components';

export const Container = styled.div`
  svg {
    margin-top: 50px;
  }
  #right-weel,
  #left-weel {
    animation: weel 1s infinite linear;
    transform-origin: center;
    transform-box: fill-box;
  }

  @keyframes weel {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }

  #bike-man {
    animation: bike 1s ease-in-out infinite alternate;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  @keyframes bike {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(20deg);
    }
  }

  #hat {
    animation: hat 1s ease-in-out infinite alternate;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  @keyframes hat {
    from {
      transform: translateY(0) rotateZ(0deg);
    }
    to {
      transform: translateY(35%) rotateZ(10deg);
    }
  }
`;
