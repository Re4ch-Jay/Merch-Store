import {useState} from 'react'

export default function useShowMessage() {
     const [message, setMessage] = useState(false)

  return {message, setMessage}
}
