import React, { useState } from 'react'
import clsx from 'clsx'

const API_URL =
  'https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=10&query='

const Search = props => {
  const [input, setInput] = useState('')
  const [hasFocus, setHasFocus] = useState(true)
  const [stories, setStories] = useState([])
  const [delay, setDelay] = useState()

  const fetchStories = async query => {
    const res = await fetch(`${API_URL}${query}`)

    const { hits: stories } = await res.json()

    setStories(stories)
  }

  const handleInput = async e => {
    const query = e.target.value

    delay && clearTimeout(delay)

    if (query) {
      setDelay(setTimeout(() => fetchStories(query), 250))
    } else {
      setStories([])
    }

    setInput(query)
  }

  const handleFocus = () => setHasFocus(true)

  const handleBlur = () => setHasFocus(false)

  const hasStories = stories.length !== 0

  return (
    <div className={clsx('search', hasFocus && 'focused')}>
      <input
        autoFocus
        value={input}
        className={clsx('input', hasStories && 'has-results')}
        placeholder="Search..."
        onChange={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {hasStories && (
        <ul className="results">
          {stories.map(story => (
            <li key={story.objectID}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="title"
                href={story.url}
              >
                <span className="score">{story.points} pts.</span>
                <span className="title">{story.title}</span>
                <em className="author">by {story.author}</em>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Search
