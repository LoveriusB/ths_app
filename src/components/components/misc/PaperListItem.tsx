import { Grid, ListItem, Typography } from '@mui/material';
import { isNil } from 'lodash';

export interface PaperListItemProps {
  stringIcon: string | React.ReactNode;
  text: string[];
  actionButton?: React.ReactNode;
}

export const PaperListItem: React.FC<PaperListItemProps> = ({
  stringIcon,
  text,
  actionButton,
}) => {
  return (
    <ListItem>
      <Grid container spacing={2} size={{ xs: 12 }}>
        <Grid
          size={{ xs: 1 }}
          container
          alignItems={actionButton ? 'center' : 'flex-start'}
        >
          {stringIcon}
        </Grid>
        <Grid size={{ xs: 11 }} container alignItems={'center'} spacing={1}>
          {text.map((line, index) => (
            <Typography key={index} variant="body1">
              {line.split(':').length === 2 ? (
                <>
                  <b>{line.split(':')[0]} :</b> {line.split(':')[1]}
                </>
              ) : (
                line.split(':')[0]
              )}
            </Typography>
          ))}
          {!isNil(actionButton) && actionButton}
        </Grid>
      </Grid>
    </ListItem>
  );
};
