import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  link: string
}

const Card = styled(Link)`
  display: block;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

const ThumbnailContainer = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;
`

const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`

const Contents = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  margin: 0;
  color: #2c3e50;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #7f8c8d;
`

const Category = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const CategoryTag = styled.span`
  background: #ecf0f1;
  color: #34495e;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 500;
`

const Date = styled.div`
  font-weight: 400;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #5d6d7e;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  description,
  link,
}: PostItemProps) {
  return (
    <Card to={link}>
      <ThumbnailContainer>
        <Thumbnail image={thumbnail} alt={title} />
      </ThumbnailContainer>

      <Contents>
        <Title>{title}</Title>

        <Information>
          <Category>
            {category.map(item => (
              <CategoryTag key={item}>#{item}</CategoryTag>
            ))}
          </Category>
          <Date>{date}</Date>
        </Information>

        <Description>{description}</Description>
      </Contents>
    </Card>
  )
}
