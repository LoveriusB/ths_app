import { Typography, Link } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

export const ExpoitedBy: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="responsable"
      title="Qui est responsable du traitement des données ?"
      icon={<AdminPanelSettingsIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Le site est exploité par <strong>THS</strong>, une association de fait,
        responsable du traitement des données personnelles collectées.
      </Typography>
      <Typography>
        Pour toute question, vous pouvez nous contacter à :{' '}
        <Link href="mailto:admin@ths-airsoft.com">admin@ths-airsoft.com</Link>.
      </Typography>
    </Section>
  );
};
