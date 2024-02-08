import * as React from 'react';
import PropTypes from 'prop-types';

import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function PartyCardV2({ party }) {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">{`${party.paslonNumber}`}</Avatar>}
          subheader={`Pasang Calon No ${party.paslonNumber}`}
        />
      </AccordionSummary>
      <AccordionDetails>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ textAlign: 'center' }}>Nama</TableCell>
                  <TableCell style={{ textAlign: 'center' }}>Jumlah Suara</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={party._id}>
                  <TableCell style={{ textAlign: 'center' }}>
                    <div>
                      {party.capresDetail.name}
                      <br />&<br />
                      {party.cawapresDetail.name}
                    </div>
                  </TableCell>
                  <TableCell style={{ textAlign: 'center' }}>{party?.total_votes || 0}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </AccordionDetails>
    </Accordion>
  );
}

PartyCardV2.propTypes = {
  party: PropTypes.any,
};
