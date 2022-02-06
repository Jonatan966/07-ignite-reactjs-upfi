import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  function handleViewImage(imageUrl: string): void {
    setSelectedImageUrl(imageUrl);
    onOpen();
  }

  return (
    <>
      <SimpleGrid columns={3} spacing="4">
        {cards.map(card => (
          <Card
            viewImage={url => handleViewImage(url)}
            data={card}
            key={card.id}
          />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={selectedImageUrl}
        onClose={onClose}
      />
    </>
  );
}
