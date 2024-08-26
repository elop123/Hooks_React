import Text from './components/Text'
import Greeting from './components/Greeting'
import Modal from './components/Modal'
import Modal2 from './components/Modal2'
import {useState} from 'react'

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Text />
      <Greeting />
      <Modal />
      <button onClick={() => setIsOpen(true)}>Open Modal 2</button>
      <Modal2 isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2>Modal Content Here</h2>
        <p>This is the content of the modal.</p>
      </Modal2>
    </>
  )
}

export default App
