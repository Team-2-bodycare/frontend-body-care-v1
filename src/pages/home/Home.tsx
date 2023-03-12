import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Container,
  Card,
  Modal,
  ModalContent,
  CloseButton,
  TextColor,
} from './styleHome';
import MyCarousel from '../../components/carousel/Carousel';
import NavBar from '../../components/navbar/Navbar';
import imagem from '../../assets/img/background.jpg';
import styled from 'styled-components';

const Body = styled.body`
  background-image: url(${imagem});
  background-size: cover;
  background-repeat: no-repeat;
`;

export function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleCardClick = (index: number) => {
    switch (index) {
      case 1:
        setShowModal1(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (index: number) => {
    switch (index) {
      case 1:
        setShowModal1(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      default:
        break;
    }
  };

  const slides = [
    {
      title: "Slide 1",
      caption: "Lorem ipsum dolor sit amet",
      image: "https://picsum.photos/800/400?random=1",
    },
    {
      title: "Slide 2",
      caption: "Consectetur adipiscing elit",
      image: "https://picsum.photos/800/400?random=2",
    },
    {
      title: "Slide 3",
      caption: "Sed do eiusmod tempor incididunt",
      image: "https://picsum.photos/800/400?random=3",
    },
  ];

  return (
    <>
      <Body>
        <NavBar />
        <Container>

          <h1>Buddy Care</h1>
          <TextColor>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            consectetur eros. Nullam at tellus euismod, pharetra risus sit amet,
            ultricies felis. Sed consequat eget augue a pulvinar.
          </TextColor>

          <Card onClick={() => handleCardClick(1)}>
            <h3>Card 1</h3>
          </Card>
          <Card onClick={() => handleCardClick(2)}>
            <h3>Card 2</h3>
          </Card>
          <Card onClick={() => handleCardClick(3)}>
            <h3>Card 3</h3>
          </Card>

          {showModal1 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(1)}>X</CloseButton>
                <p>Modal 1 content</p>
                <button onClick={() => handleCloseModal(1)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal2 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(2)}>X</CloseButton>
                <p>Modal 2 content</p>
                <button onClick={() => handleCloseModal(2)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}

          {showModal3 && (
            <Modal>
              <ModalContent>
                <CloseButton onClick={() => handleCloseModal(3)}>X</CloseButton>
                <p>Modal 3 content</p>
                <button onClick={() => handleCloseModal(3)}>Fechar</button>
              </ModalContent>
            </Modal>
          )}
        </Container>

        {/* <MyCarousel slides={slides} /> */}
      </Body>
    </>
  );
}
