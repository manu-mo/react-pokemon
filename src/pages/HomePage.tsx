import { useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { PokeType, getPokeList } from "../api";

function HomePage() {
    const [poke, setPoke] = useState<PokeType[]>([]);

    useEffect(() => {
        getPokeList(100, 0).then((data) => setPoke(data));
    }, []);

    
    return (
        <>
            <h1>pokédex</h1>
            <Grid container spacing={4}>
                {poke.map((el) => (
                    <Grid item key={el.url}>
                        <Link to={el.url}>
                            <Box sx={{ minWidth: 275 }}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {el.name}
                                        </Typography>
                                        <Typography>{el.weight}</Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default HomePage;