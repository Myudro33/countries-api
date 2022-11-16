import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Map from "../components/Map";

const FullInfo = ({ theme }) => {
  const { name } = useParams();
  const [data, setdata] = useState();
  const [borders, setborders] = useState([]);
  const getFullData = async () => {
    const response = await axios.get(`
  https://restcountries.com/v2/name/${name}?fullText=true`);
    setdata(response.data[0]);
    for (const obj of response.data[0].borders) {
      const bord = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${obj}`
      );
      setborders((prev) => [...prev, bord.data[0].name.common]);
    }
  };
  useEffect(() => {
    getFullData();
  }, [name]);
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "150vh", sm: "130vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: `${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`,
      }}
    >
      <Stack
        direction={{ xs: "column" }}
        sx={{
          width: { xs: "90%", sm: "80%" },
          height: "90%",
        }}
      >
        <Link
          style={{
            width: "100px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: `${
              theme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
            }`,
            boxShadow: " 12.5px 12.5px 10px rgba(0, 0, 0, 0.035)",
            borderRadius: "8px",
            color: `${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`,
          }}
          to={"/"}
        >
          <KeyboardBackspaceIcon />
          Go Back
        </Link>

        <Stack
          direction={{ sx: "column", lg: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          sx={{ width: "100%", height: "55%", margin: "40px 0px" }}
        >
          <img className="info-img" src={data?.flags.png} alt="" />
          <Stack
            direction="column"
            paddingY={4}
            sx={{
              color: `${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`,
            }}
          >
            <Stack
              spacing={{ xs: 1, sm: 2, md: 4 }}
              direction={{ xs: "column", sm: "row" }}
              sx={{
                display: "flex",
                alignItems: { xs: "start", sm: "center" },
              }}
            >
              <Stack mt={2}>
                <Typography mb={2} variant="h5">
                  {data?.name}
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Native Name:<p className="fullinfo-p">{data?.nativeName}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Population:<p className="fullinfo-p">{data?.population}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Region:<p className="fullinfo-p">{data?.region}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Sub Region:<p className="fullinfo-p">{data?.subregion}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Capital:<p className="fullinfo-p">{data?.capital}</p>
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Top Level Domain:
                  <p className="fullinfo-p">{data?.topLevelDomain}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Currencies:
                  <p className="fullinfo-p">{data?.currencies[0].name}</p>
                </Typography>
                <Typography
                  my={0.5}
                  variant="p"
                  display={"flex"}
                  color={`${theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"}`}
                >
                  Languages:{" "}
                  {data?.languages.map((item) => (
                    <p key={item.name} className="fullinfo-p">
                      {item.name},
                    </p>
                  ))}
                </Typography>
              </Stack>
            </Stack>

            <Stack
              my={1}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              direction="row"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: { sm: "center" },
              }}
            >
              <Typography variant="h6">Border Countries: </Typography>
              {borders?.map((item) => (
                <Typography
                  style={{ margin: "4px 4px" }}
                  key={Math.random()}
                  sx={{
                    display: "flex",
                    width: { xs: "100px", sm: "auto" },
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: `${
                      theme ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"
                    }`,
                    color: `${
                      theme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
                    }`,
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </Stack>
          <Map name={name} /> 
      </Stack>
    </Box>
  );
};

export default FullInfo;
