import React, { ReactNode } from 'react'

import Box from '@mui/material/Box'

type Props = {
  children?: ReactNode
  customClassName: string
  onClick: void
  radius: string
}

const Button = ({ children, customClassName, onClick, radius = '10px', icon, isFetching = false }: Props) => (
  <div className="flex-column">
    <button onClick={onClick} className={`horizontal-center mr-2 ${customClassName || ''}`} disabled={isFetching}>
      <style jsx>{`
        .circle {
          display: inline-block;
          border-radius: 50%;
          max-width: 20px;
          max-height: 20px;
          padding: ${radius};
          background: red;
          color: white;
          text-align: center;
          line-height: 1;
          box-sizing: content-box;
          white-space: nowrap;
        }
        .circle:before {
          content: '';
          display: inline-block;
          vertical-align: middle;
          padding-top: 100%;
          height: 0;
        }
        .circle span {
          display: inline-block;
          vertical-align: middle;
        }
        .later {
          border-color: transparent;
          background-color: rgb(214, 214, 141);
        }
        .checkmark {
          font-size: larger;
          background-color: green;
        }
        .horizontal-center {
          position: relative;
          left: 50%;
          -ms-transform: translateX(-50%);
          transform: translateX(-50%);
        }
      `}</style>
      <span>{icon}</span>
    </button>
    <div>{children && children}</div>
  </div>
)

export { Button }
