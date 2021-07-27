import styled from 'styled-components';

export const Container = styled.div`
  background:  var(--color_15);
  border-radius: 8px;
  box-shadow: 1px 1px 3px var(--color_50);
  padding: 24px;

  & + & {
    margin-top: 12px;
  }

  &.highlighted {
    background: var(--primary_transparent);
    border: 1px solid var(--primary);
    box-shadow: 1px 1px 10px var(--primary);
    p {
      color: var(--color);
    }
    
    footer .user-info span {
      color: var(--color_80);
    }

  }
  
  &.answered {
    background: var(--color_50);

    box-shadow: none;

    footer {
      .user-info {
        filter: grayscale(100%);
      }

      button svg path{
        stroke: var(--color); 
      }
    }
  }

  p {
    color: var(--color_80);
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
      color: var(--color);
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
      font-weight: 500;
      color: var(--primary);

      svg path {
        stroke-width: 2px;
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
        font-weight: 500;
        color: var(--primary);

        svg path {
          stroke-width: 2px;
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
          stroke-width: 2px;
          stroke: var(--primary);
        }
      }
    }

    &.highlighted {
      svg {
        path,
        circle {
          stroke-width: 2px;
          stroke: var(--primary);
        }
      }
    }

    &.remove-button:hover {
      svg {
        path {
          stroke-width: 2px;
          stroke: var(--danger);
        }
      }
    }
  }
`;