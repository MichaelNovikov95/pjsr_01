import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchApi } from "../utils/fetchApi";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchName } = useParams();

  useEffect(() => {
    fetchApi(`search?part=snippet&q=${searchName}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchName]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:
        <span style={{ color: "#F31503" }}>{searchName} </span>videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
