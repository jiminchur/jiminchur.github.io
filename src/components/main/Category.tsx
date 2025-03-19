import styled from 'styled-components'

type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 15px;
  margin-top: 50px;
  padding: 10px 0;
`

const Item = styled.div<{ $selected: boolean }>`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 400)};
  color: ${({ $selected }) => ($selected ? '#fff' : '#333')};
  background: ${({ $selected }) => ($selected ? '#007aff' : '#f5f5f5')};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ $selected }) => ($selected ? '#005ecb' : '#e0e0e0')};
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <Item
          onClick={() => handleSelect(category)}
          $selected={category === selectedCategory}
          key={category}
        >
          #{category} ({count})
        </Item>
      ))}
    </Wrapper>
  )
}
