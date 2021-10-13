import * as React from 'react';
import { Grid, Pagination } from '@mui/material';
import Typography from '@mui/material/Typography';
import BasicContainer from '../../../HOC/BasicContainer';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useStyles,
} from './style';
import Card from './../../../components/Card';
import { DATA_FAKE } from '../../DashBoard';
import Form from './Form/Form';

export default function List() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <BasicContainer>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography> Tìm kiếm nâng cao </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Form />
        </AccordionDetails>
      </Accordion>
      <Grid
        className={classes.container}
        container
        justifyContent="flex-start"
        alignItems="center"
      >
        {DATA_FAKE.map((e: any, index: number) => {
          return (
            <Grid key={index} item lg={2} md={3} sm={4} xs={6}>
              <Card data={e} link="" />
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Pagination count={10} color="primary" />
        </Grid>
      </Grid>
    </BasicContainer>
  );
}
