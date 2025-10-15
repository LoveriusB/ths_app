import { useEffect, useState } from "react";
import { useRegistrationContext } from "../../../../hooks/useRegistrationContext";
import { Schema } from "../../../../../amplify/backend";
import Button from "@mui/material/Button";
import {
  Avatar,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailIcon from "@mui/icons-material/Email";
import { CustomCheckedIcon, CustomIcon } from "../../misc/CustomCheckbox";

const not = (
  a: Schema["registration"]["type"][],
  b: Schema["registration"]["type"][]
) => {
  return a.filter((value) => !b.includes(value));
};

export const AdminMailReminder = () => {
  const { registration, updateMailSent } = useRegistrationContext();
  const [leftChecked, setLeftChecked] = useState<
    Schema["registration"]["type"][]
  >([]);
  const [rightChecked, setRightChecked] = useState<
    Schema["registration"]["type"][]
  >([]);
  const [mailSent, setMailSent] = useState<Schema["registration"]["type"][]>(
    []
  );
  const [mailNotSent, setMailNotSent] = useState<
    Schema["registration"]["type"][]
  >([]);

  useEffect(() => {
    setMailSent(registration.filter((reg) => reg.mailSent));
    setMailNotSent(registration.filter((reg) => !reg.mailSent));
  }, [registration]);

  const handleAllRight = () => {
    setMailSent(mailSent.concat(mailNotSent));
    setMailNotSent([]);
  };

  const handleCheckedRight = () => {
    setMailSent(mailSent.concat(leftChecked));
    setMailNotSent(not(mailNotSent, leftChecked));
    setLeftChecked([]);
  };
  const handleCheckedLeft = () => {
    setMailNotSent(mailNotSent.concat(rightChecked));
    setMailSent(not(mailSent, rightChecked));
    setRightChecked([]);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
        margin={4}
      >
        <Paper sx={{ p: 2, height: "100%", minWidth: 500 }}>
          <Typography variant="h5">Mail not sent</Typography>
          <Divider />

          <List>
            {mailNotSent.map((reg) => (
              <ListItem key={reg.id}>
                <Checkbox
                  checked={leftChecked.includes(reg)}
                  onChange={() => {
                    leftChecked.includes(reg)
                      ? setLeftChecked((prev) =>
                          prev.filter((item) => item.id !== reg.id)
                        )
                      : setLeftChecked((prev) => [...prev, reg]);
                  }}
                  icon={<CustomIcon />}
                  checkedIcon={<CustomCheckedIcon />}
                  sx={{ mr: 2 }}
                />
                <IconButton sx={{ mr: 2 }} href={`mailto:${reg.email}`}>
                  <Grid container justifyContent={"center"}>
                    <ListItemAvatar sx={{ minWidth: 0 }}>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </Grid>
                </IconButton>
                <ListItemText
                  primary={`${reg.firstName} ${reg.lastName}`}
                  secondary={reg.email}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Grid container direction="column" alignItems={"center"} spacing={1}>
          <Button
            variant="contained"
            onClick={handleAllRight}
            disabled={mailNotSent.length === 0}
            aria-label="move all right"
          >
            <KeyboardDoubleArrowRightIcon />
          </Button>
          <Button
            variant="contained"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant="contained"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            <ChevronLeftIcon />
          </Button>
        </Grid>
        <Paper sx={{ p: 2, minWidth: 500 }}>
          <Typography variant="h5">Mail sent</Typography>
          <Divider />

          <List>
            {mailSent.map((reg) => (
              <ListItem key={reg.id}>
                {!reg.mailSent ? (
                  <Checkbox
                    checked={rightChecked.includes(reg)}
                    onChange={() => {
                      rightChecked.includes(reg)
                        ? setRightChecked((prev) =>
                            prev.filter((item) => item.id !== reg.id)
                          )
                        : setRightChecked((prev) => [...prev, reg]);
                    }}
                    icon={<CustomIcon />}
                    checkedIcon={<CustomCheckedIcon />}
                    sx={{ mr: 2 }}
                  />
                ) : null}
                <IconButton sx={{ mr: 2 }} href={`mailto:${reg.email}`}>
                  <Grid container justifyContent={"center"}>
                    <ListItemAvatar sx={{ minWidth: 0 }}>
                      <Avatar>
                        <EmailIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </Grid>
                </IconButton>
                <ListItemText
                  primary={`${reg.firstName} ${reg.lastName}`}
                  secondary={reg.email}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          const newMailsSent = mailSent.filter((item) => !item.mailSent);
          const promises = newMailsSent.map((item) => updateMailSent(item.id));
          await Promise.all(promises);
        }}
      >
        Sauvegarder
      </Button>
    </>
  );
};
