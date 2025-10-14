import { List } from '@mui/material';
import { PaperListItem } from '../../../misc/PaperListItem';

interface ICardList {
  cardListItems: {
    icon: React.ReactNode;
    texts: string[];
    actionButton?: React.ReactNode;
  }[];
}

export const CardList: React.FC<ICardList> = ({ cardListItems }) => {
  return (
    <List>
      {cardListItems.map((item) => (
        <PaperListItem
          key={item.texts.join(' ')}
          stringIcon={item.icon}
          text={item.texts}
          actionButton={item.actionButton}
        />
      ))}
    </List>
  );
};
