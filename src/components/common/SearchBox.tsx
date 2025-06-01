import { useState, useEffect, useRef } from 'react'
import { navigate } from 'gatsby'
import styled from 'styled-components'

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 400px;
  width: 100%;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border: 2px solid var(--border-color, #e1e5e9);
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  background-color: var(--input-bg, white);
  color: var(--text-color, #333);
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--primary-color, #007acc);
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }

  &::placeholder {
    color: var(--placeholder-color, #999);
  }
`

const SearchIcon = styled.div`
  position: absolute;
  right: 15px;
  color: var(--icon-color, #666);
  pointer-events: none;
`

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--dropdown-bg, white);
  border: 1px solid var(--border-color, #e1e5e9);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: 5px;
`

const SearchItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid var(--border-color, #f0f0f0);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--hover-bg, #f8f9fa);
  }

  &:last-child {
    border-bottom: none;
  }
`

const ItemTitle = styled.div`
  font-weight: 600;
  color: var(--text-color, #333);
  margin-bottom: 4px;
`

const ItemCategory = styled.div`
  font-size: 12px;
  color: var(--secondary-text, #666);
`

interface SearchResult {
  title: string
  slug: string
  category: string[]
  description?: string
}

interface SearchBoxProps {
  posts: SearchResult[]
}

export default function SearchBox({ posts }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredPosts, setFilteredPosts] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filtered = posts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.some(cat =>
            cat.toLowerCase().includes(searchTerm.toLowerCase()),
          ) ||
          post.description?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      setFilteredPosts(filtered.slice(0, 5)) // 최대 5개 결과
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }, [searchTerm, posts])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (slug: string) => {
    setSearchTerm('')
    setShowResults(false)
    navigate(`/${slug}`)
  }

  return (
    <SearchContainer ref={searchRef}>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onFocus={() => searchTerm.length > 1 && setShowResults(true)}
      />
      <SearchIcon>🔍</SearchIcon>

      {showResults && filteredPosts.length > 0 && (
        <SearchResults>
          {filteredPosts.map(post => (
            <SearchItem
              key={post.slug}
              onClick={() => handleItemClick(post.slug)}
            >
              <ItemTitle>{post.title}</ItemTitle>
              <ItemCategory>#{post.category.join(' #')}</ItemCategory>
            </SearchItem>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  )
}
