import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Box,
} from '@mui/material';

export default function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://j12f80h5b9.execute-api.eu-north-1.amazonaws.com/dev/income");
        const text = await response.text();
        const data = JSON.parse(text);
        setAllData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Fetch or JSON parse failed:", error);
      }
      
    }
    loadData();
  }, []);

  useEffect(() => {
    let filtered = allData.filter(row => {
      const fullName = `${row.firstName} ${row.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });

    if (sortOption === 'asc') {
      filtered.sort((a, b) => a.salary - b.salary);
    } else if (sortOption === 'desc') {
      filtered.sort((a, b) => b.salary - a.salary);
    }

    setFilteredData(filtered);
  }, [sortOption, searchQuery, allData]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Riigiametnike palgainfo
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sorteeri palga järgi</InputLabel>
          <Select
            value={sortOption}
            label="Sorteeri palga järgi"
            onChange={e => setSortOption(e.target.value)}
          >
            <MenuItem value="">-- Sorteeri --</MenuItem>
            <MenuItem value="asc">Väiksemast → Suuremani</MenuItem>
            <MenuItem value="desc">Suuremast → Väiksemani</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Otsi nime"
          variant="outlined"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: '#f2f2f2' }}>
            <TableRow>
              <TableCell>Asutus</TableCell>
              <TableCell>Struktuuriüksus</TableCell>
              <TableCell>Ametikoht</TableCell>
              <TableCell>Nimi</TableCell>
              <TableCell>Töökoormus</TableCell>
              <TableCell>Palk</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.institution}</TableCell>
                <TableCell>{row.structuralUnit}</TableCell>
                <TableCell>{row.position}</TableCell>
                <TableCell>{row.firstName} {row.lastName}</TableCell>
                <TableCell>{row.workload}</TableCell>
                <TableCell>{row.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
