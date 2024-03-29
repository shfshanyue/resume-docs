import * as React from 'react'

export default function Logo (props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 473 539" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(.304 .7)" fill="none">
        <path
          d="M424.443 0H48.125C21.559.03.03 21.559 0 48.125v441.876c.03 26.566 21.559 48.095 48.125 48.125h376.318c26.567-.03 48.095-21.559 48.125-48.125V48.125C472.538 21.56 451.01.03 424.443 0z"
          fill="#E6E6E6"
        />
        <path
          d="M48.125 13.854c-18.919.021-34.25 15.353-34.271 34.271v441.876c.021 18.918 15.352 34.25 34.271 34.27h376.319c18.918-.02 34.25-15.352 34.27-34.27V48.125c-.02-18.918-15.352-34.25-34.27-34.27H48.125z"
          fill="#FFF"
        />
        <path
          d="M320.774 89.73H180.473a8.014 8.014 0 010-16.029h140.301a8.014 8.014 0 110 16.028zm33.058 43.047h-173.36a8.014 8.014 0 110-16.028h173.36a8.014 8.014 0 110 16.028z"
          fill="#FB923C"
        />
        <path
          d="M370.563 180.703H180.261a8.014 8.014 0 110-16.028h190.302a8.014 8.014 0 010 16.028zm33.058 43.048h-223.36a8.014 8.014 0 110-16.028h223.36a8.014 8.014 0 110 16.028zm0 43h-223.36a8.014 8.014 0 110-16.028h223.36a8.014 8.014 0 110 16.028z"
          fill="#E6E6E6"
        />
        <circle fill="#E6E6E6" cx={104.943} cy={98.912} r={34} />
        <circle fill="#E6E6E6" cx={104.943} cy={207.912} r={34} />
        <path
          fill="#FB923C"
          d="M76.696 460.3v-140h41.177l41.176 51.471 41.177-51.47h41.176v140h-41.176v-80.295l-41.177 51.471-41.176-51.47V460.3zm257.354 0l-61.765-67.94h41.176V320.3h41.177v72.06h41.176z"
        />
      </g>
    </svg>
  )
}
