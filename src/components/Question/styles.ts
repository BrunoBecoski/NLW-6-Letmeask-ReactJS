import styled from 'styled-components';

export const Container = styled.div`
  background: var(--gray-details);
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
  }

  p {
    color: var(--black);
  }

  footer {
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

    button {
      border: 0;
      background: transparent;
      cursor: pointer;
      transition: filter 0.2s;

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

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;