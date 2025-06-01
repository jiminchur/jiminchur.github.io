import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useState } from 'react'
import styled from 'styled-components'

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  link: string
}

const Wrapper = styled.article`
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition:
    transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;
  background: white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:focus-within {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  }
`

const ThumbnailContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 0 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s ease;
  }

  &:hover::after {
    background: rgba(0, 0, 0, 0.1);
  }
`

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: 200px;

  img {
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 150px;

    &:hover img {
      transform: none;
    }
  }
`

const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 15px;
    gap: 10px;
  }
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4;
  color: #333;
  margin: 0;

  /* 긴 제목 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
  margin: 8px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 13px;
  }
`

const Category = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

const CategoryTag = styled.span`
  background: #f0f2f5;
  color: #495057;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid #dee2e6;
`

const Date = styled.div`
  color: #868e96;
  font-size: 13px;
  white-space: nowrap;
`

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0;

  /* 긴 설명 처리 */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 13px;
    -webkit-line-clamp: 2;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:focus {
    outline: none;
  }
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 14px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 768px) {
    height: 150px;
    font-size: 12px;
  }
`

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  description,
  link,
}: PostItemProps) {
  const [imageError, setImageError] = useState(false)

  const formatDate = (dateString: string) => {
    try {
      const date = globalThis.Date ? new globalThis.Date(dateString) : new (Date as any)(dateString)
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    } catch {
      return dateString
    }
  }

  const sanitizedTitle = title?.replace(/[<>]/g, '') || '제목 없음'
  const sanitizedDescription = description?.replace(/[<>]/g, '') || ''

  return (
    <Wrapper>
      <StyledLink
        href={link}
        aria-label={`${sanitizedTitle} 글 읽기`}
        role="article"
      >
        <ThumbnailContainer>
          {thumbnail && !imageError ? (
            <StyledImage
              image={thumbnail}
              alt={`${sanitizedTitle} 썸네일`}
              loading="lazy"
            />
          ) : (
            <ImagePlaceholder>이미지를 불러올 수 없습니다</ImagePlaceholder>
          )}
        </ThumbnailContainer>

        <ContentWrapper>
          <Title>{sanitizedTitle}</Title>

          <Info>
            <Category>
              {category
                ?.filter(Boolean)
                .map((cat, index) => (
                  <CategoryTag key={index}>{cat}</CategoryTag>
                ))}
            </Category>
            <Date>{formatDate(date)}</Date>
          </Info>

          {sanitizedDescription && (
            <Description>{sanitizedDescription}</Description>
          )}
        </ContentWrapper>
      </StyledLink>
    </Wrapper>
  )
}
