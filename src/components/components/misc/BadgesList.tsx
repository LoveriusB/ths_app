import { Grid, Chip } from '@mui/material';

interface BadgesListProps {
  list: { icon: React.ReactElement; label: string }[];
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
}

export const BadgesList: React.FC<BadgesListProps> = ({
  list,
  color = 'default',
}) => {
  return (
    <Grid container direction="row" spacing={1} flexWrap="wrap">
      {list.map((item, index) => (
        <Grid key={index}>
          <Chip
            icon={item.icon}
            label={item.label}
            variant="outlined"
            color={color}
          />
        </Grid>
      ))}
    </Grid>
  );
};
