import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Search from "./Search";
import Card from "./Card";
import axios from "axios";
import { Pagination } from "@mui/material";

const Countries = ({ theme }) => {
  const [region, setregion] = useState("europe");
  const [cityName, setcityName] = useState("");
  const [data, setdata] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const hotelsPerPage = 8;
  const indexOfLastHotel = currentPage * hotelsPerPage
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage
  const currentHotels = data?.slice(indexOfFirstHotel, indexOfLastHotel)
  const paginate = (e, value) => {
      setCurrentPage(value)
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getDataWithCityName = async () => {
    if (cityName) {
      const response = await axios.get(`
      https://restcountries.com/v3.1/name/${cityName}`);
      if (response.status === 200) {
        setdata(response.data);
      }
    }
  };
  useEffect(() => {
    getDataWithCityName();
  }, [cityName]);

  const getData = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );
    setdata(response.data);
  };
  useEffect(() => {
    getData();
  }, [region]);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        height:{sx:'200vh',sm:'130vh',md:'140vh'}
      }}
    >
      <Search
        cityName={cityName}
        setcityName={setcityName}
        region={region}
        setregion={setregion}
        theme={theme}
      />
      <Grid spacing={5} container sx={{ width: "90%" }}>
        {currentHotels?.map((country) => (
          <Card
          key={Math.random()}
          theme={theme}
              capital={country.capital}
              region={country.region}
              img={country.flags.png}
              population={country.population}
              name={country.name.common}
            />
        ))}
      </Grid>
      {data?.length > 9 && (
          <Pagination
          sx={{margin:'40px auto'}}
          variant="outlined" color="primary" 
            defaultPage={currentPage}
            count={Math.ceil(data?.length / hotelsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
    </Container>
  );
};

export default Countries;
