import * as React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TableContainer from '@mui/material/TableContainer';

export default function PartyCard({ party, setVotesResult }) {
  const [, setVotesData] = React.useState([]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10) || 0;

    const updatedVotes = {
      _id: party._id,
      paslonNumber: party.paslonNumber,
      capresDetail: {
        name: party.capresDetail.name,
        partyName: party.capresDetail.partyName,
      },
      cawapresDetail: {
        name: party.cawapresDetail.name,
        partyName: party.cawapresDetail.partyName,
      },
      total_votes_party: value,
    };

    setVotesData(updatedVotes);

    // Use the updatedVotesData directly in setVotesResult
    setVotesResult((prevVotesResult) => [
      ...prevVotesResult.filter((result) => result._id !== party._id),
      updatedVotes,
    ]);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{`${party.paslonNumber}`}</Avatar>}
        subheader={`Pasang Calon No ${party.paslonNumber}`}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ textAlign: 'center' }}>Nama</TableCell>
                <TableCell>Input Suara</TableCell>
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
                <TableCell>
                  <TextField
                    type="text"
                    placeholder="Input Suara"
                    variant="outlined"
                    size="small"
                    onChange={(event) => handleChange(event)}
                    fullWidth
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

PartyCard.propTypes = {
  party: PropTypes.any,
  setVotesResult: PropTypes.any,
};
