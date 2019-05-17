import React, { useState } from 'react'
import clsx from 'clsx'

const Search = props => {
  const [input, setInput] = useState('')
  const [hasFocus, setHasFocus] = useState(true)

  const handleInput = e => setInput(e.target.value)

  const handleFocus = () => setHasFocus(true)

  const handleBlur = () => setHasFocus(false)

  return (
    <div className={clsx('search', hasFocus && 'focused')}>
      <input
        autoFocus
        value={input}
        className="input"
        placeholder="Search..."
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <ul className="results">
        <li>foo</li>
      </ul>
    </div>
  )
}

export default Search
