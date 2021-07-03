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
    border: 1px solid var(--purple);
    
    footer .user-info span {
      color: var(--black);
    }

  }
  
  &.answered {
    background:var(--gray-light);
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
      color: var(--gray-dark);
      font-size: 14px;
    }
  }

  > div {
    display: flex;
    gap: 16px;
  }

  div.admin-like-button {
      display: flex;
      color: var(--gray-dark);
      gap: 8px;
      
      &.admin-liked {
        display: flex;
        align-items: flex-end;
        color: var(--purple);

        svg path {
          stroke: var(--purple);
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
      color: var(--gray-dark);
      gap: 8px;

      &.liked {
        color: var(--purple);

        svg path {
          stroke: var(--purple);
        }
      }
    }

    &.like-button:hover, 
    &.check-button:hover,
    &.highlight-button:hover {
      svg {
        path,
        circle {
          stroke: var(--purple);
        }
      }
    }

    &.highlighted {
      svg {
        path,
        circle {
          stroke: var(--purple);
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