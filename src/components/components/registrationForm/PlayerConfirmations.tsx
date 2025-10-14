import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useFormikContext } from "formik";
import { CustomFormCheckBox } from "../misc/CustomFormCheckbox";
import { EventRulesButton } from "../rules/EventRulesButton";
import { NoRefundButton } from "../rules/NoRefundButton";
import { PrivacyPolicyButton } from "../rules/PrivacyPolicy";
import { FormValues } from "./RegisterDialog";

export const PlayerConfirmations = () => {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  const theme = useTheme();
  const isSmOrLess = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    {
      name: "valuesValidated",
      title: "Validation des données",
      text:
        "Je certifie que les données entrées pour chaque joueur sont exactes, sérieuses et non offensantes. J'assume l'entière responsabilité des informations transmises.",
      button: (
        <Button
          onClick={() =>
            setFieldValue("valuesValidated", !values["valuesValidated"])
          }
          fullWidth
          variant="outlined"
        >
          <Typography variant="iconnedText">Je valide ces données</Typography>
        </Button>
      ),
    },
    {
      name: "authorizationFromOtherPlayers",
      title: "Autorisation des autres joueurs",
      text:
        "Je certifie agir en mon nom et, le cas échéant, avec l'accord de toutes les personnes que j'inscris. J'accepte, pour moi-même et pour ces personnes, le règlement, la politique de confidentialité et la politique de remboursement de l'évènement. J'assume la responsabilité de cette acceptation.",
      button: (
        <Button
          onClick={() =>
            setFieldValue(
              "authorizationFromOtherPlayers",
              !values["authorizationFromOtherPlayers"]
            )
          }
          fullWidth
          variant="outlined"
        >
          <Typography variant="iconnedText" textAlign={"center"}>
            Je certifie et accepte les conditions
          </Typography>
        </Button>
      ),
    },
    {
      name: "hasReadPrivacy",
      title: "Politique de confidentialité",
      text:
        "Je certifie avoir lu et accepté la politique de confidentialité liée à l'évènement. Le cas échéant, j'ai informé les autres participants de son contenu.",
      button: (
        <PrivacyPolicyButton
          buttonProps={{ fullWidth: true }}
          dialogProps={{ fullScreen: isSmOrLess }}
          onAccept={() => setFieldValue("hasReadPrivacy", true)}
          onRefuse={() => setFieldValue("hasReadPrivacy", false)}
        />
      ),
    },
    {
      name: "hasReadRules",
      title: "Règlement de l'évènement",
      text:
        "Je certifie avoir lu et accepté le règlement de l'évènement ainsi que les conséquences de tout manquement à ces règles. Le cas échéant, j'agis également au nom des participants que j'inscris, lesquels s'engagent à respecter ce règlement.",
      button: (
        <EventRulesButton
          buttonProps={{ fullWidth: true }}
          dialogProps={{ fullScreen: isSmOrLess }}
          onAccept={() => setFieldValue("hasReadRules", true)}
          onRefuse={() => setFieldValue("hasReadRules", false)}
        />
      ),
    },
    {
      name: "hasReadPayback",
      title: "Politique de remboursement",
      text:
        "Je certifie avoir lu et accepté les conditions liées aux remboursements en cas d'annulation de l'évènement. Je reconnais que toute inscription est ferme et non remboursable, sauf annulation de l'évènement par l'organisateur. Cette condition s'applique à tous les participants que j'inscris.",
      button: (
        <NoRefundButton
          buttonProps={{ fullWidth: true }}
          dialogProps={{ fullScreen: isSmOrLess }}
          onAccept={() => setFieldValue("hasReadPayback", true)}
          onRefuse={() => setFieldValue("hasReadPayback", false)}
        />
      ),
    },
  ];

  return (
    <>
      {data.map(({ name, text, button, title }) => (
        <Grid container key={name}>
          <Grid size={{ xs: 12 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Divider />
                <CustomFormCheckBox
                  key={name}
                  name={
                    name as
                      | "valuesValidated"
                      | "hasReadRules"
                      | "hasReadPrivacy"
                      | "hasReadPayback"
                      | "authorizationFromOtherPlayers"
                  }
                  text={text}
                  button={button}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
