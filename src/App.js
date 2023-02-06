import { useEffect, useState } from "react";
import {Typography } from '@mui/material';
import Box from "@mui/material/Box";

function App() {
  const [postData, setPostData] = useState([]);

  const fetchPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPostData(data.posts);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Box sx={{width:'100%', height:'100%', backgroundColor:'#01579b', padding:'10px'}} >
      {postData.map((item)=>(
        <Box key={item.id} sx={{ backgroundColor: '#03a9f4', justifyContent:'center', width:'50%', padding:'10px', margin:'10px', transition: 'transform 0.5s',
          '&:hover': { backgroundColor: '#29b6f6', color:'#0d47a1', transform: 'translateX(30px)'}
        }}>
          <Typography variant="h5" color='#e1f5fe' > {item.id}.   {item.title} </Typography>
          <Typography variant="h7" > {item.body} </Typography>
        </Box>
      ))}
      </Box>
    </>
  );
}

export default App;
