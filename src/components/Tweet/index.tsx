
import {
    Container,
    Retweeted,
    RoketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    RetweeIcon,
    LikeIcon,
  } from './style';
  
  const Tweet: React.FC = () => {
    return (
      <Container>
        <Retweeted>
          <RoketseatIcon/>
          Você retweetou
        </Retweeted>
  
        <Body>
          <Avatar />
  
          <Content>
            <Header>
              <strong>Gabriel</strong>
              <span>@custodio97</span>
              <Dot />
              <time>01 de jun</time>
            </Header>
  
            {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
            <Description>Foguete não tem ré 🚀</Description>
  
            <ImageContent />
  
            <Icons>
              <Status>
                <ComentIcon />
                18
              </Status>
              <Status>
                <RetweeIcon />
                18
              </Status>
              <Status>
                <LikeIcon />
                999
              </Status>
            </Icons>
          </Content>
        </Body>
      </Container>
    );
  };
  
  export default Tweet;