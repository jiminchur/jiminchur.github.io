import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 60px; // 이미지와 텍스트 간격 조절

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const ProfileImage = styled.div`
  overflow: hidden;
  width: 140px;
  height: 140px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SubText = styled.div`
  font-size: 30px;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 25px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export default function Introduction() {
  return (
    <Container>
      <ProfileImage>
        <StaticImage src="../../images/thumbnail.png" alt="Profile Image" />
      </ProfileImage>

      <TextContainer>
        <SubText>Nice to Meet You!</SubText>
        <MainText>I&apos;m DataEngineer Minchur</MainText>
      </TextContainer>
    </Container>
  )
}
