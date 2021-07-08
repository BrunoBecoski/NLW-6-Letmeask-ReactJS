import styled from 'styled-components';

export const Container = styled.div`
  background:  var(--white-details);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;

  & + & {
    margin-top: 8px;
  }

  &.highlighted {
    background: #F4F0FF;
    border: 1px solid var(--primary);
    
    footer .user-info span {
      color: var(--black);
    }

  }
  
  &.answered {
    background:var(--color_80);
    filter: grayscale(100%);
  }

  p {
    color: var(--black);
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    span {
      margin-left: 8px;
      color: var(--color_50);
      font-size: 14px;
    }
  }

  > div {
    display: flex;
    gap: 16px;
  }

  div.admin-like-button {
      display: flex;
      color: var(--color_50);
      gap: 8px;
      
      &.admin-liked {
        display: flex;
        align-items: flex-end;
        color: var(--primary);

        svg path {
          stroke: var(--primary);
        }
      }
    }


  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    
    &.like-button {
      display: flex;
      align-items: flex-end;
      color: var(--color_50);
      gap: 8px;

      &.liked {
        color: var(--primary);

        svg path {
          stroke: var(--primary);
        }
      }
    }

    &.like-button:hover, 
    &.check-button:hover,
    &.highlight-button:hover {
      svg {
        path,
        circle {
          stroke: var(--primary);
        }
      }
    }

    &.highlighted {
      svg {
        path,
        circle {
          stroke: var(--primary);
        }
      }
    }

    &.remove-button:hover {
      svg {
        path {
          stroke: var(--danger);
        }
      }
    }
  }
`;