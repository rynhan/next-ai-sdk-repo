'use client'
import { useChat } from 'ai/react'



export default function Chat() {

  // ---------------------------------------------------------------------------------

  const { messages, input, handleInputChange, handleSubmit } = useChat()

  // ---------------------------------------------------------------------------------

  return (
    <div>
      {messages.map(m => (
        <div key={m.id}>
          <b>{m.role}:</b> 
          <code> {m.content}</code>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            value={input}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  )
}
